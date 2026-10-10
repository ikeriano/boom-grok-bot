// Prueba automática de un flujo completo: node tools/flujo.mjs <modo> <tema> [prefijo]
import puppeteer from 'puppeteer-core'; import path from 'path';
const [modo = 'programa', tema = 'clasico', pref = 'capturas/flujo', extra = ''] = process.argv.slice(2);
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
let err = 0; p.on('pageerror', e => { console.log('PAGEERROR', e.message, e.stack?.split('\n')[1]); err++; }); p.on('console', m => { const t = m.text(); if (m.type() === 'error' && !/Failed to load resource|ERR_FILE/.test(t)) { console.log('console.error', t); err++; } if (/^\[T\]/.test(t)) console.log(t); });
await p.goto(`file://${path.resolve('.')}/index.html?capture&auto&autopaseo&vel=6&tema=${tema}&${extra}`); await p.waitForFunction('window.__plato && window.__plato.ok', { timeout: 90000 });
await p.evaluate(m => { window.__me = { voz: 0 }; if (m.startsWith('entreno:')) { document.querySelector('[data-mode=entreno]').click(); setTimeout(() => document.querySelector(`[data-test=${m.split(':')[1]}]`).click(), 300); } else document.querySelector(`[data-mode=${m}]`).click(); }, modo);
let n = 0, ultimo = ''; const t0 = Date.now();
while (Date.now() - t0 < 600000) {
  await new Promise(r => setTimeout(r, 7000));
  const st = await p.evaluate(() => ({ menu: !document.querySelector('#menu').classList.contains('hidden'), ronda: document.querySelector('#roundTxt').textContent, ov: document.querySelector('#overlay').innerText.slice(0, 80), paseo: document.querySelector('#hint').textContent.slice(0, 30) }));
  const k = JSON.stringify(st); if (k !== ultimo) { console.log(((Date.now() - t0) / 1000 | 0) + 's', k); ultimo = k; }
  if (n < 14) await p.screenshot({ path: `${pref}_${String(n++).padStart(2, '0')}.png` });
  if (st.menu || /Paseo libre/.test(st.paseo) || /Repetir/.test(st.ov)) break;
}
await p.screenshot({ path: `${pref}_fin.png` }); console.log('errores', err, 'tiempo', (Date.now() - t0) / 1000 | 0); await b.close();
