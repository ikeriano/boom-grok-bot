// Prueba completa del Desafío Mega Bomba (menús → reglas → 6 bombas → decisión → Mega Bomba → final) con capturas
import puppeteer from 'puppeteer-core';
const modo = process.argv[2] || 'mega'; // mega | parar | fin
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
let err = 0; p.on('pageerror', e => { console.log('PAGEERROR', e.message); err++; }); p.on('console', m => { if (m.type() === 'error' && !/Failed to load resource/.test(m.text())) { console.log('console.error', m.text()); err++; } });
const fallos = []; p.on('requestfailed', r => fallos.push(r.url())); p.on('response', r => { if (r.status() >= 400 && !/musica_|mb_|audio\/voz\/|cabecera|logo|\.ogg|\.wav|\.m4a/.test(r.url())) console.log('HTTP', r.status(), r.url()); });
const w = ms => new Promise(r => setTimeout(r, ms));
const elige = modo === 'mega' ? 1 : 0;
await p.goto(`http://localhost:8766/index.html?capture&auto&elige=${elige}&vel=${modo === "mega" ? 1.5 : 3}`); await p.waitForFunction('window.__plato && window.__plato.ok', { timeout: 90000 }); await w(1500);
await p.mouse.click(640, 600); await w(800);
const clic = async t => { const ok = await p.evaluate(t => { const x = [...document.querySelectorAll('button')].find(b => b.offsetParent && b.textContent.includes(t)); if (x) x.click(); return !!x; }, t); if (!ok) { console.log('NO', t); err++; } await w(700); };
await clic('Jugar'); await p.screenshot({ path: 'capturas/mb_00_menu.png' });
// voces pregeneradas
const faltan = await p.evaluate(async () => { const { } = {}; return null; });
await p.evaluate(m => { window.__boom && (window.__boom.cfg.voz = m); }, modo === 'mega');
// fallos programados: 'mega' pierde una vida en la bomba 2; 'fin' falla siempre; 'parar' nunca
await p.evaluate(m => { window.__MB_FALLA = (r, k) => m === 'fin' ? true : m === 'mega' ? (r === 2 && k === 1) : false; }, modo);
const hechas = new Set();
await p.exposeFunction('__mbFotoN', async k => { if (hechas.has(k)) return; hechas.add(k); await p.screenshot({ path: `capturas/mb_${modo === "mega" ? "" : modo + "_"}${k}.png` }); console.log('captura', k); });
await p.evaluate(() => { window.__mbFoto = k => window.__mbFotoN(k); });
await clic('Desafío Mega Bomba');
const shots = { reglas: 0, cables: 0, cuenta: 0, boom: 0, placar: 0, decision: 0, mega: 0, final: 0, desact: 0 };
const t0 = Date.now();
while (Date.now() - t0 < 900000) {
  await w(250);
  const st = await p.evaluate(() => { const o = document.querySelector('#overlay'); const h = o.classList.contains('hidden') ? '' : o.innerHTML; const q = document.querySelector('#qpanel'); return { h, q: q.classList.contains('hidden') ? '' : q.innerHTML, res: window.__mbResultado || null, acts: document.querySelector('#actions').innerText }; });
  const s = async k => { await p.screenshot({ path: `capturas/mb_${modo === "mega" ? "" : modo + "_"}${k}.png` }); };
  if (st.res && /Jugar otra vez/.test(st.acts)) { await w(500); await s('final'); console.log('RESULTADO', JSON.stringify(st.res)); break; }
}
await clic('Menú'); await w(800);
const enMenu = await p.evaluate(() => !document.querySelector('#menu').classList.contains('hidden') && !document.querySelector('#mbhud'));
console.log('vuelve al menú limpio', enMenu, 'tiempo', Math.round((Date.now() - t0) / 1000), 's', 'errores', err);
await b.close();
