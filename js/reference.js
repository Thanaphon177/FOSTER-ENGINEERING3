const LOGOS=k=>'assets/clients/'+k+(k==='hino'||k==='pacific'?'.jpg':'.png');
const W='Wonderware Intouch',AB='Allen-Bradley Control Logix PLCs',S3='Siemens S7-300 PLCs',S4='Siemens S7-400 PLCs';
const R=[
['dole','Dole',['Automatic Pasteurizer Systems|Siemens PLCs & Siemens HMI']],
['nestle','Nestlé',['Energy Consumption Monitoring|Alstom Power Analyzer (K-Bus and Courier Protocol)|Siemens Power Meter, Janitza Power Meter (MODBUS)','Conveyor|AB Compact Logix PLC|Panel View Plus 700']],
['cadbury','Cadbury Adams',['Automatic Mixing and CIP Skid|Omron PLCs|Omron HMI']],
['unilever','Unilever',[
'Liquid Plant Mixing Process|'+W+' SCADA, Inbatch Recipe Control|Allen Bradley Control Logix PLCs',
'Regular Power Plant (NSD)|'+W+' SCADA|Allen Bradley Control Logix PLCs',
'Sulphonation Chemical Plant|'+W+' SCADA|Siemens S7-400 PLCs',
'Refrigeration Plant Compressor Control|'+W+' SCADA, Siemens TP170|'+S3,
'MX 401 PHE Liquid Plant|'+AB+'|'+W+', Wonderware Inbatch',
'Dressing Batch Control|'+W+' SCADA, Proface Touch Screen|'+S3,
'Sauce Process Control|'+W+' SCADA, Proface Touch Screen|'+S3,
'Post Dosing NSD|'+W+' SCADA|'+AB,
'Pneumatic Transport|'+AB+'|'+W,
'Aurus Projects|'+AB+'|'+W,
'PTR Phase 3|'+AB+'|Panel View 1000',
'NSD Modification|'+AB+'|'+W,
'New Home Care Plant|Wonderware Inbatch|Siemens PLCs',
'Mixer Line 6, Unilever Thai Holding Ltd. (with GEA)|'+W+', Wonderware Inbatch|'+AB,
'SCADA Migration (NTR Plant)|'+W+', Archestra IDE',
'Redundancy Database Server|SQL 2014',
'Case Packer Machine|Omron PLCs|Proface HMI']],
['crest1','',['Water Treatment and Supply|RSView32 SCADA|Allen Bradley SLC500 PLCs']],
['walls',"Wall's / Unilever",['Mix Plant 3|'+W+'|'+S4,'Upgrade Refrigeration System|'+W+'|'+S3]],
['gas','',['Gas Booster Control Migration|FTView SCADA|Allen Bradley SLC 500 PLCs']],
['myanmar','Myanmar Brewery',['Fermenting Cellar Expansion|Allen-Bradley PLC5|iFix SCADA']],
['mycom','MYCOM',['Refrigeration Systems Sea Wealth Food|Mitsubishi PLCs']],
['bgrimm','B.Grimm',['Power Plant Amata B.Grimm|Panel and Instruments Installation']],
['rb','Reckitt Benckiser',['Hand Sanitary Product|Siemens HMI|Siemens PLCs']],
['ravotek','Ravotek',['Boiler Energy Saving|Mitsubishi HMI|Mitsubishi PLCs']],
['crest2','',['Cooling Tower Control Migration|Allen-Bradley PLCs']],
['tipco','Tipco Asphalt',['PLCs & SCADA Migration (Raycol Rayong)|'+W+'|'+S3,'PLCs & SCADA Migration (Korat Plant)|'+W+'|'+S3,'PLCs & SCADA Migration (Pisanulok Plant)|'+W+'|'+S3]],
['slurry','Thai Slurry Seal',['PLCs & SCADA Migration|'+W+'|'+S3]],
['posco','POSCO Thainox',['PLCs & Drive Migration|Telemecanique|GE Drive']],
['sanmiguel','San Miguel',['PLCs Migration|Siemens S5 to Siemens S7']],
['akzo','AkzoNobel / Dulux',['Automatic Pigging Systems (Akzo Nobel Thailand Plant)|Omron PLCs CJ2M|Omron HMI','Automatic Pigging Systems (Akzo Nobel Malaysia Plant)|Omron PLCs CJ2M|Omron HMI','PLC & Servo Migration|Siemens S7-300, S7-1200 PLCs|Siemens HMI|Yaskawa Servo']],
['scg','SCG',['Automatic Sampling Systems (Thungsong Plant)|'+W+'|'+S3,'Automatic Sampling Systems (Thaluang Plant)|'+W+'|'+S3]],
['scgp','SCG Packaging',['Air and Water|Siemens S7-300, S7-1200 PLCs|Migration from GE90-30']],
['hales','Hale\u2019s Blue Boy',['Automatic Mixer and Pasteurizer|'+W+'|'+S4]],
['pttep','PTTEP',['Refrigeration|Siemens Wincc Flexible|'+S4]],
['cityfood','City Food',['Automatic Pasteurizer Systems|Proface HMI|'+S3]],
['apf','APF',['Automatic Pasteurizer Systems|Siemens HMI|Siemens S7-1200 PLCs']],
['tcg','TCG',['Ultra Filtration Systems|Siemens HMI|Siemens S7-400 PLCs Redundancy']],
['jbe','JBE',['HVAC|AB Compact Logix PLC']],
['ktis','KTIS',['Automatic Vacuum Pan|Wago PLC|Indusoft Web Studio']],
['ramachem','Rama Chem',['Filling Machine|Delta PLCs HMI|Schneider Servo|Baykon Weight Indicator','HMI Migration|Wonderware Intouch Scada F Touch Screen to Notebook']],
['delta','Delta',['Cooling System for Database Rooms|Delta PLCs']],
['rojana','Rojana Industrial Park',['Water Treatment|Siemens S7-300, S7-1200 PLCs|iFIX Scada']],
['lion','Lion',['Pigging|Siemens S7-1200 PLCs|Proface Touch Screen']],
['yummix','Yummix',['Electrical Installation']]];
const e=s=>s.replace(/&/g,'&amp;').replace(/</g,'&lt;');
document.getElementById('refs').innerHTML=R.map(([k,n,ps])=>`<article class="client"><div class="logo"><img src="${LOGOS(k)}" alt="${e(n||'Client logo')}"></div><div><h3>${e(n)}</h3><div class="projs">${ps.map(p=>{const[t,...x]=p.split('|');return`<div class="proj"><b>${e(t)}</b>${x.map(i=>`<span>${e(i)}</span>`).join('')}</div>`}).join('')}</div></div></article>`).join('');

(()=>{const box=document.getElementById('refs'),cl=[...box.querySelectorAll('.client')],norm=s=>s.toLowerCase().replace(/[-\u2013]/g,' ').replace(/\s+/g,' ').trim(),tx=cl.map(c=>norm(c.textContent));
const tags=['Siemens','Allen-Bradley','Omron','Mitsubishi','Wonderware','Delta','Yaskawa'];let chip='',q='';
const bar=document.createElement('div');bar.className='rf';
bar.innerHTML='<input type="search" id="rq" placeholder="Search clients, equipment or systems (e.g. Siemens, pasteurizer)" aria-label="Search references"><button type="button" class="chip" aria-pressed="true" data-t="" data-l="c:All">All</button>'+tags.map(t=>`<button type="button" class="chip" aria-pressed="false" data-t="${t}">${t}</button>`).join('')+'<p class="rc" id="rc" aria-live="polite"></p>';
box.before(bar);
const lgs=R.map(([k,n])=>`<span class="lg"><img src="${LOGOS(k)}" alt="${e(n||'Client')}"></span>`).join('');
const cm=document.createElement('div');cm.className='marq cm';cm.setAttribute('aria-hidden','true');cm.innerHTML=`<div class="mt rev">${lgs}${lgs}</div>`;bar.before(cm);
function f(){const a=norm(q),b=norm(chip);let k=0;cl.forEach((c,i)=>{const ok=tx[i].includes(a)&&tx[i].includes(b);c.hidden=!ok;if(ok)k++});document.getElementById('rc').textContent=k?`Showing ${k} of ${cl.length} clients`:'No match. Try another keyword.'}
bar.querySelector('#rq').oninput=e=>{q=e.target.value;f()};
bar.addEventListener('click',e=>{const b=e.target.closest('.chip');if(!b)return;chip=b.dataset.t;bar.querySelectorAll('.chip').forEach(x=>x.setAttribute('aria-pressed',x===b));f()});f()})();
