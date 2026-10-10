// Cabecera 3D ORIGINAL de ¡Boom! (~9,6 s): mecha encendida que recorre la pantalla hasta una bomba,
// explosión y aparición del logo 3D estilo cómic «¡BOOM!». Si el usuario sube su logo, aparece ese.
// Audio: la música que suba el usuario; de respaldo, tic-tac, chisporroteo, explosión y metales sintetizados.
import * as THREE from 'three';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { font } from '../lib/helpers.js';
import { synth } from '../lib/media.js';
import { starburst } from './logo.js';

export const DURACION = 9.6;
const T_BOOM = 5.0;
const smooth = (a, b, x) => { const t = Math.min(1, Math.max(0, (x - a) / (b - a))); return t * t * (3 - 2 * t); };
const back = x => { const c1 = 1.70158, c3 = c1 + 1; return 1 + c3 * Math.pow(x - 1, 3) + c1 * Math.pow(x - 1, 2); };

function sparkTex() { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); const r = g.createRadialGradient(32, 32, 0, 32, 32, 32); r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.3, 'rgba(255,210,90,0.85)'); r.addColorStop(1, 'rgba(255,80,0,0)'); g.fillStyle = r; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); }

function fondoComic(cuatro) {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 512; const g = c.getContext('2d');
  const gr = g.createRadialGradient(512, 256, 30, 512, 256, 600); gr.addColorStop(0, cuatro ? '#1a6a8a' : '#4a1a8a'); gr.addColorStop(1, '#050210'); g.fillStyle = gr; g.fillRect(0, 0, 1024, 512);
  g.fillStyle = 'rgba(255,255,255,0.07)'; for (let y = 0; y < 512; y += 14) for (let x = 0; x < 1024; x += 14) { const d = Math.hypot(x - 512, y - 256) / 600; g.beginPath(); g.arc(x + (y / 14 % 2) * 7, y, 1 + 4 * (1 - d), 0, 7); g.fill(); }
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}
function letra3D(ch, size, depth, m) {
  const geo = new TextGeometry(ch, { font, size, depth, curveSegments: 6, bevelEnabled: true, bevelThickness: depth * 0.25, bevelSize: size * 0.04, bevelSegments: 3 });
  geo.computeBoundingBox(); const bb = geo.boundingBox; geo.translate(-(bb.max.x + bb.min.x) / 2, -(bb.max.y + bb.min.y) / 2, -depth / 2);
  return { mesh: new THREE.Mesh(geo, m), w: bb.max.x - bb.min.x };
}

export function crearCabecera(renderer, { logoUrl = null, cuatro = false } = {}) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(55, renderer.domElement.width / renderer.domElement.height, 0.1, 500);
  const pm = new THREE.PMREMGenerator(renderer); const envRT = pm.fromScene(new RoomEnvironment(), 0.04); scene.environment = envRT.texture;
  const bgT = fondoComic(cuatro); scene.background = bgT;
  scene.add(new THREE.HemisphereLight(0xffffff, 0x302040, 0.8));
  const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(3, 5, 8); scene.add(key);
  const fuego = new THREE.PointLight(0xffa040, 30, 12, 1.5); scene.add(fuego);

  // mecha: curva larga que serpentea hasta la bomba
  const pts = []; for (let i = 0; i <= 40; i++) { const k = i / 40; pts.push(new THREE.Vector3(-26 + k * 26, Math.sin(k * 9) * 2.2 * (1 - k) + 1.6 * k, -Math.cos(k * 6) * 3 * (1 - k))); }
  pts.push(new THREE.Vector3(0, 1.75, 0));
  const curva = new THREE.CatmullRomCurve3(pts);
  const mechaGeo = new THREE.TubeGeometry(curva, 400, 0.07, 8, false);
  const mechaMat = new THREE.MeshStandardMaterial({ color: 0xc8a060, roughness: 0.9 });
  const mecha = new THREE.Mesh(mechaGeo, mechaMat); scene.add(mecha);
  const totalIdx = mechaGeo.index.count;

  // bomba
  const bomba = new THREE.Group(); scene.add(bomba);
  const bm = new THREE.MeshStandardMaterial({ color: 0x0c0c12, metalness: 0.6, roughness: 0.2, emissive: 0xff1010, emissiveIntensity: 0 });
  bomba.add(new THREE.Mesh(new THREE.SphereGeometry(1.4, 48, 32), bm));
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.5, 0.4, 24), new THREE.MeshStandardMaterial({ color: 0x3a3c46, metalness: 0.9, roughness: 0.3 })); cap.position.y = 1.45; bomba.add(cap);

  // chispas
  const N = 600; const sg = new THREE.BufferGeometry(); const sp = new Float32Array(N * 3); const sv = []; const sl = new Float32Array(N);
  for (let i = 0; i < N; i++) { sv.push(new THREE.Vector3()); sl[i] = -1; }
  sg.setAttribute('position', new THREE.BufferAttribute(sp, 3));
  const stex = sparkTex();
  const spark = new THREE.Points(sg, new THREE.PointsMaterial({ size: 0.35, map: stex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xffd080 })); scene.add(spark);
  const cabeza = new THREE.Sprite(new THREE.SpriteMaterial({ map: stex, color: 0xffe0a0, blending: THREE.AdditiveBlending, depthWrite: false })); cabeza.scale.setScalar(1.4); scene.add(cabeza);

  // explosión: partículas grandes
  const EN = 900; const eg = new THREE.BufferGeometry(); const ep = new Float32Array(EN * 3); const ev = [];
  for (let i = 0; i < EN; i++) ev.push(new THREE.Vector3().randomDirection().multiplyScalar(4 + Math.random() * 14));
  eg.setAttribute('position', new THREE.BufferAttribute(ep, 3));
  const expl = new THREE.Points(eg, new THREE.PointsMaterial({ size: 0.8, map: stex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color: 0xff9a30 })); expl.visible = false; scene.add(expl);
  const onda = new THREE.Mesh(new THREE.RingGeometry(0.8, 1.2, 64), new THREE.MeshBasicMaterial({ color: 0xfff0b0, transparent: true, side: THREE.DoubleSide, toneMapped: false })); scene.add(onda); onda.visible = false;

  // logo: estrella de explosión extruida + letras 3D
  const logo = new THREE.Group(); logo.position.set(0, 1.4, 0); scene.add(logo); logo.visible = false;
  const capas = [[3.6, 2.5, 0xe8141c, -0.5, 14, 5], [3.1, 2.15, 0xff7a10, -0.3, 12, 9], [2.6, 1.8, 0xffe23a, -0.1, 11, 13]].map(([R, r, c, z, n, seed]) => {
    const s = new THREE.Shape(); let q = seed; const rnd = () => ((q = (q * 9301 + 49297) % 233280) / 233280);
    for (let i = 0; i < n * 2; i++) { const a = i * Math.PI / n; const rr = i % 2 ? r * (0.85 + rnd() * 0.3) : R * (0.8 + rnd() * 0.35); const x = Math.cos(a) * rr * 1.45, y = Math.sin(a) * rr; i ? s.lineTo(x, y) : s.moveTo(x, y); }
    const m = new THREE.Mesh(new THREE.ExtrudeGeometry(s, { depth: 0.25, bevelEnabled: true, bevelThickness: 0.08, bevelSize: 0.06, bevelSegments: 2 }), new THREE.MeshStandardMaterial({ color: c, emissive: c, emissiveIntensity: 0.35, roughness: 0.4 }));
    m.position.z = z; logo.add(m); return m;
  });
  const letras = [];
  if (logoUrl) {
    const tex = new THREE.TextureLoader().load(logoUrl, t => { const a = t.image.width / t.image.height; plano.scale.set(Math.min(7, 4.2 * a), Math.min(7, 4.2 * a) / a, 1); }); tex.colorSpace = THREE.SRGBColorSpace;
    const plano = new THREE.Mesh(new THREE.PlaneGeometry(1, 1), new THREE.MeshBasicMaterial({ map: tex, transparent: true, toneMapped: false })); plano.position.z = 0.6; logo.add(plano); letras.push({ mesh: plano, x: 0, i: 0, img: true });
  } else {
    const fill = new THREE.MeshStandardMaterial({ color: 0xffc21a, emissive: 0xff6a00, emissiveIntensity: 0.35, metalness: 0.3, roughness: 0.3 });
    const borde = new THREE.MeshStandardMaterial({ color: 0x14080a, roughness: 0.6 });
    const chars = ['!', 'B', 'O', 'O', 'M', '!']; let x = 0; const items = [];
    chars.forEach((ch, i) => { const L = letra3D(ch, 1.45, 0.6, fill); const B = letra3D(ch, 1.45, 0.3, borde); B.mesh.scale.set(1.12, 1.1, 1); B.mesh.position.z = -0.35; const g = new THREE.Group(); g.add(L.mesh, B.mesh); if (i === 0) g.rotation.z = Math.PI; items.push({ g, w: L.w }); });
    const total = items.reduce((s, it) => s + it.w + 0.18, -0.18); x = -total / 2;
    items.forEach((it, i) => { const g = it.g; g.position.x = x + it.w / 2; x += it.w + 0.18; g.position.y = (i % 2 ? 0.1 : -0.1); logo.add(g); letras.push({ mesh: g, x: g.position.x, i }); });
    logo.rotation.z = 0.08;
  }
  // rayos detrás
  const rayos = new THREE.Group(); rayos.position.set(0, 1.4, -2); scene.add(rayos); rayos.visible = false;
  for (let i = 0; i < 18; i++) { const r = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 30), new THREE.MeshBasicMaterial({ color: i % 2 ? 0xffd040 : 0xff5020, transparent: true, opacity: 0.25, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide, toneMapped: false })); r.rotation.z = i / 18 * Math.PI; rayos.add(r); }

  const composer = new EffectComposer(renderer); composer.addPass(new RenderPass(scene, camera));
  const bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.6, 0.5, 0.75); composer.addPass(bloom); composer.addPass(new OutputPass());
  let lastT = 0; let rngS = 7; const rnd = () => ((rngS = (rngS * 16807) % 2147483647) / 2147483647);

  function render(t) {
    const dt = Math.max(0, Math.min(0.05, t - lastT)); lastT = t;
    // avance de la mecha (0 → 1 entre 0 y T_BOOM - 0.3)
    const k = smooth(0, T_BOOM - 0.3, t) * 0.92 + Math.min(1, t / (T_BOOM - 0.3)) * 0.08;
    const head = curva.getPointAt(Math.min(1, k));
    mechaGeo.setDrawRange(Math.floor(totalIdx * Math.min(1, k)), totalIdx);
    const vivo = t < T_BOOM;
    cabeza.visible = vivo; cabeza.position.copy(head); cabeza.scale.setScalar(1.0 + 0.5 * Math.sin(t * 40) * 0.5 + 0.4);
    fuego.position.copy(head); fuego.intensity = vivo ? 30 + 10 * Math.sin(t * 50) : 0;
    // chispas
    const a = sg.attributes.position;
    for (let i = 0; i < N; i++) {
      if (sl[i] <= 0 && vivo && rnd() < 0.08) { sl[i] = 0.4 + rnd() * 0.5; a.setXYZ(i, head.x, head.y, head.z); sv[i].set((rnd() - 0.5) * 6, rnd() * 5, (rnd() - 0.5) * 6); }
      if (sl[i] > 0) { sl[i] -= dt; sv[i].y -= 9 * dt; a.setXYZ(i, a.getX(i) + sv[i].x * dt, a.getY(i) + sv[i].y * dt, a.getZ(i) + sv[i].z * dt); if (sl[i] <= 0) a.setXYZ(i, 0, -999, 0); }
    }
    a.needsUpdate = true;
    // bomba
    bomba.visible = t < T_BOOM;
    const late = smooth(3.4, T_BOOM, t); bm.emissiveIntensity = late * (0.5 + 0.5 * Math.sin(t * (10 + late * 30)));
    bomba.scale.setScalar(1 + late * 0.12 * Math.abs(Math.sin(t * 18)));
    // cámara
    if (t < 3.6) { const off = new THREE.Vector3(2.5, 1.2, 5.5); camera.position.copy(head).add(off); camera.lookAt(head.x + 3, head.y, head.z); }
    else if (t < T_BOOM) { const q = smooth(3.6, T_BOOM, t); camera.position.set(2.5 - q * 2.5, 1.2 + 1.6 + q * 0.2, 5.5 + 3 + q * 2.5); camera.lookAt(0, 1.2, 0); }
    else { const q = smooth(T_BOOM, DURACION, t); const sh = Math.max(0, 1 - (t - T_BOOM) / 0.8) * 0.35; camera.position.set(Math.sin(t * 60) * sh, 1.4 + Math.cos(t * 53) * sh, 11 - q * 2); camera.lookAt(0, 1.4, 0); }
    // explosión
    const e = t - T_BOOM; expl.visible = e > 0 && e < 2.5; onda.visible = e > 0 && e < 1;
    if (e > 0) { const pa = eg.attributes.position; const f = 1 - Math.exp(-e * 2.2); for (let i = 0; i < EN; i++) pa.setXYZ(i, ev[i].x * f, 1.2 + ev[i].y * f - e * e * 0.6, ev[i].z * f); pa.needsUpdate = true; expl.material.opacity = Math.max(0, 1 - e / 2.2); onda.scale.setScalar(1 + e * 20); onda.material.opacity = Math.max(0, 1 - e); onda.position.set(0, 1.2, 0); onda.lookAt(camera.position); }
    // logo
    logo.visible = e > 0.1; rayos.visible = e > 0.2;
    if (logo.visible) {
      capas.forEach((c, i) => { const s = back(Math.min(1, Math.max(0, (e - 0.1 - i * 0.08) / 0.45))); c.scale.setScalar(Math.max(0.001, s)); c.rotation.z = (i - 1) * 0.06 + Math.sin(t * 2 + i) * 0.03; });
      letras.forEach(L => { const s = back(Math.min(1, Math.max(0, (e - 0.35 - L.i * 0.12) / 0.4))); L.mesh.scale.setScalar(Math.max(0.001, s)); if (!L.img) L.mesh.position.y = (L.i % 2 ? 0.1 : -0.1) + Math.sin(t * 6 + L.i) * 0.06; });
      logo.rotation.y = Math.sin(t * 1.2) * 0.15;
    }
    rayos.rotation.z = t * 0.3; rayos.children.forEach(r => r.material.opacity = 0.22 * smooth(T_BOOM + 0.2, T_BOOM + 1, t));
    composer.render();
  }
  return {
    render,
    overlay(t) { return { streak: 0, flash: Math.max(0, 1 - Math.abs(t - T_BOOM - 0.05) / 0.25), fade: smooth(DURACION - 0.8, DURACION, t) }; },
    resize(w, h) { camera.aspect = w / h; camera.updateProjectionMatrix(); composer.setSize(w, h); bloom.setSize(w, h); },
    dispose() { composer.dispose?.(); scene.traverse(o => { if (o.geometry) o.geometry.dispose(); }); envRT.dispose(); pm.dispose(); bgT.dispose(); renderer.toneMappingExposure = 1.0; },
  };
}

/** Banda sonora de respaldo (efectos genéricos sintetizados, no imita ninguna sintonía) */
export function programarAudioRespaldo(c, dest, t0) {
  for (let i = 0; i < 9; i++) synth.tone(c, dest, t0 + 0.2 + i * 0.5, i % 2 ? 1200 : 1600, 0.05, 'square', 0.05);
  // chisporroteo de la mecha
  const src = c.createBufferSource(); src.buffer = synth.noiseBuffer(c, 5); const f = c.createBiquadFilter(); f.type = 'highpass'; f.frequency.value = 3000;
  const g = c.createGain(); g.gain.setValueAtTime(0.0001, t0); g.gain.exponentialRampToValueAtTime(0.06, t0 + 0.3); g.gain.setValueAtTime(0.06, t0 + 4.7); g.gain.exponentialRampToValueAtTime(0.0001, t0 + 5.0);
  src.connect(f).connect(g).connect(dest); src.start(t0); src.stop(t0 + 5.1);
  // explosión
  const tb = t0 + T_BOOM; synth.kick(c, dest, tb, 0.9); synth.kick(c, dest, tb + 0.05, 0.6);
  const n = c.createBufferSource(); n.buffer = synth.noiseBuffer(c, 2.5); const lp = c.createBiquadFilter(); lp.type = 'lowpass'; lp.frequency.setValueAtTime(3000, tb); lp.frequency.exponentialRampToValueAtTime(120, tb + 2);
  const ng = c.createGain(); ng.gain.setValueAtTime(0.7, tb); ng.gain.exponentialRampToValueAtTime(0.0001, tb + 2.3); n.connect(lp).connect(ng).connect(dest); n.start(tb);
  // golpes de metales y acorde final
  [[0.35, [349, 440, 523]], [0.95, [392, 494, 587]], [1.35, [440, 554, 659]]].forEach(([d, fr]) => synth.chord(c, dest, tb + d, fr, 0.35, 0.07));
  synth.chord(c, dest, tb + 1.9, [262, 330, 392, 523], 2.6, 0.08);
  for (let i = 0; i < 12; i++) synth.hat(c, dest, tb + 1.9 + i * 0.2, 0.05);
  synth.applause(c, dest, tb + 3.2, 1.5, 0.25);
}
