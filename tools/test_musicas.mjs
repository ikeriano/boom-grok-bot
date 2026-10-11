// Carga boom_musicas.zip desde Opciones → «Cargar músicas» y comprueba que suenan en el Desafío Mega Bomba
import puppeteer from 'puppeteer-core';
const ZIP = process.argv[2] || '/workspace/boom_musicas.zip';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
let err = 0; p.on('pageerror', e => { console.log('PAGEERROR', e.message); err++; }); p.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) { console.log('console.error', m.text()); err++; } });
await p.evaluateOnNewDocument(() => { window.__suenan = []; const o = HTMLMediaElement.prototype.play; HTMLMediaElement.prototype.play = function () { window.__suenan.push(this.src); return o.call(this); }; });
const w = ms => new Promise(r => setTimeout(r, ms));
const clic = async t => { const ok = await p.evaluate(t => { const x = [...document.querySelectorAll('button')].find(b => b.offsetParent && b.textContent.includes(t)); if (x) x.click(); return !!x; }, t); if (!ok) { console.log('NO', t); err++; } await w(900); };
await p.goto('http://localhost:8766/index.html?capture&auto&elige=1&vel=2'); await p.waitForFunction('window.__plato && window.__plato.ok', { timeout: 90000 }); await w(1500);
await p.mouse.click(640, 600); await w(2500);
console.log('aviso en el menú principal:', await p.evaluate(() => !!document.querySelector('#avisoMusicas')));
await p.screenshot({ path: 'capturas/mus_01_aviso_menu.png' });
await clic('Opciones'); await w(1500); await p.screenshot({ path: 'capturas/mus_02_boton.png' });
const inp = await p.$('#optMusicas input[type=file]'); await inp.uploadFile(ZIP);
await p.waitForFunction(() => /músicas cargadas/.test(document.querySelector('#optMusicas')?.innerText || ''), { timeout: 30000 }); await w(800);
console.log('estado:', await p.evaluate(() => document.querySelector('#optMusicas .mus-estado').innerText));
await p.screenshot({ path: 'capturas/mus_03_cargadas.png' });
console.log('música del menú desde IndexedDB:', await p.evaluate(() => window.__suenan.includes(window.__urlMusica('musica_menu'))));
await p.evaluate(() => { window.__MB_FALLA = (r, k) => r === 1 && k === 1; window.__suenan = []; window.__boom.iniciar('megabomba'); });
await w(80000);
const res = await p.evaluate(() => { const nombres = ['musica_mb_suspense', 'musica_mb_tempo1', 'musica_mb_tempo2', 'mb_vinheta', 'mb_cortado', 'mb_explota', 'mb_desactivada']; const s = new Set(window.__suenan); return nombres.map(n => [n, !!window.__urlMusica(n) && s.has(window.__urlMusica(n))]); });
console.log('suenan desde IndexedDB:', res.map(([n, v]) => `${n}:${v ? 'sí' : 'no'}`).join(' '));
// tras recargar siguen guardadas
await p.goto('http://localhost:8766/index.html?capture'); await p.waitForFunction('window.__plato && window.__plato.ok', { timeout: 90000 }); await w(1500); await p.mouse.click(640, 600); await w(2500);
console.log('aviso tras recargar (debe ser false):', await p.evaluate(() => !!document.querySelector('#avisoMusicas')));
await clic('Opciones'); await w(1200); await p.waitForSelector('#optMusicas .mus-estado'); await clic('Borrar músicas cargadas'); await p.waitForFunction(() => /No hay músicas/.test(document.querySelector('#optMusicas .mus-estado')?.innerText || ''), { timeout: 15000 });
console.log('tras borrar:', await p.evaluate(() => document.querySelector('#optMusicas .mus-estado').innerText));
console.log('errores', err); await b.close();
