// Juega un programa en automático (para registrar las frases con los nombres por defecto) y vuelca window.__frases()
import puppeteer from 'puppeteer-core'; import fs from 'fs';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 }); p.on('pageerror', e => console.log('PAGEERROR', e.message));
const modos = (process.argv[3] || 'programa').split(','); let todo = new Map();
for (const modo of modos) {
  await p.goto('http://localhost:8766/index.html?capture&auto&autopaseo&vel=8'); await p.waitForFunction('window.__plato && window.__plato.ok', { timeout: 90000 });
  if (modo !== 'nada') { await p.evaluate(m => { window.__boom.cfg.voz = false; window.__boom.iniciar(m); }, modo);
    const t0 = Date.now(); while (Date.now() - t0 < 600000) { await new Promise(r => setTimeout(r, 5000)); const fin = await p.evaluate(() => /Jugar otra vez|Repetir|Siguiente/.test(document.querySelector('#actions').innerText) || !document.querySelector('#menu').classList.contains('hidden')); if (fin) break; } }
  for (const f of await p.evaluate(() => window.__frases())) todo.set(f.t + '|' + f.q, f);
  console.log(modo, todo.size);
}
fs.writeFileSync(process.argv[2], JSON.stringify([...todo.values()])); await b.close();
