// Núcleo del flujo (misma organización que el APK de referencia): token de cancelación, esperas
// cancelables, overlay de banners/elecciones, bocadillo del presentador, HUD y panel de pregunta.
import { me } from '../lib/audio.js';
import BASE from '../data/preguntas.json';

export const $ = s => document.querySelector(s);
export const esc = s => String(s ?? '').replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
export const VEL = () => window.__VEL || 1;           // acelerador para pruebas automáticas
export const euros = n => Number(n).toLocaleString('es-ES') + ' €';
export const norm = s => String(s || '').toLowerCase().replace(/ñ/g, 'n').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, '').replace(/\s+/g, ' ').trim();
export const esCorrecta = (resp, r) => { const n = norm(resp); return !!n && String(r).split('|').some(x => { const m = norm(x); return m === n || m.replace(/^(el|la|los|las) /, '') === n.replace(/^(el|la|los|las) /, ''); }); };
export const baraja = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
export const azar = a => a[Math.floor(Math.random() * a.length)];

// ---------- cancelación (⌂ vuelve al menú desde cualquier punto) ----------
export const ABORT = { abort: true };
let token = 0; let limpiezas = new Set();
export function nuevoToken() { token++; const l = [...limpiezas]; limpiezas = new Set(); l.forEach(f => f()); return token; }
export function check(t) { if (t !== token) throw ABORT; }
export const Dt = (ms, t = token) => new Promise((res, rej) => { const f = () => { clearTimeout(id); rej(ABORT); }; const id = setTimeout(() => { limpiezas.delete(f); t === token ? res() : rej(ABORT); }, ms / VEL()); limpiezas.add(f); });
export const Zi = p => new Promise((res, rej) => { const f = () => rej(ABORT); limpiezas.add(f); p.then(v => { limpiezas.delete(f); res(v); }, e => { limpiezas.delete(f); rej(e); }); });
addEventListener('unhandledrejection', e => { if (e.reason === ABORT) e.preventDefault(); });

/** Cronómetro (0 = ilimitado). fin: promesa al agotarse */
export class Reloj {
  constructor(seg, onTick) {
    this.ilimitado = !seg || seg === Infinity; this.rest = this.ilimitado ? Infinity : seg; this.onTick = onTick; this.corriendo = false; this.terminado = false;
    this.fin = new Promise(r => (this._res = r));
    this._iv = setInterval(() => {
      if (!this.corriendo || this.terminado || this.ilimitado) return;
      this.rest = Math.max(0, this.rest - 0.1 * VEL()); this.onTick && this.onTick(this.rest);
      if (this.rest <= 0) { this.terminado = true; clearInterval(this._iv); this._res('TIEMPO'); }
    }, 100);
    this._l = () => this.stop(); limpiezas.add(this._l);
    onTick && onTick(this.rest);
  }
  start() { this.corriendo = true; return this; }
  pause() { this.corriendo = false; }
  sumar(s) { if (!this.ilimitado) this.rest = Math.max(0.1, this.rest + s); this.onTick && this.onTick(this.rest); }
  stop() { limpiezas.delete(this._l); if (this.terminado) return; this.terminado = true; clearInterval(this._iv); this._res('STOP'); }
}
export const fmtT = s => s === Infinity ? '∞' : `${String(Math.floor(Math.ceil(s) / 60)).padStart(1, '0')}:${String(Math.ceil(s) % 60).padStart(2, '0')}`;

// ---------- bancos de preguntas (base + extra del usuario + temáticos) ----------
export function banco(nombre) { const ex = (window.PREGUNTAS_EXTRA && window.PREGUNTAS_EXTRA[nombre]) || []; return [...(BASE[nombre] || []), ...ex]; }
export class Pool {
  constructor(nombre, extra = []) { this.items = baraja([...extra, ...banco(nombre)]); this.i = 0; this.nombre = nombre; }
  pick() { if (this.i >= this.items.length) { this.items = baraja(this.items); this.i = 0; } return this.items[this.i++]; }
}

// ---------- overlay ----------
const ov = () => $('#overlay');
export function cerrarOverlay() { ov().classList.add('hidden'); ov().innerHTML = ''; }
export function mostrar(html, clicCierra = false) { ov().innerHTML = html; ov().classList.remove('hidden'); if (clicCierra) ov().onclick = cerrarOverlay; else ov().onclick = null; }
/** Banner de fase al estilo cómic */
export async function banner(titulo, sub = '', ms = 2600) {
  me.play('banner'); hud.sinTimer();
  mostrar(`<div class="banner-boom"><svg viewBox="-110 -70 220 140" class="bb-burst"><polygon points="${estrella()}" /></svg><div class="bb-t">${esc(titulo)}</div>${sub ? `<div class="bb-s">${esc(sub)}</div>` : ''}</div>`);
  await Dt(ms); cerrarOverlay();
}
function estrella() { let p = []; for (let i = 0; i < 28; i++) { const a = i * Math.PI / 14, r = i % 2 ? 48 : 70 + (i % 4) * 4; p.push(`${(Math.cos(a) * r * 1.45).toFixed(1)},${(Math.sin(a) * r).toFixed(1)}`); } return p.join(' '); }
/** Elección en overlay: resuelve con data-z del botón pulsado */
export function elegir(html, sel = '[data-z]') {
  mostrar(html);
  return Zi(new Promise(res => { const bs = ov().querySelectorAll(sel); bs.forEach(b => b.onclick = e => { e.stopPropagation(); me.play('tecla'); res(b.dataset.z); }); if (window.__AUTO && bs.length) setTimeout(() => res(bs[window.__AUTO_ELIGE ? Math.min(bs.length - 1, window.__AUTO_ELIGE) : 0].dataset.z), 400 / VEL()); })).finally(cerrarOverlay);
}
export async function textoGrande(t, sub = '', ms = 2600) { mostrar(`<div class="txt">${t}</div>${sub ? `<div class="sub">${sub}</div>` : ''}`); await Dt(ms); cerrarOverlay(); }

// ---------- bocadillo del presentador ----------
export const bubble = { hasta: 0, nombre: 'Presentador' };
export function di(texto, ms = 3500) { const b = $('#bubble'); b.innerHTML = `<b>${esc(bubble.nombre)}:</b> ${texto}`; b.classList.remove('hidden'); bubble.hasta = performance.now() + ms / VEL(); }
/** Dice y espera a que termine la voz (si está activada) */
export async function habla(clave, texto, ms = 3800) { di(texto, ms + 1500); await Zi(me.voice(clave, texto, bubble.voz || {})); }

// ---------- HUD ----------
export const hud = {
  show(v) { $('#hud').classList.toggle('hidden', !v); },
  set(G) {
    if (!G) return;
    G.eq.forEach((e, i) => {
      const el = $(`#hud .marc.l${i}`); if (!el) return;
      el.querySelector('.n').textContent = e.nombre + (e.tuyo ? ' (TÚ)' : '');
      el.querySelector('.d').textContent = euros(e.dinero);
      el.querySelector('.j').innerHTML = e.jug.map(j => `<i class="${j.vivo ? (j.banquillo ? 'bq' : '') : 'off'}" title="${esc(j.nombre)}"></i>`).join('');
      el.querySelector('.v').textContent = e.ventajas.length ? '★ ' + e.ventajas.map(v => VENTAJA_TXT[v] || v).join(', ') : '';
    });
  },
  timer(s, low = 10) { const t = $('#timer'); t.textContent = fmtT(s); t.classList.toggle('low', s !== Infinity && s <= low); },
  sinTimer() { $('#timer').textContent = ''; $('#timer').classList.remove('low'); },
  ronda(txt) { $('#roundTxt').textContent = txt; },
};
export const VENTAJA_TXT = { cable_blanco: 'Cable blanco', siguen_todos: 'Siguen todos', elige_tema: 'Elige tema', uno_menos: 'Uno menos', mas10: '+10 s', menos10: '−10 s al rival' };

// ---------- panel inferior de pregunta ----------
export const panel = {
  set(html, cls = '') { const q = $('#qpanel'); q.className = cls; q.innerHTML = html; q.classList.remove('hidden'); return q; },
  hide() { $('#qpanel').classList.add('hidden'); $('#qpanel').innerHTML = ''; },
  /** espera clic en [data-v] dentro del panel, o una de las promesas extra */
  clic(sel = '[data-v]', extra = []) { const q = $('#qpanel'); return Zi(Promise.race([new Promise(res => q.querySelectorAll(sel).forEach(b => b.onclick = () => { me.play('tecla'); res(b.dataset.v); })), ...extra])).finally(() => q.querySelectorAll(sel).forEach(b => b.disabled = true)); },
  /** campo de texto: resuelve con el texto o 'BOOM' (pasar) */
  escribir({ pasar = '¡BOOM! (pasar)', ph = 'Escribe la respuesta y pulsa Intro' } = {}, extra = []) {
    const q = $('#qpanel'); const box = document.createElement('div'); box.className = 'q-resp';
    box.innerHTML = `<input type="text" autocomplete="off" placeholder="${esc(ph)}"><button data-a="ok">Responder</button>${pasar ? `<button data-a="boom" class="boom">${esc(pasar)}</button>` : ''}`;
    q.appendChild(box); const inp = box.querySelector('input'); setTimeout(() => inp.focus(), 30);
    return Zi(Promise.race([new Promise(res => { inp.onkeydown = e => { if (e.key === 'Enter') res(inp.value); }; box.querySelectorAll('button').forEach(b => b.onclick = () => res(b.dataset.a === 'ok' ? inp.value : 'BOOM')); }), ...extra])).finally(() => box.remove());
  },
};

// ---------- piezas del HUD del APK de referencia: hashtag, rótulos, avisos, botones de fin, créditos ----------
import { cfg } from '../cfg.js';
export function leer(texto) { if (cfg.lee && cfg.voz) me.voice(null, texto, bubble.voz || {}); }
export function hashtag(t) { const h = $('#hashtag'); h.textContent = t || ''; h.classList.toggle('on', !!t); }
export async function rotulo(titulo, sub = '', ms = 3200) {
  const l = $('#lower3'); const d = document.createElement('div'); d.className = 'l3'; d.innerHTML = `<b>${esc(titulo)}</b>${sub ? `<span>${esc(sub)}</span>` : ''}`;
  l.appendChild(d); l.classList.remove('hidden'); await Dt(ms); d.classList.add('out'); setTimeout(() => { d.remove(); if (!l.children.length) l.classList.add('hidden'); }, 400);
}
export function limpiarRotulos() { $('#lower3').innerHTML = ''; $('#lower3').classList.add('hidden'); }
export function toast(t, ms = 2500) { const e = $('#toast'); e.textContent = t; e.classList.remove('hidden'); clearTimeout(toast._t); toast._t = setTimeout(() => e.classList.add('hidden'), ms); }
/** Botones de fin abajo a la derecha ({label, cls, fn}) */
export function acciones(lista) { const a = $('#actions'); a.innerHTML = ''; (lista || []).forEach(x => { const b = document.createElement('button'); b.className = 'abtn ' + (x.cls || ''); b.textContent = x.label; b.onclick = e => { e.stopPropagation(); me.play('tecla'); a.innerHTML = ''; x.fn(); }; a.appendChild(b); }); }
/** Créditos que suben por la derecha (despedida) */
export async function rodarCreditos(bloques, ms = 14000) {
  const c = $('#credits'), r = $('#creditsRoll'); r.innerHTML = bloques.map(([t, l]) => `<h4>${esc(t)}</h4>${l.map(esc).join('<br>')}`).join('');
  c.classList.remove('hidden', 'fadeout'); r.style.transition = 'none'; r.style.transform = 'translateY(0)'; r.offsetHeight;
  const dur = ms / VEL(); r.style.transition = `transform ${dur}ms linear`; r.style.transform = `translateY(calc(-100% - ${c.clientHeight}px))`;
  try { await Dt(ms); } finally { c.classList.add('hidden'); }
}
export function ocultarCreditos() { $('#credits').classList.add('hidden'); }
