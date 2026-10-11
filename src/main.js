// ¡Boom! 3D · Estudios Grok Bot. Estructura de navegación calcada del APK de referencia:
// loading → menú (Minijuego / Entrenamiento / Programa completo / Especial Prime Time / Historia + Temática)
// → botones superiores (Luces, Voz, Sonido, Menú) → HUD + panel inferior + overlay + bocadillo del presentador.
import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { construirPlato, TEMAS } from './plato/boom.js';
import { drawBoomLogo } from './plato/logo.js';
import * as CAB from './plato/cabecera.js';
import { THEMES, paletaDe } from './temas.js';
import { me } from './lib/audio.js';
import { audioCtx, recursoEpoca, guardarSubido, quitarSubido, idb as idbMedia } from './lib/media.js';
import { $, esc, nuevoToken, check, Dt, Zi, ABORT, bubble, di, habla, hud, panel, cerrarOverlay, elegir, hashtag, limpiarRotulos, toast, acciones, ocultarCreditos, rodarCreditos } from './juego/core.js';
import { jugarPrograma, entrenamiento, ETAPAS, reglas, leerBote, creditosBoom, PRUEBAS_ENTRENO } from './juego/programa.js';
import { CAPITULOS, PRESENTADOR } from './juego/historia.js';
import { CHISTES } from './juego/programa.js';
import BASE_PREG from './data/preguntas.json';
import * as FASES from './juego/fases.js';

const params = new URLSearchParams(location.search);
import { cfg, guardarCfg, VERSION } from './cfg.js';
import { MONOLOGOS, TIPO_ICONO, TIPO_TXT } from './juego/monologos.js';
import * as M from './lib/menu_kit.js';
if (params.get('vel')) window.__VEL = +params.get('vel');
if (params.has('auto')) { window.__AUTO = true; window.__AUTO_ELIGE = +(params.get('elige') || 0); }
bubble.nombre = cfg.presentador || PRESENTADOR.nombre; bubble.voz = PRESENTADOR.voz;
const touch = matchMedia('(pointer: coarse)').matches || 'ontouchstart' in window;

// ---------- render ----------
const renderer = new THREE.WebGLRenderer({ antialias: !touch, preserveDrawingBuffer: params.has('capture'), powerPreference: 'high-performance' });
renderer.setPixelRatio(Math.min(devicePixelRatio, touch ? 1.25 : 1.75)); renderer.setSize(innerWidth, innerHeight);
renderer.toneMapping = THREE.ACESFilmicToneMapping; renderer.toneMappingExposure = +(params.get("exp") || 0.9); renderer.shadowMap.enabled = true;
$('#app').appendChild(renderer.domElement);
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(52, innerWidth / innerHeight, 0.1, 220);
const Sanitize = { uniforms: { tDiffuse: { value: null } }, vertexShader: 'varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }', fragmentShader: 'uniform sampler2D tDiffuse; varying vec2 vUv; void main(){ vec4 c = texture2D(tDiffuse, vUv); if (any(isnan(c)) || any(isinf(c))) c = vec4(0.0,0.0,0.0,1.0); gl_FragColor = clamp(c, 0.0, 2.5); }' };
const composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, camera)); composer.addPass(new ShaderPass(Sanitize));
const bloom = new UnrealBloomPass(new THREE.Vector2(innerWidth, innerHeight), +(params.get("bs") ?? 0.18), 0.25, +(params.get("bt") ?? 1.0)); composer.addPass(bloom); composer.addPass(new OutputPass());
let bloomOn = params.has('bloom') || cfg.quality === 'alta';

// ---------- estado ----------
let temaId = params.get('tema') || localStorage.getItem('boom3d_theme') || 'clasico'; if (!THEMES[temaId]) temaId = 'clasico';
let colorClasico = params.get('color') || cfg.color || 'azul'; if (!TEMAS[colorClasico]) colorClasico = 'azul';
let etapaActual = 'a3';
const ctx = { paleta: paletaDe(temaId, colorClasico), deco: THEMES[temaId].deco, logoPantalla: null, pantallaInfo: null, pantallaTexto: null };
const P = construirPlato(scene, ctx, renderer);
async function cargarLogo() { const r = await recursoEpoca('logo', ETAPAS[etapaActual]); if (!r) { ctx.logoPantalla = null; return null; } const img = new Image(); img.src = r.url; ctx.logoPantalla = img; return r.url; }
function aplicarTema(id, guardar = true) {
  temaId = id; ctx.paleta = paletaDe(id, colorClasico); const LZ = { blanco: [0xffffff, 0xdde8ff], rojo: [0xff2a2a, 0xffa040], rojoazul: [0xff2a2a, 0x2a6bff] }; if (LZ[cfg.platoLuz]) ctx.paleta = { ...ctx.paleta, luces: LZ[cfg.platoLuz] }; P.setTema(ctx.paleta); P.setDeco(THEMES[id].deco);
  ctx.pantallaTexto = THEMES[id].banner && !ctx.logoPantalla ? null : null;
  if (guardar) localStorage.setItem('boom3d_theme', id);
}

// ---------- cámara (modos del APK: menu / show / walk) ----------
const CAMS = {
  general: [[0, 9, 25], [0, 3, -4]], bombas: [[-0.5, 2.8, 9.2], [-3.4, 1.2, 3.2]], atriles: [[0, 4.2, 3.5], [0, 2.2, -9.5]],
  bote: [[0, 4.6, 8.4], [0, 2.6, 0]], clasif: [[-1.5, 2.4, 7.5], [-4.1, 1.3, 3.1]], pantalla: [[4, 6, 6], [-9.5, 6.7, -12.5]], publico: [[0, 6, 6], [-13, 2, 2]],
};
{ const v = new THREE.Vector3(); P.plata.getWorldPosition(v); const d = new THREE.Vector3(-v.x, 0, -v.z).normalize(); CAMS.clasif = [[v.x - d.x * 2.6, v.y + 1.6, v.z - d.z * 2.6], [v.x + d.x * 2, v.y + 0.6, v.z + d.z * 2]]; }
const cam = { mode: 'menu', pos: new THREE.Vector3(0, 9, 26), look: new THREE.Vector3(0, 2, 0), tPos: new THREE.Vector3(0, 9, 26), tLook: new THREE.Vector3(0, 2, 0), yaw: 0, pitch: 0.3 };
function show(pos, look, inmediato = false) { cam.mode = 'show'; cam.tPos.set(...pos); cam.tLook.set(...look); if (inmediato) { cam.pos.copy(cam.tPos); cam.look.copy(cam.tLook); } }
const camara = n => { const c = CAMS[n] || CAMS.general; show(c[0], c[1]); };
let drag = null;
renderer.domElement.addEventListener('pointerdown', e => { drag = { id: e.pointerId, x: e.clientX, y: e.clientY }; });
addEventListener('pointermove', e => { if (!drag || drag.id !== e.pointerId) return; const dx = e.clientX - drag.x, dy = e.clientY - drag.y; drag.x = e.clientX; drag.y = e.clientY; cam.yaw -= dx * 0.006; cam.pitch = Math.max(-0.3, Math.min(1.1, cam.pitch + dy * 0.004)); });
addEventListener('pointerup', e => { if (drag && drag.id === e.pointerId) drag = null; });
const keys = {}; addEventListener('keydown', e => { keys[e.code] = true; }); addEventListener('keyup', e => { keys[e.code] = false; });
const joy = { x: 0, y: 0 }; { const J = $('#joy'), K = $('#knob'); let id = null; const mv = e => { const r = J.getBoundingClientRect(); let x = e.clientX - (r.left + r.width / 2), y = e.clientY - (r.top + r.height / 2); const d = Math.hypot(x, y), m = r.width / 2 - 10; if (d > m) { x *= m / d; y *= m / d; } K.style.transform = `translate(${x}px,${y}px)`; joy.x = x / m; joy.y = y / m; };
  J.addEventListener('pointerdown', e => { id = e.pointerId; J.setPointerCapture(id); mv(e); e.stopPropagation(); }); J.addEventListener('pointermove', e => { if (e.pointerId === id) mv(e); });
  const up = e => { if (e.pointerId === id) { id = null; joy.x = joy.y = 0; K.style.transform = ''; } }; J.addEventListener('pointerup', up); J.addEventListener('pointercancel', up); }
let alLlegar = null;
function modoPaseo(on) { cam.mode = on ? 'walk' : cam.mode; $('#joy').classList.toggle('hidden', !(on && touch)); if (on) { P.walker.visible = true; cam.yaw = 0; cam.pitch = 0.3; } }
function pistaTxt(t) { const h = $('#hint'); h.textContent = t; h.classList.toggle('hidden', !t); }

// ---------- cabecera 3D (equivale al vídeo de intro/outro del APK) ----------
let cab = null;
function reproducirCabecera({ outro = false, fixedT = null } = {}) {
  return new Promise(async res => {
    pararCabecera();
    const logo = await cargarLogo();
    const inst = CAB.crearCabecera(renderer, { logoUrl: logo, cuatro: etapaActual === 'cuatro' });
    inst.resize(innerWidth, innerHeight);
    cab = { inst, start: performance.now() / 1000, fixedT, res, gain: null };
    document.body.classList.add('en-cabecera'); $('#btnSkip').classList.remove('hidden'); $('#cabTexto').textContent = outro ? '¡Hasta mañana!' : '';
    if (fixedT == null) {
      me.stopMusic();
      const mus = await recursoEpoca('musica', ETAPAS[etapaActual]);
      if (mus && !me.muted) { cab.audio = new Audio(mus.url); cab.audio.play().catch(() => {}); }
      else if (!me.muted) { try { const c = audioCtx(); const g = c.createGain(); g.connect(c.destination); cab.gain = g; CAB.programarAudioRespaldo(c, g, c.currentTime + 0.05); } catch (e) { /* */ } }
    }
  });
}
function pararCabecera() {
  if (!cab) return; const c0 = cab; cab = null;
  if (c0.audio) { const a = c0.audio; let v = 1; const iv = setInterval(() => { v -= 0.1; a.volume = Math.max(0, v); if (v <= 0) { a.pause(); clearInterval(iv); } }, 80); }
  if (c0.gain) { try { c0.gain.gain.setTargetAtTime(0, audioCtx().currentTime, 0.2); setTimeout(() => c0.gain.disconnect(), 2000); } catch (e) { /* */ } }
  c0.inst.dispose(); document.body.classList.remove('en-cabecera'); $('#btnSkip').classList.add('hidden'); $('#cabTexto').textContent = '';
  $('#fx-flash').style.opacity = 0; $('#fx-fade').style.opacity = 1; $('#fx-fade').classList.add('saliendo'); setTimeout(() => { $('#fx-fade').style.opacity = 0; }, 30);
  c0.res();
}

window.__renderCabecera = async t => { if (!cab) { reproducirCabecera({ fixedT: t }); await new Promise(r => setTimeout(r, 400)); } cab.fixedT = t; renderCab(t); return true; };
function renderCab(t) { cab.inst.render(t); const o = cab.inst.overlay(t); $('#fx-flash').style.opacity = o.flash; $('#fx-fade').classList.remove('saliendo'); $('#fx-fade').style.opacity = o.fade; }

// ---------- cabecera en vídeo propio (opción «🎬 Cabecera: Mi vídeo») ----------
async function videoCabecera() {
  const rec = await idbMedia.get('video:cabecera'); if (!rec || !rec.blob) return false;
  const url = URL.createObjectURL(rec.blob); const box = $('#video'), v = box.querySelector('video');
  return new Promise(res => {
    let hecho = false; const fin = () => { if (hecho) return; hecho = true; v.pause(); v.removeAttribute('src'); v.load(); box.classList.add('hidden'); $('#btnSkip').classList.add('hidden'); URL.revokeObjectURL(url); limpiarSkip = null; res(true); };
    v.onended = fin; v.onerror = fin; limpiarSkip = fin; v.src = url; v.volume = cfg.music ? cfg.musicVol : 0; box.classList.remove('hidden'); $('#btnSkip').classList.remove('hidden');
    v.play().catch(() => { v.muted = true; v.play().catch(fin); });
  });
}
let limpiarSkip = null;

// ---------- API para los flujos de juego ----------
const camPresentador = () => { const v = new THREE.Vector3(); P.presentador.getWorldPosition(v); return [[v.x * 0.55 + 1.2, v.y + 1.9, v.z * 0.55 + 3.6], [v.x, v.y + 1.4, v.z]]; };
const api = {
  P: () => P, tema: () => temaId,
  cam: n => { if (camFija) return; if (n === 'presentador') { const c = camPresentador(); show(c[0], c[1]); } else camara(n); },
  setEtapa(e) { etapaActual = e; cargarLogo(); },
  async cabecera(o = {}) { if (cfg.cabecera === 'video' && !o.outro && await videoCabecera()) return; return Zi(reproducirCabecera(o)); },
  paseo(eq) {
    P.setFiguraEquipo(eq); P.ocultarAtril(eq, 0, true);
    P.walker.position.set(eq === 'rojo' ? -3 : 3, 0, 14.2); P.walker.rotation.y = Math.PI;
    const dest = P.posAtril(eq, 0); P.marca.position.set(dest.x, 1.06, dest.z); P.marca.visible = true;
    cam.pos.set(P.walker.position.x, 3.5, 19); modoPaseo(true);
    di('¡Concursante, sube a la tarima por la escalera central y ve hasta tu atril, el número 1!', 6000);
    me.voice('walk', '¡Concursante, ve hasta tu atril!', PRESENTADOR.voz);
    pistaTxt('🕹️ Camina hasta el aro verde de tu atril · PC: WASD + ratón');
    acciones([{ label: 'Ir a mi atril ▶', fn: () => { P.walker.position.set(dest.x, 1, dest.z); } }]);
    return Zi(new Promise(res => { alLlegar = () => { if (P.walker.position.distanceTo(new THREE.Vector3(dest.x, P.walker.position.y, dest.z)) < 0.9) { alLlegar = null; res(); } }; if (params.has('autopaseo')) setTimeout(() => { P.walker.position.set(dest.x, 1, dest.z); }, 300); }))
      .finally(() => { pistaTxt(''); acciones([]); P.marca.visible = false; P.walker.visible = false; primeraPersona = false; P.ocultarAtril(eq, 0, false); $('#joy').classList.add('hidden'); camara('general'); });
  },
  orbita() { cam.mode = 'menu'; },
  saltable(p) { $('#btnSkip').classList.remove('hidden'); return Zi(Promise.race([p, new Promise(r => { limpiarSkip = () => r('skip'); })])).finally(() => { limpiarSkip = null; $('#btnSkip').classList.add('hidden'); me.stopVoice(); }); },
  marcador(html) { const m = $('#marcador'); if (!html) { m.classList.add('hidden'); return; } m.innerHTML = html; m.classList.remove('hidden'); },
  monologo: (id, enPrograma = false) => monologo(id, enPrograma),
  iniciar: m => iniciar(m), menu: (p = 'main') => irMenu(p),
};

// ---------- MENÚ (plantilla /workspace/plantilla_menu: misma interfaz que el APK; el plató es el de ¡Boom!) ----------
let pantalla = 'title';
const VOLVER = { title: null, main: 'title', play: 'main', train: 'play', options: 'main', help: 'main', credits: 'main', concursantes: 'options', canciones: 'options', monologos: 'play' };
M.setSonidoTecla(() => me.play('tecla'));
function logoDataURL(w = 900, h = 560) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d');
  if (ctx.logoPantalla && ctx.logoPantalla.complete && ctx.logoPantalla.naturalWidth) { const i = ctx.logoPantalla; const s = Math.min((w - 40) / i.naturalWidth, (h - 20) / i.naturalHeight); g.drawImage(i, (w - i.naturalWidth * s) / 2, (h - i.naturalHeight * s) / 2, i.naturalWidth * s, i.naturalHeight * s); }
  else drawBoomLogo(g, w * 0.52, h * 0.52, w * 0.84, 0.3);
  return c.toDataURL('image/png');
}
const guardar = () => { guardarCfg(); me.aplicarNiveles(); };
const siNo = (k, f) => M.siNo(cfg, k, v => { guardar(); f && f(v); });
const opciones = (k, l, f) => M.opciones(cfg, k, l, v => { guardar(); f && f(v); });
const slider = k => M.slider(cfg, k, guardar, () => me.play(k === 'publicoVol' ? 'aplausos' : 'tecla'));
let lineaMsg = '', probando = null;

function irMenu(p = 'main') {
  nuevoToken(); me.stopAll(); pararCabecera(); cerrarOverlay(); panel.hide(); hud.show(false); pistaTxt(''); $('#bubble').classList.add('hidden');
  hist?.cerrar(); hist = null; ctx.pantallaInfo = null; alLlegar = null; P.walker.visible = false; P.marca.visible = false; $('#joy').classList.add('hidden'); primeraPersona = false; camFija = null;
  limpiarRotulos(); acciones([]); ocultarCreditos(); hashtag(''); api.marcador(null); $('#video').classList.add('hidden'); $('#topbar').classList.add('hidden'); $('#glights').classList.add('hidden');
  P.revivirTodos(); ['rojo', 'azul'].forEach(eq => [0, 1, 2, 3].forEach(i => P.ocultarAtril(eq, i, false))); P.setMinis(Array(15).fill('off')); P.setMecha(1); P.activarBomba(-1);
  cam.mode = 'menu'; if (!musicaMenu) { me.music('menu'); musicaMenu = true; }
  Lt(p);
}
let musicaMenu = false;
function Lt(p) {
  pantalla = p; const m = $('#menu');
  const T = THEMES[temaId] || THEMES.clasico;
  if (p === 'title') return M.pantallaTitulo(m, { logo: logoDataURL(900, 640), sub: 'El juego', onStart: () => { me.play('banner'); irMenu('main'); } });
  const col = M.pantallaMenu(m, { logo: logoDataURL(), tag: temaId === 'clasico' ? 'EL JUEGO · 3D' : T.emoji + ' ' + (T.banner || 'Especial ' + T.name), version: VERSION, cls: ['options', 'concursantes', 'canciones'].includes(p) ? 'opts' : ['help', 'credits'].includes(p) ? 'text' : '' });
  const mbtn = M.mbtn, volver = d => M.volver(() => Lt(d));
  if (p === 'main') {
    col.append(mbtn('Jugar', 'Programa completo, entrenamiento, clásico…', 'gold', () => Lt('play')), mbtn('Opciones', 'Sonido, calidad gráfica, pantalla completa', '', () => Lt('options')),
      mbtn('La historia de ¡Boom!', `${esc(cfg.presentador)} te cuenta la historia del programa`, '', () => iniciar('historia')), mbtn('Cómo se juega', 'Las reglas del concurso', '', () => Lt('help')), mbtn('Créditos', '', '', () => Lt('credits')));
    if (!matchMedia('(display-mode: standalone), (display-mode: fullscreen)').matches) col.append(mbtn('Instalar app', 'Juega sin conexión desde tu pantalla de inicio', 'inst', instalar));
  } else if (p === 'play') {
    col.append(mbtn('Programa completo', 'Cabecera, bombas, clasificatoria, bomba bote y despedida', 'gold', () => iniciar('programa')), mbtn('Entrenamiento', 'Practica cada bomba por separado', '', () => Lt('train')),
      mbtn('Clásico', 'La partida rápida de siempre: cables, clasificatoria y bote', '', () => iniciar('mini')), mbtn('Explorar el plató', 'Pasea libremente por el plató 3D', '', () => iniciar('explorar')),
      mbtn('Monólogos del presentador', 'Sus números de humor: con el público, al teléfono y las normas', '', () => Lt('monologos')), M.h2('Programa especial'),
      M.rejillaTemas(THEMES, temaId, k => { aplicarTema(k); Lt('play'); }), volver('main'));
  } else if (p === 'train') {
    col.append(M.h2('Entrenamiento (sin presión)'));
    const sub = { caliente: 'La minibomba pasa de mano en mano · 3 s', cables: '4 bombas: corta las respuestas erróneas', estrategica: '10 respuestas, 7 correctas, 60 s', clasificatoria: '2 minutos por equipo, 2 opciones', bote: '15 minibombas en 2 minutos' };
    Object.entries(PRUEBAS_ENTRENO).forEach(([k, t], i) => col.append(mbtn(t, sub[k], i === 0 ? 'gold' : '', () => iniciar('entreno:' + k))));
    const r = document.createElement('div'); r.className = 'mrow'; const b = document.createElement('button');
    const pinta = () => { b.className = 'tbtn' + (sinTiempo ? ' sel' : ''); b.innerHTML = sinTiempo ? '<span>♾️</span>Tiempo ilimitado' : '<span>⏱️</span>Con reloj'; }; pinta();
    b.onclick = e => { e.stopPropagation(); sinTiempo = !sinTiempo; pinta(); me.play('tecla'); };
    r.append(b, volver('play')); col.append(r);
  } else if (p === 'options') {
    col.append(M.h2('Opciones'));
    col.append(M.fila('🎵 Música', siNo('music'), slider('musicVol')));
    col.append(M.fila('🎬 Cabecera', ...opciones('cabecera', [['video', 'Mi vídeo'], ['3d', 'Plató 3D']])));
    const cab = M.bloque('🎶 Música de la cabecera'); cab.id = 'optCab'; col.append(cab); pintarMusicaCab(cab);
    col.append(M.fila('🔊 Efectos', siNo('sfx'), slider('sfxVol')));
    const pub = M.bloque('', M.fila('👏 Público', siNo('publico'), slider('publicoVol')), M.fila('👥 Público en las gradas', siNo('gradas', aplicarGradas)), M.nota('Aplausos, vítores y risas del público. Son sonidos sintetizados por el propio juego (no son grabaciones). Si tu móvil va justo, quitar el público de las gradas ayuda.')); pub.querySelector('.olabel').remove(); col.append(pub);
    col.append(M.fila('🎤 Voz del presentador', siNo('voz')), M.fila('📖 El presentador lee las preguntas', siNo('lee')), M.fila('⏩ Velocidad de lectura', ...opciones('leeVel', [['normal', 'Normal'], ['rapida', 'Rápida']])),
      M.fila('😄 Chistes del presentador', siNo('chistes')), M.fila('🎭 Monólogo del presentador', siNo('monologo')));
    col.append(M.bloque('👥 Concursantes', M.linea(`${cfg.nombre ? 'Tú: ' + esc(cfg.nombre) + (cfg.profesion ? ' · ' + esc(cfg.profesion) : '') : 'Tú: sin nombre'} · Tu equipo: ${esc(cfg.equipoNombre)} · Presenta: ${esc(cfg.presentador)}`), M.botones([{ t: '✏️ Nombres y profesiones', sel: true, full: true, fn: () => Lt('concursantes') }])));
    col.append(M.fila('🏟️ Plató', ...opciones('color', [['azul', 'Azul'], ['naranja', 'Naranja'], ['dorado', 'Dorado']], v => { colorClasico = v; aplicarTema(temaId); Lt('options'); })));
    col.append(M.bloque('💡 Luces del plató', M.botones([['auto', 'Auto'], ['blanco', 'Blanco'], ['rojo', 'Rojo'], ['rojoazul', 'Rojo+azul']].map(([v, t]) => ({ t, sel: cfg.platoLuz === v, fn: () => { cfg.platoLuz = v; guardar(); aplicarTema(temaId); Lt('options'); } })))));
    col.append(M.nota(`Plató de ¡Boom!: tarima circular con los atriles de los dos equipos, la gran bomba del bote al fondo y gradas a los lados. ${cfg.platoLuz === 'auto' ? 'Las luces automáticas siguen los colores de cada especial.' : 'Las luces fijas se mantienen en todos los especiales.'}`, 'mtext'));
    getCanciones().then(l => { const b = M.bloque('🎵 Mis canciones', M.linea(l.length ? `${l.length} ${l.length === 1 ? 'canción' : 'canciones'}: ${esc(l.map(x => x.name).join(', '))}` : 'Sin canciones: suena la música del juego'), M.botones([{ t: '🎵 Gestionar mis canciones', sel: true, full: true, fn: () => Lt('canciones') }]), M.nota('Sube canciones desde tu dispositivo (se quedan solo en él). Suenan durante las bombas en lugar de la música del juego.')); col.insertBefore(b, calidad); });
    const calidad = M.fila('✨ Calidad gráfica', ...opciones('quality', [['baja', 'Baja'], ['media', 'Media'], ['alta', 'Alta']], aplicarCalidad)); col.append(calidad);
    const standalone = matchMedia('(display-mode: standalone), (display-mode: fullscreen)').matches;
    const fs = M.botones([{ t: standalone ? 'Siempre (app)' : document.fullscreenElement ? 'Salir' : 'Activar', sel: !!document.fullscreenElement, disabled: standalone, fn: async () => { try { if (document.fullscreenElement) await document.exitFullscreen(); else { await document.documentElement.requestFullscreen({ navigationUI: 'hide' }); try { await screen.orientation.lock('landscape'); } catch (x) { /* */ } } } catch (x) { toast('Tu navegador no permite pantalla completa aquí'); } setTimeout(() => Lt('options'), 300); } }]);
    col.append(M.fila('⛶ Pantalla completa', fs), M.nota(`Rendimiento actual: ${Math.round(fps)} fps. Si el juego va lento en tu móvil, elige calidad «Baja».`, 'mtext'), volver('main'));
  } else if (p === 'canciones') {
    col.append(M.h2('Mis canciones'));
    const lista = document.createElement('div'); lista.className = 'ocustom'; col.append(lista);
    getCanciones().then(l => { lista.innerHTML = ''; if (!l.length) lista.append(M.linea('Todavía no has subido ninguna canción.'));
      l.forEach((c, i) => lista.append(M.fila('🎵 ' + c.name, ...M.botones([{ t: '▶ Probar', fn: b => probar(URL.createObjectURL(c.blob), b) }, { t: '🗑 Quitar', fn: async () => { l.splice(i, 1); await idbMedia.put('canciones', l); await cargarCanciones(); Lt('canciones'); } }]).children)));
      lista.append(M.botones([{ t: '📂 Subir canción de mi dispositivo', sel: true, full: true, file: { accept: 'audio/*', onFile: async f => { l.push({ name: f.name.replace(/\.[^.]+$/, ''), blob: f }); await idbMedia.put('canciones', l); await cargarCanciones(); toast('✅ ¡Canción guardada en este dispositivo!'); Lt('canciones'); } } }]));
    });
    col.append(M.nota('Las canciones se quedan solo en este dispositivo; no se suben ni se comparten.'), volver('options'));
  } else if (p === 'concursantes') {
    col.append(M.h2('Concursantes'));
    const t = (k, ph, max) => M.texto(cfg, k, ph, max, () => { guardarCfg(); if (k === 'presentador') bubble.nombre = cfg.presentador || 'Rober Mecha'; });
    col.append(M.fila('🙋 Tu nombre', t('nombre', 'Ej.: Iker', 18)), M.fila('💼 Profesión', t('profesion', 'Ej.: estudiante', 24)), M.fila('🛡️ Tu equipo', t('equipoNombre', 'Los Mechas', 22)), M.fila('🎙️ Presentador', t('presentador', 'Rober Mecha', 22)),
      M.fila('🪪 Presentar a los equipos', siNo('presentaciones')), M.nota(`${cfg.presentador || 'Rober Mecha'} te presentará al empezar el Programa completo. Tu nombre sale en el marcador y en los créditos.`), volver('options'));
  } else if (p === 'monologos') {
    col.append(M.h2('Monólogos del presentador'), mbtn('🎲 Al azar', 'Uno cualquiera (y luego «Siguiente»)', 'gold', () => iniciar('mono:azar')));
    const l = document.createElement('div'); l.className = 'monolist';
    MONOLOGOS.forEach(mo => { const b = document.createElement('button'); b.className = 'tbtn'; b.innerHTML = `<span>${TIPO_ICONO[mo.tipo]}</span><b>${esc(mo.titulo)}</b><small>${TIPO_TXT[mo.tipo]}</small>`; b.onclick = e => { e.stopPropagation(); me.play('tecla'); iniciar('mono:' + mo.id); }; l.appendChild(b); });
    col.append(l, M.nota(`${cfg.presentador} es un presentador virtual inventado con la voz del navegador. Pulsa «Saltar ⏭» para terminar el monólogo.`, 'mtext'), volver('play'));
  } else if (p === 'help') {
    col.append(volver('main'), M.h2('Cómo se juega')); const d = document.createElement('div'); d.className = 'mtext'; d.innerHTML = AYUDA; col.append(d);
  } else if (p === 'credits') {
    col.append(volver('main'), M.h2('Créditos')); const d = document.createElement('div'); d.className = 'mtext creditos';
    d.innerHTML = M.htmlCreditos(creditosBoom(null)) + `<p><b>Especial 300 suscriptores</b><br>Dedicado a los suscriptores del canal de YouTube «Ikeriano el campeón 2»</p><p class="small">Versión ${VERSION}</p><p class="small">Juego de fans sin ánimo de lucro. «¡Boom!» es un formato de televisión de sus respectivos dueños; este juego no está afiliado a ninguna cadena. El presentador es un personaje virtual inventado. Interfaz basada en el APK «¡Ahora Caigo! El juego 3D» de Iker.</p>`;
    col.append(d);
  }
}
function probar(url, b) { if (probando) { probando.pause(); probando = null; if (b) b.textContent = '▶ Probar'; musicaMenu = false; me.music('menu'); musicaMenu = true; return; } me.stopMusic(); probando = new Audio(url); probando.volume = cfg.musicVol; probando.play().catch(() => {}); if (b) b.textContent = '⏹ Parar'; const a = probando; setTimeout(() => { if (probando === a) probar(null, b); }, 12000); }
async function pintarMusicaCab(o) {
  const mu = await recursoEpoca('musica', ETAPAS[etapaActual]); const lo = await recursoEpoca('logo', ETAPAS[etapaActual]); const vid = await idbMedia.get('video:cabecera');
  const todas = async (fn) => { for (const E of Object.values(ETAPAS)) await fn(E.id); };
  o.append(M.linea(mu ? `🎵 <b>${esc(mu.nombre)}</b>` : 'Sin audio propio: suena la música del juego'),
    M.botones([{ t: '📂 Elegir audio de mi dispositivo', sel: true, full: true, file: { accept: 'audio/*', onFile: async f => { o.querySelector('.oname').textContent = '⏳ Cargando «' + f.name + '»…'; await todas(id => guardarSubido('musica', id, f)); lineaMsg = '✅ ¡Audio guardado en este dispositivo!'; Lt('options'); } } },
      { t: '▶ Probar', disabled: !mu, fn: b => probar(mu.url, b) }, { t: '🗑 Quitar', disabled: !mu || mu.origen !== 'subido', fn: async () => { await todas(id => quitarSubido('musica', id)); lineaMsg = 'Audio quitado: vuelve la música del juego'; Lt('options'); } }]));
  if (lineaMsg) { o.append(M.linea(lineaMsg, 'omsg')); lineaMsg = ''; }
  o.append(M.nota('El audio se queda solo en este dispositivo; no se sube ni se comparte.'), M.nota('Suena en la cabecera del Programa completo, con los mismos movimientos de cámara.'));
  o.append(M.linea(`🎞️ Mi vídeo de cabecera: ${vid ? '<b>' + esc(vid.name) + '</b>' : 'ninguno'}`), M.botones([{ t: '📂 Elegir vídeo', file: { accept: 'video/*', onFile: async f => { await idbMedia.put('video:cabecera', { blob: f, name: f.name, type: f.type }); cfg.cabecera = 'video'; guardarCfg(); lineaMsg = '✅ ¡Vídeo guardado!'; Lt('options'); } } }, { t: '🗑 Quitar vídeo', disabled: !vid, fn: async () => { await idbMedia.del('video:cabecera'); cfg.cabecera = '3d'; guardarCfg(); Lt('options'); } }, { t: '▶ Ver cabecera', fn: async () => { $('#menu').classList.add('hidden'); nuevoToken(); musicaMenu = false; try { await api.cabecera(); } catch (x) { /* */ } irMenu('options'); } }]));
  o.append(M.linea(`🖼️ Logo propio: ${lo && lo.origen === 'subido' ? '<b>' + esc(lo.nombre) + '</b>' : 'el de ¡Boom!'}`), M.botones([{ t: '📂 Elegir imagen', file: { accept: 'image/*', onFile: async f => { await todas(id => guardarSubido('logo', id, f)); await cargarLogo(); Lt('options'); } } }, { t: '🗑 Quitar logo', disabled: !lo || lo.origen !== 'subido', fn: async () => { await todas(id => quitarSubido('logo', id)); await cargarLogo(); Lt('options'); } }]));
}
const getCanciones = async () => (await idbMedia.get('canciones')) || [];
async function cargarCanciones() { const l = await getCanciones(); me.setCanciones(l.map(c => URL.createObjectURL(c.blob))); }
let sinTiempo = false;
const AYUDA = `<p><b>Objetivo:</b> dos equipos de cuatro, el <b>rojo</b> y el <b>azul</b>, desactivan bombas respondiendo preguntas. El que llegue a la final juega la <b>Bomba bote</b>.</p>
<p><b>1. Bomba caliente.</b> Una minibomba pasa de mano en mano: 3 segundos para completar una frase con dos huecos. +1 si aciertas, −1 si fallas. El ganador elige ventaja: Cable blanco, Siguen todos, Elige tema o Uno menos.</p>
<p><b>2. Bombas con cables.</b> Cada cable es una respuesta: corta los de las <b>erróneas</b>. 4 cables y 45 s en las dos primeras; 5 cables y 60 s en las dos últimas (desde 2022 la última es de cristal). Si cortas la correcta o se acaba el tiempo… <b>¡BOOM!</b>: se pierde el dinero y cae un jugador.</p>
<p><b>3. Bomba estratégica.</b> 10 respuestas, 7 correctas, 60 s. Si falláis, el rival tiene un rebote de 30 s. Comodín de consulta de 10 s.</p>
<p><b>4. Bomba clasificatoria.</b> Bomba plateada con mecha: 2 minutos por equipo, preguntas de 2 opciones (±200 €, ±100 € en Cuatro). Si fallas, el turno pasa al rival.</p>
<p><b>5. Bomba bote.</b> 15 minibombas en 2 minutos. Di «¡Boom!» para pasar. En la segunda vuelta, el primer fallo hace explotar la bomba.</p>
<p><b>Controles 3D:</b> joystick a la izquierda para andar, arrastra para mirar (PC: WASD + ratón). 👁 cambia la cámara (primera/tercera persona al pasear). ☰ vuelve al menú. «Saltar ⏭» pasa la cabecera, la despedida y los monólogos.</p>`;
function instalar() {
  const m = M.modal($('#menu'), `<h2>Instalar ¡Boom!</h2>${deferredPrompt ? '<p><button class="mbtn gold" id="instNow">📲 Instalar ahora</button></p>' : ''}<p><b>Android (Chrome):</b> menú ⋮ → «Instalar aplicación» o «Añadir a pantalla de inicio».</p><p><b>iPhone/iPad (Safari):</b> botón Compartir → «Añadir a pantalla de inicio».</p><p><b>PC (Chrome/Edge):</b> icono de instalar ⊕ en la barra de direcciones.</p><p>Una vez instalada funciona <b>sin conexión</b>.</p>`);
  const n = m.querySelector('#instNow'); if (n) n.onclick = async e => { e.stopPropagation(); const d = deferredPrompt; deferredPrompt = null; d.prompt(); m.remove(); };
}
let deferredPrompt = null; addEventListener('beforeinstallprompt', e => { e.preventDefault(); deferredPrompt = e; });

// ---------- iniciar modos (como ii() del APK) ----------
async function iniciar(modo) {
  const t = nuevoToken(); pantalla = 'juego'; me.stopAll(); musicaMenu = false; cerrarOverlay(); $('#menu').classList.add('hidden'); $('#topbar').classList.remove('hidden'); acciones([]); api.marcador(null);
  try {
    if (modo === 'historia') { await historia(t); return irMenu('main'); }
    if (modo === 'explorar') return await explorar(t);
    if (modo.startsWith('mono:')) return await monologo(modo.slice(5));
    if (modo.startsWith('entreno:')) return await entrenamiento(modo.slice(8), api, { ilimitado: sinTiempo });
    await jugarPrograma(modo, api);
  } catch (e) { if (e !== ABORT) { console.error(e); toast('Error: ' + e.message, 5000); irMenu('play'); } }
}
async function explorar(t) {
  P.walker.position.set(0, 0, 10.5); P.setFiguraEquipo('rojo'); modoPaseo(true); me.music('trilha'); hashtag('#Boom');
  pistaTxt('🕹️ Joystick / WASD para andar · arrastra para mirar · 👁 cambia de cámara'); setTimeout(() => pistaTxt(''), 6000);
  di('¡Bienvenido al plató de ¡Boom! Date una vuelta, pero no toques los cables.', 4500);
  let saludado = false; const v = new THREE.Vector3();
  for (;;) { await Dt(300, t); P.presentador.getWorldPosition(v); const d = Math.hypot(v.x - P.walker.position.x, v.z - P.walker.position.z); if (d < 2 && !saludado) { saludado = true; di('¡Hombre! ¿Vienes a por el bote? Pues ponte en tu atril, ¡que empezamos enseguida!', 3500); } if (d > 3.5) saludado = false; }
}
async function monologo(id, enPrograma = false) {
  const mo = !id || id === 'azar' ? MONOLOGOS[Math.floor(Math.random() * MONOLOGOS.length)] : MONOLOGOS.find(x => x.id === id) || MONOLOGOS[0];
  if (!enPrograma) { me.play('aplausos'); hashtag('#Boom'); }
  if (mo.cam === 'presentador') api.cam('presentador'); else camara(mo.cam);
  const fin = (async () => { for (const l of mo.lineas) { await habla(null, l, 3500); await Dt(500); } me.play('badumtss'); me.play('aplausos'); })();
  await api.saltable(fin);
  $('#bubble').classList.add('hidden');
  if (enPrograma) return;
  const i = MONOLOGOS.indexOf(mo); const sig = id === 'azar' ? 'azar' : MONOLOGOS[(i + 1) % MONOLOGOS.length].id;
  api.marcador(`🎭 «${esc(mo.titulo)}»`); api.orbita();
  acciones([{ label: 'Siguiente ▶', cls: 'gold', fn: () => iniciar('mono:' + sig) }, { label: 'Repetir', fn: () => iniciar('mono:' + mo.id) }, { label: 'Lista', fn: () => irMenu('monologos') }]);
  await Zi(new Promise(() => {}));
}

// ---------- barra superior (☰ 👁 💡 Saltar) ----------
let primeraPersona = false, camFija = null; const FIJAS = [null, 'general', 'bombas', 'bote', 'atriles', 'publico'];
$('#btnMenu').onclick = e => { e.stopPropagation(); me.play('tecla'); irMenu(pantalla === 'juego' ? 'play' : 'main'); };
$('#btnCam').onclick = e => { e.stopPropagation(); me.play('tecla'); if (cam.mode === 'walk') { primeraPersona = !primeraPersona; toast(primeraPersona ? '👁 Primera persona' : '👁 Tercera persona', 1200); return; } camFija = FIJAS[(FIJAS.indexOf(camFija) + 1) % FIJAS.length]; if (camFija) camara(camFija); toast('👁 Cámara: ' + (camFija || 'automática'), 1200); };
$('#btnSkip').onclick = e => { e.stopPropagation(); if (cab) pararCabecera(); else if (limpiarSkip) limpiarSkip(); };
$('#btnLuces').onclick = e => { e.stopPropagation(); $('#glights').classList.toggle('hidden'); };
function atras() { if ($('#menu .modal')) { $('#menu .modal').remove(); return true; } if ($('#menu').classList.contains('hidden')) { $('#btnMenu').click(); return true; } const d = VOLVER[pantalla]; if (d) { me.play('tecla'); Lt(d); return true; } return false; }
window.__back = atras; addEventListener('keydown', e => { if (e.key === 'Escape') atras(); });

// ---------- consola de luces ----------
const luces = { vel: 1 }; P.luces = luces;
$('#glights').innerHTML = `<div class="gl-head"><b>💡 Luces del plató</b><button data-close>✕</button></div>
  <label>Velocidad focos <input type="range" min="0" max="3" step="0.1" value="1" id="glVel"></label>
  <label>Exposición <input type="range" min="0.4" max="1.6" step="0.05" value="0.9" id="glInt"></label>
  <div class="chips">${Object.entries(TEMAS).map(([k, v]) => `<button data-gl="${k}">${esc(v.nombre)}</button>`).join('')}<button data-gl="flash">⚡ Fogonazo</button><button data-gl="boom">💥 ¡Boom!</button></div>`;
$('#glights').addEventListener('click', e => { e.stopPropagation(); if (e.target.closest('[data-close]')) $('#glights').classList.add('hidden'); const b = e.target.closest('[data-gl]'); if (!b) return; const k = b.dataset.gl; if (TEMAS[k]) P.setTema(TEMAS[k]); else if (k === 'flash') { $('#fx-flash').style.opacity = 0.8; setTimeout(() => $('#fx-flash').style.opacity = 0, 120); } else { P.explotar('bote'); me.play('explosion'); } });
$('#glVel').oninput = e => { luces.vel = +e.target.value; }; $('#glInt').oninput = e => { renderer.toneMappingExposure = +e.target.value; };

// ---------- calidad / gradas ----------
function aplicarCalidad() { const q = cfg.quality; renderer.setPixelRatio(q === 'baja' ? 0.75 : q === 'media' ? Math.min(devicePixelRatio, touch ? 1 : 1.25) : Math.min(devicePixelRatio, 1.75)); renderer.shadowMap.enabled = q !== 'baja'; bloomOn = q === 'alta' || params.has('bloom'); renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight); }
function aplicarGradas() { P.root.traverse(o => { if (o.userData && o.userData.publico) o.visible = cfg.gradas; }); }

// ---------- modo historia (interfaz de la plantilla: tarjeta azul, subtítulo «EL PRESENTADOR», ◄ ⏭ ►) ----------
let hist = null;
const EMOJI_CAP = ['🌍', '📺', '🕖', '📜', '💣', '🏆', '🐺', '💰', '🎉', '⏳', '⭐', '🔁', '🎬', '📊', '🎙️'];
async function historia(t) {
  me.music('trilha'); hashtag('#BoomHistoria');
  const N = CAPITULOS.length; hist = M.interfazHistoria({ total: N, presentador: cfg.presentador || 'El presentador' });
  let idx = 0, mover = null;
  hist.on({ prev: () => mover && mover(Math.max(0, idx - 1)), next: () => mover && mover(idx + 1), skip: () => mover && mover('skip'), ir: i => mover && mover(i) });
  const leer = async (texto, clave) => {
    hist.subtitulo(texto); let destino = null;
    const pulsado = new Promise(r => { mover = d => { destino = d; r(); }; });
    await Zi(Promise.race([me.voice(clave, texto, PRESENTADOR.voz).then(() => Dt(1800, t)), pulsado])); me.stopVoice(); check(t);
    return destino;
  };
  api.cam('presentador');
  hist.mostrar(-1, { emoji: '📖', t: 'La historia de ¡Boom!', rows: [['Capítulos', String(N)], ['Presenta', cfg.presentador || 'Rober Mecha']] });
  let d = await leer(`¡Hola! Soy ${cfg.presentador || 'Rober Mecha'}. Bienvenidos a la historia de ¡Boom! Empecemos por el principio.`, 'hist_intro');
  idx = typeof d === 'number' ? d : 0;
  while (idx < N) {
    const c = CAPITULOS[idx]; show(c.cam[0], c.cam[1]); ctx.pantallaInfo = c.scr;
    hist.mostrar(idx, { emoji: EMOJI_CAP[idx % EMOJI_CAP.length], t: c.t, rows: (c.scr?.rows || []).map(([k, v]) => [k, v]) });
    d = await leer(c.sub, 'hist_' + (idx + 1));
    idx = d === 'skip' || d == null ? idx + 1 : d;
  }
  ctx.pantallaInfo = null; api.cam('presentador'); me.play('aplausos');
  hist.mostrar(N - 1, { emoji: '★', t: '¡Fin!', rows: [] });
  await leer('Y esta ha sido la historia de ¡Boom! ¡Gracias por acompañarme!', 'hist_fin');
  hist.cerrar(); hist = null;
}

// ---------- bucle ----------
addEventListener('resize', () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight); if (cab) cab.inst.resize(innerWidth, innerHeight); });
const clock = new THREE.Clock(); let el = 0, fps = 60; const tmp = new THREE.Vector3();
function frame() {
  const dt = Math.min(clock.getDelta(), 0.05); el += dt; fps = fps * 0.95 + (1 / Math.max(dt, 0.001)) * 0.05;
  if (cab) { if (cab.fixedT != null) return; const t = performance.now() / 1000 - cab.start; if (t >= CAB.DURACION) pararCabecera(); else { renderCab(t); return; } }
  const W = P.walker;
  if (cam.mode === 'walk') {
    let x = joy.x, y = joy.y; if (keys.KeyW || keys.ArrowUp) y -= 1; if (keys.KeyS || keys.ArrowDown) y += 1; if (keys.KeyA || keys.ArrowLeft) x -= 1; if (keys.KeyD || keys.ArrowRight) x += 1;
    const m = Math.hypot(x, y);
    if (m > 0.1) {
      const sp = (keys.ShiftLeft ? 6 : 3.6) * Math.min(1, m) * dt; x /= Math.max(1, m); y /= Math.max(1, m);
      const fx = -Math.sin(cam.yaw), fz = -Math.cos(cam.yaw), rx = Math.cos(cam.yaw), rz = -Math.sin(cam.yaw);
      const dx = (fx * -y + rx * x) * sp, dz = (fz * -y + rz * x) * sp; const nx = W.position.x + dx, nz = W.position.z + dz;
      if (!P.bloqueado(nx, nz)) { W.position.x = nx; W.position.z = nz; } else if (!P.bloqueado(nx, W.position.z)) W.position.x = nx; else if (!P.bloqueado(W.position.x, nz)) W.position.z = nz;
      W.rotation.y = Math.atan2(dx, dz); W.children.forEach((c, i) => { if (i >= 5) c.rotation.x = Math.sin(el * 10) * 0.5 * (i % 2 ? 1 : -1); });
    }
    W.position.y += (P.alturaEn(W.position.x, W.position.z) - W.position.y) * Math.min(1, dt * 12);
    if (primeraPersona) { W.visible = false; cam.tPos.set(W.position.x, W.position.y + 1.65, W.position.z); cam.tLook.set(W.position.x - Math.sin(cam.yaw) * 5, W.position.y + 1.65 - cam.pitch * 3, W.position.z - Math.cos(cam.yaw) * 5); }
    else { W.visible = true; const l = 4.4 * Math.cos(cam.pitch * 0.6); cam.tPos.set(W.position.x + Math.sin(cam.yaw) * l, W.position.y + 1.8 + cam.pitch * 2.6, W.position.z + Math.cos(cam.yaw) * l); cam.tLook.set(W.position.x, W.position.y + 1.4, W.position.z); }
    alLlegar && alLlegar();
  } else if (cam.mode === 'menu') { const a = el * 0.07; cam.tPos.set(Math.sin(a) * 22, 7.5 + Math.sin(el * 0.2) * 1.5, Math.cos(a) * 22 + 2); cam.tLook.set(0, 2.5, -2); }
  const k = cam.mode === 'walk' ? 10 : 2.2; cam.pos.lerp(cam.tPos, Math.min(1, dt * k)); cam.look.lerp(cam.tLook, Math.min(1, dt * k));
  camera.position.copy(cam.pos); camera.lookAt(cam.look);
  P.update(el * luces.vel, dt);
  const b = $('#bubble');
  if (!b.classList.contains('hidden')) {
    if (performance.now() > bubble.hasta) b.classList.add('hidden');
    else { P.presentador.getWorldPosition(tmp); tmp.y += 2.0; tmp.project(camera); const vis = tmp.z < 1 && Math.abs(tmp.x) < 1.1 && Math.abs(tmp.y) < 1.1; b.style.left = Math.max(160, Math.min(innerWidth - 160, (tmp.x * 0.5 + 0.5) * innerWidth)) + 'px'; b.style.top = Math.max(80, vis ? (-tmp.y * 0.5 + 0.5) * innerHeight : 90) + 'px'; }
  }
  if (bloomOn) composer.render(); else renderer.render(scene, camera);
}
renderer.setAnimationLoop(frame);

// ---------- arranque ----------
aplicarTema(temaId, false); aplicarCalidad(); aplicarGradas(); cargarCanciones();
cargarLogo().then(() => { if ((pantalla === 'title' || pantalla === 'main') && !$('#menu').classList.contains('hidden')) Lt(pantalla); });
irMenu(params.has('main') ? 'main' : 'title');
document.addEventListener('visibilitychange', () => { if (document.hidden) me.stopMusic(); else if (!$('#menu').classList.contains('hidden')) { me.music('menu'); } });
addEventListener('pointerdown', function una() { if (!$('#menu').classList.contains('hidden')) me.music('menu'); removeEventListener('pointerdown', una); });
setTimeout(() => $('#loading').classList.add('hidden'), 600);
if (params.get('cam')) { $('#menu').classList.add('hidden'); show(...CAMS[params.get('cam')], true); }
if ('serviceWorker' in navigator && location.protocol === 'https:') navigator.serviceWorker.register('sw.js').catch(() => {});

// ---------- frases para pregenerar las voces Piper (tools/frases.mjs → gen_voces.py) ----------
window.__frases = () => {
  const out = []; const add = (t, q = false) => { t = String(t || '').replace(/<[^>]+>/g, '').trim(); if (t) out.push({ v: 'davefx', t, q }); };
  const P = cfg.presentador || 'Rober Mecha';
  add(`¡Hola! Soy ${P}. Bienvenidos a la historia de ¡Boom! Empecemos por el principio.`); add('Y esta ha sido la historia de ¡Boom! ¡Gracias por acompañarme!'); CAPITULOS.forEach(c => add(c.sub));
  MONOLOGOS.forEach(m => m.lineas.forEach(l => add(l))); CHISTES.forEach(c => add(c)); add('¡Concursante, ve hasta tu atril!');
  Object.values(THEMES).forEach(T => { add(T.saludo); (T.extra || []).forEach(x => add(x)); });
  const B = BASE_PREG; [...B.cables4, ...B.cables5, ...B.clasificatoria].forEach(q => add(q.p, true)); [...B.estrategica, ...B.desempate].forEach(q => add(q.t, true)); B.bote.forEach(q => add(q.p, true));
  if (window.__vozLog) for (const f of window.__vozLog.values()) add(f.t, f.q);
  const vistos = new Set(); return out.filter(f => { const k = f.t + '|' + f.q; if (vistos.has(k)) return false; vistos.add(k); return true; });
};
window.__boom = { P, api, iniciar, irMenu, Lt, camara, show, CAMS, aplicarTema, FASES, ETAPAS, ctx, reproducirCabecera, cfg };
window.__plato = { ok: true, scene, renderer };
