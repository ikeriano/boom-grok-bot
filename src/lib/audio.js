// Gestor de audio con la misma API que el APK de referencia (play / music / voice / stopAll / mute / voz).
// No incluye audios de otros programas: usa los archivos que el usuario ponga en audio/ (o suba desde
// Opciones) y, si no hay, efectos sintetizados genéricos.
import { audioCtx, synth, findAudioFile, recursoEpoca } from './media.js';
import { cfg } from '../cfg.js';
import { decir, callar, configurarVoces } from './voces.js';
configurarVoces({ activo: () => cfg.voz, volumen: () => 1, rapida: () => cfg.leeVel === 'rapida', velocidad: () => 1 });
const PUBLICO = new Set(['aplausos', 'risas']);
let canciones = [];

let muted = localStorage.getItem('boom3d_mute') === '1';

const vivos = new Set(); let musica = null; let vozAct = null;
let master = null;
const out = () => { const c = audioCtx(); if (!master) { master = c.createGain(); master.connect(c.destination); } master.gain.value = muted ? 0 : 1; return [c, master]; };

const FX = {
  tecla: (c, d, t) => synth.tone(c, d, t, 900, 0.05, 'square', 0.05),
  pop: (c, d, t) => { synth.tone(c, d, t, 500, 0.08, 'sine', 0.2); synth.tone(c, d, t + 0.05, 900, 0.1, 'sine', 0.15); },
  acierto: (c, d, t) => { synth.tone(c, d, t, 880, 0.15, 'triangle', 0.2); synth.tone(c, d, t + 0.12, 1320, 0.3, 'triangle', 0.2); },
  fallo: (c, d, t) => { synth.tone(c, d, t, 220, 0.45, 'square', 0.08); synth.tone(c, d, t + 0.05, 165, 0.5, 'square', 0.06); },
  corte: (c, d, t) => { synth.hat(c, d, t, 0.25); synth.tone(c, d, t, 2400, 0.04, 'square', 0.06); },
  tictac: (c, d, t) => synth.tone(c, d, t, 1500, 0.03, 'square', 0.05),
  explosion: (c, d, t) => { synth.kick(c, d, t, 0.9); const n = c.createBufferSource(); n.buffer = synth.noiseBuffer(c, 1.6); const f = c.createBiquadFilter(); f.type = 'lowpass'; f.frequency.setValueAtTime(2500, t); f.frequency.exponentialRampToValueAtTime(100, t + 1.4); const g = c.createGain(); g.gain.setValueAtTime(0.7, t); g.gain.exponentialRampToValueAtTime(0.0001, t + 1.5); n.connect(f).connect(g).connect(d); n.start(t); },
  aplausos: (c, d, t) => synth.applause(c, d, t, 3, 0.4),
  risas: (c, d, t) => { for (let i = 0; i < 10; i++) synth.tone(c, d, t + i * 0.13, 300 + Math.random() * 200, 0.1, 'sawtooth', 0.03); synth.applause(c, d, t, 1.6, 0.15); },
  badumtss: (c, d, t) => { synth.kick(c, d, t, 0.4); synth.kick(c, d, t + 0.16, 0.4); synth.hat(c, d, t + 0.35, 0.2); },
  banner: (c, d, t) => synth.chord(c, d, t, [392, 494, 587], 0.6, 0.06),
  bip: (c, d, t) => synth.tone(c, d, t, 1800, 0.08, 'square', 0.08),
  bipx4: (c, d, t) => { for (let i = 0; i < 4; i++) synth.tone(c, d, t + i * 0.11, 2000, 0.07, 'square', 0.08); },
  cables: (c, d, t) => { synth.tone(c, d, t, 300, 0.12, 'sawtooth', 0.06); synth.tone(c, d, t + 0.08, 600, 0.2, 'triangle', 0.1); },
  q: (c, d, t) => synth.chord(c, d, t, [523, 659, 784], 0.5, 0.06),
  banco: (c, d, t) => { synth.tone(c, d, t, 880, 0.1, 'triangle', 0.15); synth.tone(c, d, t + 0.1, 1320, 0.25, 'triangle', 0.15); },
  bomba: (c, d, t) => { synth.kick(c, d, t, 0.5); synth.tone(c, d, t + 0.1, 110, 1.2, 'sawtooth', 0.05); },
  suspense_bomba: (c, d, t) => synth.tone(c, d, t, 70, 1.4, 'sawtooth', 0.06),
  bote: (c, d, t) => { [523, 659, 784, 1046].forEach((f, i) => synth.tone(c, d, t + i * 0.12, f, 0.3, 'triangle', 0.15)); },
};
// músicas de respaldo: bucles muy sencillos generados (no imitan ninguna sintonía)
const LOOPS = {
  menu: { bpm: 112, notas: [262, 330, 392, 330, 294, 349, 440, 349] },
  tension: { bpm: 140, notas: [110, 110, 131, 110, 98, 110, 147, 131] },
  trilha: { bpm: 120, notas: [196, 247, 294, 247, 220, 262, 330, 262] },
};

// músicas propias del Desafío Mega Bomba (audio/musica_mb_*.mp3): si no están, bucle de respaldo
const RESPALDO = { mb_tempo1: 'tension', mb_tempo2: 'tension', mb_tempo3: 'tension', mb_dinamica: 'tension', mb_suspense: 'trilha' };

export const me = {
  /** Golpe musical corto (audio/<clave>.mp3) con el volumen de la música; si el archivo no está, no suena nada */
  async sting(k) {
    if (!cfg.music) return null; const url = await findAudioFile(k); if (!url) return null;
    const a = new Audio(url); a.volume = cfg.musicVol; a.muted = muted; vivos.add(a); a.onended = () => vivos.delete(a); a.play().catch(() => {}); return a;
  },
  get muted() { return muted; }, get voiceOn() { return cfg.voz; },
  setMuted(v) { muted = v; localStorage.setItem('boom3d_mute', v ? '1' : '0'); vivos.forEach(a => a.muted = v); if (master) master.gain.value = v ? 0 : 1; if (v) speechSynthesis?.cancel?.(); },
  setVoice(v) { cfg.voz = v; if (!v) this.stopVoice(); },
  aplicarNiveles() { if (musica?.a) { musica.a.volume = cfg.music ? cfg.musicVol : 0; } if (musica?.g) musica.g.gain.value = cfg.music ? 0.5 * cfg.musicVol : 0; },
  async play(k, { volume = 1 } = {}) {
    const pub = PUBLICO.has(k); if (pub ? !cfg.publico : !cfg.sfx) return null;
    volume *= pub ? cfg.publicoVol : cfg.sfxVol;
    const url = await findAudioFile(k);
    if (url) { const a = new Audio(url); a.volume = Math.min(1, volume); a.muted = muted; vivos.add(a); a.onended = () => vivos.delete(a); a.play().catch(() => {}); return a; }
    try { const [c, d0] = out(); const d = c.createGain(); d.gain.value = volume; d.connect(d0); FX[k]?.(c, d, c.currentTime + 0.01); setTimeout(() => d.disconnect(), 6000); } catch (e) { /* sin audio */ }
    return null;
  },
  /** Música: la subida por el usuario para esa clave, la de audio/<clave>.mp3 o un bucle sintetizado */
  async music(k, { etapa = null } = {}) {
    this.stopMusic();
    let url = null;
    if (etapa) { const r = await recursoEpoca('musica', etapa); if (r) url = r.url; }
    if (!url && k === 'tension' && canciones.length) url = canciones[Math.floor(Math.random() * canciones.length)];
    if (!url) url = await findAudioFile('musica_' + k);
    if (url) { const a = new Audio(url); a.loop = k !== 'cabecera'; a.volume = cfg.music ? cfg.musicVol : 0; a.muted = muted; musica = { a }; a.play().catch(() => {}); return; }
    const L = LOOPS[k] || LOOPS[RESPALDO[k]]; if (!L) return;
    try {
      const [c, d] = out(); const g = c.createGain(); g.gain.value = cfg.music ? 0.5 * cfg.musicVol : 0; g.connect(d); let t = c.currentTime + 0.05, i = 0; const paso = 60 / L.bpm / 2;
      const iv = setInterval(() => { while (t < c.currentTime + 0.4) { synth.tone(c, g, t, L.notas[i % L.notas.length], paso * 0.9, 'triangle', 0.05); if (i % 4 === 0) synth.kick(c, g, t, 0.12); if (i % 2) synth.hat(c, g, t, 0.015); t += paso; i++; } }, 120);
      musica = { iv, g };
    } catch (e) { /* */ }
  },
  setCanciones(l) { canciones = l || []; },
  stopMusic() { if (!musica) return; if (musica.a) musica.a.pause(); if (musica.iv) { clearInterval(musica.iv); try { musica.g.disconnect(); } catch (e) { /* */ } } musica = null; },
  /** Voz del presentador: audio/voz/<clave>.mp3 propio si existe; si no, voces Piper pregeneradas (voz/, voz/q/) y, como respaldo, síntesis masculina es-ES */
  voice(clave, texto, { pregunta = false, voz = 'davefx' } = {}) {
    const limpio = String(texto || '').replace(/<[^>]+>/g, '').trim();
    if (limpio) (window.__vozLog || (window.__vozLog = new Map())).set(voz + '|' + limpio + '|' + pregunta, { v: voz, t: limpio, q: pregunta });
    return new Promise(async res => {
      if (!cfg.voz || muted) return setTimeout(res, 300);
      this.stopVoice();
      const url = clave ? await findAudioFile('voz/' + clave) : null;
      if (url) { const a = new Audio(url); vozAct = a; a.onended = a.onerror = () => res(); a.play().catch(() => res()); setTimeout(res, 30000); return; }
      if (!limpio) return setTimeout(res, 300);
      await decir(limpio, { voz, pregunta }); res();
    });
  },
  stopVoice() { if (vozAct) { vozAct.pause(); vozAct = null; } callar(); },
  stopAll() { vivos.forEach(a => a.pause()); vivos.clear(); this.stopMusic(); this.stopVoice(); },
};
