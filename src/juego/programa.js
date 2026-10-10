// Flujos de juego con la organización del APK de referencia: Minijuego, Entrenamiento,
// Programa completo y Especial Prime Time.
import { me } from '../lib/audio.js';
import { $, esc, euros, baraja, Dt, Pool, hud, panel, banner, elegir, di, habla, textoGrande, cerrarOverlay, VEL } from './core.js';
import { bombaCaliente, fasePrincipal, bombaCables, bombaEstrategica, desempate, bombaClasificatoria, bombaBote, vivos } from './fases.js';
import { THEMES, POOLS } from '../temas.js';

export const ETAPAS = {
  a3: { id: 'a3', nombre: 'Antena 3 (2014-2023)', valores: [200, 400, 600, 800], clasif: 200, archivosMusica: ['cabecera_antena3', 'cabecera'], archivosLogo: ['logo_antena3', 'logo'],
    variantes: [
      { id: 'a3-2014', nombre: 'Sep 2014 – mar 2018 (bombas, clasificatoria y bote)', caliente: false, estrategica: false, cristal: false },
      { id: 'a3-2018', nombre: 'Mar 2018 – oct 2021 (+ Bomba estratégica)', caliente: false, estrategica: true, cristal: false },
      { id: 'a3-2021', nombre: 'Oct 2021 – ene 2022 (+ Bomba caliente)', caliente: true, estrategica: true, cristal: false },
      { id: 'a3-2022', nombre: 'Desde ene 2022 (+ bomba de cristal)', caliente: true, estrategica: true, cristal: true },
    ] },
  cuatro: { id: 'cuatro', nombre: 'Cuatro (2024)', valores: [100, 200, 300, 500], clasif: 100, archivosMusica: ['cabecera_cuatro', 'cabecera'], archivosLogo: ['logo_cuatro', 'logo'],
    variantes: [{ id: 'cuatro', nombre: 'Sep – dic 2024', caliente: true, estrategica: true, cristal: false }] },
};
const BOTE_INI = 50000, BOTE_DIA = 5000;
const boteKey = et => `boom3d_bote_${et}`;
export const leerBote = et => +localStorage.getItem(boteKey(et)) || BOTE_INI;

const NOMBRES = {
  rojo: ['Nerea', 'Iker', 'Lucía', 'Bruno'], azul: ['Marta', 'Rubén', 'Celia', 'Óscar'],
  ninos: ['Leo', 'Vega', 'Hugo', 'Alba', 'Pau', 'Noa', 'Teo', 'Lía'],
  famosos: ['Estrella Fugaz', 'Capitán Trueno Pop', 'Diva Lumière', 'Mago Chispitas', 'Rocky Balada', 'Lola Purpurina', 'Doctor Risas', 'Tina Tormenta'],
};
const EQUIPOS = { rojo: 'Los Mechas', azul: 'Los Petardos', campR: 'Las Centellas', campA: 'Los Cometas', famR: 'Famosos Rojos', famA: 'Famosos Azules', ninR: 'Los Peques', ninA: 'Los Chispitas' };

const CHISTES = [
  '¿Sabéis por qué las bombas nunca cuentan chistes? Porque siempre acaban… ¡explotando de risa!',
  'Me han dicho que corte por lo sano… y aquí todos los cables parecen sanos.',
  '¿Qué le dice un cable rojo a uno azul? «Tranquilo, que hoy no nos corta nadie».',
  'En este plató tenemos la mecha más corta de la tele… y el presentador más largo de paciencia.',
  'Mi abuela decía: «Hijo, no juegues con fuego». Y aquí estoy, presentando un concurso de bombas.',
  'Para este programa no hace falta gimnasio: con los nervios ya sudamos bastante.',
  '¿Por qué el equipo azul nunca pierde las llaves? Porque siempre tiene un plan… ¡de desactivación!',
  'El que corta el cable equivocado no se moja… bueno, sí, un poco. ¡Se moja entero!',
];

export function crearG({ etapa = 'a3', variante = null, equipoHumano = 'rojo', tema = 'clasico', mult = 1, entreno = false, ilimitado = false } = {}, api) {
  const E = ETAPAS[etapa]; const V = variante || E.variantes[E.variantes.length - 1];
  const esp = tema === 'famosos' ? 'famosos' : tema === 'ninos' ? 'ninos' : (tema === 'campeones' || tema === 'prime') ? 'camp' : null;
  const nombresEq = esp === 'famosos' ? [EQUIPOS.famR, EQUIPOS.famA] : esp === 'ninos' ? [EQUIPOS.ninR, EQUIPOS.ninA] : esp === 'camp' ? [EQUIPOS.campR, EQUIPOS.campA] : [EQUIPOS.rojo, EQUIPOS.azul];
  const jugs = k => esp === 'famosos' ? baraja(NOMBRES.famosos).slice(0, 4) : esp === 'ninos' ? NOMBRES.ninos.slice(k * 4, k * 4 + 4) : NOMBRES[k ? 'azul' : 'rojo'];
  const extraClas = (POOLS[tema]?.clas || []).map(([p, op, r]) => ({ p, op, r }));
  const G = {
    etapa, E, variante: V, valores: E.valores, clasif: E.clasif, mult, tema, entreno, ilimitado,
    bote: leerBote(etapa) * mult, dificultad: esp === 'ninos' ? 0.85 : 1,
    eq: ['rojo', 'azul'].map((id, k) => ({ id, nombre: nombresEq[k], color: k ? '#2a7bff' : '#ff3b3b', dinero: 0, ventajas: [], fuera: false, humano: id === equipoHumano && !window.__AUTO, tuyo: id === equipoHumano,
      jug: jugs(k).map(n => ({ nombre: n, vivo: true, banquillo: false })) })),
    pools: { c4: new Pool('cables4'), c5: new Pool('cables5'), est: new Pool('estrategica'), des: new Pool('desempate'), clas: new Pool('clasificatoria', extraClas) },
    P: api.P(), cam: api.cam,
  };
  G.P?.revivirTodos(); hud.set(G); return G;
}

async function elegirEtapa(modo) {
  if (modo === 'prime') return { etapa: 'a3', variante: ETAPAS.a3.variantes[3] };
  const opts = Object.values(ETAPAS).flatMap(E => E.variantes.map(v => ({ E, v })));
  const z = await elegir(`<div class="txt">ELIGE LA ETAPA</div><div class="btns ov vert">${opts.map((o, i) => `<button data-z="${i}"><b>${esc(o.E.nombre)}</b><br><small>${esc(o.v.nombre)}</small></button>`).join('')}</div>`);
  return { etapa: opts[+z].E.id, variante: opts[+z].v };
}
async function elegirEquipo() {
  return elegir(`<div class="txt">¿CON QUÉ EQUIPO JUEGAS?</div><div class="btns ov"><button data-z="rojo" class="rojo">🔴 Equipo rojo<br><small>los aspirantes</small></button><button data-z="azul" class="azul">🔵 Equipo azul<br><small>los veteranos</small></button></div>`);
}
export async function reglas() {
  await elegir(`<div class="reglas-card"><h2>CÓMO SE JUEGA</h2>
    <p><b>Bomba caliente</b>: una minibomba pasa de mano en mano. 3 s para completar la frase con dos huecos (3 opciones por hueco): +1 si aciertas, −1 si fallas. El que gana elige ventaja: Cable blanco, Siguen todos, Elige tema o Uno menos.</p>
    <p><b>Bombas con cables</b>: cada cable es una respuesta. Corta los de las <u>erróneas</u>. 45 s y 4 cables en las dos primeras, 60 s y 5 cables en las dos últimas. Si cortas la correcta o se acaba el tiempo… ¡BOOM!: se pierde el dinero y cae un jugador.</p>
    <p><b>Bomba estratégica</b>: 10 respuestas, 7 correctas, 60 s. Si falláis, rebote de 30 s para el rival. Comodín de consulta de 10 s.</p>
    <p><b>Bomba clasificatoria</b>: 2 minutos por equipo, preguntas de 2 opciones (±200 €, ±100 € en Cuatro). Al fallar, el turno pasa al rival. Gana quien más dinero tenga.</p>
    <p><b>Bomba bote</b>: 15 minibombas en 2 minutos. Di «¡Boom!» para pasar. En la segunda vuelta, el primer fallo hace explotar la bomba.</p>
    </div><div class="btns ov"><button data-z="go" class="gold">¡JUGAR!</button></div>`);
}

export async function jugarPrograma(modo, api) {
  const completo = modo !== 'mini';
  if (modo === 'mini') await reglas();
  const { etapa, variante } = modo === 'mini' ? { etapa: 'a3', variante: { id: 'mini', nombre: 'Minijuego', caliente: false, estrategica: false, cristal: false } } : await elegirEtapa(modo);
  const equipoHumano = await elegirEquipo();
  const G = crearG({ etapa, variante, equipoHumano, tema: modo === 'prime' ? 'prime' : api.tema(), mult: modo === 'prime' ? 2 : 1 }, api);
  api.setEtapa(etapa);
  if (completo) {
    hud.show(false); await api.cabecera();
    await api.paseo(equipoHumano);
  }
  hud.show(true); hud.set(G); hud.sinTimer(); G.cam('general');
  me.music('trilha');
  await habla(modo === 'prime' ? 'bienvenida_prime' : 'bienvenida', modo === 'prime' ? '¡Bienvenidos a esta gala de ¡Boom! en prime time! Esta noche todos los premios valen el doble.' : `¡Muy buenas y bienvenidos a ¡Boom! Hoy el equipo ${G.eq[0].nombre} se enfrenta al equipo ${G.eq[1].nombre}. ¡Que no os tiemble el pulso!`);
  me.play('bote'); await textoGrande('BOTE', `<span class="bote-n">${euros(G.bote)}</span>`, 2600);
  me.music('tension');
  const chiste = async () => { if (!completo) return; const c = CHISTES[Math.floor(Math.random() * CHISTES.length)]; await habla(null, c, 4000); me.play('badumtss'); me.play('risas'); await Dt(1200); };
  if (variante.caliente) { await bombaCaliente(G); await chiste(); }
  await fasePrincipal(G); await chiste();
  if (variante.estrategica && G.eq.every(e => !e.fuera)) { await bombaEstrategica(G); await chiste(); }
  let gana;
  const vivosEq = [0, 1].filter(ti => !G.eq[ti].fuera && vivos(G.eq[ti]).length);
  if (vivosEq.length === 0) gana = G.eq[0].dinero >= G.eq[1].dinero ? 0 : 1;
  else if (vivosEq.length === 1) { gana = vivosEq[0]; await textoGrande(`¡El equipo ${esc(G.eq[1 - gana].nombre)} se ha quedado sin jugadores!`, `${esc(G.eq[gana].nombre)} pasa directamente a la Bomba bote`, 2600); }
  else gana = await bombaClasificatoria(G);
  await habla('bote', `Llega el momento de la verdad. El equipo ${G.eq[gana].nombre} juega por un bote de ${euros(G.bote)}.`);
  const r = await bombaBote(G, gana);
  // actualización del bote (se guarda en el navegador)
  const base = G.bote / G.mult; const nuevo = r.gano ? BOTE_INI : base + BOTE_DIA;
  localStorage.setItem(boteKey(etapa), String(nuevo));
  me.stopMusic(); me.play('aplausos');
  const humano = G.eq.find(e => e.tuyo);
  await elegir(`<div class="txt">FIN DEL PROGRAMA</div><div class="sub">${G.eq[gana].tuyo ? `¡Tu equipo se lleva <b>${euros(G.ganado)}</b>!` : `Tu equipo (${esc(humano.nombre)}) cae hoy. ${esc(G.eq[gana].nombre)} se lleva ${euros(G.ganado)}.`}<br>Bote para el próximo programa: <b>${euros(nuevo * (modo === 'prime' ? 1 : 1))}</b> (${r.gano ? 'vuelve a 50.000 €' : '+5.000 €'})</div><div class="btns ov"><button data-z="ok">Continuar ▶</button></div>`);
  hud.show(false); panel.hide();
  if (completo) { await habla(G.eq[gana].tuyo ? 'granprograma' : 'gracias', G.eq[gana].tuyo ? '¡Qué gran programa! ¡Hasta mañana!' : '¡Gracias por jugar! Mañana, revancha.'); await api.cabecera({ outro: true }); api.paseoLibre(); }
  else api.menu();
}

export const PRUEBAS_ENTRENO = { caliente: 'Bomba caliente', cables: 'Bombas con cables', estrategica: 'Bomba estratégica', clasificatoria: 'Bomba clasificatoria', bote: 'Bomba bote' };
export async function entrenamiento(fase, api, { ilimitado = false } = {}) {
  for (;;) {
    const G = crearG({ etapa: 'a3', equipoHumano: 'rojo', tema: api.tema(), entreno: true, ilimitado }, api);
    if (fase === 'caliente') G.preguntasCaliente = ilimitado ? 8 : 0;
    hud.show(true); hud.set(G); hud.ronda('ENTRENAMIENTO · ' + PRUEBAS_ENTRENO[fase].toUpperCase());
    me.music('tension');
    let res = '';
    if (fase === 'caliente') { const g = await bombaCaliente(G); res = `Gana la bomba caliente: ${esc(G.eq[g].nombre)}`; }
    if (fase === 'cables') { for (let k = 0; k < 4; k++) await bombaCables(G, 0, k); res = `Dinero conseguido: ${euros(G.eq[0].dinero)} · jugadores en pie: ${vivos(G.eq[0]).length}/4`; }
    if (fase === 'estrategica') { G.eq[0].dinero = 0; G.eq[1].dinero = 1; await bombaEstrategica(G); res = `Ventajas: ${G.eq[0].ventajas.length ? G.eq[0].ventajas.join(', ') : 'ninguna'}`; }
    if (fase === 'clasificatoria') { G.eq[0].dinero = 1000; G.eq[1].dinero = 800; const g = await bombaClasificatoria(G); res = `Gana: ${esc(G.eq[g].nombre)} · ${euros(G.eq[0].dinero)} – ${euros(G.eq[1].dinero)}`; }
    if (fase === 'bote') { const r = await bombaBote(G, 0); res = `Minibombas desactivadas: ${r.aciertos}/15`; }
    me.stopMusic();
    const z = await elegir(`<div class="txt">${esc(PRUEBAS_ENTRENO[fase])}</div><div class="sub">${res}</div><div class="btns ov"><button data-z="otra">Repetir</button><button data-z="menu">Salir</button></div>`);
    if (z === 'menu') return api.menu();
  }
}
