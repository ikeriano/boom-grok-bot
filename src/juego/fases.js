// Fases de ¡Boom! según la historia del programa que mandó el usuario. Donde el texto no detalla
// algo, se usa una interpretación razonable (ver LEEME.txt, «Simplificaciones»).
import { me } from '../lib/audio.js';
import { $, esc, euros, baraja, azar, Dt, Zi, Reloj, Pool, hud, panel, banner, elegir, di, habla, textoGrande, esCorrecta, VEL, VENTAJA_TXT } from './core.js';
import { POOLS } from '../temas.js';

const CABLES = [['rojo', '#ff2a2a'], ['azul', '#2a6bff'], ['amarillo', '#ffd21a'], ['verde', '#22c55e'], ['morado', '#a855f7']];
export const vivos = e => e.jug.map((j, i) => ({ ...j, i })).filter(j => j.vivo && !j.banquillo);
const rival = ti => 1 - ti;
const ia = (G, p = 0.8) => Math.random() < p * (G.dificultad || 1);
const espIA = (a = 1.2, b = 3) => Dt((a + Math.random() * (b - a)) * 1000);

export function eliminar(G, ti, idx, motivo = '') {
  const e = G.eq[ti]; const j = e.jug[idx]; if (!j || !j.vivo) return;
  j.vivo = false; G.P?.eliminar(e.id, idx); hud.set(G);
  di(`${esc(j.nombre)} (${esc(e.nombre)}) queda eliminado${motivo ? ' · ' + esc(motivo) : ''}.`, 3000);
  if (!vivos(e).length && !e.jug.some(x => x.banquillo && x.vivo)) e.fuera = true;
}
function explota(G, cual) { me.play('explosion'); G.P?.explotar(cual); $('#fx-flash').style.opacity = 0.9; setTimeout(() => $('#fx-flash').style.opacity = 0, 160); }
async function elegirVentaja(G, ti, opciones, titulo = 'ELIGE TU VENTAJA') {
  const e = G.eq[ti]; let v;
  if (e.humano) v = await elegir(`<div class="txt">${esc(titulo)}</div><div class="sub">Equipo ${esc(e.nombre)}</div><div class="btns ov">${opciones.map(o => `<button data-z="${o}">${esc(VENTAJA_TXT[o] || 'Rescatar a un eliminado')}</button>`).join('')}</div>`);
  else { v = azar(opciones); await Dt(900); }
  if (v === 'rescatar') { const k = e.jug.findIndex(j => !j.vivo); if (k >= 0) { e.jug[k].vivo = true; e.fuera = false; G.P?.revivir(e.id, k); di(`¡${esc(e.jug[k].nombre)} vuelve al juego!`); } }
  else e.ventajas.push(v);
  hud.set(G); await textoGrande(`Equipo ${esc(e.nombre)}`, `Ventaja: <b>${esc(VENTAJA_TXT[v] || 'Rescatar a un eliminado')}</b>`, 2000);
  return v;
}

// =============== BOMBA CALIENTE (desde el 18-oct-2021) ===============
export async function bombaCaliente(G) {
  G.cam?.('general'); hud.ronda('BOMBA CALIENTE');
  await banner('BOMBA CALIENTE', 'La minibomba pasa de mano en mano · 3 segundos por pregunta');
  const pool = new Pool('caliente');
  const orden = []; for (let k = 0; k < 2; k++) for (const ti of [0, 1]) { const v = vivos(G.eq[ti]); if (v[k]) orden.push([ti, v[k].i]); }
  if (orden.length < 2) return;
  const pts = [0, 0]; let k = 0, explotada = false;
  const oculto = new Reloj(G.ilimitado ? 40 : 22 + Math.random() * 16, null).start(); // la mecha oculta
  oculto.fin.then(r => { if (r === 'TIEMPO') explotada = true; });
  const marcador = () => `<div class="q-marc"><span class="r">${esc(G.eq[0].nombre)} ${pts[0]}</span> · <span class="a">${esc(G.eq[1].nombre)} ${pts[1]}</span></div>`;
  while (!explotada) {
    const [ti, ji] = orden[k % orden.length]; const e = G.eq[ti]; const q = pool.pick();
    const frase = esc(q.f).replace('{1}', '<u>____</u>').replace('{2}', '<u>____</u>');
    const q1 = baraja([0, 1, 2]), q2 = baraja([0, 1, 2]);
    panel.set(`${marcador()}<div class="q-tit">💣 Tiene la bomba: <b style="color:${e.color}">${esc(e.jug[ji].nombre)}</b> (${esc(e.nombre)})</div>
      <div class="q-p">${esc(q.d)}</div><div class="q-frase">${frase}</div>
      <div class="q-op">${q1.map(i => `<button data-v="a${i}">${esc(q.a[i])}</button>`).join('')}</div>
      <div class="q-op">${q2.map(i => `<button data-v="b${i}">${esc(q.b[i])}</button>`).join('')}</div>`, 'caliente');
    const r = new Reloj(G.ilimitado ? 0 : 3, s => hud.timer(s, 1.5)).start();
    let a = null, b = null;
    if (e.humano) {
      const q = $('#qpanel');
      await Zi(Promise.race([r.fin, new Promise(res => q.querySelectorAll('[data-v]').forEach(bt => bt.onclick = () => {
        me.play('tecla'); const v = bt.dataset.v; if (v[0] === 'a') a = +v[1]; else b = +v[1];
        bt.parentNode.querySelectorAll('button').forEach(x => x.classList.toggle('sel', x === bt));
        if (a != null && b != null) res();
      }))]));
    } else {
      await Zi(Promise.race([r.fin, espIA(0.8, 2.4)]));
      if (!r.terminado) { const ok = ia(G, 0.7); a = ok ? q.ra : (q.ra + 1) % 3; b = ok || Math.random() < 0.5 ? q.rb : (q.rb + 2) % 3; }
    }
    r.stop();
    const bien = a === q.ra && b === q.rb;
    pts[ti] += bien ? 1 : -1; me.play(bien ? 'acierto' : 'fallo');
    di(bien ? `¡Correcto! «${esc(q.f.replace('{1}', q.a[q.ra]).replace('{2}', q.b[q.rb]))}». Punto para ${esc(e.nombre)}.` : `No. Era «${esc(q.f.replace('{1}', q.a[q.ra]).replace('{2}', q.b[q.rb]))}». Punto menos para ${esc(e.nombre)}.`, 2200);
    await Dt(1100); k++;
    if (G.preguntasCaliente && k >= G.preguntasCaliente) explotada = true;
  }
  oculto.stop();
  const [tiB] = orden[(k - 1 + orden.length) % orden.length];
  explota(G, 'mini'); panel.hide();
  await textoGrande('¡BOOM!', `La bomba explota en manos del equipo ${esc(G.eq[tiB].nombre)}`, 1800);
  let ganador = pts[0] === pts[1] ? rival(tiB) : pts[0] > pts[1] ? 0 : 1;
  await textoGrande(`Gana el equipo ${esc(G.eq[ganador].nombre)}`, `${pts[0]} – ${pts[1]}`, 1800);
  const v = await elegirVentaja(G, ganador, ['cable_blanco', 'siguen_todos', 'elige_tema', 'uno_menos'], 'VENTAJA DE LA BOMBA CALIENTE');
  if (v === 'uno_menos') { const r = G.eq[rival(ganador)]; const vv = vivos(r); if (vv.length > 1) { r.jug[vv[vv.length - 1].i].banquillo = true; G.P?.ocultarAtril?.(r.id, vv[vv.length - 1].i, true); di(`El equipo ${esc(r.nombre)} jugará la fase principal con un jugador menos.`); } }
  hud.set(G);
  return ganador;
}

// =============== FASE PRINCIPAL: 4 bombas con cables por equipo ===============
export async function fasePrincipal(G, { nBombas = 4 } = {}) {
  G.cam?.('bombas'); hud.ronda('BOMBAS CON CABLES');
  await banner('¡A DESACTIVAR!', `Cortad los cables de las respuestas erróneas · ${G.valores.slice(0, nBombas).map(euros).join(' · ')}`);
  for (let k = 0; k < nBombas; k++) for (const ti of [0, 1]) {
    if (G.eq[ti].fuera || !vivos(G.eq[ti]).length) continue;
    await bombaCables(G, ti, k);
  }
  G.eq.forEach((e, ti) => e.jug.forEach((j, i) => { if (j.banquillo) { j.banquillo = false; G.P?.ocultarAtril?.(e.id, i, false); } }));
  hud.set(G);
}
export async function bombaCables(G, ti, k) {
  const e = G.eq[ti]; const n = k < 2 ? 4 : 5; const T = k < 2 ? 45 : 60; const val = G.valores[k] * (G.mult || 1);
  const cristal = G.variante?.cristal && k === 3;
  const q = (G.pools[n === 4 ? 'c4' : 'c5']).pick();
  const ord = baraja(q.op.map((_, i) => i)); const cables = ord.map((oi, idx) => ({ txt: q.op[oi], ok: oi === q.r, col: CABLES[idx], cortado: false }));
  G.P?.activarBomba(cristal ? 5 : k);
  hud.ronda(`${cristal ? 'BOMBA DE CRISTAL' : 'BOMBA ' + (k + 1)} · ${e.nombre.toUpperCase()} · ${euros(val)}`);
  await banner(cristal ? 'BOMBA DE CRISTAL' : `BOMBA ${k + 1}`, `Equipo ${e.nombre} · ${euros(val)} · ${T} s · ${n} cables`, 1800);
  let turno = 0; let res = null; let blancoUsado = false;
  const r = new Reloj(G.ilimitado ? 0 : T, s => { hud.timer(s); const d = $('#qpanel .bomba-led'); if (d) d.textContent = s === Infinity ? '--:--' : `00:${String(Math.ceil(s)).padStart(2, '0')}`; if (s <= 10 && s > 0 && Math.abs(s - Math.round(s)) < 0.05) me.play('tictac'); }).start();
  const pinta = () => {
    const vv = vivos(e); const cutter = vv[turno % vv.length];
    const puedeBlanco = e.ventajas.includes('cable_blanco') && !blancoUsado;
    panel.set(`<div class="bomba-w ${cristal ? 'cristal' : ''}">
      <div class="bomba-svg"><svg viewBox="0 0 120 120"><circle cx="60" cy="66" r="46" fill="${cristal ? 'rgba(200,235,255,.25)' : '#0b0b12'}" stroke="${cristal ? '#cfeaff' : '#333'}" stroke-width="3"/><rect x="48" y="10" width="24" height="16" rx="3" fill="#444"/><circle cx="44" cy="50" r="9" fill="rgba(255,255,255,.25)"/></svg><div class="bomba-led">--:--</div><div class="bomba-val">${euros(val)}</div></div>
      <div class="bomba-q"><div class="q-tit">Corta: <b style="color:${e.color}">${esc(cutter ? cutter.nombre : '')}</b> (${esc(e.nombre)}) · quedan ${cables.filter(c => !c.cortado).length - 1} cables por cortar</div>
      <div class="q-p">${esc(q.p)}</div>
      <div class="cables">${cables.map((c, i) => `<button class="cable ${c.cortado ? 'cortado' : ''}" data-v="${i}" ${c.cortado || !e.humano ? 'disabled' : ''} style="--c:${c.col[1]}"><span class="hilo"></span><span class="t">${esc(c.txt)}</span>${c.cortado ? '<span class="tij">✂</span>' : ''}</button>`).join('')}
      ${puedeBlanco ? `<button class="cable blanco" data-v="blanco" ${e.humano ? '' : 'disabled'} style="--c:#fff"><span class="hilo"></span><span class="t">Usar CABLE BLANCO (corta uno erróneo)</span></button>` : ''}</div></div></div>`, 'cables');
    r.onTick(r.rest);
    return cutter;
  };
  while (!res) {
    const cutter = pinta(); if (!cutter) { res = 'boom'; break; }
    let v;
    if (e.humano) v = await panel.clic('[data-v]', [r.fin]);
    else {
      await Zi(Promise.race([r.fin, espIA(1.6, 4.5)]));
      if (r.terminado) v = 'TIEMPO';
      else if (e.ventajas.includes('cable_blanco') && !blancoUsado && n === 5) v = 'blanco';
      else { const vivosC = cables.map((c, i) => ({ c, i })).filter(x => !x.c.cortado); const malos = vivosC.filter(x => !x.c.ok); v = String((ia(G, 0.87) || !vivosC.some(x => x.c.ok) ? azar(malos) : vivosC.find(x => x.c.ok)).i); }
    }
    if (v === 'TIEMPO') { res = 'tiempo'; break; }
    if (v === 'STOP') { res = 'boom'; break; }
    if (v === 'blanco') { blancoUsado = true; e.ventajas.splice(e.ventajas.indexOf('cable_blanco'), 1); const m = cables.find(c => !c.cortado && !c.ok); m.cortado = true; me.play('corte'); di('¡Cable blanco! Se corta solo un cable erróneo.'); hud.set(G); }
    else {
      const c = cables[+v]; c.cortado = true; me.play('corte');
      if (c.ok) { res = 'boom'; c.fatal = true; break; }
      di(`«${esc(c.txt)}» no era. ¡Cable cortado!`, 1600); turno++;
    }
    if (cables.filter(c => !c.cortado).length === 1) res = 'ok';
    await Dt(500);
  }
  r.stop(); G.P?.activarBomba(-1);
  const correcta = cables.find(c => c.ok).txt;
  if (res === 'ok') { me.play('acierto'); e.dinero += val; hud.set(G); pinta(); G.P?.celebrar?.(); await textoGrande('¡BOMBA DESACTIVADA!', `Respuesta correcta: <b>${esc(correcta)}</b> · +${euros(val)} para ${esc(e.nombre)}`, 2300); }
  else {
    explota(G, cristal ? 5 : k); const vv = vivos(e); const cutter = vv[turno % vv.length];
    await textoGrande('¡BOOM!', `${res === 'tiempo' ? 'Se acabó el tiempo' : `Han cortado «${esc(correcta)}», la respuesta correcta`} · se pierden ${euros(val)}`, 2300);
    if (e.ventajas.includes('siguen_todos')) { e.ventajas.splice(e.ventajas.indexOf('siguen_todos'), 1); di('Ventaja «Siguen todos»: nadie queda eliminado esta vez.'); hud.set(G); }
    else if (cutter) eliminar(G, ti, cutter.i);
  }
  panel.hide(); await Dt(600);
}

// =============== BOMBA ESTRATÉGICA (desde marzo de 2018) ===============
async function panelDiez(G, ti, tema, { segs = 60, necesarios = 7, items, encontrados = new Set(), consulta = true, titulo = 'BOMBA ESTRATÉGICA' } = {}) {
  const e = G.eq[ti]; let consultaUsada = !consulta; let sugerida = null; let turno = 0; let fallo = null;
  const r = new Reloj(G.ilimitado ? 0 : segs, s => hud.timer(s)).start();
  const pinta = () => {
    const vv = vivos(e); const p = vv[turno % Math.max(1, vv.length)];
    panel.set(`<div class="q-tit">${esc(titulo)} · <b style="color:${e.color}">${esc(e.nombre)}</b>${p ? ' · responde ' + esc(p.nombre) : ''} · aciertos ${[...encontrados].filter(x => items[x].ok).length}/${necesarios}</div>
      <div class="q-p">${esc(tema.t)}</div><div class="panel10">${items.map((it, i) => `<button data-v="${i}" class="${encontrados.has(i) ? 'ok' : ''} ${fallo === i ? 'ko' : ''} ${sugerida === i ? 'sug' : ''}" ${encontrados.has(i) || !e.humano ? 'disabled' : ''}>${esc(it.txt)}</button>`).join('')}</div>
      ${!consultaUsada && e.humano ? '<div class="q-op"><button data-v="consulta" class="consulta">🗣 Comodín de consulta (10 s)</button></div>' : ''}`, 'diez');
    return p;
  };
  const objetivo = () => [...encontrados].filter(x => items[x].ok).length >= necesarios;
  while (!objetivo()) {
    const p = pinta(); if (!p) { fallo = -1; break; }
    let v;
    if (e.humano) v = await panel.clic('[data-v]', [r.fin]);
    else {
      await Zi(Promise.race([r.fin, espIA(1.2, 3.2)]));
      if (r.terminado) v = 'TIEMPO';
      else if (!consultaUsada && Math.random() < 0.15) v = 'consulta';
      else { const libres = items.map((it, i) => ({ it, i })).filter(x => !encontrados.has(x.i)); const buenos = libres.filter(x => x.it.ok); v = String((ia(G, 0.9) && buenos.length ? azar(buenos) : azar(libres)).i); }
    }
    if (v === 'TIEMPO' || v === 'STOP') { fallo = -1; break; }
    if (v === 'consulta') {
      consultaUsada = true; r.pause(); di('Comodín de consulta: el equipo tiene 10 segundos para hablarlo.');
      const libres = items.map((it, i) => ({ it, i })).filter(x => !encontrados.has(x.i)); const buenos = libres.filter(x => x.it.ok);
      sugerida = (Math.random() < 0.8 && buenos.length ? azar(buenos) : azar(libres)).i;
      for (let s = 10; s > 0; s--) { hud.timer(s); pinta(); await Dt(e.humano ? 1000 : 250); }
      r.start(); hud.timer(r.rest); continue;
    }
    const i = +v; me.play('tecla');
    if (items[i].ok) { encontrados.add(i); me.play('acierto'); turno++; sugerida = sugerida === i ? null : sugerida; }
    else { fallo = i; break; }
    await Dt(300);
  }
  r.stop(); pinta();
  return { ok: fallo == null, fallo, jugador: vivos(e)[turno % Math.max(1, vivos(e).length)], encontrados };
}
function itemsDe(tema) { return baraja([...tema.ok.map(t => ({ txt: t, ok: true })), ...tema.ko.map(t => ({ txt: t, ok: false }))]); }

export async function bombaEstrategica(G) {
  G.cam?.('bombas'); hud.ronda('BOMBA ESTRATÉGICA');
  await banner('BOMBA ESTRATÉGICA', '6 temas · 10 respuestas, 7 correctas · 60 s · rebote de 30 s');
  const temas = baraja(G.pools.est.items).slice(0, 6); const usados = new Set();
  const orden = G.eq[0].dinero <= G.eq[1].dinero ? [0, 1] : [1, 0];
  for (const ti of orden) {
    const e = G.eq[ti]; if (e.fuera || !vivos(e).length) continue;
    const quien = e.ventajas.includes('elige_tema') ? ti : rival(ti);
    if (quien === ti) e.ventajas.splice(e.ventajas.indexOf('elige_tema'), 1);
    const libres = temas.map((t, i) => ({ t, i })).filter(x => !usados.has(x.i));
    let sel;
    if (G.eq[quien].humano) sel = +(await elegir(`<div class="txt">${quien === ti ? 'ELIGE TU TEMA' : `ELIGE EL TEMA DEL EQUIPO ${esc(e.nombre.toUpperCase())}`}</div><div class="btns ov">${libres.map(x => `<button data-z="${x.i}">${esc(x.t.t)}</button>`).join('')}</div>`));
    else { await Dt(1200); sel = azar(libres).i; }
    usados.add(sel); const tema = temas[sel]; const items = itemsDe(tema);
    di(`Tema para el equipo ${esc(e.nombre)}: «${esc(tema.t)}».`, 2500);
    G.P?.activarBomba(2);
    const r1 = await panelDiez(G, ti, tema, { items });
    G.P?.activarBomba(-1);
    if (r1.ok) { me.play('acierto'); G.P?.celebrar?.(); await textoGrande('¡BOMBA DESACTIVADA!', `El equipo ${esc(e.nombre)} encuentra las 7 respuestas`, 2000); await ventajaEstrategica(G, ti); }
    else {
      explota(G, 2); await textoGrande('¡BOOM!', r1.fallo >= 0 ? `«${esc(items[r1.fallo].txt)}» no era correcta` : 'Se acabó el tiempo', 2000);
      if (r1.jugador) eliminar(G, ti, r1.jugador.i);
      const ri = rival(ti); const R = G.eq[ri];
      if (!R.fuera && vivos(R).length) {
        const faltan = 7 - [...r1.encontrados].filter(x => items[x].ok).length;
        await banner('¡REBOTE!', `El equipo ${R.nombre} tiene 30 s para encontrar las ${faltan} que faltan`, 2000);
        const r2 = await panelDiez(G, ri, tema, { items, segs: 30, necesarios: 7, encontrados: new Set([...r1.encontrados]), consulta: false, titulo: 'REBOTE' });
        if (r2.ok) { me.play('acierto'); await textoGrande('¡REBOTE CONSEGUIDO!', `La ventaja es para ${esc(R.nombre)}`, 1800); await ventajaEstrategica(G, ri); }
        else { me.play('fallo'); await textoGrande('Rebote fallido', 'Nadie se lleva la ventaja', 1600); }
      }
    }
    panel.hide();
  }
}
async function ventajaEstrategica(G, ti) {
  const op = ['mas10', 'menos10']; if (G.eq[ti].jug.some(j => !j.vivo)) op.unshift('rescatar');
  await elegirVentaja(G, ti, op, 'VENTAJA DE LA BOMBA ESTRATÉGICA');
}

/** Desempate: panel de 10 con 6 ciertas, turnos alternos; pierde quien falle */
export async function desempate(G, empieza = 0) {
  await banner('DESEMPATE', 'Panel de 10 respuestas con 6 correctas · turnos alternos · pierde quien falle', 2200);
  const tema = G.pools.des.pick(); const items = itemsDe(tema); const enc = new Set(); let t = empieza;
  for (;;) {
    const e = G.eq[t];
    panel.set(`<div class="q-tit">DESEMPATE · turno de <b style="color:${e.color}">${esc(e.nombre)}</b></div><div class="q-p">${esc(tema.t)}</div>
      <div class="panel10">${items.map((it, i) => `<button data-v="${i}" class="${enc.has(i) ? 'ok' : ''}" ${enc.has(i) || !e.humano ? 'disabled' : ''}>${esc(it.txt)}</button>`).join('')}</div>`, 'diez');
    const r = new Reloj(G.ilimitado ? 0 : 10, s => hud.timer(s)).start(); let v;
    if (e.humano) v = await panel.clic('[data-v]', [r.fin]);
    else { await Zi(Promise.race([r.fin, espIA(1, 2.5)])); const libres = items.map((it, i) => ({ it, i })).filter(x => !enc.has(x.i)); const b = libres.filter(x => x.it.ok); v = String((ia(G, 0.85) && b.length ? azar(b) : azar(libres)).i); }
    r.stop();
    if (v === 'TIEMPO' || !items[+v]?.ok) { me.play('fallo'); panel.hide(); await textoGrande(`Falla el equipo ${esc(e.nombre)}`, `Gana el desempate ${esc(G.eq[rival(t)].nombre)}`, 1800); return rival(t); }
    enc.add(+v); me.play('acierto'); t = rival(t); await Dt(300);
  }
}

// =============== BOMBA CLASIFICATORIA (bomba plateada con mecha LED) ===============
export async function bombaClasificatoria(G) {
  G.cam?.('clasif'); hud.ronda('BOMBA CLASIFICATORIA');
  const vivosEq = [0, 1].filter(ti => !G.eq[ti].fuera && vivos(G.eq[ti]).length);
  if (vivosEq.length < 2) return vivosEq[0] ?? 0;
  await banner('BOMBA CLASIFICATORIA', `2 minutos por equipo · preguntas de 2 opciones · ±${euros(G.clasif * (G.mult || 1))}`);
  const val = G.clasif * (G.mult || 1);
  const t0 = [0, 1].map(ti => { let s = 120; const e = G.eq[ti], R = G.eq[rival(ti)]; if (e.ventajas.includes('mas10')) s += 10; if (R.ventajas.includes('menos10')) s -= 10; return s; });
  G.eq.forEach(e => { e.ventajas = e.ventajas.filter(v => v !== 'mas10' && v !== 'menos10'); }); hud.set(G);
  if (t0[0] !== 120 || t0[1] !== 120) di(`Tiempos: ${esc(G.eq[0].nombre)} ${t0[0]} s · ${esc(G.eq[1].nombre)} ${t0[1]} s`, 3000);
  let turno = G.eq[0].dinero > G.eq[1].dinero ? 0 : G.eq[1].dinero > G.eq[0].dinero ? 1 : await desempate(G, 0);
  di(`Empieza el equipo ${esc(G.eq[turno].nombre)}, que es el que más dinero tiene.`, 2500);
  const relojes = t0.map(s => new Reloj(G.ilimitado ? 0 : s, null)); const pj = [0, 0];
  const pool = G.pools.clas;
  const pregunta = async (ti, reloj) => {
    const e = G.eq[ti]; const q = pool.pick(); const ord = baraja([0, 1]); const vv = vivos(e); const quien = vv[pj[ti]++ % vv.length];
    const pinta = (sel = null) => panel.set(`<div class="clas-w">${[0, 1].map(k => `<div class="mecha l${k} ${k === ti ? 'act' : ''}"><b>${esc(G.eq[k].nombre)}</b><div class="barra"><i style="width:${relojes[k].ilimitado ? 100 : relojes[k].rest / t0[k] * 100}%"></i></div><span>${relojes[k].ilimitado ? '∞' : Math.ceil(relojes[k].rest) + ' s'}</span></div>`).join('')}</div>
      <div class="q-tit">Responde <b style="color:${e.color}">${esc(quien.nombre)}</b> (${esc(e.nombre)})</div><div class="q-p">${esc(q.p)}</div>
      <div class="q-op dos">${ord.map(i => `<button data-v="${i}" ${!e.humano ? 'disabled' : ''} class="${sel === i ? (i === q.r ? 'okb' : 'kob') : ''}">${esc(q.op[i])}</button>`).join('')}</div>`, 'clas');
    pinta();
    reloj.onTick = s => { hud.timer(s); G.P?.setMecha(reloj.ilimitado ? 1 : s / t0[ti]); const b = $(`#qpanel .mecha.l${ti} i`); if (b) b.style.width = (s / t0[ti] * 100) + '%'; const sp = $(`#qpanel .mecha.l${ti} span`); if (sp) sp.textContent = Math.ceil(s) + ' s'; };
    reloj.start();
    let v;
    if (e.humano) v = await panel.clic('[data-v]', [reloj.fin.then(() => 'TIEMPO')]);
    else { await Zi(Promise.race([reloj.fin, espIA(1.1, 3)])); v = reloj.terminado ? 'TIEMPO' : String(ia(G, 0.8) ? q.r : 1 - q.r); }
    reloj.pause();
    if (v === 'TIEMPO') return 'tiempo';
    const ok = +v === q.r; pinta(+v);
    if (ok) { e.dinero += val; me.play('acierto'); } else { e.dinero = Math.max(0, e.dinero - val); me.play('fallo'); }
    hud.set(G); await Dt(700); return ok;
  };
  for (;;) {
    const libres = [0, 1].filter(k => !relojes[k].terminado);
    if (!libres.length) break;
    if (relojes[turno].terminado) turno = rival(turno);
    if (relojes[turno].ilimitado && pj[0] + pj[1] >= 12) break; // entrenamiento sin tiempo: 12 preguntas
    const r = await pregunta(turno, relojes[turno]);
    if (r === 'tiempo') { me.play('explosion'); di(`¡Se consumió la mecha del equipo ${esc(G.eq[turno].nombre)}!`, 2200); turno = rival(turno); await Dt(1200); continue; }
    if (!r && !relojes[rival(turno)].terminado) { turno = rival(turno); di(`Fallo: el turno pasa al equipo ${esc(G.eq[turno].nombre)}.`, 1800); }
  }
  relojes.forEach(r => r.stop());
  let gana;
  if (G.eq[0].dinero === G.eq[1].dinero) {
    await banner('MUERTE SÚBITA', 'Una pregunta por equipo hasta que uno falle y el otro acierte', 2000);
    for (let ronda = 0; gana == null && ronda < 20; ronda++) {
      const res = []; for (const ti of [0, 1]) { const rr = new Reloj(G.ilimitado ? 0 : 10, null); const ok = await pregunta(ti, rr); rr.stop(); res.push(ok === true); }
      if (res[0] !== res[1]) gana = res[0] ? 0 : 1;
    }
    if (gana == null) gana = 0;
  } else gana = G.eq[0].dinero > G.eq[1].dinero ? 0 : 1;
  const pierde = rival(gana); G.P?.setMecha(0); explota(G, 4); panel.hide();
  await textoGrande(`¡El equipo ${esc(G.eq[gana].nombre)} juega la Bomba bote!`, `${esc(G.eq[pierde].nombre)} se despide con la bomba plateada.`, 2600);
  G.eq[pierde].fuera = true; G.P?.setMecha(1);
  return gana;
}

// =============== BOMBA BOTE: 15 minibombas, 2 minutos ===============
export async function bombaBote(G, ti) {
  const e = G.eq[ti]; G.cam?.('bote'); hud.ronda(`BOMBA BOTE · ${euros(G.bote)}`);
  await banner('BOMBA BOTE', `15 minibombas · 2 minutos · bote de ${euros(G.bote)}`, 2400);
  const extra = (POOLS[G.tema]?.bote || []).map(([p, r]) => ({ p, r }));
  const pool = new Pool('bote', extra);
  const est = Array(15).fill('off'); const qs = []; let vuelta = 1; let explotada = false;
  const sync = () => G.P?.setMinis(est);
  const r = new Reloj(G.ilimitado ? 0 : 120, s => { hud.timer(s, 15); }).start();
  const pinta = (i, q, msg = '') => panel.set(`<div class="minis">${est.map((s, k) => `<button data-n="${k}" class="mini ${s} ${k === i ? 'cur' : ''}" ${vuelta === 1 || s === 'ok' || !e.humano || i != null ? 'disabled' : ''}>${k + 1}</button>`).join('')}</div>
      ${q ? `<div class="q-tit">Minibomba <b>${i + 1}</b> · ${vuelta === 1 ? 'primera vuelta' : 'segunda vuelta: el primer fallo hace explotar la bomba'}</div><div class="q-p">${esc(q.p)}</div>` : `<div class="q-tit">${msg}</div>`}`, 'bote');
  const responder = async (i) => {
    est[i] = 'sel'; sync(); const q = pool.pick(); qs[i] = q; pinta(i, q);
    let v;
    if (e.humano) v = await panel.escribir({ pasar: '¡BOOM! (pasar)' }, [r.fin.then(() => 'TIEMPO')]);
    else { await Zi(Promise.race([r.fin, espIA(1.4, 3.6)])); if (r.terminado) v = 'TIEMPO'; else { const x = Math.random(); v = x < 0.74 * (G.dificultad || 1) ? q.r.split('|')[0] : x < 0.9 ? 'BOOM' : 'zzz'; } di(`${esc(e.nombre)}: «${esc(v === 'BOOM' ? '¡Boom!' : v === 'TIEMPO' ? '…' : v)}»`, 1300); await Dt(500); }
    if (v === 'TIEMPO' || v === 'STOP') return 'tiempo';
    if (v === 'BOOM') { est[i] = 'boom'; me.play('pop'); sync(); return 'boom'; }
    if (esCorrecta(v, q.r)) { est[i] = 'ok'; me.play('acierto'); sync(); return 'ok'; }
    est[i] = 'ko'; me.play('fallo'); sync(); di(`No. La respuesta era «${esc(q.r.split('|')[0])}».`, 1800); return 'ko';
  };
  for (let i = 0; i < 15 && !explotada; i++) { const x = await responder(i); if (x === 'tiempo') explotada = true; await Dt(250); }
  vuelta = 2;
  while (!explotada && est.some(s => s !== 'ok')) {
    pinta(null, null, 'Segunda vuelta: elegid el número de una minibomba pendiente');
    let n;
    if (e.humano) { const q = $('#qpanel'); n = await Zi(Promise.race([r.fin.then(() => 'TIEMPO'), new Promise(res => q.querySelectorAll('[data-n]:not([disabled])').forEach(b => b.onclick = () => res(b.dataset.n)))])); }
    else { await Zi(Promise.race([r.fin, Dt(800)])); n = r.terminado ? 'TIEMPO' : String(est.findIndex(s => s !== 'ok')); }
    if (n === 'TIEMPO') { explotada = true; break; }
    const x = await responder(+n);
    if (x === 'tiempo' || x === 'ko') { explotada = true; break; }
    await Dt(250);
  }
  r.stop();
  const aciertos = est.filter(s => s === 'ok').length;
  if (!explotada && aciertos === 15) {
    me.play('bote'); me.play('aplausos'); G.P?.celebrar?.(); G.ganoBote = true; const premio = G.bote;
    G.ganado = e.dinero + premio;
    await textoGrande('¡BOTE CONSEGUIDO!', `El equipo ${esc(e.nombre)} desactiva las 15 minibombas y gana ${euros(premio)} + ${euros(e.dinero)}`, 4200);
  } else {
    explota(G, 'bote'); est.forEach((s, k) => { if (s !== 'ok') est[k] = 'ko'; }); sync();
    G.ganado = e.dinero; G.ganoBote = false;
    await textoGrande('¡BOOM!', `${aciertos} de 15 minibombas desactivadas · el equipo ${esc(e.nombre)} se lleva ${euros(e.dinero)}`, 3600);
  }
  panel.hide();
  return { aciertos, gano: G.ganoBote };
}
