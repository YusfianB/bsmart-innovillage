// B-SMART Dashboard – Real Dataset (4 Feb – 5 Mar 2026)
const DS = [
  {d:'04/02',full:'04 Feb 2026',w:130,e:78,h:22,s:'Active',ev:''},
  {d:'05/02',full:'05 Feb 2026',w:142,e:80,h:24,s:'Active',ev:''},
  {d:'06/02',full:'06 Feb 2026',w:155,e:82,h:24,s:'Active',ev:''},
  {d:'07/02',full:'07 Feb 2026',w:168,e:84,h:24,s:'Active',ev:''},
  {d:'08/02',full:'08 Feb 2026',w:180,e:86,h:24,s:'Active',ev:''},
  {d:'09/02',full:'09 Feb 2026',w:195,e:87,h:24,s:'Active',ev:'Overload'},
  {d:'10/02',full:'10 Feb 2026',w:132,e:78,h:22,s:'Active',ev:''},
  {d:'11/02',full:'11 Feb 2026',w:145,e:80,h:24,s:'Active',ev:''},
  {d:'12/02',full:'12 Feb 2026',w:167,e:82,h:24,s:'Active',ev:''},
  {d:'13/02',full:'13 Feb 2026',w:189,e:85,h:24,s:'Active',ev:''},
  {d:'14/02',full:'14 Feb 2026',w:210,e:88,h:24,s:'Active',ev:'Overload'},
  {d:'15/02',full:'15 Feb 2026',w:198,e:86,h:23,s:'Active',ev:''},
  {d:'16/02',full:'16 Feb 2026',w:176,e:83,h:24,s:'Active',ev:''},
  {d:'17/02',full:'17 Feb 2026',w:154,e:81,h:24,s:'Active',ev:''},
  {d:'18/02',full:'18 Feb 2026',w:143,e:79,h:22,s:'Maintenance',ev:'Maintenance'},
  {d:'19/02',full:'19 Feb 2026',w:165,e:82,h:24,s:'Active',ev:''},
  {d:'20/02',full:'20 Feb 2026',w:187,e:84,h:24,s:'Active',ev:''},
  {d:'21/02',full:'21 Feb 2026',w:220,e:87,h:24,s:'Active',ev:'Overload'},
  {d:'22/02',full:'22 Feb 2026',w:240,e:90,h:24,s:'Active',ev:'Overload'},
  {d:'23/02',full:'23 Feb 2026',w:225,e:89,h:24,s:'Active',ev:'Overload'},
  {d:'24/02',full:'24 Feb 2026',w:205,e:87,h:24,s:'Active',ev:''},
  {d:'25/02',full:'25 Feb 2026',w:190,e:85,h:24,s:'Active',ev:''},
  {d:'26/02',full:'26 Feb 2026',w:172,e:83,h:24,s:'Active',ev:''},
  {d:'27/02',full:'27 Feb 2026',w:160,e:82,h:23,s:'Active',ev:''},
  {d:'28/02',full:'28 Feb 2026',w:148,e:80,h:22,s:'Active',ev:''},
  {d:'01/03',full:'01 Mar 2026',w:155,e:82,h:24,s:'Active',ev:''},
  {d:'02/03',full:'02 Mar 2026',w:168,e:84,h:24,s:'Active',ev:''},
  {d:'03/03',full:'03 Mar 2026',w:182,e:86,h:24,s:'Active',ev:''},
  {d:'04/03',full:'04 Mar 2026',w:200,e:88,h:24,s:'Active',ev:'Overload'},
  {d:'05/03',full:'05 Mar 2026',w:215,e:90,h:24,s:'Active',ev:'Overload'}
];

document.addEventListener('DOMContentLoaded', () => {
  initSidebar();
  initParticles();
  initSparklines();
  initMainChart();
  initDonutChart();
  initEffChart();
  initWeekChart();
  initEnvChart();
  populateTable();
  populateReports();
  initReportForm();
  initLightbox();
  initNavScroll();
  setTimeout(() => showToast('Sistem Online','B-SMART aktif · Data 4 Feb – 5 Mar 2026','success'), 1500);
  setTimeout(() => showToast('⚠ Event Overload','Tercatat 7 event overload selama periode operasional','warning'), 4000);
});

// Sidebar
function initSidebar() {
  document.getElementById('menuToggle')?.addEventListener('click', () => {
    document.getElementById('sidebar').classList.toggle('open');
    document.getElementById('sidebarOverlay').classList.toggle('visible');
  });
}
function closeSidebar() {
  document.getElementById('sidebar').classList.remove('open');
  document.getElementById('sidebarOverlay').classList.remove('visible');
}

// Particles
function initParticles() {
  const c = document.getElementById('heroParticles');
  if (!c) return;
  for (let i = 0; i < 20; i++) {
    const s = document.createElement('span');
    s.style.cssText = `left:${Math.random()*100}%;top:${Math.random()*100}%;width:${Math.random()*4+2}px;height:${s.style.width};animation-duration:${Math.random()*8+6}s;animation-delay:${Math.random()*5}s;opacity:${Math.random()*0.4+0.1}`;
    c.appendChild(s);
  }
}

// Sparklines
function initSparklines() {
  spark('sparkline1',[130,145,160,175,185,195,205,215,225,240],'#06b6d4');
  spark('sparkline2',[78,80,82,84,85,87,87,88,89,90],'#10b981');
  spark('sparkline3',[7,7,7,7,7,7,7,7,7,7],'#f59e0b');
  spark('sparkline4',[630,640,650,660,670,680,690,695,697,697],'#8b5cf6');
}
function spark(id, data, color) {
  const cv = document.getElementById(id); if (!cv) return;
  const ctx = cv.getContext('2d'), w=cv.width, h=cv.height;
  const mn=Math.min(...data), mx=Math.max(...data), rng=mx-mn||1;
  const pts = data.map((v,i)=>({x:(i/(data.length-1))*w, y:h-((v-mn)/rng)*h*0.85}));
  const g=ctx.createLinearGradient(0,0,0,h);
  g.addColorStop(0,color+'40'); g.addColorStop(1,color+'05');
  ctx.beginPath(); ctx.moveTo(pts[0].x,h);
  pts.forEach(p=>ctx.lineTo(p.x,p.y));
  ctx.lineTo(pts[pts.length-1].x,h); ctx.closePath();
  ctx.fillStyle=g; ctx.fill();
  ctx.beginPath(); ctx.moveTo(pts[0].x,pts[0].y);
  pts.forEach(p=>ctx.lineTo(p.x,p.y));
  ctx.strokeStyle=color; ctx.lineWidth=2; ctx.stroke();
}

// Default chart options
function cOpts(extra={}) {
  return { responsive:true, maintainAspectRatio:true, animation:false,
    plugins:{ legend:{ labels:{color:'#94a3b8',font:{size:11,family:'Inter'},boxWidth:12,padding:14} },
      tooltip:{backgroundColor:'#111827',titleColor:'#e2e8f0',bodyColor:'#94a3b8',borderColor:'#1e293b',borderWidth:1,padding:10} },
    ...extra };
}
const scaleOpts = {
  x:{ticks:{color:'#64748b',font:{size:11}},grid:{color:'rgba(255,255,255,0.04)'},border:{display:false}},
  y:{ticks:{color:'#64748b',font:{size:11}},grid:{color:'rgba(255,255,255,0.04)'},border:{display:false}}
};

// Main: Bar + Line (weight + efficiency)
function initMainChart() {
  const cv = document.getElementById('dailyWasteChart'); if (!cv) return;
  new Chart(cv, { type:'bar', data:{
    labels: DS.map(d=>d.d),
    datasets:[
      { label:'Berat Sampah (kg)', data:DS.map(d=>d.w),
        backgroundColor: DS.map(d=>d.ev==='Overload'?'rgba(239,68,68,0.7)':d.ev==='Maintenance'?'rgba(245,158,11,0.7)':'rgba(6,182,212,0.65)'),
        borderColor: DS.map(d=>d.ev==='Overload'?'#ef4444':d.ev==='Maintenance'?'#f59e0b':'#06b6d4'),
        borderWidth:1, borderRadius:4, yAxisID:'y' },
      { label:'Efektivitas (%)', data:DS.map(d=>d.e), type:'line',
        borderColor:'#f59e0b', backgroundColor:'rgba(245,158,11,0.08)',
        borderWidth:2, pointRadius:2, tension:0.4, yAxisID:'y1', fill:true }
    ]
  }, options: cOpts({ scales:{
    y:{...scaleOpts.y, position:'left', title:{display:true,text:'kg',color:'#94a3b8',font:{size:11}}},
    y1:{position:'right', ticks:{color:'#64748b',font:{size:11},callback:v=>v+'%'}, grid:{drawOnChartArea:false}, border:{display:false}, min:70, max:95},
    x:{...scaleOpts.x, ticks:{color:'#64748b',font:{size:9},maxRotation:45}}
  }})});
}

// Donut: Active / Overload / Maintenance
function initDonutChart() {
  const cv = document.getElementById('categoryChart'); if (!cv) return;
  const overload=DS.filter(d=>d.ev==='Overload').length;
  const maint=DS.filter(d=>d.s==='Maintenance').length;
  const active=DS.length-overload-maint;
  new Chart(cv, { type:'doughnut', data:{
    labels:['Hari Normal','Event Overload','Maintenance'],
    datasets:[{ data:[active,overload,maint],
      backgroundColor:['rgba(6,182,212,0.8)','rgba(239,68,68,0.8)','rgba(245,158,11,0.8)'],
      borderColor:['#06b6d4','#ef4444','#f59e0b'], borderWidth:2, hoverBorderWidth:3 }]
  }, options:{ responsive:true, maintainAspectRatio:true, cutout:'70%', animation:false,
    plugins:{ legend:{display:false}, tooltip:{backgroundColor:'#111827',titleColor:'#e2e8f0',bodyColor:'#94a3b8',borderColor:'#1e293b',borderWidth:1} }
  }});
  const leg = document.getElementById('donutLegend');
  if (leg) {
    [['#06b6d4',`Normal: ${active} hari`],['#ef4444',`Overload: ${overload}x`],['#f59e0b',`Maintenance: ${maint}x`]]
      .forEach(([c,l])=>{
        const el=document.createElement('div'); el.className='dl-item';
        el.innerHTML=`<div class="dl-dot" style="background:${c}"></div><span>${l}</span>`;
        leg.appendChild(el);
      });
  }
}

// Efficiency trend
function initEffChart() {
  const cv = document.getElementById('efficiencyChart'); if (!cv) return;
  new Chart(cv, { type:'line', data:{
    labels: DS.map(d=>d.d),
    datasets:[{ label:'Efektivitas (%)', data:DS.map(d=>d.e),
      borderColor:'#10b981', backgroundColor:'rgba(16,185,129,0.1)',
      borderWidth:2.5, pointRadius:3,
      pointBackgroundColor: DS.map(d=>d.ev==='Overload'?'#ef4444':d.ev==='Maintenance'?'#f59e0b':'#10b981'),
      tension:0.4, fill:true }]
  }, options: cOpts({ scales:{
    y:{...scaleOpts.y, min:70, max:95, ticks:{...scaleOpts.y.ticks,callback:v=>v+'%'}},
    x:{...scaleOpts.x, ticks:{color:'#64748b',font:{size:9},maxRotation:45}}
  }})});
}

// Weekly bar
function initWeekChart() {
  const cv = document.getElementById('categoryBarChart'); if (!cv) return;
  const weeks = [
    {l:'Minggu 1\n(4-10 Feb)', w:DS.slice(0,7).reduce((a,d)=>a+d.w,0)},
    {l:'Minggu 2\n(11-17 Feb)', w:DS.slice(7,14).reduce((a,d)=>a+d.w,0)},
    {l:'Minggu 3\n(18-24 Feb)', w:DS.slice(14,21).reduce((a,d)=>a+d.w,0)},
    {l:'Minggu 4\n(25 Feb-3 Mar)', w:DS.slice(21,28).reduce((a,d)=>a+d.w,0)},
    {l:'Minggu 5\n(4-5 Mar)', w:DS.slice(28).reduce((a,d)=>a+d.w,0)}
  ];
  new Chart(cv, { type:'bar', data:{
    labels: weeks.map(w=>w.l),
    datasets:[{ label:'Total Berat (kg)', data:weeks.map(w=>w.w),
      backgroundColor:['rgba(6,182,212,0.7)','rgba(139,92,246,0.7)','rgba(239,68,68,0.7)','rgba(16,185,129,0.7)','rgba(245,158,11,0.7)'],
      borderColor:['#06b6d4','#8b5cf6','#ef4444','#10b981','#f59e0b'],
      borderWidth:1, borderRadius:6 }]
  }, options: cOpts({ scales:{
    y:{...scaleOpts.y, ticks:{...scaleOpts.y.ticks,callback:v=>v+' kg'}},
    x:{...scaleOpts.x}
  }})});
}

// Env chart → durasi operasional harian
function initEnvChart() {
  const cv = document.getElementById('envChart'); if (!cv) return;
  new Chart(cv, { type:'line', data:{
    labels: DS.map(d=>d.d),
    datasets:[
      { label:'Durasi (Jam)', data:DS.map(d=>d.h),
        borderColor:'#06b6d4', backgroundColor:'rgba(6,182,212,0.08)',
        borderWidth:2, pointRadius:2, tension:0.3, fill:true },
      { label:'Efektivitas (%)', data:DS.map(d=>d.e),
        borderColor:'#10b981', backgroundColor:'rgba(16,185,129,0.06)',
        borderWidth:2, pointRadius:2, tension:0.3, fill:true }
    ]
  }, options: cOpts({ scales:{
    y:{...scaleOpts.y},
    x:{...scaleOpts.x, ticks:{color:'#64748b',font:{size:9},maxRotation:45}}
  }})});
}

// Populate table
function populateTable() {
  const tb = document.getElementById('tableBody'); if (!tb) return;
  DS.forEach((r,i)=>{
    const tr = document.createElement('tr');
    const sc = r.s==='Maintenance'?'warn':'aktif';
    const evBadge = r.ev ? `<span class="status-pill ${r.ev==='Overload'?'err':'warn'}" style="font-size:0.68rem">${r.ev}</span>` : '<span style="color:#475569">—</span>';
    tr.innerHTML = `
      <td style="color:#64748b">${i+1}</td>
      <td><strong>${r.full}</strong></td>
      <td><strong style="color:#06b6d4">${r.w} kg</strong></td>
      <td>
        <div style="display:flex;align-items:center;gap:0.5rem">
          <div style="height:5px;flex:1;background:rgba(255,255,255,0.06);border-radius:3px;overflow:hidden">
            <div style="height:100%;width:${r.e}%;background:${r.e>=88?'#10b981':r.e>=82?'#06b6d4':'#f59e0b'};border-radius:3px"></div>
          </div>
          <span style="color:#e2e8f0;font-weight:600;width:36px">${r.e}%</span>
        </div>
      </td>
      <td>${r.h} jam</td>
      <td>${evBadge}</td>
      <td><span class="status-pill ${sc}">● ${r.s}</span></td>`;
    tb.appendChild(tr);
  });
}

// Export CSV
function exportCSV() {
  const rows = DS.map((r,i)=>[i+1,r.full,r.w,r.e,r.h,r.s,r.ev||'-'].join(','));
  const csv = ['No,Tanggal,Berat_kg,Efektivitas_%,Durasi_Jam,Status,Event',...rows].join('\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([csv],{type:'text/csv'}));
  a.download = 'bsmart_data_feb_mar2026.csv';
  a.click();
  showToast('Export Berhasil','File bsmart_data_feb_mar2026.csv berhasil diunduh','success');
}

// Reports
const REPORTS = [
  {name:'Bapak Sukarman',loc:'Jembatan Pejagan Utara',cat:'Sampah Plastik',desc:'Tumpukan sampah plastik di sisi barat jembatan, cukup banyak dan mengganggu aliran air.',time:'05 Mar 2026, 08:32',status:'Ditangani'},
  {name:'Ibu Rahmawati',loc:'Permukiman RT 04',cat:'Sampah Plastik',desc:'Warga membuang kantong plastik bekas belanja ke sungai. Perlu edukasi lebih lanjut.',time:'23 Feb 2026, 15:10',status:'Ditangani'},
  {name:'Mas Agung',loc:'Saluran Irigasi Selatan',cat:'Pencemaran Air',desc:'Air sungai di dekat saluran irigasi tampak agak hitam kemungkinan ada limbah yang masuk.',time:'21 Feb 2026, 11:45',status:'Proses'},
  {name:'Pak Zainudin',loc:'Tikungan Sungai Selatan',cat:'Sampah Plastik',desc:'Sampah botol dan kemasan plastik bertumpuk di tikungan sungai karena arus lambat.',time:'14 Feb 2026, 09:15',status:'Ditangani'},
  {name:'Dinas LH Bangkalan',loc:'Area Pemantauan Utama',cat:'Monitoring',desc:'Kunjungan lapangan tim DLH untuk verifikasi data sistem B-SMART dan kondisi sungai.',time:'09 Feb 2026, 14:20',status:'Ditangani'}
];
function populateReports() {
  const list = document.getElementById('reportList'); if (!list) return;
  REPORTS.forEach(r=>{
    const bc = r.status==='Ditangani'?'#10b981':r.status==='Proses'?'#f59e0b':'#06b6d4';
    const sc = r.status==='Ditangani'?'aktif':'warn';
    const d = document.createElement('div'); d.className='report-item'; d.style.borderLeftColor=bc;
    d.innerHTML=`<div class="ri-head"><span class="ri-name">${r.name}</span><span class="ri-time">${r.time}</span></div>
      <div class="ri-loc"><i class="fas fa-map-marker-alt"></i> ${r.loc} · <span style="color:#f59e0b;font-size:0.7rem">${r.cat}</span></div>
      <div class="ri-desc">${r.desc}</div>
      <div style="margin-top:0.5rem"><span class="status-pill ${sc}" style="font-size:0.68rem">${r.status}</span></div>`;
    list.appendChild(d);
  });
}

function initReportForm() {
  document.getElementById('reportForm')?.addEventListener('submit', e=>{
    e.preventDefault();
    const name = document.getElementById('rep-name').value||'Anonim';
    const loc = document.getElementById('rep-location').value||'tidak disebutkan';
    showToast('Laporan Terkirim!',`Terima kasih ${name}. Laporan dari "${loc}" diterima.`,'success');
    e.target.reset();
    document.getElementById('photoPreview').innerHTML='';
  });
}
function handlePhotoUpload(inp) {
  const f=inp.files[0]; if(!f) return;
  const r=new FileReader();
  r.onload=e=>{ document.getElementById('photoPreview').innerHTML=`<img src="${e.target.result}" style="max-width:100%;border-radius:8px;margin-top:0.5rem;max-height:120px;object-fit:cover">`; };
  r.readAsDataURL(f);
}

// Lightbox
const LB=[
  {src:'images/WhatsApp Image 2026-04-22 at 11.30.52.jpeg',cap:'Panel Kontrol Listrik & Komponen MCB/Relay'},
  {src:'images/WhatsApp Image 2026-04-22 at 11.30.53 (1).jpeg',cap:'Fabrikasi Rangka Aluminium – Tim B-SMART'},
  {src:'images/WhatsApp Image 2026-04-22 at 11.30.53 (2).jpeg',cap:'Proses Pemotongan & Perakitan Material'},
  {src:'images/WhatsApp Image 2026-04-22 at 11.30.53.jpeg',cap:'Control Panel Selesai – Indikator LED Aktif'},
  {src:'images/WhatsApp Image 2026-04-22 at 11.30.55.jpeg',cap:'Perakitan Struktur Utama Sistem B-SMART'},
  {src:'images/WhatsApp Image 2026-04-22 at 11.30.57.jpeg',cap:'Proses Finishing & Quality Control Rangka'},
  {src:'images/WhatsApp Image 2026-04-22 at 11.30.58.jpeg',cap:'Detail Pemasangan Komponen Rangka'}
];
let lbIdx=0;
function openLightbox(i){lbIdx=i;document.getElementById('lbImg').src=LB[i].src;document.getElementById('lbCaption').textContent=LB[i].cap;document.getElementById('lightbox').classList.add('active');document.body.style.overflow='hidden';}
function closeLightbox(){document.getElementById('lightbox').classList.remove('active');document.body.style.overflow='';}
function prevLB(){lbIdx=(lbIdx-1+LB.length)%LB.length;document.getElementById('lbImg').src=LB[lbIdx].src;document.getElementById('lbCaption').textContent=LB[lbIdx].cap;}
function nextLB(){lbIdx=(lbIdx+1)%LB.length;document.getElementById('lbImg').src=LB[lbIdx].src;document.getElementById('lbCaption').textContent=LB[lbIdx].cap;}
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeLightbox();if(e.key==='ArrowLeft')prevLB();if(e.key==='ArrowRight')nextLB();});

// Nav scroll
function initNavScroll() {
  const items = document.querySelectorAll('.nav-item[href^="#"]');
  const secs = document.querySelectorAll('.content-section[id]');
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        const id = e.target.id;
        items.forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + id));
      }
    });
  }, { threshold: 0.2, rootMargin: '-70px 0px -55% 0px' });
  secs.forEach(s => obs.observe(s));
  items.forEach(a => a.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(a.getAttribute('href'))?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    closeSidebar();
  }));
}


// Toast
function showToast(title, msg, type='info') {
  const icons={success:'fa-check-circle',warning:'fa-triangle-exclamation',error:'fa-circle-xmark',info:'fa-info-circle'};
  const t=document.createElement('div'); t.className=`toast ${type}`;
  t.innerHTML=`<i class="fas ${icons[type]} toast-icon"></i><div><div class="toast-title">${title}</div><div class="toast-msg">${msg}</div></div>`;
  document.getElementById('toastContainer').appendChild(t);
  setTimeout(()=>{t.style.cssText='transition:all 0.3s ease;transform:translateX(110%);opacity:0';setTimeout(()=>t.remove(),300);},5000);
}

console.log('%cB-SMART Dashboard v2.1','color:#06b6d4;font-size:18px;font-weight:900');
console.log('%cDataset: 4 Feb – 5 Mar 2026 | Total: 5.316 kg | Efektivitas: 83.9%','color:#10b981;font-size:12px');
