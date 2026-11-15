/* Kero Nightwatch — interactive case-file city.
   Every fact below comes from Kerollos Nader's CV and public repositories. */

const CASES = [
  {
    id: 'ain', kind: 'product', tag: 'Ain ElHayah', type: 'Case file 01 · Product',
    title: 'Ain ElHayah', role: 'AI-powered healthcare platform',
    copy: 'Eye-disease screening needs specialists who are hard to reach. Ain ElHayah puts three computer-vision models (retinal disease detection, colour-blindness screening and diagnostics) in a Flutter app, with a voice-enabled RAG medical chatbot and doctor booking.',
    facts: ['94%+ retinal fundus accuracy', '3 CV models', 'CNNs on Huawei ModelArts', 'Top 50 · Huawei 2025'],
    links: [['GitHub', 'https://github.com/KerolosNader69/Ain_ElHayah']],
    date: 'Flutter · Python · Huawei Cloud', place: 'EL ALAMEIN · EGYPT', x: 215, h: 250
  },
  {
    id: 'examly', kind: 'product', tag: 'Examly', type: 'Case file 02 · Product · Founder',
    title: 'Examly', role: 'AI oral-exam SaaS',
    copy: 'Teachers cannot grade spoken exams at scale. Examly grades spoken, MCQ and written answers by meaning rather than keywords, with a Deepgram speech-to-text and Gemini pipeline, branded subdomains per teacher and exam-integrity checks.',
    facts: ['Live in production', 'Multi-tenant', 'English & Arabic (Egyptian)', 'RLS + 3-layer admin auth'],
    links: [['Visit examly.site', 'https://examly.site']],
    date: 'Next.js · Supabase · Deepgram · Gemini', place: 'EXAMLY.SITE · ONLINE', x: 445, h: 290
  },
  {
    id: 'vitalia', kind: 'product', tag: 'Vitalia', type: 'Case file 03 · Product',
    title: 'Vitalia Academy', role: 'Full online academy platform',
    copy: 'A complete bilingual (English & Arabic) online academy that I built end to end. Instructors publish courses, students learn and earn verifiable certificates, admins and a super admin run the platform, and an AI assistant helps learners along the way.',
    facts: ['Student · Instructor · Admin · Super admin', 'AI assistant', 'English & Arabic'],
    links: [['Visit vitalia.academy', 'https://vitalia.academy']],
    date: 'Next.js · Supabase · Cloudflare', place: 'VITALIA.ACADEMY · ONLINE', x: 560, h: 230
  },
  {
    id: 'rep', kind: 'product', tag: 'Rep Reckoner', type: 'Case file 04 · Product',
    title: 'Rep Reckoner', role: 'AI fitness app',
    copy: 'Generic workout plans ignore the person doing them. Rep Reckoner uses Gemini to build personalised training plans from each user\'s physiological data, backed by FastAPI with real-time sync through Supabase.',
    facts: ['Launched on Google Play', 'Gemini recommendations', 'Real-time sync'],
    links: [['Get it on Google Play', 'https://play.google.com/store/apps/details?id=app.rep.reckoner']],
    date: 'Flutter · FastAPI · Supabase', place: 'GOOGLE PLAY', x: 790, h: 245
  },
  {
    id: 'netezens', kind: 'role', tag: 'Netezens', type: 'Case file 05 · Role',
    title: 'Netezens', role: 'AI Team Lead · AI solutions startup',
    copy: 'Leads a 12-member AI team building intelligent features for a student activity and mentorship platform: weekly code reviews, sprint planning, AI-module architecture and production integration.',
    facts: ['12-member team', '3 production ML pipelines', '91% image-classifier accuracy'],
    links: [],
    date: 'Jan 2025 — Present', place: 'EGYPT', x: 330, h: 200
  },
  {
    id: 'icpc', kind: 'role', tag: 'ICPC AIU', type: 'Case file 06 · Role',
    title: 'ICPC Community, AIU', role: 'Technical Lead & Algorithm Instructor',
    copy: 'Built the competitive-programming curriculum the club trains on (graph theory, dynamic programming, string algorithms) and runs weekly algorithm sessions.',
    facts: ['8+ topics', '100+ members', 'Weekly sessions'],
    links: [],
    date: 'Apr 2025 — Present', place: 'EL ALAMEIN · EGYPT', x: 675, h: 180
  },
  {
    id: 'gci', kind: 'award', tag: 'GCI World', type: 'Case file 07 · Recognition',
    title: 'GCI World 2026', role: 'Honored Participant · University of Tokyo',
    copy: 'Recognised for outstanding performance in the data-science competition and capstone project of the Matsuo-Iwasawa Lab programme.',
    facts: ['25,000+ applicants', '120+ countries'],
    links: [],
    date: 'April 2026', place: 'TOKYO · JAPAN (REMOTE)', x: 905, h: 270
  },
  {
    id: 'huawei', kind: 'award', tag: 'Huawei Top 50', type: 'Case file 08 · Recognition',
    title: 'Huawei Developer Competition', role: 'Top 50 Finalist · North Africa',
    copy: 'Reached the top 50 out of 1,200+ participants with Ain ElHayah.',
    facts: ['Top 50 / 1,200+', 'Project: Ain ElHayah'],
    links: [['Project on GitHub', 'https://github.com/KerolosNader69/Ain_ElHayah']],
    date: '2025', place: 'NORTH AFRICA', x: 1020, h: 205
  },
  {
    id: 'ecpc', kind: 'award', tag: 'ICPC ECPC', type: 'Case file 09 · Recognition',
    title: 'ICPC ECPC 2024', role: 'Regional Contestant · AIU',
    copy: 'Competed in the Egyptian Collegiate Programming Contest for Alamein International University.',
    facts: ['Solved 9 of 13 problems'],
    links: [],
    date: '2024', place: 'EGYPT', x: 100, h: 190
  }
];

const ARCHIVE = [
  ['pacman', 'Pac-Man simulation where Pac-Man and a chasing ghost path-find with A*', 'Python · Pygame'],
  ['Transportation-management-system-gui', 'Trip management with employee & passenger dashboards', 'Java · Swing'],
  ['Restaurant-Management-System-master', 'Reservations on a BST, waitlist on a priority queue', 'Java'],
  ['Digital-clock', 'Clock built from logic ICs and 7-segment displays', 'Logic design']
];

const TOOLKIT = {
  Languages: ['Python', 'C++', 'Dart', 'JavaScript', 'SQL', 'Java', 'Bash'],
  'AI / ML': ['PyTorch', 'TensorFlow', 'Keras', 'CNNs', 'Transformers', 'NLP', 'RAG', 'LLMs', 'Computer Vision'],
  Frameworks: ['Flutter', 'FastAPI', 'Flask', 'Next.js 14'],
  Data: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis', 'Supabase'],
  Cloud: ['Huawei Cloud', 'AWS', 'Docker', 'GitHub Actions', 'Linux']
};

const CERTS = [
  ['Building Multi-Agent Systems', 'Microsoft & Coursera'],
  ['HCIA-AI', 'Huawei'],
  ["CS50's Introduction to AI with Python", 'Harvard University'],
  ['Neural Networks and Deep Learning', 'DeepLearning.AI'],
  ['Artificial Intelligence Training', 'Impact (IAO accredited)']
];

const LINKS = {
  email: 'mailto:kfparody809@gmail.com',
  linkedin: 'https://www.linkedin.com/in/kerollos-nader',
  github: 'https://github.com/KerolosNader69'
};

/* ── dom ─────────────────────────────────────────────── */
const $ = s => document.querySelector(s);
const svg = $('#city');
const screenEl = $('#screen');
const markerLayer = $('#marker-layer');
const beamShape = $('#beam-shape');
const spotShape = $('#spot-shape');
const statusEl = $('#status');
const progress = $('#progress');
const readout = $('#readout');
const dossier = $('#dossier');
const panel = $('#panel');
const NS = 'http://www.w3.org/2000/svg';
const H = 620, GROUND = 560, FULL_W = 1200;

let live = false, soundOn = true, audio, filter = 'all', activeId = '';
let viewX = 0, viewW = FULL_W, beamTarget = { x: 930, y: 120 };
const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ── deterministic city ──────────────────────────────── */
function rng(seed) { return () => ((seed = (seed * 16807) % 2147483647) - 1) / 2147483646; }
const rand = rng(1939);
const el = (tag, attrs) => { const n = document.createElementNS(NS, tag); for (const k in attrs) n.setAttribute(k, attrs[k]); return n; };

function buildCity() {
  const stars = $('#stars');
  for (let i = 0; i < 90; i++) stars.append(el('circle', { cx: (rand() * FULL_W).toFixed(0), cy: (rand() * 280).toFixed(0), r: [0.7, 1, 1.3][i % 3], opacity: [0.25, 0.45, 0.65][i % 3] }));

  const back = $('#skyline-back'), front = $('#skyline-front'), windows = $('#windows');
  for (let x = -10; x < FULL_W + 10;) {
    const w = 30 + rand() * 40, h = 140 + rand() * 170;
    back.append(el('rect', { x: x.toFixed(0), y: (GROUND - h).toFixed(0), width: w.toFixed(0), height: h.toFixed(0) }));
    if (rand() < 0.2) back.append(el('rect', { x: (x + w / 2 - 2).toFixed(0), y: (GROUND - h - 30).toFixed(0), width: 4, height: 30 }));
    x += w + rand() * 4;
  }

  const caseSlots = CASES.map(c => ({ from: c.x - 34, to: c.x + 34 }));
  const inSlot = x => caseSlots.some(s => x + 40 > s.from && x < s.to);
  for (let x = -10; x < FULL_W + 10;) {
    const w = 34 + rand() * 46;
    if (inSlot(x)) { x += 18; continue; }
    const h = 60 + rand() * 120;
    tower(front, windows, x, w, h, 0.05);
    x += w + rand() * 3;
  }
  CASES.forEach(c => {
    const w = 64, x = c.x - w / 2;
    tower(front, windows, x, w, c.h, 0.22);
    front.append(el('rect', { x: c.x - 2, y: GROUND - c.h - 26, width: 4, height: 26 }));
    c.top = GROUND - c.h - 26;
  });
}

function tower(front, windows, x, w, h, litChance) {
  const top = GROUND - h;
  front.append(el('rect', { x: x.toFixed(0), y: top.toFixed(0), width: w.toFixed(0), height: (h + 2).toFixed(0) }));
  if (rand() < 0.3) front.append(el('rect', { x: (x + w * 0.2).toFixed(0), y: (top - 10).toFixed(0), width: (w * 0.6).toFixed(0), height: 10 }));
  for (let wy = top + 12; wy < GROUND - 10; wy += 15)
    for (let wx = x + 7; wx < x + w - 7; wx += 11)
      if (rand() < litChance) {
        const r = el('rect', { x: wx.toFixed(0), y: wy.toFixed(0), width: 4, height: 6 });
        r.style.animationDelay = `${(rand() * 6).toFixed(2)}s`;
        windows.append(r);
      }
}

/* ── viewport & markers ──────────────────────────────── */
function fitView() {
  const { width, height } = screenEl.getBoundingClientRect();
  viewW = Math.min(FULL_W, (H * width) / height);
  clampView();
}
function clampView() {
  viewX = Math.max(0, Math.min(FULL_W - viewW, viewX));
  svg.setAttribute('viewBox', `${viewX.toFixed(1)} 0 ${viewW.toFixed(1)} ${H}`);
  placeMarkers();
  drawBeam();
}
function toScreen(x, y) {
  const m = svg.getScreenCTM(), r = screenEl.getBoundingClientRect();
  const p = new DOMPoint(x, y).matrixTransform(m);
  return { x: p.x - r.left, y: p.y - r.top };
}
function toSvg(clientX, clientY) {
  return new DOMPoint(clientX, clientY).matrixTransform(svg.getScreenCTM().inverse());
}

function createMarkers() {
  CASES.forEach(c => {
    const b = document.createElement('button');
    b.type = 'button';
    b.className = 'marker';
    b.dataset.id = c.id;
    b.dataset.kind = c.kind;
    b.setAttribute('aria-label', `Open case file: ${c.title}`);
    b.innerHTML = `<span class="tag">${c.tag}</span><span class="beacon"></span>`;
    b.addEventListener('click', e => { e.stopPropagation(); openCase(c.id); });
    b.addEventListener('mouseenter', () => { if (live) aim(c.x, c.top); });
    markerLayer.append(b);
  });
}
function placeMarkers() {
  markerLayer.querySelectorAll('.marker').forEach(m => {
    const c = CASES.find(k => k.id === m.dataset.id);
    const p = toScreen(c.x, c.top);
    m.style.left = `${p.x}px`;
    m.style.top = `${p.y}px`;
  });
}

/* ── searchlight ─────────────────────────────────────── */
function aim(x, y) { beamTarget = { x, y }; drawBeam(); }
function drawBeam() {
  const ox = viewX + viewW / 2, oy = GROUND;
  const { x, y } = beamTarget;
  const dx = x - ox, dy = y - oy, len = Math.hypot(dx, dy) || 1;
  const px = -dy / len, py = dx / len, spread = live ? 70 : 60;
  beamShape.setAttribute('points', `${ox - 6},${oy} ${ox + 6},${oy} ${x + px * spread},${y + py * spread} ${x - px * spread},${y - py * spread}`);
  spotShape.setAttribute('cx', x);
  spotShape.setAttribute('cy', y);
  spotShape.setAttribute('opacity', live ? 1 : 0);
  if (live) markerLayer.querySelectorAll('.marker').forEach(m => {
    const c = CASES.find(k => k.id === m.dataset.id);
    m.classList.toggle('is-lit', Math.hypot(c.x - x, c.top - y) < 90);
  });
}

screenEl.addEventListener('pointermove', e => {
  if (!live || e.pointerType === 'touch') return;
  const p = toSvg(e.clientX, e.clientY);
  aim(p.x, Math.min(p.y, GROUND - 20));
});

/* drag / swipe to pan when the city is wider than the screen */
let drag = null;
screenEl.addEventListener('pointerdown', e => {
  if (!live || viewW >= FULL_W || e.target.closest('button, a, .dossier, .panel')) return;
  drag = { x: e.clientX, view: viewX };
});
window.addEventListener('pointermove', e => {
  if (!drag) return;
  const scale = viewW / screenEl.getBoundingClientRect().width;
  viewX = drag.view - (e.clientX - drag.x) * scale;
  clampView();
});
window.addEventListener('pointerup', () => { drag = null; });

/* ── sound ───────────────────────────────────────────── */
function beep(freq = 660, dur = 0.07) {
  if (!soundOn) return;
  try {
    audio = audio || new (window.AudioContext || window.webkitAudioContext)();
    const o = audio.createOscillator(), g = audio.createGain();
    o.type = 'square'; o.frequency.value = freq;
    g.gain.setValueAtTime(0.04, audio.currentTime);
    g.gain.exponentialRampToValueAtTime(0.0001, audio.currentTime + dur);
    o.connect(g).connect(audio.destination);
    o.start(); o.stop(audio.currentTime + dur);
  } catch { /* audio unavailable */ }
}
$('#sound').addEventListener('click', e => {
  soundOn = !soundOn;
  e.currentTarget.setAttribute('aria-pressed', String(!soundOn));
  e.currentTarget.setAttribute('aria-label', soundOn ? 'Mute interface sound' : 'Unmute interface sound');
  e.currentTarget.textContent = soundOn ? 'SFX ON' : 'SFX OFF';
  beep(880);
});

/* ── status ──────────────────────────────────────────── */
function setStatus(text, pct) { statusEl.textContent = text; if (pct != null) progress.style.width = `${pct}%`; }

/* ── intro → live ────────────────────────────────────── */
$('#start').addEventListener('click', () => {
  beep(520, .12);
  $('#intro').classList.add('is-leaving');
  setStatus('Calibrating searchlight', 45);
  $('#loading').hidden = false;
  setTimeout(() => {
    $('#intro').hidden = true;
    $('#loading').hidden = true;
    $('#hud').hidden = false;
    live = true;
    screenEl.classList.add('live');
    updateCount();
    setStatus('Signal live · sweep the city', 100);
    aim(viewX + viewW / 2, GROUND - 260);
    beep(990, .1);
  }, reduceMotion ? 0 : 1200);
});

/* ── filters ─────────────────────────────────────────── */
document.querySelectorAll('[data-filter]').forEach(b => b.addEventListener('click', () => {
  filter = b.dataset.filter;
  document.querySelectorAll('[data-filter]').forEach(x => x.classList.toggle('is-active', x === b));
  markerLayer.querySelectorAll('.marker').forEach(m => m.classList.toggle('is-dim', filter !== 'all' && m.dataset.kind !== filter));
  updateCount();
  beep(740);
}));
function step(dir) {
  const list = CASES.filter(c => filter === 'all' || c.kind === filter).sort((a, b) => a.x - b.x);
  const i = list.findIndex(c => c.id === activeId);
  const next = list[(i + dir + list.length) % list.length] || list[0];
  openCase(next.id);
}
$('#prev').addEventListener('click', () => step(-1));
$('#next').addEventListener('click', () => step(1));
document.addEventListener('keydown', e => {
  if (!live || e.target.closest('input, textarea')) return;
  if (e.key === 'ArrowRight') step(1);
  if (e.key === 'ArrowLeft') step(-1);
});
function updateCount() {
  const n = CASES.filter(c => filter === 'all' || c.kind === filter).length;
  $('#case-count').textContent = `${String(n).padStart(2, '0')} open case files`;
}

/* ── dossier ─────────────────────────────────────────── */
function openCase(id) {
  const c = CASES.find(k => k.id === id);
  if (!c) return;
  activeId = id;
  closePanel();
  if (viewW < FULL_W) { viewX = c.x - viewW / 2; clampView(); }
  aim(c.x, c.top);
  markerLayer.querySelectorAll('.marker').forEach(m => m.classList.toggle('is-active', m.dataset.id === id));
  $('#d-type').textContent = c.type;
  $('#d-title').textContent = c.title;
  $('#d-role').textContent = c.role;
  $('#d-copy').textContent = c.copy;
  $('#d-facts').innerHTML = c.facts.map(f => `<li>${f}</li>`).join('');
  $('#d-links').innerHTML = c.links.map(([label, href]) => `<a class="btn" href="${href}" target="_blank" rel="noreferrer">${label}</a>`).join('');
  $('#d-date').textContent = c.date;
  readout.textContent = c.place;
  dossier.hidden = false;
  setStatus(`Case open · ${c.title}`, 100);
  beep(820);
}
function closeDossier() {
  dossier.hidden = true;
  activeId = '';
  markerLayer.querySelectorAll('.marker').forEach(m => m.classList.remove('is-active'));
  readout.textContent = '30.83° N · 28.95° E · EL ALAMEIN';
}
$('#dossier-close').addEventListener('click', closeDossier);

/* ── panels ──────────────────────────────────────────── */
const PANELS = {
  cases: ['FILE 01', 'Case files', () => {
    const order = ['netezens', 'icpc', 'vitalia', 'examly', 'ain', 'rep', 'gci', 'huawei', 'ecpc'];
    return order.map(id => CASES.find(c => c.id === id)).map(c => `
      <div class="entry"><time>${c.date}</time><h3>${c.title} · ${c.role}</h3><p>${c.copy}</p>
      <button class="link" type="button" data-open="${c.id}">Show on map →</button></div>`).join('') +
      `<div class="entry"><time>Earlier builds</time>${ARCHIVE.map(([repo, what, stack]) =>
        `<p><a href="https://github.com/KerolosNader69/${repo}" target="_blank" rel="noreferrer">${repo}</a>: ${what} <span style="opacity:.7">(${stack})</span></p>`).join('')}</div>`;
  }],
  toolkit: ['FILE 02', 'Toolkit', () => Object.entries(TOOLKIT).map(([k, v]) =>
    `<div class="entry"><time>${k}</time><div class="chips">${v.map(s => `<span>${s}</span>`).join('')}</div></div>`).join('')],
  recognition: ['FILE 03', 'Recognition', () =>
    CASES.filter(c => c.kind === 'award').map(c => `<div class="entry"><time>${c.date}</time><h3>${c.title}</h3><p>${c.role}. ${c.facts.join(' · ')}</p></div>`).join('') +
    `<div class="entry"><time>Certifications</time>${CERTS.map(([n, by]) => `<p><b style="color:var(--gold);font-weight:400">${n}</b> · ${by}</p>`).join('')}</div>`],
  signal: ['FILE 04', 'Signal', () => `
    <p>Building something with computer vision, LLMs or a product that needs to ship? Light the signal.</p>
    <div class="contact">
      <a class="btn primary" href="${LINKS.email}">Email · kfparody809@gmail.com</a>
      <a class="btn" href="${LINKS.linkedin}" target="_blank" rel="noreferrer">LinkedIn</a>
      <a class="btn" href="${LINKS.github}" target="_blank" rel="noreferrer">GitHub</a>
    </div>`],
  profile: ['IDENTITY', 'Kerollos Nader', () => `
    <div class="ident"><b>IDENTITY</b> ........ Kerollos Nader Mounir
<b>CLASS</b> ........... AI Engineer · Full-Stack Developer
<b>BASE</b> ............ El Alamein, Egypt
<b>EDUCATION</b> ....... B.Sc. Computer Science & Engineering
                  Alamein International University · 2027
<b>LANGUAGES</b> ....... Arabic (native) · English (professional)</div>
    <p>AI Team Lead at Netezens and Technical Lead at ICPC AIU. I lead a 12-member AI team shipping production ML, train 100+ competitive programmers, and build my own AI products end to end, from healthcare computer vision to AI-graded exams and full learning platforms.</p>`],
  help: ['MANUAL', 'How to use', () => `
    <div class="entry"><h3>Sweep</h3><p>Move the mouse to steer the searchlight. On a phone, swipe the city left and right.</p></div>
    <div class="entry"><h3>Open a case</h3><p>Each yellow beacon on a rooftop is a case file. Click it to open the dossier.</p></div>
    <div class="entry"><h3>Filter</h3><p>Use PRODUCTS, ROLES or AWARDS at the top to focus the city.</p></div>
    <div class="entry"><h3>Files</h3><p>The side buttons open the full case list, toolkit, recognition and contact.</p></div>`]
};

function openPanel(key) {
  const [idx, title, body] = PANELS[key];
  $('#panel-index').textContent = idx;
  $('#panel-title').textContent = title;
  $('#panel-body').innerHTML = body();
  panel.hidden = false;
  dossier.hidden = true;
  document.querySelectorAll('.side-nav button').forEach(b => b.classList.toggle('is-active', b.dataset.panel === key));
  setStatus(`File open · ${title}`);
  beep(600);
  $('#panel-close').focus({ preventScroll: true });
}
function closePanel() {
  panel.hidden = true;
  document.querySelectorAll('.side-nav button').forEach(b => b.classList.remove('is-active'));
}
document.querySelectorAll('[data-panel]').forEach(b => b.addEventListener('click', () => openPanel(b.dataset.panel)));
$('#panel-close').addEventListener('click', closePanel);
$('#panel-body').addEventListener('click', e => {
  const t = e.target.closest('[data-open]');
  if (!t) return;
  if (!live) $('#start').click();
  setTimeout(() => openCase(t.dataset.open), live ? 0 : 1300);
});
document.addEventListener('keydown', e => { if (e.key === 'Escape') { closePanel(); closeDossier(); } });

/* ── signal lamp: flare the sky signal and open contact ── */
$('#lamp').addEventListener('click', e => {
  const lamp = e.currentTarget;
  lamp.classList.add('is-on');
  screenEl.classList.remove('flare'); void screenEl.offsetWidth; screenEl.classList.add('flare');
  if (live) aim(930, 120);
  beep(440, .15); setTimeout(() => beep(880, .12), 160);
  openPanel('signal');
  setTimeout(() => lamp.classList.remove('is-on'), 1400);
});

/* ── boot ────────────────────────────────────────────── */
buildCity();
createMarkers();
fitView();
window.addEventListener('resize', fitView);
const deepLink = new URLSearchParams(location.search).get('case');
if (deepLink && CASES.some(c => c.id === deepLink)) { $('#start').click(); setTimeout(() => openCase(deepLink), reduceMotion ? 0 : 1300); }
