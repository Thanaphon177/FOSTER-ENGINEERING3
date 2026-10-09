// Add a photo: put the file in assets/photos/ and add a line here: [file, title, caption, category]
const PHOTOS=[
['assets/photos/p1.jpg','Hino Robot','Production line','Robot'],
['assets/photos/p2.jpg','Pacific Robot','Robot cell','Robot'],
['assets/photos/p3.jpg','Robot control','Control panel, Mitsubishi PLC','Panel & PLC'],
['assets/photos/p4.jpg','Pacific Robot','Robot cell','Robot'],
['assets/photos/p5.jpg','Robot control','Control cabinet, Mitsubishi PLC','Panel & PLC'],
['assets/photos/p6.jpg','Robot control','Operator panel','Panel & PLC'],
['assets/photos/p7.jpg','Hino Robot','Operation panel with HMI','Panel & PLC'],
['assets/photos/p8.jpg','Hino Robot','Control cabinet, Mitsubishi PLC','Panel & PLC'],
['assets/photos/p9.jpg','Pacific Robot','Mitsubishi PLC','Panel & PLC']];
(()=>{const g=document.getElementById('gal'),f=document.getElementById('gf');if(!g)return;
const cats=['All',...new Set(PHOTOS.map(p=>p[3]))],esc=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
f.innerHTML=cats.map((c,i)=>`<button type="button" class="chip" aria-pressed="${i==0}" data-c="${i?c:''}" data-l="c:${c}">${esc(c)}</button>`).join('');
g.innerHTML=PHOTOS.map((p,i)=>`<figure class="ph" tabindex="0" role="button" data-i="${i}" data-c="${esc(p[3])}" aria-label="Open photo: ${esc(p[1])}"><img src="${p[0]}" alt="${esc(p[1]+' - '+p[2])}" loading="lazy"><figcaption><b>${esc(p[1])}</b><span>${esc(p[2])}</span></figcaption></figure>`).join('');
const items=[...g.children];
f.onclick=e=>{const b=e.target.closest('.chip');if(!b)return;[...f.children].forEach(x=>x.setAttribute('aria-pressed',x===b));items.forEach(el=>el.hidden=!!b.dataset.c&&el.dataset.c!==b.dataset.c)};
const lb=document.createElement('div');lb.className='lb';lb.hidden=true;lb.setAttribute('role','dialog');lb.setAttribute('aria-modal','true');
lb.innerHTML='<button class="lbx" aria-label="Close">&times;</button><button class="lbn lbp" aria-label="Previous">&#8249;</button><figure><img alt=""><figcaption></figcaption></figure><button class="lbn lbq" aria-label="Next">&#8250;</button>';
document.body.append(lb);let cur=0,last=null;
const vis=()=>items.filter(x=>!x.hidden).map(x=>+x.dataset.i);
function show(i){cur=i;const p=PHOTOS[i];lb.querySelector('img').src=p[0];lb.querySelector('img').alt=p[1];lb.querySelector('figcaption').innerHTML=`<b>${esc(p[1])}</b> ${esc(p[2])}`}
function open(i){last=document.activeElement;show(i);lb.hidden=false;document.body.style.overflow='hidden';lb.querySelector('.lbx').focus()}
function close(){lb.hidden=true;document.body.style.overflow='';if(last)last.focus()}
function step(d){const v=vis(),k=v.indexOf(cur);show(v[(k+d+v.length)%v.length])}
g.onclick=e=>{const el=e.target.closest('.ph');if(el)open(+el.dataset.i)};
g.onkeydown=e=>{if((e.key==='Enter'||e.key===' ')&&e.target.classList.contains('ph')){e.preventDefault();open(+e.target.dataset.i)}};
lb.onclick=e=>{if(e.target===lb||e.target.closest('.lbx'))close();else if(e.target.closest('.lbp'))step(-1);else if(e.target.closest('.lbq'))step(1)};
addEventListener('keydown',e=>{if(lb.hidden)return;if(e.key==='Escape')close();if(e.key==='ArrowLeft')step(-1);if(e.key==='ArrowRight')step(1)});
})();
