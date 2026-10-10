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
import { audioCtx, recursoEpoca, guardarSubido, quitarSubido } from './lib/media.js';
import { $, esc, nuevoToken, check, Dt, Zi, ABORT, bubble, di, habla, hud, panel, cerrarOverlay, elegir } from './juego/core.js';
import { jugarPrograma, entrenamiento, ETAPAS, reglas, leerBote } from './juego/programa.js';
import { CAPITULOS, PRESENTADOR } from './juego/historia.js';
import * as FASES from './juego/fases.js';

const params = new URLSearchParams(location.search);
if (params.get('vel')) window.__VEL = +params.get('vel');
if (params.has('auto')) { window.__AUTO = true; window.__AUTO_ELIGE = +(params.get('elige') || 0); }
bubble.nombre = PRESENTADOR.nombre; bubble.voz = PRESENTADOR.voz;
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
let bloomOn = params.has('bloom') || localStorage.getItem('boom3d_bloom') === '1';

// ---------- estado ----------
let temaId = params.get('tema') || localStorage.getItem('boom3d_theme') || 'clasico'; if (!THEMES[temaId]) temaId = 'clasico';
let colorClasico = params.get('color') || localStorage.getItem('boom3d_color') || 'azul'; if (!TEMAS[colorClasico]) colorClasico = 'azul';
let etapaActual = 'a3';
const ctx = { paleta: paletaDe(temaId, colorClasico), deco: THEMES[temaId].deco, logoPantalla: null, pantallaInfo: null, pantallaTexto: null };
const P = construirPlato(scene, ctx, renderer);
async function cargarLogo() { const r = await recursoEpoca('logo', ETAPAS[etapaActual]); if (!r) { ctx.logoPantalla = null; return null; } const img = new Image(); img.src = r.url; ctx.logoPantalla = img; return r.url; }
function aplicarTema(id, guardar = true) {
  temaId = id; ctx.paleta = paletaDe(id, colorClasico); P.setTema(ctx.paleta); P.setDeco(THEMES[id].deco);
  ctx.pantallaTexto = THEMES[id].banner && !ctx.logoPantalla ? null : null;
  if (guardar && id !== 'prime') localStorage.setItem('boom3d_theme', id); pintarTemas();
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
    document.body.classList.add('en-cabecera'); $('#cabTexto').textContent = outro ? '¡Hasta mañana!' : '';
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
  c0.inst.dispose(); document.body.classList.remove('en-cabecera'); $('#cabTexto').textContent = '';
  $('#fx-flash').style.opacity = 0; $('#fx-fade').style.opacity = 1; $('#fx-fade').classList.add('saliendo'); setTimeout(() => { $('#fx-fade').style.opacity = 0; }, 30);
  c0.res();
}
$('#skipVideo').onclick = () => pararCabecera();
window.__renderCabecera = async t => { if (!cab) { reproducirCabecera({ fixedT: t }); await new Promise(r => setTimeout(r, 400)); } cab.fixedT = t; renderCab(t); return true; };
function renderCab(t) { cab.inst.render(t); const o = cab.inst.overlay(t); $('#fx-flash').style.opacity = o.flash; $('#fx-fade').classList.remove('saliendo'); $('#fx-fade').style.opacity = o.fade; }

// ---------- API para los flujos de juego ----------
const api = {
  P: () => P, cam: camara, tema: () => temaId,
  setEtapa(e) { etapaActual = e; cargarLogo(); },
  cabecera: (o = {}) => Zi(reproducirCabecera(o)),
  paseo(eq) {
    // el concursante aparece al fondo del plató y camina hasta su atril (como la trampilla del APK)
    P.setFiguraEquipo(eq); P.ocultarAtril(eq, 0, true);
    P.walker.position.set(eq === 'rojo' ? -3 : 3, 0, 14.2); P.walker.rotation.y = Math.PI;
    const dest = P.posAtril(eq, 0); P.marca.position.set(dest.x, 1.06, dest.z); P.marca.visible = true;
    cam.pos.set(P.walker.position.x, 3.5, 19); modoPaseo(true);
    di('¡Bienvenido al plató! Sube a la tarima por la escalera central y ve hasta tu atril, el número 1.', 6000);
    me.voice('walk', '¡Bienvenido al plató! Ve hasta tu atril.', PRESENTADOR.voz);
    pistaTxt(touch ? 'Usa el joystick para caminar y arrastra para mirar. Ve al aro verde de tu atril.' : 'WASD / flechas para caminar, arrastra con el ratón para mirar. Ve al aro verde de tu atril.');
    return Zi(new Promise(res => { alLlegar = () => { if (P.walker.position.distanceTo(new THREE.Vector3(dest.x, P.walker.position.y, dest.z)) < 0.9) { alLlegar = null; res(); } }; if (params.has('autopaseo')) setTimeout(() => { P.walker.position.set(dest.x, 1, dest.z); }, 300); }))
      .finally(() => { pistaTxt(''); P.marca.visible = false; P.walker.visible = false; P.ocultarAtril(eq, 0, false); $('#joy').classList.add('hidden'); camara('general'); });
  },
  paseoLibre() { P.walker.position.set(0, 0, 13); P.walker.visible = true; modoPaseo(true); me.music('trilha'); pistaTxt('Paseo libre por el plató · pulsa ⌂ para volver al menú'); },
  menu: () => irMenu(),
};

// ---------- menú ----------
function logoMenu() {
  const c = document.createElement('canvas'); c.width = 900; c.height = 520; const g = c.getContext('2d');
  if (ctx.logoPantalla && ctx.logoPantalla.complete && ctx.logoPantalla.naturalWidth) { const i = ctx.logoPantalla; const s = Math.min(860 / i.naturalWidth, 500 / i.naturalHeight); g.drawImage(i, (900 - i.naturalWidth * s) / 2, (520 - i.naturalHeight * s) / 2, i.naturalWidth * s, i.naturalHeight * s); }
  else drawBoomLogo(g, 470, 270, 760, 0.3);
  $('#menu .logo').src = c.toDataURL('image/png');
}
function pintarTemas() {
  $('#themeList').innerHTML = Object.entries(THEMES).filter(([k, v]) => !v.oculto).map(([k, v]) => `<button data-t="${k}" class="${k === temaId ? 'on' : ''}">${esc(v.name)}</button>`).join('');
  $('#themeList').querySelectorAll('button').forEach(b => b.onclick = () => { me.play('tecla'); aplicarTema(b.dataset.t); });
}
const pantallas = ['#menu', '#trainMenu', '#opciones', '#creditos'];
function verPantalla(id) { pantallas.forEach(p => $(p).classList.toggle('hidden', p !== id)); }
function irMenu() {
  nuevoToken(); me.stopAll(); pararCabecera(); cerrarOverlay(); panel.hide(); hud.show(false); pistaTxt(''); $('#bubble').classList.add('hidden');
  $('#hist').classList.add('hidden'); ctx.pantallaInfo = null; alLlegar = null; P.walker.visible = false; P.marca.visible = false; $('#joy').classList.add('hidden');
  P.revivirTodos(); ['rojo', 'azul'].forEach(eq => [0, 1, 2, 3].forEach(i => P.ocultarAtril(eq, i, false))); P.setMinis(Array(15).fill('off')); P.setMecha(1); P.activarBomba(-1);
  if (temaId === 'prime') aplicarTema(localStorage.getItem('boom3d_theme') || 'clasico', false);
  verPantalla('#menu'); cam.mode = 'menu'; logoMenu(); me.music('menu'); $('#boteMenu').textContent = `Bote actual: ${leerBote('a3').toLocaleString('es-ES')} € (Antena 3) · ${leerBote('cuatro').toLocaleString('es-ES')} € (Cuatro)`;
}
async function iniciar(modo) {
  const t = nuevoToken(); me.stopAll(); verPantalla(null); cerrarOverlay();
  try {
    if (modo === 'historia') return await historia(t);
    if (modo === 'entreno') { verPantalla('#trainMenu'); me.music('menu'); return; }
    if (modo === 'prime') aplicarTema('prime', false);
    await jugarPrograma(modo, api);
  } catch (e) { if (e !== ABORT) { console.error(e); irMenu(); } }
}
document.querySelectorAll('#menu [data-mode]').forEach(b => b.onclick = () => { me.play('tecla'); iniciar(b.dataset.mode); });
document.querySelectorAll('#trainMenu [data-test]').forEach(b => b.onclick = async () => {
  me.play('tecla'); nuevoToken(); verPantalla(null);
  try { await entrenamiento(b.dataset.test, api, { ilimitado: $('#unlimited').checked }); } catch (e) { if (e !== ABORT) { console.error(e); irMenu(); } }
});
$('#trainBack').onclick = () => irMenu();
$('#btnReglas').onclick = async () => { nuevoToken(); verPantalla(null); try { await reglas(); } catch (e) { /* */ } irMenu(); };
$('#btnOpciones').onclick = () => { verPantalla('#opciones'); pintarOpciones(); };
$('#btnCreditos').onclick = () => verPantalla('#creditos');
document.querySelectorAll('.screen .back[data-back]').forEach(b => b.onclick = () => irMenu());
$('#btnHome').onclick = () => irMenu();
const pintaVoz = () => { $('#btnVoice').textContent = me.voiceOn ? '🗣' : '🤐'; }; pintaVoz();
$('#btnVoice').onclick = () => { me.setVoice(!me.voiceOn); pintaVoz(); };
const pintaMute = () => { $('#btnMute').textContent = me.muted ? '🔇' : '🔊'; }; pintaMute();
$('#btnMute').onclick = () => { me.setMuted(!me.muted); pintaMute(); };

// ---------- opciones (color del plató, música y logo, brillo) ----------
async function pintarOpciones() {
  const o = $('#opcCuerpo');
  const filas = await Promise.all(Object.values(ETAPAS).map(async E => ({ E, mu: await recursoEpoca('musica', E), lo: await recursoEpoca('logo', E) })));
  const d = r => !r ? '<i>sin archivo (se usa el de respaldo)</i>' : r.origen === 'subido' ? `subido: ${esc(r.nombre)}` : `carpeta: ${esc(r.nombre)}`;
  o.innerHTML = `<div class="opc-sec"><b>Color del plató (temática Clásico)</b><div class="chips">${Object.entries(TEMAS).map(([k, v]) => `<button data-col="${k}" class="${k === colorClasico ? 'on' : ''}">${esc(v.nombre)}</button>`).join('')}</div></div>
    ${filas.map(({ E, mu, lo }) => `<div class="opc-sec" data-e="${E.id}"><b>${esc(E.nombre)}</b><div>🎵 Música de cabecera: ${d(mu)}</div><div class="chips"><label class="bt">Subir música<input type="file" accept="audio/*" data-t="musica"></label>${mu && mu.origen === 'subido' ? '<button data-q="musica">Quitar</button>' : ''}</div>
      <div>🖼️ Logo: ${d(lo)}</div><div class="chips"><label class="bt">Subir logo<input type="file" accept="image/*" data-t="logo"></label>${lo && lo.origen === 'subido' ? '<button data-q="logo">Quitar</button>' : ''}<button data-ver="1">▶ Ver cabecera</button></div></div>`).join('')}
    <div class="opc-sec"><b>Imagen</b><div class="chips"><button id="opBloom" class="${bloomOn ? 'on' : ''}">✨ Brillo ${bloomOn ? 'sí' : 'no'}</button></div></div>`;
  o.querySelectorAll('[data-col]').forEach(b => b.onclick = () => { colorClasico = b.dataset.col; localStorage.setItem('boom3d_color', colorClasico); aplicarTema(temaId); pintarOpciones(); });
  o.querySelectorAll('.opc-sec[data-e]').forEach(sec => { const E = ETAPAS[sec.dataset.e];
    sec.querySelectorAll('input[type=file]').forEach(inp => inp.onchange = async () => { const f = inp.files[0]; if (!f) return; await guardarSubido(inp.dataset.t, E.id, f); if (E.id === etapaActual) await cargarLogo(); pintarOpciones(); });
    sec.querySelectorAll('[data-q]').forEach(b => b.onclick = async () => { await quitarSubido(b.dataset.q, E.id); await cargarLogo(); pintarOpciones(); });
    sec.querySelector('[data-ver]').onclick = async () => { etapaActual = E.id; verPantalla(null); nuevoToken(); try { await api.cabecera(); } catch (e) { /* */ } verPantalla('#opciones'); };
  });
  $('#opBloom').onclick = () => { bloomOn = !bloomOn; localStorage.setItem('boom3d_bloom', bloomOn ? '1' : '0'); pintarOpciones(); };
}

// ---------- consola de luces (simplificada, como el botón 💡 del APK) ----------
const luces = { auto: true, vel: 1, int: 1 };
P.luces = luces;
$('#btnLights').onclick = () => $('#glights').classList.toggle('hidden');
$('#glights').innerHTML = `<div class="gl-head"><b>💡 Luces del plató</b><button data-close>✕</button></div>
  <label>Velocidad focos <input type="range" min="0" max="3" step="0.1" value="1" id="glVel"></label>
  <label>Exposición <input type="range" min="0.4" max="1.6" step="0.05" value="0.9" id="glInt"></label>
  <div class="chips">${['azul', 'naranja', 'dorado'].map(k => `<button data-gl="${k}">${esc(TEMAS[k].nombre)}</button>`).join('')}<button data-gl="flash">⚡ Fogonazo</button><button data-gl="boom">💥 ¡Boom!</button></div>`;
$('#glights').addEventListener('click', e => { if (e.target.closest('[data-close]')) $('#glights').classList.add('hidden'); const b = e.target.closest('[data-gl]'); if (!b) return; const k = b.dataset.gl; if (TEMAS[k]) P.setTema(TEMAS[k]); else if (k === 'flash') { $('#fx-flash').style.opacity = 0.8; setTimeout(() => $('#fx-flash').style.opacity = 0, 120); } else { P.explotar('bote'); me.play('explosion'); } });
$('#glVel').oninput = e => { luces.vel = +e.target.value; }; $('#glInt').oninput = e => { renderer.toneMappingExposure = +e.target.value; };

// ---------- modo historia ----------
async function historia(t) {
  me.music('trilha'); $('#hist').classList.remove('hidden');
  let mover = null; const N = CAPITULOS.length; let idx = -1;
  $('#histPrev').onclick = () => mover && mover(Math.max(0, idx - 1)); $('#histNext').onclick = () => mover && mover(idx + 1); $('#histSkip').onclick = () => mover && mover(N);
  const cap = async (titulo, num, sub, clave) => {
    $('#histTitle').textContent = titulo; $('#histNum').textContent = num; $('#histSub').textContent = sub; di(esc(titulo), 60000);
    let destino = null; const pulsado = new Promise(r => { mover = d => { destino = d; r(); }; });
    await Zi(Promise.race([me.voice(clave, sub, PRESENTADOR.voz).then(() => Dt(1800, t)), pulsado])); me.stopVoice(); $('#bubble').classList.add('hidden'); check(t);
    return destino;
  };
  camara('general'); $('#histPrev').disabled = true;
  let d = await cap('¡Bienvenidos!', '📖', 'Hola, soy Rober Mecha, vuestro presentador virtual. Hoy os cuento la historia de ¡Boom!, capítulo a capítulo. ¡Que no explote nada!', 'hist_intro');
  for (idx = d == null ? 0 : Math.min(d, N); idx < N;) {
    const c = CAPITULOS[idx]; $('#histPrev').disabled = idx === 0; show(c.cam[0], c.cam[1]); ctx.pantallaInfo = c.scr;
    d = await cap(c.t, `${idx + 1}/${N}`, c.sub, 'hist_' + (idx + 1)); idx = d == null ? idx + 1 : d;
  }
  ctx.pantallaInfo = null; camara('general'); me.play('aplausos');
  await cap('¡Fin!', '★', 'Y esta ha sido la historia de ¡Boom! ¡Gracias por acompañarme!', 'hist_fin');
  irMenu();
}

// ---------- bucle ----------
addEventListener('resize', () => { camera.aspect = innerWidth / innerHeight; camera.updateProjectionMatrix(); renderer.setSize(innerWidth, innerHeight); composer.setSize(innerWidth, innerHeight); if (cab) cab.inst.resize(innerWidth, innerHeight); });
const clock = new THREE.Clock(); let el = 0; const tmp = new THREE.Vector3();
function frame() {
  const dt = Math.min(clock.getDelta(), 0.05); el += dt;
  if (cab) { if (cab.fixedT != null) return; const t = performance.now() / 1000 - cab.start; if (t >= CAB.DURACION) pararCabecera(); else { renderCab(t); return; } }
  if (cam.mode === 'walk') {
    let x = joy.x, y = joy.y; if (keys.KeyW || keys.ArrowUp) y -= 1; if (keys.KeyS || keys.ArrowDown) y += 1; if (keys.KeyA || keys.ArrowLeft) x -= 1; if (keys.KeyD || keys.ArrowRight) x += 1;
    const m = Math.hypot(x, y); const W = P.walker;
    if (m > 0.1) {
      const sp = (keys.ShiftLeft ? 6 : 3.6) * Math.min(1, m) * dt; x /= Math.max(1, m); y /= Math.max(1, m);
      const fx = -Math.sin(cam.yaw), fz = -Math.cos(cam.yaw), rx = Math.cos(cam.yaw), rz = -Math.sin(cam.yaw);
      const dx = (fx * -y + rx * x) * sp, dz = (fz * -y + rz * x) * sp; const nx = W.position.x + dx, nz = W.position.z + dz;
      if (!P.bloqueado(nx, nz)) { W.position.x = nx; W.position.z = nz; } else if (!P.bloqueado(nx, W.position.z)) W.position.x = nx; else if (!P.bloqueado(W.position.x, nz)) W.position.z = nz;
      W.rotation.y = Math.atan2(dx, dz); W.children.forEach((c, i) => { if (i >= 5) c.rotation.x = Math.sin(el * 10) * 0.5 * (i % 2 ? 1 : -1); });
    }
    W.position.y += (P.alturaEn(W.position.x, W.position.z) - W.position.y) * Math.min(1, dt * 12);
    const l = 4.4 * Math.cos(cam.pitch * 0.6);
    cam.tPos.set(W.position.x + Math.sin(cam.yaw) * l, W.position.y + 1.8 + cam.pitch * 2.6, W.position.z + Math.cos(cam.yaw) * l); cam.tLook.set(W.position.x, W.position.y + 1.4, W.position.z);
    alLlegar && alLlegar();
  } else if (cam.mode === 'menu') { const a = el * 0.07; cam.tPos.set(Math.sin(a) * 22, 7.5 + Math.sin(el * 0.2) * 1.5, Math.cos(a) * 22 + 2); cam.tLook.set(0, 2.5, -2); }
  const k = cam.mode === 'walk' ? 10 : 2.2; cam.pos.lerp(cam.tPos, Math.min(1, dt * k)); cam.look.lerp(cam.tLook, Math.min(1, dt * k));
  camera.position.copy(cam.pos); camera.lookAt(cam.look);
  P.update(el * luces.vel, dt);
  // bocadillo sobre la cabeza del presentador virtual
  const b = $('#bubble');
  if (!b.classList.contains('hidden')) {
    if (performance.now() > bubble.hasta) b.classList.add('hidden');
    else { P.presentador.getWorldPosition(tmp); tmp.y += 2.0; tmp.project(camera); const vis = tmp.z < 1 && Math.abs(tmp.x) < 1.1 && Math.abs(tmp.y) < 1.1; b.style.left = Math.max(160, Math.min(innerWidth - 160, (tmp.x * 0.5 + 0.5) * innerWidth)) + 'px'; b.style.top = Math.max(80, vis ? (-tmp.y * 0.5 + 0.5) * innerHeight : 90) + 'px'; }
  }
  if (bloomOn) composer.render(); else renderer.render(scene, camera);
}
renderer.setAnimationLoop(frame);

// ---------- arranque ----------
pintarTemas(); aplicarTema(temaId, false);
cargarLogo().then(() => setTimeout(logoMenu, 300));
irMenu();
document.addEventListener('visibilitychange', () => { if (document.hidden) me.stopMusic(); });
addEventListener('pointerdown', function una() { if (!$('#menu').classList.contains('hidden')) me.music('menu'); removeEventListener('pointerdown', una); });
setTimeout(() => $('#loading').classList.add('hidden'), 600);
if (params.get('cam')) { verPantalla(null); show(...CAMS[params.get('cam')], true); }
window.__boom = { P, api, iniciar, irMenu, camara, show, CAMS, aplicarTema, FASES, ETAPAS, ctx, reproducirCabecera };
window.__plato = { ok: true, scene, renderer };
