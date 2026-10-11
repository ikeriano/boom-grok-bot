// ===== DESAFÍO MEGA BOMBA =====
// Modo individual basado en el proyecto Scratch original de ¡Boom! que nos pasó el usuario:
// 7 bombas (4,4,4,5,6,7 y 8 cables), 3 vidas, 10 s por cable, hay que cortar las respuestas CORRECTAS
// (el cable de la falsa hace ¡BOOM!), cuenta 3-2-1 tras cada corte, premios 5.000-50.000 y, tras la
// 6.ª bomba, PARAR o MEGA BOMBA (desactivada ×4 / explota ÷2). Las preguntas no se repiten.
import { me } from '../lib/audio.js';
import { $, esc, baraja, Dt, Zi, Reloj, elegir, mostrar, cerrarOverlay, habla, di, leer, hashtag, acciones, rotulo, VEL } from './core.js';
import PREG from '../data/megabomba.json';

export const MB_CABLES = [4, 4, 4, 5, 6, 7, 8];
export const MB_PREMIOS = [5000, 10000, 15000, 20000, 25000, 50000];
const COLS = ['#ff2a2a', '#2a6bff', '#ffd21a', '#22c55e', '#a855f7', '#ff8a20', '#20e0e0', '#ff5cc8'];
export const MB_FRASES = {
  intro: '¡Bienvenido al Desafío Mega Bomba! Siete bombas, tres vidas y diez segundos por cable.',
  reglas: 'Cada cable es una respuesta. Corta los de las respuestas correctas. Si cortas el cable falso… ¡boom!',
  cargada: '¡Bomba cargada!', correcto: '¡Correcto!', desactivada: '¡Bomba desactivada!', cuenta: 'Tres, dos, uno…',
  perdido: '¡Has perdido!', tiempo: '¡Se acabó el tiempo!', fin: 'Fin del juego. Tres bombas han explotado.',
  decision: 'Has superado las seis bombas. ¿Te plantas con lo que llevas o te juegas la Mega Bomba?',
  sifallas: 'Si la desactivas, multiplicas tu premio por cuatro. Si explota, te quedas con la mitad.',
  mega: '¡Mega Bomba! Ocho cables y siete respuestas correctas.', planta: 'Te plantas. ¡Buena decisión!',
  ganaste: '¡Enhorabuena! ¡Has desactivado la Mega Bomba!', megaboom: '¡Boom! La Mega Bomba ha explotado. Te llevas la mitad.',
  despedida: '¡Gracias por jugar al Desafío Mega Bomba!',
  ...Object.fromEntries([1, 2, 3, 4, 5, 6].map(n => ['b' + n, `Bomba número ${['uno', 'dos', 'tres', 'cuatro', 'cinco', 'seis'][n - 1]}.`])),
};
const F = MB_FRASES;
// preguntas sin repetir: se barajan una vez por sesión y se van gastando (al agotarse se rebarajan)
const mazos = {};
function sacar(n) { const k = 'c' + n; if (!mazos[k] || !mazos[k].length) mazos[k] = baraja(PREG[k]); return mazos[k].pop(); }

// 5.000 € con punto de miles también en cifras de 4 dígitos (toLocaleString('es-ES') no lo pone)
const euros = n => String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.') + ' €';
const AUTO = () => !!window.__AUTO;
const hablar = t => habla(null, t, 2600);
const foto = async k => { if (window.__mbFoto) await window.__mbFoto(k); }; // solo para las pruebas automáticas

export async function desafioMegaBomba(api) {
  const S = { ronda: 0, vidas: 3, acum: 0, banco: 0, est: Array(7).fill('') };
  const P = api.P();
  const hudMB = () => {
    let h = $('#mbhud'); if (!h) { h = document.createElement('div'); h.id = 'mbhud'; document.body.appendChild(h); }
    h.classList.remove('hidden');
    h.innerHTML = `<div class="mb-bombas">${S.est.map((e, i) => `<div class="mb-b ${e} ${i === S.ronda - 1 ? 'act' : ''} ${i === 6 ? 'mega' : ''}"><i>${i === 6 ? 'MEGA' : i + 1}</i><small>${i < 6 ? (MB_PREMIOS[i] / 1000) + '.000' : '×4'}</small></div>`).join('')}</div>
      <div class="mb-vidas">${[0, 1, 2].map(i => `<span class="${i < S.vidas ? '' : 'off'}">💣</span>`).join('')}</div>
      <div class="mb-acum"><small>ACUMULADO</small><b>${euros(S.acum)}</b></div>`;
  };
  const fin = () => { $('#mbhud')?.remove(); api.platoColor(null); P.activarBomba(-1); };
  api.limpieza(fin);
  hashtag('#DesafioMegaBomba'); api.cam('bombas'); api.platoColor(null);
  // --- presentación (viñeta + reglas, como el menú «Entenda as regras» del Scratch) ---
  me.sting('mb_vinheta'); await Dt(600);
  mostrar(`<div class="mb-gc reglas"><h3>DESAFÍO MEGA BOMBA</h3>
    <p>Las bombas son las preguntas y los <b>cables son las respuestas</b>. En cada ronda corta los cables de las respuestas <b>CORRECTAS</b>. Si cortas el cable falso… <b>¡BOOM!</b> Si explotan <b>3 bombas</b>, se acaba el juego.</p>
    <div class="mb-tabla">${MB_PREMIOS.map((p, i) => `<span><b>${i + 1}</b>${euros(p)}</span>`).join('')}<span class="mega"><b>MEGA</b>×4</span></div>
    <p>Tienes <b>10 segundos para cortar cada cable</b>. Tras la 6.ª bomba puedes <b>parar</b> o ir a por la <b>Mega Bomba</b>: 8 cables; si la desactivas, multiplica por 4 tu acumulado.</p>
    <div class="btns ov"><button data-z="ok" class="gold">CONTINUAR</button></div></div>`);
  me.music('mb_suspense'); await foto('reglas');
  hablar(F.intro).then(() => hablar(F.reglas)).catch(() => {});
  await Zi(new Promise(r => { $('#overlay').querySelector('[data-z]').onclick = e => { e.stopPropagation(); me.play('tecla'); r(); }; if (AUTO()) setTimeout(r, 2500 / VEL()); }));
  cerrarOverlay(); me.stopVoice(); hudMB();

  for (let r = 1; r <= 6; r++) {
    S.ronda = r; hudMB();
    const ok = await bomba(r);
    S.est[r - 1] = ok ? 'ok' : 'boom';
    if (ok) { S.acum += MB_PREMIOS[r - 1]; hudMB(); await gc('desactivada', 'BOMBA DESACTIVADA', `+${euros(MB_PREMIOS[r - 1])}`); }
    else { S.vidas--; hudMB(); if (S.vidas <= 0) break; }
    await marcadorRondas();
  }
  if (S.vidas <= 0) {
    me.stopMusic(); await gc('fin', 'FIN DEL JUEGO', `Acumulado: ${euros(S.acum)}`, 3200); await hablar(F.fin);
    return final(S.acum, 'fin');
  }
  // --- decisión: PARAR o MEGA BOMBA ---
  me.music('mb_dinamica'); api.platoColor('mega');
  mostrar(`<div class="mb-gc"><h3>ACUMULADO</h3><div class="mb-dig">${euros(S.acum)}</div></div>`); me.play('banco'); await hablar(F.decision);
  mostrar(`<div class="mb-gc mega"><h3>MEGA BOMBA</h3><div class="mb-dig">${euros(S.acum * 4)}</div><p>8 cables · 7 respuestas correctas</p></div>`); me.play('banco'); await Dt(2200);
  mostrar(`<div class="mb-gc boom"><h3>SI FALLAS…</h3><div class="mb-dig">${euros(S.acum / 2)}</div><p>te quedas con la mitad</p></div>`); me.play('banco'); await foto('sifallas'); await hablar(F.sifallas);
  const d = await elegir(`<div class="mb-gc"><h3>¿QUÉ HACES?</h3><div class="mb-dig">${euros(S.acum)}</div>
    <div class="btns ov"><button data-z="parar">PARAR<br><small>me llevo ${euros(S.acum)}</small></button><button data-z="mega" class="gold">MEGA BOMBA<br><small>×4 = ${euros(S.acum * 4)}</small></button></div></div>`);
  if (d === 'parar') { me.stopMusic(); await hablar(F.planta); return final(S.acum, 'parar'); }
  S.ronda = 7; hudMB(); await hablar(F.mega);
  const ok = await bomba(7, true);
  S.est[6] = ok ? 'ok' : 'boom'; hudMB();
  if (ok) { const t = S.acum * 4; await gc('desactivada', 'MEGA BOMBA DESACTIVADA', `${euros(S.acum)} × 4 = ${euros(t)}`, 3000); return final(t, 'mega'); }
  const t = Math.round(S.acum / 2); await hablar(F.megaboom); return final(t, 'megaboom');

  // ---------- una bomba ----------
  async function bomba(r, mega = false) {
    const n = MB_CABLES[r - 1]; const q = sacar(n);
    const orden = baraja(q.op.map((_, i) => i));
    const cables = orden.map((oi, k) => ({ txt: q.op[oi], ok: oi !== q.mal, col: COLS[k], cortado: false }));
    api.platoColor(mega ? 'mega' : null); P.activarBomba(mega ? 4 : (r - 1) % 4); api.cam('bombas');
    me.play('bomba'); mostrar(`<div class="mb-bomba ${mega ? 'mega' : ''}"><div class="esf">${mega ? 'MEGA<br>BOMBA' : r}</div></div>`); await Dt(1200);
    if (!mega) await hablar(F['b' + r]);
    cerrarOverlay(); pinta(null); me.play('cables'); await Dt(600); await hablar(F.cargada);
    me.play('q'); pinta(q.p); leer(q.p); await Dt(1500);
    me.music(mega ? 'mb_tempo3' : r < 4 ? 'mb_tempo1' : 'mb_tempo2');
    let restantes = n - 1;
    while (restantes > 0) {
      const reloj = new Reloj(10, s => { const b = $('#qpanel .mb-t i'); if (b) b.style.width = (s * 10) + '%'; const t = $('#qpanel .mb-t b'); if (t) t.textContent = Math.ceil(s); if (s > 0 && s <= 5 && Math.abs(s - Math.round(s)) < 0.05) me.play('tictac'); }).start();
      pinta(q.p, true); if (restantes === n - 1) await foto(mega ? 'mega' : 'cables' + r);
      let v;
      if (AUTO()) { await Dt(700); const vivos = cables.map((c, i) => ({ c, i })).filter(x => !x.c.cortado); const err = window.__MB_FALLA?.(r, n - restantes); const x = err ? vivos.find(y => !y.c.ok) : vivos.find(y => y.c.ok); v = String(x.i); }
      else v = await Zi(Promise.race([reloj.fin, new Promise(res => $('#qpanel').querySelectorAll('[data-v]').forEach(b => b.onclick = () => res(b.dataset.v)))]));
      reloj.stop();
      if (v === 'TIEMPO') { await explotaBomba(mega, F.tiempo); return false; }
      const c = cables[+v]; c.cortado = true; me.play('corte'); me.stopMusic(); me.sting('mb_cortado');
      pinta(q.p, false);
      await cuenta();
      if (!c.ok) { c.fatal = true; pinta(q.p, false); await explotaBomba(mega, F.perdido); return false; }
      restantes--;
      me.play('acierto'); api.platoColor('acierto'); di(`¡Correcto! «${esc(c.txt)}» era una respuesta correcta.`, 1600);
      if (restantes > 0) { me.voice(null, F.correcto); await Dt(1200); api.platoColor(mega ? 'mega' : null); me.music(mega ? 'mb_tempo3' : r < 4 ? 'mb_tempo1' : 'mb_tempo2'); }
    }
    // desactivada
    me.stopMusic(); me.sting(mega ? 'mb_ganaste' : 'mb_desactivada'); P.celebrar?.();
    cables.forEach(c => { if (!c.ok) c.salvado = true; }); pinta(q.p, false);
    await hablar(F.desactivada); await Dt(800);
    $('#qpanel').classList.add('hidden'); P.activarBomba(-1); api.platoColor(null);
    return true;

    function pinta(texto, activo = false) {
      const dosCol = n > 4;
      const html = `<div class="mb-panel ${mega ? 'mega' : ''}">
        ${texto ? `<div class="mb-q">${esc(texto)}</div>` : '<div class="mb-q">…</div>'}
        <div class="mb-sub">${mega ? 'MEGA BOMBA' : 'BOMBA ' + r} · ${n - 1 - cables.filter(c => c.cortado && c.ok).length} ${n - 1 - cables.filter(c => c.cortado && c.ok).length === 1 ? 'cable' : 'cables'} por cortar</div>
        <div class="mb-t"><i></i><b>10</b></div>
        <div class="mb-cables ${dosCol ? 'dos' : ''}">${cables.map((c, i) => `<button class="mbc ${c.cortado ? (c.ok ? 'cortado' : 'fatal') : ''} ${c.salvado ? 'falso' : ''}" data-v="${i}" ${c.cortado || !activo || !texto ? 'disabled' : ''} style="--c:${c.col}"><span class="hilo"></span><span class="t">${texto ? esc(c.txt) : ''}</span>${c.cortado ? '<span class="tij">✂</span>' : ''}</button>`).join('')}</div></div>`;
      const qp = $('#qpanel'); qp.className = 'mb'; qp.innerHTML = html; qp.classList.remove('hidden');
    }
  }
  async function cuenta() {
    me.voice(null, F.cuenta);
    for (const k of [3, 2, 1]) { mostrar(`<div class="mb-cuenta">${k}</div>`); me.play('bip'); if (k === 2) await foto('cuenta'); await Dt(450); }
    cerrarOverlay(); await Dt(200); me.play('bipx4'); me.play('suspense_bomba'); await Dt(900);
  }
  async function explotaBomba(mega, txt) {
    me.stopMusic(); me.play('explosion'); me.sting('mb_explota'); P.explotar(mega ? 4 : 0); api.platoColor('explota');
    $('#fx-flash').style.opacity = 0.9; setTimeout(() => $('#fx-flash').style.opacity = 0, 180);
    mostrar(`<div class="mb-boom">¡BOOM!</div>`); await foto('boom'); await Dt(1400); cerrarOverlay();
    me.play('fallo'); await hablar(txt); $('#qpanel').classList.add('hidden'); P.activarBomba(-1);
    if (!mega && S.vidas > 1) rotulo('¡BOOM!', `Te quedan ${S.vidas - 1} ${S.vidas - 1 === 1 ? 'vida' : 'vidas'}`, 2500);
    await Dt(800); api.platoColor(null);
  }
  async function gc(cls, titulo, sub, ms = 2400) {
    me.play('banner'); mostrar(`<div class="mb-gc ${cls}"><h3>${esc(titulo)}</h3>${sub ? `<div class="mb-dig">${esc(sub)}</div>` : ''}</div>`); await foto('gc_' + cls); await Dt(ms); cerrarOverlay();
  }
  async function marcadorRondas() {
    me.play('cables'); mostrar(`<div class="mb-gc placar"><h3>MARCADOR</h3><div class="mb-rondas">${S.est.slice(0, 6).map((e, i) => `<span class="${e}"><b>${i + 1}</b>${e === 'ok' ? '✔' : e === 'boom' ? '✖' : '·'}</span>`).join('')}</div><div class="mb-dig">${euros(S.acum)}</div><p>Vidas: ${'💣'.repeat(S.vidas)}${'<span style="opacity:.25">💣</span>'.repeat(3 - S.vidas)}</p></div>`);
    me.play('banco'); await foto('marcador'); await Dt(2200); cerrarOverlay();
  }
  async function final(total, como) {
    me.stopMusic(); if (como === 'mega' || como === 'parar') me.sting('mb_ganaste');
    if (como === 'mega') { P.celebrar?.(); await hablar(F.ganaste); }
    mostrar(`<div class="mb-gc ${como === 'fin' ? 'fin' : 'ganhou'}"><h3>${como === 'fin' ? 'FIN DEL JUEGO' : '¡HAS GANADO!'}</h3><div class="mb-dig">${euros(total)}</div><p>${como === 'parar' ? 'Te plantaste antes de la Mega Bomba' : como === 'mega' ? 'Mega Bomba desactivada: ×4' : como === 'megaboom' ? 'La Mega Bomba explotó: te llevas la mitad' : 'Han explotado 3 bombas'}</p></div>`);
    await foto('final'); await hablar(F.despedida); window.__mbResultado = { total, como, est: S.est.slice(), vidas: S.vidas };
    acciones([{ label: 'Jugar otra vez', cls: 'gold', fn: () => api.iniciar('megabomba') }, { label: 'Menú', fn: () => api.menu('play') }]);
    await Zi(new Promise(() => {}));
  }
}
