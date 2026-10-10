// Plató 3D de ¡Boom! (recreación procedural a partir de las fotos de referencia):
// pared curva de rombos luminosos, pantalla hexagonal con el logo, escenario circular de dos
// niveles con la gran bomba dorada, bombas negras/plateada/cristal en pedestales, 15 minibombas,
// tarima trasera con los atriles rojo y azul, barandillas metálicas, gradas, truss y focos móviles.
import * as THREE from 'three';
import { RoomEnvironment } from 'three/examples/jsm/environments/RoomEnvironment.js';
import { mat, glow, text3D, figure, canvasTex, grada, movingHeads, textoPlano } from '../lib/kit.js';
import { dibujaLogo, drawBoomLogo } from './logo.js';

export const TEMAS = {
  azul: { nombre: 'Azul', rombo: ['#0f3fd0', '#3f8cff', '#cfe8ff'], gap: '#030716', franjas: 0xffc050, borde: 0xff5cc8, aro: 0xff6ab0, marco: 0xff8a20, luces: [0x3f7dff, 0xff4fb0], fondo: 0x02040e },
  naranja: { nombre: 'Naranja / salmón', rombo: ['#c8402a', '#ff8a6a', '#ffe0d0'], gap: '#1c0604', franjas: 0xfff0e0, borde: 0xff7a20, aro: 0xff7040, marco: 0xff5a20, luces: [0xff7a30, 0xffffff], fondo: 0x0e0402 },
  dorado: { nombre: 'Dorado (liga de campeones)', rombo: ['#8a5a10', '#e0a838', '#fff2b8'], gap: '#0c0802', franjas: 0xffe08a, borde: 0xffd040, aro: 0xffc030, marco: 0xffc030, luces: [0xffd060, 0x80ff60], fondo: 0x060402 },
};

const P = (r, th, y = 0) => new THREE.Vector3(Math.sin(th) * r, y, Math.cos(th) * r);

/** Sector de anillo extruido (θ medido desde +Z hacia +X) */
function ringSector(r1, r2, a0, a1, h, material, seg = 64) {
  const s = new THREE.Shape();
  for (let i = 0; i <= seg; i++) { const a = a0 + (a1 - a0) * i / seg; const x = Math.sin(a) * r2, y = -Math.cos(a) * r2; i ? s.lineTo(x, y) : s.moveTo(x, y); }
  for (let i = seg; i >= 0; i--) { const a = a0 + (a1 - a0) * i / seg; s.lineTo(Math.sin(a) * r1, -Math.cos(a) * r1); }
  const geo = new THREE.ExtrudeGeometry(s, { depth: h, bevelEnabled: false, curveSegments: 4 });
  const m = new THREE.Mesh(geo, material); m.rotation.x = -Math.PI / 2; m.receiveShadow = true; return m;
}

/** Textura de la pared de rombos */
function romboTexture(tema, w = 4096, h = 1024) {
  const c = document.createElement('canvas'); c.width = w; c.height = h; const g = c.getContext('2d');
  g.fillStyle = tema.gap; g.fillRect(0, 0, w, h);
  const filas = 7, dh = h / filas, dw = dh * 1.25; let s = 11; const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  for (let fy = 0; fy <= filas; fy++) for (let fx = 0; fx * dw * 0.5 < w + dw; fx++) {
    const x = fx * dw * 0.5, y = fy * dh + (fx % 2 ? dh / 2 : 0); const q = 0.86;
    const gr = g.createLinearGradient(x - dw / 2, y - dh / 2, x + dw / 2, y + dh / 2);
    const b = rnd();
    gr.addColorStop(0, tema.rombo[2]); gr.addColorStop(0.35 + b * 0.2, tema.rombo[1]); gr.addColorStop(1, tema.rombo[0]);
    g.fillStyle = gr; g.globalAlpha = 0.65 + 0.35 * b;
    g.beginPath(); g.moveTo(x, y - dh / 2 * q); g.lineTo(x + dw / 2 * q, y); g.lineTo(x, y + dh / 2 * q); g.lineTo(x - dw / 2 * q, y); g.closePath(); g.fill();
  }
  g.globalAlpha = 1;
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = 8; return t;
}

/** Barandilla metálica curva */
function barandilla(r, a0, a1, y, h = 1.05, seg = 48) {
  const g = new THREE.Group(); const metal = mat(0xd8dde6, { metalness: 0.95, roughness: 0.2 });
  const pts = []; for (let i = 0; i <= seg; i++) pts.push(P(r, a0 + (a1 - a0) * i / seg, y + h));
  const curve = new THREE.CatmullRomCurve3(pts);
  g.add(new THREE.Mesh(new THREE.TubeGeometry(curve, seg * 2, 0.045, 8, false), metal));
  const pts2 = pts.map(p => p.clone().setY(y + h * 0.5));
  g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts2), seg * 2, 0.025, 6, false), metal));
  const n = Math.max(2, Math.round(Math.abs(a1 - a0) * r / 1.6));
  for (let i = 0; i <= n; i++) { const p = P(r, a0 + (a1 - a0) * i / n, y + h / 2); const post = new THREE.Mesh(new THREE.CylinderGeometry(0.035, 0.035, h, 8), metal); post.position.copy(p); g.add(post); }
  return g;
}

/** Bomba negra con cables de colores sobre pedestal con aro LED */
export function bombaPedestal({ tipo = 'negra', aroColor = 0xff6ab0 } = {}) {
  const g = new THREE.Group();
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.42, 0.48, 0.5, 32), mat(0xf2f2f6, { roughness: 0.25 })); ped.position.y = 0.25; g.add(ped);
  const aro = new THREE.Mesh(new THREE.TorusGeometry(0.47, 0.035, 8, 48), glow(aroColor, 2.4)); aro.rotation.x = Math.PI / 2; aro.position.y = 0.48; g.add(aro);
  const aroB = new THREE.Mesh(new THREE.TorusGeometry(0.62, 0.03, 8, 48), glow(aroColor, 1.6)); aroB.rotation.x = Math.PI / 2; aroB.position.y = 0.02; g.add(aroB);
  let m;
  if (tipo === 'plata') m = mat(0xdfe4ec, { metalness: 1, roughness: 0.18 });
  else if (tipo === 'cristal') m = new THREE.MeshPhysicalMaterial({ color: 0xd8f0ff, transparent: true, opacity: 0.32, roughness: 0.02, metalness: 0.1, clearcoat: 1, side: THREE.DoubleSide, depthWrite: false });
  else m = mat(0x0b0b10, { metalness: 0.6, roughness: 0.22 });
  const esf = new THREE.Mesh(new THREE.SphereGeometry(0.42, 32, 24), m); esf.position.y = 0.92; esf.castShadow = tipo !== 'cristal'; g.add(esf);
  if (tipo === 'cristal') { const core = new THREE.Mesh(new THREE.CylinderGeometry(0.12, 0.12, 0.36, 16), glow(0xff3030, 1.8)); core.position.y = 0.92; g.add(core); }
  const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.14, 0.17, 0.14, 20), mat(0x30323a, { metalness: 0.9, roughness: 0.3 })); cap.position.y = 1.38; g.add(cap);
  if (tipo !== 'plata') {
    [0xff2a2a, 0x2a6bff, 0xffe02a, 0x22d060, 0xffffff].forEach((c, i) => {
      const a = i * 1.25; const pts = [new THREE.Vector3(Math.cos(a) * 0.1, 1.36, Math.sin(a) * 0.1), new THREE.Vector3(Math.cos(a) * 0.36, 1.22, Math.sin(a) * 0.36), new THREE.Vector3(Math.cos(a) * 0.45, 0.98, Math.sin(a) * 0.45)];
      g.add(new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(pts), 12, 0.018, 6), glow(c, 0.9, { color: c })));
    });
  }
  g.userData = { aro, aroB, esf, base: aroColor };
  return g;
}

/** Textura de número para minibombas / atriles */
function numTex(n, { fg = '#fff', bg = null, size = 128 } = {}) {
  const c = document.createElement('canvas'); c.width = c.height = size; const g = c.getContext('2d');
  if (bg) { g.fillStyle = bg; g.fillRect(0, 0, size, size); }
  g.font = `900 ${size * 0.6}px Arial`; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = fg; g.fillText(String(n), size / 2, size / 2 + 4);
  const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; return t;
}

export const COLORES_EQ = { rojo: 0xe8202a, azul: 0x1f6bff };
const ESTILOS = {
  rojo: [{ body: 0xc81a24, legs: 0x1a1a22, hair: 0x2a1a10 }, { body: 0xd8303a, legs: 0x22222a, hair: 0x6a4020 }, { body: 0xb01020, legs: 0x1a1a22, hair: 0x111111 }, { body: 0xe04048, legs: 0x2a2a34, hair: 0xd0a050 }],
  azul: [{ body: 0x1a50d0, legs: 0x1a1a22, hair: 0x3a2412 }, { body: 0x2a6bff, legs: 0x22222a, hair: 0xb8b0a0 }, { body: 0x1040b0, legs: 0x1a1a22, hair: 0x111111 }, { body: 0x3a7aff, legs: 0x2a2a34, hair: 0x9a6a46 }],
};

export function construirPlato(scene, ctx, renderer) {
  const root = new THREE.Group(); root.name = 'boom'; scene.add(root);
  const updaters = []; const efectos = [];
  let tema = ctx.paleta || TEMAS.azul;
  scene.background = new THREE.Color(tema.fondo); scene.fog = new THREE.Fog(tema.fondo, 45, 95);
  if (renderer && !scene.environment) { const pm = new THREE.PMREMGenerator(renderer); scene.environment = pm.fromScene(new RoomEnvironment(), 0.04).texture; scene.environmentIntensity = 0.55; }
  const tematicos = []; // { m: material, k: 'borde'|'aro'|... }
  const tm = (k, i = 2) => { const m = glow(tema[k], i); tematicos.push({ m, k }); return m; };

  // ---------- luces ----------
  root.add(new THREE.HemisphereLight(0xbfd0ff, 0x101020, 0.75));
  const key = new THREE.SpotLight(0xffffff, 260, 60, Math.PI / 5, 0.5, 1.4); key.position.set(0, 18, 14); key.target.position.set(0, 0, -2); key.castShadow = true; key.shadow.mapSize.set(1024, 1024); key.shadow.bias = -0.0005; root.add(key, key.target);
  const pl = []; [[-9, 7, -6], [9, 7, -6], [0, 9, 6], [-12, 5, 6], [12, 5, 6]].forEach(([x, y, z], i) => { const l = new THREE.PointLight(tema.luces[i % 2], 40, 30, 1.6); l.position.set(x, y, z); root.add(l); pl.push(l); });

  // ---------- suelo ----------
  const fl = canvasTex(2048, 2048, (g, w, h) => {
    const gr = g.createRadialGradient(w / 2, h / 2, 50, w / 2, h / 2, w / 2); gr.addColorStop(0, '#c8ccd8'); gr.addColorStop(0.45, '#9aa0b4'); gr.addColorStop(1, '#14161e');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(255,255,255,0.18)'; g.lineWidth = 4; for (let r = 260; r < w / 2; r += 130) { g.beginPath(); g.arc(w / 2, h / 2, r, 0, 7); g.stroke(); }
  });
  const suelo = new THREE.Mesh(new THREE.CircleGeometry(40, 96), new THREE.MeshStandardMaterial({ map: fl.tex, roughness: 0.18, metalness: 0.35 }));
  suelo.rotation.x = -Math.PI / 2; suelo.receiveShadow = true; root.add(suelo);
  // aros de luz en el suelo (delante del escenario)
  [[3.2, 8.2, 1.0], [-6.5, 8.6, 0.8], [7.6, 6.2, 0.7]].forEach(([x, z, r]) => { const a = new THREE.Mesh(new THREE.TorusGeometry(r, 0.07, 8, 48), glow(0xffffff, 2.2)); a.rotation.x = Math.PI / 2; a.position.set(x, 0.05, z); root.add(a); });

  // ---------- pared curva de rombos ----------
  const WR = 16.5, WA0 = Math.PI - 1.5, WA1 = Math.PI + 1.5, WH = 12;
  const wallGeo = new THREE.CylinderGeometry(WR, WR, WH, 160, 1, true, WA0, WA1 - WA0);
  { const uv = wallGeo.attributes.uv; for (let i = 0; i < uv.count; i++) uv.setX(i, 1 - uv.getX(i)); }
  const wallMat = new THREE.MeshBasicMaterial({ map: romboTexture(tema), side: THREE.BackSide, toneMapped: false }); wallMat.color.setScalar(1.15);
  const wall = new THREE.Mesh(wallGeo, wallMat); wall.position.y = 1 + WH / 2; root.add(wall);
  const wallBack = new THREE.Mesh(new THREE.CylinderGeometry(WR + 0.3, WR + 0.3, WH + 2, 96, 1, true, WA0, WA1 - WA0), mat(0x08080c, { side: THREE.DoubleSide })); wallBack.position.y = 1 + WH / 2; root.add(wallBack);
  const banda = (y, hgt, k, i) => { const b = new THREE.Mesh(new THREE.CylinderGeometry(WR - 0.12, WR - 0.12, hgt, 160, 1, true, WA0, WA1 - WA0), tm(k, i)); b.material.side = THREE.DoubleSide; b.position.y = y; root.add(b); };
  banda(1 + WH + 0.15, 0.3, 'borde', 2.4); banda(1.1, 0.12, 'borde', 1.6);
  // franjas horizontales junto a la pantalla hexagonal
  const SA = Math.PI + 0.62;
  for (let i = 0; i < 9; i++) { const b = new THREE.Mesh(new THREE.CylinderGeometry(WR - 0.2, WR - 0.2, 0.13, 64, 1, true, SA - 0.5, 1.0), tm('franjas', 1.8)); b.material.side = THREE.DoubleSide; b.position.y = 3.6 + i * 0.75; root.add(b); }
  // fondo negro tras las franjas (tapa los rombos)
  { const b = new THREE.Mesh(new THREE.CylinderGeometry(WR - 0.15, WR - 0.15, 7.4, 64, 1, true, SA - 0.52, 1.04), mat(0x050507, { side: THREE.DoubleSide })); b.position.y = 6.6; root.add(b); }

  // ---------- pantalla hexagonal con logo ----------
  const HW = 7.2, HH = 4.4, HC = 1.3;
  const hexShape = (w, h, c) => { const s = new THREE.Shape(); s.moveTo(-w / 2 + c, h / 2); s.lineTo(w / 2 - c, h / 2); s.lineTo(w / 2, 0); s.lineTo(w / 2 - c, -h / 2); s.lineTo(-w / 2 + c, -h / 2); s.lineTo(-w / 2, 0); s.closePath(); return s; };
  const pantTex = canvasTex(1024, 640, (g, w, h, t) => {
    const gr = g.createRadialGradient(w / 2, h / 2, 20, w / 2, h / 2, w * 0.6); gr.addColorStop(0, '#5a2a9a'); gr.addColorStop(0.6, '#1a1050'); gr.addColorStop(1, '#08041a');
    g.fillStyle = gr; g.fillRect(0, 0, w, h);
    g.strokeStyle = 'rgba(255,200,80,0.15)'; g.lineWidth = 6; for (let i = 0; i < 24; i++) { const a = i / 24 * Math.PI * 2 + t * 0.1; g.beginPath(); g.moveTo(w / 2, h / 2); g.lineTo(w / 2 + Math.cos(a) * w, h / 2 + Math.sin(a) * w); g.stroke(); }
    if (ctx.pantallaInfo) {
      const I = ctx.pantallaInfo; g.textAlign = 'center'; g.textBaseline = 'middle'; g.fillStyle = '#ffd34d'; g.font = '900 58px Arial'; g.fillText(I.title, w / 2, 90);
      g.font = '700 38px Arial'; (I.rows || []).slice(0, 6).forEach(([k, v], i) => { const y = 180 + i * 72; g.fillStyle = 'rgba(255,255,255,0.12)'; g.fillRect(150, y - 30, w - 300, 60); g.textAlign = 'left'; g.fillStyle = '#9fd0ff'; g.fillText(k, 170, y); g.textAlign = 'right'; g.fillStyle = '#fff'; g.fillText(v, w - 170, y); });
    } else if (ctx.pantallaTexto) { g.fillStyle = '#ffe48a'; g.font = '900 64px Arial'; g.textAlign = 'center'; g.textBaseline = 'middle'; ctx.pantallaTexto.split('\n').forEach((l, i, a) => g.fillText(l, w / 2, h / 2 + (i - (a.length - 1) / 2) * 80)); }
    else dibujaLogo(g, w, h, ctx, t);
  });
  const hg = new THREE.ShapeGeometry(hexShape(HW, HH, HC)); { const uv = hg.attributes.uv, pos = hg.attributes.position; for (let i = 0; i < uv.count; i++) uv.setXY(i, pos.getX(i) / HW + 0.5, pos.getY(i) / HH + 0.5); }
  const hexG = new THREE.Group();
  const hexScreen = new THREE.Mesh(hg, new THREE.MeshBasicMaterial({ map: pantTex.tex, toneMapped: false })); hexScreen.position.z = 0.12; hexG.add(hexScreen);
  const frameShape = hexShape(HW + 0.5, HH + 0.5, HC + 0.2); frameShape.holes.push(hexShape(HW, HH, HC));
  const frame = new THREE.Mesh(new THREE.ExtrudeGeometry(frameShape, { depth: 0.25, bevelEnabled: false }), tm('marco', 2.2)); hexG.add(frame);
  const backHex = new THREE.Mesh(new THREE.ShapeGeometry(hexShape(HW + 0.5, HH + 0.5, HC + 0.2)), mat(0x0a0a10)); backHex.position.z = -0.02; hexG.add(backHex);
  hexG.position.copy(P(WR - 0.7, SA, 6.7)); hexG.rotation.y = SA + Math.PI; root.add(hexG);
  updaters.push(t => { pantTex.update(t); });

  // ---------- escenario central de dos niveles ----------
  const blanco = mat(0xe8eaf2, { roughness: 0.28, metalness: 0.15 });
  const oscuro = mat(0x15161e, { roughness: 0.3, metalness: 0.4 });
  const low = new THREE.Mesh(new THREE.CylinderGeometry(6, 6.15, 0.7, 128), [blanco, oscuro, oscuro]); low.position.y = 0.35; low.receiveShadow = true; root.add(low);
  const lowEdge = new THREE.Mesh(new THREE.TorusGeometry(6.02, 0.05, 8, 160), tm('aro', 2.2)); lowEdge.rotation.x = Math.PI / 2; lowEdge.position.y = 0.7; root.add(lowEdge);
  const lowBase = new THREE.Mesh(new THREE.TorusGeometry(6.16, 0.05, 8, 160), tm('aro', 1.5)); lowBase.rotation.x = Math.PI / 2; lowBase.position.y = 0.04; root.add(lowBase);
  // aros blancos en el borde del nivel inferior (lado derecho)
  for (let i = 0; i < 9; i++) { const a = 0.15 + i * 0.17; const r = new THREE.Mesh(new THREE.TorusGeometry(0.28, 0.05, 8, 32), glow(0xffffff, 2.6)); r.rotation.x = Math.PI / 2; r.position.copy(P(5.35, a, 0.72)); root.add(r); }
  const up = new THREE.Mesh(new THREE.CylinderGeometry(3.6, 3.6, 1.2, 128), [blanco, mat(0xf4f4f8, { roughness: 0.2 }), blanco]); up.position.y = 1.3; up.castShadow = true; up.receiveShadow = true; root.add(up);
  const discT = canvasTex(1024, 1024, (g, w, h) => { g.fillStyle = '#1a1c26'; g.fillRect(0, 0, w, h); g.strokeStyle = 'rgba(200,210,255,0.25)'; for (let r = 60; r < 512; r += 38) { g.lineWidth = r % 76 ? 3 : 8; g.beginPath(); g.arc(w / 2, h / 2, r, 0, 7); g.stroke(); } });
  const disc = new THREE.Mesh(new THREE.CircleGeometry(3.25, 96), new THREE.MeshStandardMaterial({ map: discT.tex, roughness: 0.25, metalness: 0.5 })); disc.rotation.x = -Math.PI / 2; disc.position.y = 1.905; root.add(disc);
  const upEdge = new THREE.Mesh(new THREE.TorusGeometry(3.6, 0.05, 8, 128), tm('aro', 2.6)); upEdge.rotation.x = Math.PI / 2; upEdge.position.y = 1.9; root.add(upEdge);
  const upMid = new THREE.Mesh(new THREE.TorusGeometry(3.62, 0.035, 8, 128), tm('aro', 1.2)); upMid.rotation.x = Math.PI / 2; upMid.position.y = 1.0; root.add(upMid);
  // pedestal + gran bomba dorada (Bomba bote)
  const ped = new THREE.Mesh(new THREE.CylinderGeometry(0.75, 0.95, 0.65, 48), mat(0x2a2c36, { metalness: 0.8, roughness: 0.25 })); ped.position.y = 1.9 + 0.325; root.add(ped);
  const pedRings = [0.05, 0.6].map(y => { const r = new THREE.Mesh(new THREE.TorusGeometry(0.88 - y * 0.2, 0.035, 8, 64), glow(0xffd060, 2.6)); r.rotation.x = Math.PI / 2; r.position.y = 1.9 + y; root.add(r); return r; });
  const oro = mat(0xffc34a, { metalness: 1, roughness: 0.2 });
  const bote = new THREE.Mesh(new THREE.SphereGeometry(0.95, 48, 32), oro); bote.position.y = 3.45; bote.castShadow = true; root.add(bote);
  const boteCap = new THREE.Mesh(new THREE.CylinderGeometry(0.3, 0.36, 0.25, 24), mat(0x8a6a2a, { metalness: 1, roughness: 0.3 })); boteCap.position.y = 4.45; root.add(boteCap);
  const boteBand = new THREE.Mesh(new THREE.TorusGeometry(0.96, 0.05, 8, 64), glow(0xff3a20, 1.8)); boteBand.rotation.x = Math.PI / 2; boteBand.position.y = 3.45; root.add(boteBand);
  // aros de luz que suben alrededor de la bomba bote
  const halos = [0, 1, 2].map(i => { const h = new THREE.Mesh(new THREE.TorusGeometry(1.3, 0.025, 6, 64), new THREE.MeshBasicMaterial({ color: 0xffe08a, transparent: true, opacity: 0.6, toneMapped: false })); h.rotation.x = Math.PI / 2; root.add(h); return h; });
  updaters.push(t => { halos.forEach((h, i) => { const k = ((t * 0.35 + i / 3) % 1); h.position.y = 2.0 + k * 3.2; h.material.opacity = 0.7 * (1 - k); h.scale.setScalar(1 + 0.2 * Math.sin(k * 3)); }); bote.rotation.y = t * 0.2; });

  // ---------- 15 minibombas (bomba bote) ----------
  const minis = [];
  for (let i = 0; i < 15; i++) {
    const a = -1.25 + i * (2.5 / 14); const rr = i % 2 ? 2.25 : 2.75;
    const g = new THREE.Group(); g.position.copy(P(rr, a, 1.9));
    const st = new THREE.Mesh(new THREE.CylinderGeometry(0.2, 0.24, 0.12, 20), mat(0xdfe2ea, { metalness: 0.6, roughness: 0.3 })); st.position.y = 0.06; g.add(st);
    const m = new THREE.MeshStandardMaterial({ color: 0x0a0a0a, emissive: 0x30ff60, emissiveIntensity: 0.5, roughness: 0.15, metalness: 0.2, transparent: true, opacity: 0.92 });
    const b = new THREE.Mesh(new THREE.SphereGeometry(0.22, 24, 16), m); b.position.y = 0.34; g.add(b);
    const cap = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.07, 0.07, 12), mat(0x30323a, { metalness: 0.9 })); cap.position.y = 0.58; g.add(cap);
    const lbl = new THREE.Mesh(new THREE.PlaneGeometry(0.22, 0.22), new THREE.MeshBasicMaterial({ map: numTex(i + 1), transparent: true, depthWrite: false, toneMapped: false }));
    lbl.position.set(0, 0.34, 0.23); g.add(lbl); g.lookAt(P(14, a, 1.9).add(new THREE.Vector3(0, 0, 0)));
    g.lookAt(new THREE.Vector3(0, 1.9, 14)); root.add(g);
    minis.push({ g, m, estado: 'off' });
  }
  const MCOL = { off: [0x30ff60, 0.35], ok: [0x10ff40, 2.2], boom: [0xffd000, 2.2], ko: [0xff1010, 2.4], sel: [0xffffff, 2.4] };
  updaters.push(t => minis.forEach((x, i) => { const [c, k] = MCOL[x.estado] || MCOL.off; x.m.emissive.setHex(c); x.m.emissiveIntensity = x.estado === 'boom' ? k * (0.4 + 0.6 * (Math.sin(t * 9) > 0 ? 1 : 0.2)) : x.estado === 'off' ? 0.25 + 0.2 * Math.max(0, Math.sin(t * 2 - i * 0.4)) : x.estado === 'sel' ? k * (0.6 + 0.4 * Math.sin(t * 12)) : k; }));

  // ---------- bombas en pedestales (nivel inferior, izquierda) ----------
  const bombas = [];
  ['negra', 'negra', 'negra', 'negra', 'plata', 'cristal'].forEach((tipo, i) => {
    const b = bombaPedestal({ tipo, aroColor: tema.aro }); const a = -0.42 - i * 0.24; const r = i % 2 ? 4.4 : 5.15;
    b.position.copy(P(r, a, 0.7)); root.add(b); bombas.push(b);
    tematicos.push({ m: b.userData.aro.material, k: 'aro' }, { m: b.userData.aroB.material, k: 'aro' });
  });
  // mecha LED de la bomba plateada (clasificatoria)
  const plata = bombas[4]; const mechaLeds = [];
  for (let i = 0; i < 20; i++) { const a = i / 20 * Math.PI * 1.6 - 0.8; const l = new THREE.Mesh(new THREE.SphereGeometry(0.035, 8, 6), glow(0xffe060, 2.5)); l.position.set(Math.cos(a) * 0.62, 0.55 + i * 0.045, Math.sin(a) * 0.62); plata.add(l); mechaLeds.push(l); }
  let mecha = 1;

  // ---------- tarima trasera con atriles ----------
  const TA0 = Math.PI - 1.0, TA1 = Math.PI + 1.0;
  const tarima = ringSector(8, 12.5, TA0, TA1, 1.0, mat(0xd4d8e2, { roughness: 0.25, metalness: 0.2 })); root.add(tarima);
  const tarEdge = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(Array.from({ length: 41 }, (_, i) => P(8.02, TA0 + (TA1 - TA0) * i / 40, 1.0))), 120, 0.04, 6), tm('borde', 2)); root.add(tarEdge);
  const tarEdge2 = new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(Array.from({ length: 41 }, (_, i) => P(8.02, TA0 + (TA1 - TA0) * i / 40, 0.05))), 120, 0.04, 6), tm('borde', 1.4)); root.add(tarEdge2);
  // escalones centrales
  for (let i = 0; i < 4; i++) { const s = new THREE.Mesh(new THREE.BoxGeometry(2.6, 0.25 * (i + 1), 0.4), mat(0xc8ccd6, { roughness: 0.3 })); s.position.set(0, 0.125 * (i + 1), -6.6 - i * 0.4); root.add(s); const l = new THREE.Mesh(new THREE.BoxGeometry(2.5, 0.02, 0.02), glow(0xffffff, 1.8)); l.position.set(0, 0.25 * (i + 1), -6.4 - i * 0.4); root.add(l); }
  root.add(barandilla(8.25, TA0 + 0.02, Math.PI - 0.14, 1.0), barandilla(8.25, Math.PI + 0.14, TA1 - 0.02, 1.0));
  // barandillas de las rampas laterales y del frente de gradas
  root.add(barandilla(10.8, 0.95, 1.85, 0), barandilla(10.8, -1.85, -0.95, 0), barandilla(7.3, -0.3, -1.35, 0, 1.0));
  const atriles = { rojo: [], azul: [] };
  const atrilTex = (n, col, vivo = true) => numTex(n, { fg: vivo ? '#ffffff' : '#444', bg: vivo ? col : '#111' });
  for (const eq of ['rojo', 'azul']) for (let i = 0; i < 4; i++) {
    const th = eq === 'rojo' ? Math.PI + 0.78 - i * 0.13 : Math.PI - 0.39 - i * 0.13;
    const g = new THREE.Group(); g.position.copy(P(9.6, th, 1.0)); g.rotation.y = th + Math.PI;
    const col = eq === 'rojo' ? '#d0101c' : '#1a5cff';
    const body = new THREE.Mesh(new THREE.BoxGeometry(0.95, 1.15, 0.6), mat(0x16171e, { metalness: 0.6, roughness: 0.3 })); body.position.y = 0.575; g.add(body);
    const panel = new THREE.Mesh(new THREE.PlaneGeometry(0.75, 0.85), new THREE.MeshBasicMaterial({ map: atrilTex(i + 1, col), toneMapped: false })); panel.position.set(0, 0.6, 0.305); g.add(panel);
    const top = new THREE.Mesh(new THREE.BoxGeometry(1.05, 0.06, 0.7), glow(COLORES_EQ[eq], 1.8)); top.position.y = 1.18; g.add(top);
    const f = figure({ ...ESTILOS[eq][i], scale: 1.0 }); f.position.set(0, 0, -0.7); g.add(f);
    root.add(g);
    atriles[eq].push({ g, panel, fig: f, col, n: i + 1, cae: 0, vivo: true });
  }
  // presentador virtual
  const presentador = figure({ body: 0x22242e, legs: 0x16161c, hair: 0x2a1a10, scale: 1.04 });
  presentador.position.copy(P(4.6, 0.62, 0.7)); presentador.lookAt(0, 0.7, 20); root.add(presentador);
  updaters.push(t => { presentador.rotation.z = Math.sin(t * 1.7) * 0.02; });

  // ---------- gradas de público ----------
  [[-1.62, 14.2, 18], [1.62, 14.2, 18], [-0.72, 15.5, 12], [0.72, 15.5, 12]].forEach(([th, r, w]) => {
    const gr = grada({ rows: 7, cols: Math.round(w * 1.25), width: w, seat: 0x2a2a34, step: 0x15161e });
    gr.position.copy(P(r, th, 0)); gr.rotation.y = th; root.add(gr);
  });
  // ---------- techo: truss y focos móviles ----------
  const trussM = mat(0x8a8e98, { metalness: 0.9, roughness: 0.35 });
  [12, 6].forEach((r, k) => { const t1 = new THREE.Mesh(new THREE.TorusGeometry(r, 0.12, 6, 96), trussM); t1.rotation.x = Math.PI / 2; t1.position.y = 15 - k * 0.4; root.add(t1); const t2 = t1.clone(); t2.position.y = 15.6 - k * 0.4; root.add(t2); });
  for (let i = 0; i < 6; i++) { const b = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.25, 26), trussM); b.position.y = 15.3; b.rotation.y = i * Math.PI / 6; root.add(b); }
  const heads = []; for (let i = 0; i < 14; i++) { const a = i / 14 * Math.PI * 2; heads.push([Math.sin(a) * 12, 14.6, Math.cos(a) * 12]); }
  for (let i = 0; i < 6; i++) { const a = i / 6 * Math.PI * 2 + 0.3; heads.push([Math.sin(a) * 6, 14.2, Math.cos(a) * 6]); }
  root.add(movingHeads(updaters, heads, [0xffffff, tema.luces[0], tema.luces[1], 0xffe0a0]));
  // cono de luz (haces) visibles hacia el escenario
  const haces = [];
  for (let i = 0; i < 8; i++) {
    const c = new THREE.Mesh(new THREE.ConeGeometry(1.4, 16, 20, 1, true), new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.045, blending: THREE.AdditiveBlending, depthWrite: false, side: THREE.DoubleSide }));
    const piv = new THREE.Group(); const a = i / 8 * Math.PI * 2; piv.position.set(Math.sin(a) * 10, 14.5, Math.cos(a) * 10 - 3); c.position.y = -8; piv.add(c); root.add(piv); haces.push(piv);
    updaters.push(t => { piv.rotation.z = Math.sin(t * 0.5 + i) * 0.45; piv.rotation.x = Math.cos(t * 0.4 + i * 1.7) * 0.35; });
  }

  // ---------- efectos: explosión ----------
  const sparkTex = (() => { const c = document.createElement('canvas'); c.width = c.height = 64; const g = c.getContext('2d'); const r = g.createRadialGradient(32, 32, 0, 32, 32, 32); r.addColorStop(0, 'rgba(255,255,255,1)'); r.addColorStop(0.3, 'rgba(255,200,80,0.8)'); r.addColorStop(1, 'rgba(255,80,0,0)'); g.fillStyle = r; g.fillRect(0, 0, 64, 64); return new THREE.CanvasTexture(c); })();
  function explosion(pos, { color = 0xff8a20, n = 260, size = 1 } = {}) {
    const geo = new THREE.BufferGeometry(); const p = new Float32Array(n * 3), v = [];
    for (let i = 0; i < n; i++) { p.set([pos.x, pos.y, pos.z], i * 3); const d = new THREE.Vector3().randomDirection().multiplyScalar((2 + Math.random() * 6) * size); v.push(d); }
    geo.setAttribute('position', new THREE.BufferAttribute(p, 3));
    const pts = new THREE.Points(geo, new THREE.PointsMaterial({ size: 0.45 * size, map: sparkTex, transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, color }));
    const luz = new THREE.PointLight(color, 300, 25, 1.5); luz.position.copy(pos);
    const onda = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.08, 8, 64), new THREE.MeshBasicMaterial({ color: 0xffe0a0, transparent: true, toneMapped: false })); onda.rotation.x = Math.PI / 2; onda.position.copy(pos);
    root.add(pts, luz, onda); efectos.push({ pts, luz, onda, v, t: 0 });
  }
  updaters.push((t, dt) => {
    for (let k = efectos.length - 1; k >= 0; k--) {
      const e = efectos[k]; e.t += dt; const a = e.pts.geometry.attributes.position;
      for (let i = 0; i < e.v.length; i++) { a.setXYZ(i, a.getX(i) + e.v[i].x * dt, a.getY(i) + e.v[i].y * dt, a.getZ(i) + e.v[i].z * dt); e.v[i].y -= 3 * dt; e.v[i].multiplyScalar(0.97); }
      a.needsUpdate = true; e.pts.material.opacity = Math.max(0, 1 - e.t / 1.6); e.luz.intensity = Math.max(0, 300 * (1 - e.t / 0.6));
      e.onda.scale.setScalar(1 + e.t * 12); e.onda.material.opacity = Math.max(0, 1 - e.t / 0.8);
      if (e.t > 1.8) { root.remove(e.pts, e.luz, e.onda); e.pts.geometry.dispose(); efectos.splice(k, 1); }
    }
    // atriles: caída del eliminado (trampilla)
    for (const eq of ['rojo', 'azul']) for (const a of atriles[eq]) {
      if (!a.vivo && a.cae < 1) { a.cae = Math.min(1, a.cae + dt * 1.4); a.fig.position.y = -2.4 * a.cae * a.cae; a.fig.visible = a.cae < 1; }
      if (a.vivo && a.cae > 0) { a.cae = 0; a.fig.position.y = 0; a.fig.visible = !a.oculto; }
    }
    mechaLeds.forEach((l, i) => { const on = i / mechaLeds.length < mecha; l.material.emissiveIntensity = on ? (i === Math.ceil(mecha * mechaLeds.length) - 1 ? 2.5 + 2 * Math.sin(t * 20) : 2.2) : 0.05; });
    bombas.forEach((b, i) => { b.userData.aro.material.emissiveIntensity = b.userData.activa ? 2 + 1.5 * Math.sin(t * 8) : 2.2; });
  });

  // ---------- decoración de especiales ----------
  let deco = new THREE.Group(); root.add(deco); let decoUpd = [];
  addEspecial(deco, ctx.deco, decoUpd, { tema }); updaters.push((t, dt) => decoUpd.forEach(u => u(t, dt)));
  function setDeco(tipo) { root.remove(deco); deco.traverse(o => { if (o.geometry) o.geometry.dispose(); }); deco = new THREE.Group(); root.add(deco); decoUpd.length = 0; ctx.deco = tipo; addEspecial(deco, tipo, decoUpd, { tema }); }

  // ---------- paseo: figura del jugador y marca de destino ----------
  const walker = figure({ body: 0xc81a24, legs: 0x1a1a22, hair: 0x2a1a10 }); walker.visible = false; root.add(walker);
  const marca = new THREE.Mesh(new THREE.TorusGeometry(0.55, 0.06, 8, 40), glow(0x40ff80, 3)); marca.rotation.x = Math.PI / 2; marca.visible = false; root.add(marca);
  updaters.push(t => { if (marca.visible) { marca.scale.setScalar(1 + 0.15 * Math.sin(t * 5)); } });
  const ang = (x, z) => Math.atan2(x, z);
  function alturaEn(x, z) { const r = Math.hypot(x, z); let a = ang(x, z); if (a < 0) a += Math.PI * 2; return (r > 8 && r < 12.5 && a > TA0 && a < TA1) ? 1.0 : 0; }
  function bloqueado(x, z) { const r = Math.hypot(x, z); if (r > 15.5 || r < 6.3) return true; let a = ang(x, z); if (a < 0) a += Math.PI * 2;
    const enTarima = a > TA0 && a < TA1; if (enTarima && r > 7.7 && r < 8.3 && Math.abs(a - Math.PI) > 0.16) return true; return false; }

  // ---------- API ----------
  function setTema(p) {
    tema = (typeof p === 'string' ? TEMAS[p] : p) || TEMAS.azul; ctx.paleta = tema;
    wallMat.map.dispose(); wallMat.map = romboTexture(tema); wallMat.needsUpdate = true;
    tematicos.forEach(({ m, k }) => m.emissive.setHex(tema[k]));
    pl.forEach((l, i) => l.color.setHex(tema.luces[i % 2]));
    scene.background.setHex(tema.fondo); scene.fog.color.setHex(tema.fondo);
  }
  return {
    root, minis, bombas, atriles, presentador, bote, plata, walker, marca, alturaEn, bloqueado,
    setTema, setDeco, setFiguraEquipo(eq) { walker.traverse(o => { if (o.isMesh && o.material.color && o.position.y > 0.8 && o.position.y < 1.3) o.material.color.setHex(eq === 'azul' ? 0x1a50d0 : 0xc81a24); }); },
    posAtril(eq, i = 0) { const a = atriles[eq][i]; const v = new THREE.Vector3(); a.fig.getWorldPosition(v); return v; },
    ocultarAtril(eq, i, oculto) { atriles[eq][i].fig.visible = !oculto; atriles[eq][i].oculto = oculto; },
    setMinis(estados) { estados.forEach((e, i) => { if (minis[i]) minis[i].estado = e; }); },
    setMecha(f) { mecha = Math.max(0, Math.min(1, f)); },
    activarBomba(i) { bombas.forEach((b, k) => b.userData.activa = k === i); },
    explotar(cual) {
      const pos = cual === 'bote' ? new THREE.Vector3(0, 3.45, 0) : cual === 'mini' ? new THREE.Vector3(0, 2.4, 2.5) : (bombas[typeof cual === 'number' ? cual : 0].localToWorld(new THREE.Vector3(0, 0.92, 0)));
      explosion(pos, { size: cual === 'bote' ? 1.6 : 1 });
    },
    celebrar() { for (let i = 0; i < 4; i++) setTimeout(() => explosion(new THREE.Vector3((Math.random() - 0.5) * 10, 6 + Math.random() * 4, (Math.random() - 0.5) * 6), { color: [0x30ff60, 0xffd040, 0x40a0ff, 0xff40a0][i] }), i * 300); },
    eliminar(eq, i) { const a = atriles[eq][i]; if (!a || !a.vivo) return; a.vivo = false; a.panel.material.map = atrilTex(a.n, a.col, false); a.panel.material.needsUpdate = true; },
    revivir(eq, i) { const a = atriles[eq][i]; if (!a) return; a.vivo = true; a.panel.material.map = atrilTex(a.n, a.col, true); a.panel.material.needsUpdate = true; },
    revivirTodos() { for (const eq of ['rojo', 'azul']) atriles[eq].forEach((a, i) => this.revivir(eq, i)); },
    update(t, dt) { for (const u of updaters) u(t, dt); },
    dispose() { scene.remove(root); root.traverse(o => { if (o.geometry) o.geometry.dispose(); }); },
  };
}

/** Decoración de programas especiales */
export function addEspecial(g, tipo, updaters, { tema } = {}) {
  if (!tipo || tipo === 'normal') return;
  const rnd = Math.random;
  if (tipo === 'navidad') {
    // árbol de Navidad con luces (como en la foto), detrás a la izquierda del escenario
    const arbol = new THREE.Group(); arbol.position.set(-4.2, 1.0, -9.8);
    const tronco = new THREE.Mesh(new THREE.CylinderGeometry(0.15, 0.2, 0.6, 12), mat(0x5a3a1a)); tronco.position.y = 0.3; arbol.add(tronco);
    for (let i = 0; i < 4; i++) { const c = new THREE.Mesh(new THREE.ConeGeometry(1.5 - i * 0.3, 1.4, 24), mat(0x0e5a2a, { roughness: 0.8 })); c.position.y = 1.0 + i * 0.8; arbol.add(c); }
    const estrella = text3D('*', { size: 0.9, depth: 0.12, material: glow(0xffe060, 3) }); estrella.position.y = 4.2; arbol.add(estrella);
    const luces = [];
    for (let i = 0; i < 70; i++) { const h = rnd() * 3.4; const r = (1.5 - h / 3.4 * 1.3) * 0.98; const a = rnd() * 7; const l = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), glow([0xffd040, 0xff3030, 0x40a0ff, 0xffffff][i % 4], 2.5)); l.position.set(Math.cos(a) * r, 0.7 + h, Math.sin(a) * r); arbol.add(l); luces.push(l); }
    for (let i = 0; i < 8; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.12, 12, 10), mat([0xd02020, 0xffd040][i % 2], { metalness: 0.8, roughness: 0.2 })); const a = i * 0.8, h = 0.5 + i * 0.35; b.position.set(Math.cos(a) * (1.4 - h * 0.35), 0.7 + h, Math.sin(a) * (1.4 - h * 0.35)); arbol.add(b); }
    g.add(arbol);
    updaters.push(t => { luces.forEach((l, i) => l.material.emissiveIntensity = 1 + 2 * (Math.sin(t * 3 + i * 1.7) > 0 ? 1 : 0.2)); estrella.rotation.y = t; });
    // cortinas de luz cálida sobre las barandillas (como en la foto)
    const n = 1400; const cort = new THREE.InstancedMesh(new THREE.SphereGeometry(0.03, 6, 4), glow(0xfff0c0, 2.4), n); const m4 = new THREE.Matrix4(); let k = 0;
    const tramo = (r, a0, a1, y0, h) => { for (let i = 0; i < n / 4 && k < n; i++, k++) { const a = a0 + (a1 - a0) * rnd(); m4.makeTranslation(Math.sin(a) * r, y0 + rnd() * h, Math.cos(a) * r); cort.setMatrixAt(k, m4); } };
    tramo(10.8, 0.95, 1.85, 0, 1.05); tramo(10.8, -1.85, -0.95, 0, 1.05); tramo(8.25, Math.PI - 1, Math.PI + 1, 1, 1.05); tramo(7.3, -0.3, -1.35, 0, 1.0);
    g.add(cort);
    for (let i = 0; i < 5; i++) { const a = new THREE.Mesh(new THREE.TorusGeometry(0.5, 0.06, 8, 24), mat(0xd01a1a)); a.position.set(-8 + i * 4, 13.6, -12); g.add(a); }
  }
  if (tipo === 'finanio') {
    const anio = String(new Date().getFullYear() + (new Date().getMonth() === 11 ? 1 : 0));
    const t1 = text3D(anio, { size: 1.6, depth: 0.35, material: mat(0xffd24a, { metalness: 0.9, roughness: 0.2, emissive: 0x664400, emissiveIntensity: 0.7 }) }); t1.position.set(5, 8.6, -14); t1.rotation.y = -0.3; g.add(t1);
    const t2 = textoPlano('¡FELIZ AÑO NUEVO!', { w: 6, h: 0.9, color: '#ffffff', font: '900 110px Arial' }); t2.position.set(5, 7.6, -13.6); t2.rotation.y = -0.3; g.add(t2);
    const reloj = new THREE.Group(); reloj.position.set(-9, 9, -12); reloj.rotation.y = 0.6;
    reloj.add(new THREE.Mesh(new THREE.CircleGeometry(1.4, 48), mat(0xf4f0e0, { emissive: 0x403a20 })));
    const aguja = new THREE.Mesh(new THREE.BoxGeometry(0.08, 1.2, 0.05), mat(0x111111)); aguja.position.set(0, 0.55, 0.03); reloj.add(aguja);
    const aguja2 = new THREE.Mesh(new THREE.BoxGeometry(0.1, 0.8, 0.05), mat(0x111111)); aguja2.position.set(0, 0.35, 0.04); reloj.add(aguja2); g.add(reloj);
    const conf = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.12, 0.06), new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }), 600); const d = [];
    for (let i = 0; i < 600; i++) { d.push([(rnd() - 0.5) * 30, rnd() * 15, (rnd() - 0.5) * 24, rnd() * 6]); conf.setColorAt(i, new THREE.Color([0xffd040, 0xff3a6a, 0x3ad0ff, 0xffffff, 0x60ff60][i % 5])); }
    g.add(conf); const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), s = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3();
    updaters.push(t => { d.forEach((x, i) => { const y = 15 - ((x[1] + t * 0.8) % 15); e.set(t * 2 + x[3], t + x[3], 0); q.setFromEuler(e); m4.compose(p.set(x[0] + Math.sin(t + x[3]) * 0.4, y, x[2]), q, s); conf.setMatrixAt(i, m4); }); conf.instanceMatrix.needsUpdate = true; });
  }
  if (tipo === 'ninos') {
    for (let i = 0; i < 40; i++) {
      const b = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 12), mat([0xff3b6b, 0x3bd1ff, 0xffd24a, 0x7dff6b, 0xb070ff][i % 5], { roughness: 0.3 })); b.scale.y = 1.2;
      const a = Math.PI + (rnd() - 0.5) * 2.6, r = 12 + rnd() * 3; b.position.set(Math.sin(a) * r, 4 + rnd() * 8, Math.cos(a) * r); g.add(b);
      const y0 = b.position.y; updaters.push(t => { b.position.y = y0 + Math.sin(t + i) * 0.25; });
    }
    const t = textoPlano('ESPECIAL NIÑOS', { w: 8, h: 1.2, color: '#7dff6b', font: '900 120px Arial' }); t.position.set(5, 13.8, -12.5); t.rotation.y = -0.35; g.add(t);
  }
  if (tipo === 'famosos') {
    const carpet = new THREE.Mesh(new THREE.PlaneGeometry(2.6, 6), mat(0xb0101a, { roughness: 0.9 })); carpet.rotation.x = -Math.PI / 2; carpet.position.set(0, 0.02, 9.5); g.add(carpet);
    for (let i = 0; i < 10; i++) { const s = text3D('*', { size: 1.4, depth: 0.12, material: glow(0xffd24a, 2.4) }); s.position.set(-12 + (i % 5) * 6, 13.2 - (i > 4 ? 1.5 : 0), -11 + (i % 2)); g.add(s); updaters.push(t => { s.rotation.y = t + i; }); }
    const t = text3D('ESPECIAL FAMOSOS', { size: 0.8, depth: 0.15, material: glow(0xffd24a, 1.8) }); t.position.set(5, 13.8, -12.5); t.rotation.y = -0.35; g.add(t);
  }
  if (tipo === 'campeones') {
    const copa = new THREE.Group(); const oro = mat(0xffcc4a, { metalness: 1, roughness: 0.2 });
    const cuerpo = new THREE.Mesh(new THREE.LatheGeometry([[0, 0], [0.5, 0], [0.5, 0.15], [0.15, 0.3], [0.12, 0.9], [0.6, 1.4], [0.75, 2.2], [0.7, 2.25], [0.0, 1.5]].map(([x, y]) => new THREE.Vector2(x, y)), 32), oro); copa.add(cuerpo);
    [-1, 1].forEach(s => { const asa = new THREE.Mesh(new THREE.TorusGeometry(0.35, 0.06, 8, 24, Math.PI), oro); asa.position.set(s * 0.75, 1.8, 0); asa.rotation.z = s > 0 ? -Math.PI / 2 : Math.PI / 2; copa.add(asa); });
    copa.position.set(5.5, 1.0, -10.5); copa.scale.setScalar(1.3); g.add(copa); updaters.push(t => { copa.rotation.y = t * 0.6; });
    const t = text3D('SEMANA DE CAMPEONES', { size: 0.7, depth: 0.15, material: glow(0xffd24a, 1.8) }); t.position.set(5, 13.8, -12.5); t.rotation.y = -0.35; g.add(t);
  }
  if (tipo === 'nochebuena') {
    const est = text3D('*', { size: 3, depth: 0.3, material: glow(0xffe060, 3) }); est.position.set(4, 11, -13); g.add(est); updaters.push(t => { est.rotation.y = t * 0.5; });
    const velas = []; for (let i = 0; i < 14; i++) { const a = Math.PI + (i - 6.5) * 0.12; const v = new THREE.Group(); const c = new THREE.Mesh(new THREE.CylinderGeometry(0.08, 0.08, 0.5, 10), mat(0xfff4e0)); c.position.y = 0.25; v.add(c); const f = new THREE.Mesh(new THREE.SphereGeometry(0.06, 8, 6), glow(0xffa030, 3)); f.position.y = 0.58; f.scale.y = 1.6; v.add(f); v.position.set(Math.sin(a) * 8.6, 1.0, Math.cos(a) * 8.6); g.add(v); velas.push(f); }
    updaters.push(t => velas.forEach((f, i) => f.material.emissiveIntensity = 2 + Math.sin(t * 13 + i * 3) * 0.8));
    nieve(g, updaters);
  }
  if (tipo === 'navidad') nieve(g, updaters, 500);
  if (tipo === 'halloween') {
    for (let i = 0; i < 16; i++) { const p = new THREE.Group(); const c = new THREE.Mesh(new THREE.SphereGeometry(0.4, 14, 10), glow(0xff7a00, 0.6, { color: 0xff7a00 })); c.scale.y = 0.75; p.add(c); const tallo = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.05, 0.18, 6), mat(0x3a5a10)); tallo.position.y = 0.34; p.add(tallo); const a = (i / 16) * Math.PI * 2; p.position.set(Math.sin(a) * 7, 0.3, Math.cos(a) * 7); g.add(p); }
    const murc = []; for (let i = 0; i < 12; i++) { const b = new THREE.Group(); const m = mat(0x111111); [-1, 1].forEach(sx => { const w = new THREE.Mesh(new THREE.PlaneGeometry(0.6, 0.25), m); w.material.side = THREE.DoubleSide; w.position.x = sx * 0.3; b.add(w); }); g.add(b); murc.push(b); }
    updaters.push(t => murc.forEach((b, i) => { const a = t * 0.4 + i; b.position.set(Math.sin(a) * (6 + i % 4), 8 + Math.sin(t + i) * 2, Math.cos(a) * (6 + i % 4) - 3); b.children.forEach((w, k) => w.rotation.y = (k ? 1 : -1) * Math.sin(t * 12 + i) * 0.7); }));
    const tela = new THREE.Mesh(new THREE.CircleGeometry(6, 6), new THREE.MeshBasicMaterial({ color: 0xdddddd, wireframe: true, transparent: true, opacity: 0.35 })); tela.position.set(-12, 9, -9); tela.rotation.y = 0.9; g.add(tela);
  }
  if (tipo === 'carnaval') {
    globos(g, updaters, [0xff00aa, 0x00f5d4, 0xfee440, 0x7b2cbf]); confeti(g, updaters, [0xff00aa, 0x00f5d4, 0xfee440, 0xffffff]);
    for (let i = 0; i < 3; i++) { const m = new THREE.Mesh(new THREE.TorusGeometry(1.0, 0.35, 10, 30), mat([0xff00aa, 0xfee440, 0x00f5d4][i], { metalness: 0.6, roughness: 0.3 })); m.scale.set(1.6, 0.7, 0.4); m.position.set(-6 + i * 6, 12.5, -13); g.add(m); }
  }
  if (tipo === 'sanvalentin') {
    const sh = new THREE.Shape(); sh.moveTo(0, -1); sh.bezierCurveTo(-1.6, 0.2, -0.9, 1.4, 0, 0.6); sh.bezierCurveTo(0.9, 1.4, 1.6, 0.2, 0, -1);
    const hg = new THREE.ExtrudeGeometry(sh, { depth: 0.3, bevelEnabled: true, bevelSize: 0.08, bevelThickness: 0.08, bevelSegments: 2 });
    for (let i = 0; i < 18; i++) { const h = new THREE.Mesh(hg, glow(i % 2 ? 0xff4d6d : 0xffccd5, 1.4, { color: 0xff4d6d })); const a = Math.PI + (i - 8.5) * 0.17; h.position.set(Math.sin(a) * 14, 5 + (i % 3) * 2.6, Math.cos(a) * 14); h.lookAt(0, h.position.y, 0); h.scale.setScalar(0.6 + (i % 3) * 0.2); g.add(h); const y0 = h.position.y; updaters.push(t => { h.position.y = y0 + Math.sin(t * 1.5 + i) * 0.2; }); }
  }
  if (tipo === 'semanasanta') {
    for (let i = 0; i < 20; i++) { const a = Math.PI + (i - 9.5) * 0.1; const v = new THREE.Group(); const c = new THREE.Mesh(new THREE.CylinderGeometry(0.06, 0.06, 0.9, 10), mat(0xf6efe0)); c.position.y = 0.45; v.add(c); const f = new THREE.Mesh(new THREE.SphereGeometry(0.05, 8, 6), glow(0xffa030, 3)); f.position.y = 0.95; f.scale.y = 1.7; v.add(f); v.position.set(Math.sin(a) * 11.6, 1.0, Math.cos(a) * 11.6); g.add(v); updaters.push(t => f.material.emissiveIntensity = 2 + Math.sin(t * 11 + i * 2) * 0.8); }
    for (let i = 0; i < 6; i++) { const d = new THREE.Mesh(new THREE.PlaneGeometry(2.2, 9), mat(0x4a1868, { side: THREE.DoubleSide, roughness: 0.9 })); const a = Math.PI + (i - 2.5) * 0.45; d.position.set(Math.sin(a) * 16, 8, Math.cos(a) * 16); d.lookAt(0, 8, 0); g.add(d); }
  }
  if (tipo === 'verano') {
    const sol = new THREE.Mesh(new THREE.SphereGeometry(1.6, 24, 16), glow(0xffd166, 2.4)); sol.position.set(8, 12, -13); g.add(sol);
    for (let i = 0; i < 4; i++) { const s = new THREE.Group(); const palo = new THREE.Mesh(new THREE.CylinderGeometry(0.04, 0.04, 2.4, 8), mat(0xffffff)); palo.position.y = 1.2; s.add(palo); const tela = new THREE.Mesh(new THREE.ConeGeometry(1.3, 0.5, 12, 1, true), mat(i % 2 ? 0xef476f : 0x00b4d8, { side: THREE.DoubleSide })); tela.position.y = 2.4; s.add(tela); const a = [-1.25, 1.25, -1.45, 1.45][i]; s.position.set(Math.sin(a) * 9, 0, Math.cos(a) * 9); g.add(s); }
    const pel = new THREE.Mesh(new THREE.SphereGeometry(0.5, 16, 12), mat(0xffffff, { roughness: 0.3 })); g.add(pel); updaters.push(t => pel.position.set(Math.sin(t) * 6.6, 0.5 + Math.abs(Math.sin(t * 3)) * 1.2, Math.cos(t) * 6.6));
    for (let i = 0; i < 4; i++) { const r = new THREE.Mesh(new THREE.TorusGeometry(0.4, 0.06, 6, 20, Math.PI * 1.8), mat([0xef476f, 0xffd166, 0x06d6a0, 0x118ab2][i])); r.position.set(Math.sin(i * 1.7) * 8, 0.5, Math.cos(i * 1.7) * 8); g.add(r); }
  }
}
function nieve(g, updaters, n = 900) {
  const geo = new THREE.BufferGeometry(); const p = new Float32Array(n * 3); for (let i = 0; i < n; i++) p.set([(Math.random() - 0.5) * 34, Math.random() * 16, (Math.random() - 0.5) * 30], i * 3);
  geo.setAttribute('position', new THREE.BufferAttribute(p, 3)); const pts = new THREE.Points(geo, new THREE.PointsMaterial({ color: 0xffffff, size: 0.08, transparent: true, opacity: 0.85 })); g.add(pts);
  updaters.push((t, dt) => { const a = geo.attributes.position; for (let i = 0; i < n; i++) { let y = a.getY(i) - dt * 0.7; if (y < 0) y = 16; a.setY(i, y); } a.needsUpdate = true; });
}
function globos(g, updaters, cols) {
  for (let i = 0; i < 36; i++) { const b = new THREE.Mesh(new THREE.SphereGeometry(0.42, 16, 12), mat(cols[i % cols.length], { roughness: 0.3 })); b.scale.y = 1.2; const a = Math.PI + (Math.random() - 0.5) * 2.6, r = 12 + Math.random() * 3; b.position.set(Math.sin(a) * r, 4 + Math.random() * 8, Math.cos(a) * r); g.add(b); const y0 = b.position.y; updaters.push(t => { b.position.y = y0 + Math.sin(t + i) * 0.25; }); }
}
function confeti(g, updaters, cols) {
  const conf = new THREE.InstancedMesh(new THREE.PlaneGeometry(0.12, 0.06), new THREE.MeshBasicMaterial({ side: THREE.DoubleSide }), 500); const d = [];
  for (let i = 0; i < 500; i++) { d.push([(Math.random() - 0.5) * 30, Math.random() * 15, (Math.random() - 0.5) * 24, Math.random() * 6]); conf.setColorAt(i, new THREE.Color(cols[i % cols.length])); }
  g.add(conf); const m4 = new THREE.Matrix4(), q = new THREE.Quaternion(), e = new THREE.Euler(), s = new THREE.Vector3(1, 1, 1), p = new THREE.Vector3();
  updaters.push(t => { d.forEach((x, i) => { const y = 15 - ((x[1] + t * 0.8) % 15); e.set(t * 2 + x[3], t + x[3], 0); q.setFromEuler(e); m4.compose(p.set(x[0] + Math.sin(t + x[3]) * 0.4, y, x[2]), q, s); conf.setMatrixAt(i, m4); }); conf.instanceMatrix.needsUpdate = true; });
}
