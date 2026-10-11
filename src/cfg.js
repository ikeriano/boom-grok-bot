// Ajustes persistentes (mismas filas que las Opciones del APK de referencia)
const DEF = { music: true, musicVol: 0.8, sfx: true, sfxVol: 0.9, publico: true, publicoVol: 0.8, gradas: true, voz: true, lee: false, leeVel: 'normal', chistes: true, monologo: false,
  cabecera: '3d', color: 'azul', quality: 'media', nombre: '', profesion: '', equipoNombre: 'Los Mechas', presentador: 'Rober Mecha', presentaciones: true, platoLuz: 'auto' };
export const VERSION = '1.3';
export const cfg = Object.assign({}, DEF, JSON.parse(localStorage.getItem('boom3d_cfg') || '{}'));
const subs = new Set();
export function guardarCfg() { localStorage.setItem('boom3d_cfg', JSON.stringify(cfg)); subs.forEach(f => f(cfg)); }
export const alCambiarCfg = f => subs.add(f);
