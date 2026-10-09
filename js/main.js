(()=>{
const rm=matchMedia('(prefers-reduced-motion:reduce)').matches,$=(s,r=document)=>[...r.querySelectorAll(s)];
const prog=document.createElement('div');prog.id='prog';document.body.prepend(prog);
const top=document.createElement('button');top.className='top';top.setAttribute('aria-label','Back to top');
top.innerHTML='<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M12 19V5M5 12l7-7 7 7"/></svg>';
top.onclick=()=>scrollTo({top:0});document.body.append(top);
const hd=document.querySelector('header');
function sc(){const y=scrollY,m=document.documentElement.scrollHeight-innerHeight;prog.style.transform=`scaleX(${m>0?y/m:0})`;hd.classList.toggle('sc',y>8);top.classList.toggle('show',y>500)}
addEventListener('scroll',sc,{passive:true});sc();

// banner decoration (circuit traces with travelling signals; radar on contact)
function deco(v){let s='<svg class="deco" viewBox="0 0 1200 300" preserveAspectRatio="xMaxYMid slice" aria-hidden="true">';
if(v==='radar'){s+='<circle cx="880" cy="150" r="140"/><circle cx="880" cy="150" r="90"/><circle cx="880" cy="150" r="40"/>'+[0,1.3,2.6].map(d=>`<circle class="rp" cx="880" cy="150" r="140" style="animation-delay:${d}s"/>`).join('')+'<path d="M880 128a22 22 0 0 1 22 22c0 18-22 40-22 40s-22-22-22-40a22 22 0 0 1 22-22z" style="fill:#c8102e;stroke:none"/><circle cx="880" cy="150" r="8" style="fill:#fff;stroke:none"/>'}
else{const P=['M0 60H220V120H420V80H640','M0 150H160V210H380H520V170H760','M200 270H420V230H700H820V260H1000','M640 80H820V40H1000','M760 170H900V130H1100'];
s+=P.map(d=>`<path d="${d}"/>`).join('')+P.map((d,i)=>`<path class="pl${i%2?' pa':''}" pathLength="100" d="${d}" style="animation-delay:${i*.9}s"/>`).join('')+[[640,80],[760,170],[1000,260],[1000,40],[1100,130],[420,80]].map(([x,y],i)=>`<circle class="nd" cx="${x}" cy="${y}" r="7" style="animation-delay:${i*.4}s"/>`).join('')+'<g style="transform-origin:1040px 150px;animation:spin 40s linear infinite">'+Array.from({length:12},(_,i)=>`<rect x="1033" y="68" width="14" height="20" rx="3" transform="rotate(${i*30} 1040 150)"/>`).join('')+'<circle cx="1040" cy="150" r="64"/><circle cx="1040" cy="150" r="30"/></g>'}
return s+'</svg>'}
$('.banner').forEach(b=>{b.insertAdjacentHTML('afterbegin',deco(b.dataset.v));const s=b.nextElementSibling,n=s?s.querySelectorAll('.brand').length:0;if(n&&!b.querySelector('.sub'))b.querySelector('.w').insertAdjacentHTML('beforeend',`<p class="sub">${n} brands we work with</p>`)});
const IC={Address:'M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z',Phone:'M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z',Email:'M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'};
$('.cbox h3').forEach(h=>{const p=IC[(h.dataset.en||h.textContent).trim()];if(p)h.insertAdjacentHTML('beforebegin',`<span class="ic"><svg width="22" height="22" viewBox="0 0 24 24" fill="#fff"><path d="${p}"/></svg></span>`)});

// customer logo marquees + technology tabs
$('.marq[data-keys]').forEach(m=>{const ks=m.dataset.keys.split(','),src=typeof LOGOS==='function'?LOGOS:k=>'assets/clients/'+k+'.png',row=ks.map(k=>`<span class="lg"><img src="${src(k)}" alt="" loading="lazy"></span>`).join('');m.setAttribute('aria-hidden','true');m.innerHTML=`<div class="mt${m.dataset.rev?' rev':''}">${row}${row}</div>`});
$('.tabs').forEach(t=>{const ps=$('.tp',t.parentNode);$('.tab',t).forEach((b,i)=>b.onclick=()=>{$('.tab',t).forEach(x=>x.setAttribute('aria-selected',x===b));ps.forEach((p,k)=>p.hidden=k!==i)})});
const rots=$('.rot');
if(rots.length){const set=n=>rots.forEach((r,k)=>{r.classList.remove('on');if(k===n){void r.offsetWidth;r.classList.add('on')}});
rots.forEach((r,k)=>{r.onclick=()=>set(k);r.addEventListener('animationend',()=>set((k+1)%rots.length))})}
$('.hv').forEach(v=>{if(rm){v.removeAttribute('autoplay');v.pause()}});
if(rm)return;
// reveal cards in sequence
const io=new IntersectionObserver(es=>es.forEach(e=>{if(e.isIntersecting){const t=e.target;t.classList.add('in');io.unobserve(t);setTimeout(()=>{t.classList.remove('rv','in');t.style.transitionDelay=''},1200)}}),{threshold:.12});
function reveal(){$('.tile,.brand,.client,.cbox,.photos figure,.num,.irow,.ph,.story,.tp.tgrid .lg').forEach(el=>{if(el.dataset.rv)return;el.dataset.rv=1;const i=$(':scope > *',el.parentNode).indexOf(el);el.classList.add('rv');el.style.transitionDelay=Math.min(i%4,3)*70+'ms';io.observe(el)})}
reveal();addEventListener('load',reveal);
// 3D tilt on tiles
$('.tile').forEach(t=>{t.addEventListener('pointermove',e=>{if(e.pointerType!=='mouse')return;const r=t.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;t.style.transform=`perspective(800px) rotateY(${x*10}deg) rotateX(${-y*10}deg) translateY(-6px)`});t.addEventListener('pointerleave',()=>t.style.transform='')});
// hero spotlight
const hero=document.querySelector('.hero');
if(hero)hero.addEventListener('pointermove',e=>{const r=hero.getBoundingClientRect();hero.style.setProperty('--mx',(e.clientX-r.left)+'px');hero.style.setProperty('--my',(e.clientY-r.top)+'px')});
// count-up
$('[data-to]').forEach(el=>{const to=+el.dataset.to,from=to>100?to-40:0,suf=el.dataset.suf||'';let d=0;const go=()=>{const t0=performance.now();(function f(n){const p=Math.min((n-t0)/1400,1);el.textContent=Math.round(from+(to-from)*(1-Math.pow(1-p,3)))+suf;if(p<1)requestAnimationFrame(f)})(t0)};new IntersectionObserver((es,o)=>{if(es[0].isIntersecting){go();o.disconnect()}}).observe(el)});
})();
