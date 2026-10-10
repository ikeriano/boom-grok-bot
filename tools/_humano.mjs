import puppeteer from 'puppeteer-core';
const b = await puppeteer.launch({ executablePath: '/usr/bin/google-chrome', headless: 'new', args: ['--no-sandbox', '--use-angle=swiftshader', '--enable-unsafe-swiftshader'] });
const p = await b.newPage(); await p.setViewport({ width: 1280, height: 720 });
p.on('pageerror', e => console.log('PAGEERROR', e.message));
await p.goto(`file:///workspace/boom3d/index.html?capture&vel=3`); await p.waitForFunction('window.__plato && window.__plato.ok');
await p.evaluate(() => { document.querySelector('[data-mode=entreno]').click(); setTimeout(() => document.querySelector('[data-test=cables]').click(), 300); });
await new Promise(r => setTimeout(r, 4000));
for (let k = 0; k < 3; k++) { const ok = await p.evaluate(() => { const bs = [...document.querySelectorAll('#qpanel .cable:not([disabled])')]; if (!bs.length) return 'nada'; bs[0].click(); return bs[0].innerText; }); console.log('corte', ok); await new Promise(r => setTimeout(r, 900)); }
await p.screenshot({ path: 'capturas/_hum_cables.png' });
await p.evaluate(() => document.querySelector('#btnHome').click()); await new Promise(r => setTimeout(r, 800));
console.log('menu visible', await p.evaluate(() => !document.querySelector('#menu').classList.contains('hidden') && document.querySelector('#qpanel').classList.contains('hidden')));
await p.evaluate(() => { document.querySelector('[data-mode=entreno]').click(); setTimeout(() => document.querySelector('[data-test=bote]').click(), 300); });
await new Promise(r => setTimeout(r, 4000));
for (let k = 0; k < 3; k++) { await p.type('#qpanel input', k === 1 ? 'zzz' : 'paris'); await p.keyboard.press('Enter'); await new Promise(r => setTimeout(r, 900)); }
await p.click('#qpanel .q-resp .boom'); await new Promise(r => setTimeout(r, 900));
await p.screenshot({ path: 'capturas/_hum_bote.png' });
console.log(await p.evaluate(() => [...document.querySelectorAll('.mini')].map(m => m.className.replace('mini ', '')).join(',')));
await b.close();
