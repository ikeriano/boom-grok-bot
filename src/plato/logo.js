// Logo ORIGINAL estilo cómic "¡BOOM!" (dibujo propio en canvas, no es el logotipo oficial).
// Si el usuario sube su logo, se dibuja ese en su lugar.

/** Estrella de explosión con picos irregulares */
export function starburst(g, cx, cy, R, r, picos = 16, rot = 0, seed = 3) {
  let s = seed; const rnd = () => ((s = (s * 9301 + 49297) % 233280) / 233280);
  g.beginPath();
  for (let i = 0; i < picos * 2; i++) {
    const a = rot + i * Math.PI / picos; const rr = i % 2 ? r * (0.85 + rnd() * 0.3) : R * (0.8 + rnd() * 0.35);
    const x = cx + Math.cos(a) * rr * 1.35, y = cy + Math.sin(a) * rr;
    i ? g.lineTo(x, y) : g.moveTo(x, y);
  }
  g.closePath();
}

/** Dibuja el logo cómic centrado en (cx, cy) con anchura aprox. w. t = tiempo (pulso) */
export function drawBoomLogo(g, cx, cy, w, t = 0, { texto = '¡BOOM!', sub = null } = {}) {
  const k = 1 + 0.03 * Math.sin(t * 4);
  g.save(); g.translate(cx, cy); g.scale(k, k);
  const R = w * 0.36;
  // explosión exterior (roja), media (naranja) e interior (amarilla)
  starburst(g, 0, 0, R * 1.05, R * 0.72, 14, t * 0.05, 5); g.fillStyle = '#e8141c'; g.fill(); g.lineWidth = w * 0.012; g.strokeStyle = '#1a0a0a'; g.stroke();
  starburst(g, 0, 0, R * 0.9, R * 0.62, 12, 0.2 - t * 0.04, 9); g.fillStyle = '#ff7a10'; g.fill();
  starburst(g, 0, 0, R * 0.72, R * 0.5, 11, 0.5, 13); g.fillStyle = '#ffe23a'; g.fill();
  // tramado de puntos tipo cómic
  g.save(); starburst(g, 0, 0, R * 0.72, R * 0.5, 11, 0.5, 13); g.clip();
  g.fillStyle = 'rgba(255,140,0,0.35)';
  for (let y = -R; y < R; y += w * 0.02) for (let x = -R * 1.4; x < R * 1.4; x += w * 0.02) { g.beginPath(); g.arc(x + (y / (w * 0.02) % 2) * w * 0.01, y, w * 0.004 * (1 + y / R), 0, 7); g.fill(); }
  g.restore();
  // bomba pequeña con mecha encendida
  const bx = -R * 1.05, by = R * 0.42, br = R * 0.2;
  g.fillStyle = '#121218'; g.beginPath(); g.arc(bx, by, br, 0, 7); g.fill();
  g.fillStyle = 'rgba(255,255,255,0.45)'; g.beginPath(); g.arc(bx - br * 0.35, by - br * 0.35, br * 0.25, 0, 7); g.fill();
  g.fillStyle = '#3a3a44'; g.fillRect(bx - br * 0.3, by - br * 1.2, br * 0.6, br * 0.35);
  g.strokeStyle = '#c8a060'; g.lineWidth = w * 0.008; g.beginPath(); g.moveTo(bx, by - br * 1.2); g.quadraticCurveTo(bx + br * 0.6, by - br * 2, bx + br * 0.2, by - br * 2.4); g.stroke();
  const sp = 0.6 + 0.4 * Math.sin(t * 20);
  g.fillStyle = '#fff6a0'; starburst(g, bx + br * 0.2, by - br * 2.4, br * 0.45 * sp, br * 0.15, 6, t * 3, 2); g.fill();
  // texto con contorno grueso, degradado y ligera inclinación
  g.rotate(-0.08);
  const fs = w * (texto.length > 7 ? 0.13 : 0.17);
  g.font = `900 ${fs}px "Arial Black", Impact, Arial, sans-serif`; g.textAlign = 'center'; g.textBaseline = 'middle';
  g.lineJoin = 'round';
  g.lineWidth = fs * 0.32; g.strokeStyle = '#14080a'; g.strokeText(texto, 0, fs * 0.04);
  g.lineWidth = fs * 0.14; g.strokeStyle = '#ffffff'; g.strokeText(texto, 0, 0);
  const gr = g.createLinearGradient(0, -fs / 2, 0, fs / 2); gr.addColorStop(0, '#fff07a'); gr.addColorStop(0.45, '#ffb800'); gr.addColorStop(1, '#e8300c');
  g.fillStyle = gr; g.fillText(texto, 0, 0);
  g.fillStyle = 'rgba(255,255,255,0.55)'; g.font = `900 ${fs * 0.98}px "Arial Black", Impact, Arial, sans-serif`;
  g.save(); g.beginPath(); g.rect(-w, -fs, w * 2, fs * 0.42); g.clip(); g.fillText(texto, 0, -fs * 0.02); g.restore();
  if (sub) { g.rotate(0.08); g.font = `900 ${w * 0.045}px Arial`; g.lineWidth = w * 0.01; g.strokeStyle = '#000'; g.strokeText(sub, 0, R * 0.62); g.fillStyle = '#fff'; g.fillText(sub, 0, R * 0.62); }
  g.restore();
}

/** Logo del usuario si existe; si no, el procedural */
export function dibujaLogo(g, w, h, ctx, t, opts) {
  const img = ctx && ctx.logoPantalla;
  if (img && img.complete && img.naturalWidth) {
    const sc = Math.min(w * 0.7 / img.naturalWidth, h * 0.7 / img.naturalHeight) * (1 + 0.02 * Math.sin(t * 3));
    g.drawImage(img, (w - img.naturalWidth * sc) / 2, (h - img.naturalHeight * sc) / 2, img.naturalWidth * sc, img.naturalHeight * sc);
    return;
  }
  drawBoomLogo(g, w / 2, h / 2, Math.min(w, h * 1.6), t, opts);
}
