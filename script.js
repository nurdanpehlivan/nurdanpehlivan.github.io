// Content lives in i18n.js (UI, PROJECTS, SKILLS, EXPERIENCE, AWARDS, ROLES, CATEGORIES, PM).
const reduceMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const PLAY_ICON = '<svg viewBox="0 0 24 24" class="fill"><path d="M4.2 2.4 13.6 12l-9.4 9.6c-.4-.2-.7-.7-.7-1.2V3.6c0-.5.3-1 .7-1.2zm10.8 8.2L6 2.1l11.3 6.5-2.3 2zm0 2.8 2.3 2L6 21.9l9-8.5zm3.6-4 2.6 1.5c.8.5.8 1.7 0 2.2l-2.6 1.5-2.6-2.5 2.6-2.7z"/></svg>';

// ---------- Language ----------
let lang = (() => {
  try { const s = localStorage.getItem('lang'); if (s) return s; } catch {}
  return (navigator.language || 'tr').toLowerCase().startsWith('tr') ? 'tr' : 'en';
})();
const L = v => (v && typeof v === 'object' && !Array.isArray(v) ? v[lang] : v);
const T = (key, vars = {}) => Object.entries(vars).reduce((s, [k, v]) => s.replaceAll(`{${k}}`, v), L(UI[key]) ?? key);

// ---------- Helpers ----------
const toastEl = $('#toast');
let toastTimer;
function toast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add('show');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove('show'), 2200);
}
async function copyEmail(text = 'nurdan37pehlivan@gmail.com') {
  try { await navigator.clipboard.writeText(text); toast(T('ui.copied')); }
  catch { location.href = 'mailto:' + text; }
}
$$('[data-copy]').forEach(b => b.addEventListener('click', () => copyEmail(b.dataset.copy)));
$('#year').textContent = new Date().getFullYear();

function setTheme(t) {
  document.documentElement.dataset.theme = t;
  try { localStorage.setItem('theme', t); } catch {}
}
function toggleTheme() { setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'); }
$('#themeBtn').addEventListener('click', toggleTheme);

// ---------- Nav ----------
const nav = $('#nav'), progress = $('.progress');
const menuBtn = $('#menuBtn'), navLinks = $('#navLinks');
menuBtn.addEventListener('click', () => {
  const open = navLinks.classList.toggle('open');
  menuBtn.setAttribute('aria-expanded', open);
});
$$('a', navLinks).forEach(a => a.addEventListener('click', () => navLinks.classList.remove('open')));

function onScroll() {
  const y = scrollY, h = document.documentElement.scrollHeight - innerHeight;
  nav.classList.toggle('scrolled', y > 20);
  progress.style.transform = `scaleX(${h > 0 ? y / h : 0})`;
  updateTimeline();
}
addEventListener('scroll', onScroll, { passive: true });

const sectionObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) $$('a', navLinks).forEach(a => a.classList.toggle('active', a.getAttribute('href') === '#' + e.target.id));
  });
}, { rootMargin: '-45% 0px -50% 0px' });
$$('main section[id]').forEach(s => sectionObserver.observe(s));

// ---------- Typing ----------
let typeTimer;
function startTyping() {
  const el = $('#typed'), roles = ROLES[lang];
  clearTimeout(typeTimer);
  if (reduceMotion) { el.textContent = roles[0]; return; }
  let r = 0, i = 0, deleting = false;
  (function tick() {
    const word = roles[r];
    el.textContent = word.slice(0, i);
    if (!deleting && i === word.length) { deleting = true; typeTimer = setTimeout(tick, 1600); return; }
    if (deleting && i === 0) { deleting = false; r = (r + 1) % roles.length; }
    i += deleting ? -1 : 1;
    typeTimer = setTimeout(tick, deleting ? 35 : 70);
  })();
}

// ---------- Particles ----------
(function particles() {
  const canvas = $('#particles'), ctx = canvas.getContext('2d');
  let w, h, pts = [], running = true;
  const mouse = { x: -9999, y: -9999 };
  const dpr = Math.min(devicePixelRatio || 1, 2);
  function resize() {
    w = canvas.clientWidth; h = canvas.clientHeight;
    canvas.width = w * dpr; canvas.height = h * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.min(110, Math.floor(w * h / 14000));
    pts = Array.from({ length: n }, () => ({ x: Math.random() * w, y: Math.random() * h, vx: (Math.random() - .5) * .35, vy: (Math.random() - .5) * .35, r: Math.random() * 1.6 + .6 }));
  }
  function draw() {
    if (!running) return;
    const c = getComputedStyle(document.documentElement).getPropertyValue('--particle').trim();
    ctx.clearRect(0, 0, w, h);
    for (const p of pts) {
      const dx = p.x - mouse.x, dy = p.y - mouse.y, d = Math.hypot(dx, dy);
      if (d < 130) { p.x += dx / d * 1.4; p.y += dy / d * 1.4; }
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0 || p.x > w) p.vx *= -1;
      if (p.y < 0 || p.y > h) p.vy *= -1;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fillStyle = `rgba(${c},.75)`; ctx.fill();
    }
    for (let i = 0; i < pts.length; i++) {
      for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 120) { ctx.strokeStyle = `rgba(${c},${(1 - d / 120) * .25})`; ctx.lineWidth = 1; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      const a = pts[i], dm = Math.hypot(a.x - mouse.x, a.y - mouse.y);
      if (dm < 180) { ctx.strokeStyle = `rgba(${c},${(1 - dm / 180) * .5})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(mouse.x, mouse.y); ctx.stroke(); }
    }
    requestAnimationFrame(draw);
  }
  const hero = $('.hero');
  hero.addEventListener('pointermove', e => { const r = canvas.getBoundingClientRect(); mouse.x = e.clientX - r.left; mouse.y = e.clientY - r.top; });
  hero.addEventListener('pointerleave', () => { mouse.x = mouse.y = -9999; });
  new IntersectionObserver(([e]) => { const was = running; running = e.isIntersecting; if (running && !was && !reduceMotion) draw(); }).observe(hero);
  addEventListener('resize', resize);
  resize();
  if (!reduceMotion) draw();
})();

// ---------- Cursor glow + phone tilt ----------
const glow = $('.cursor-glow');
addEventListener('pointermove', e => { glow.style.left = e.clientX + 'px'; glow.style.top = e.clientY + 'px'; }, { passive: true });

function tiltOnHover(area, target, strength) {
  if (reduceMotion) return;
  area.addEventListener('pointermove', e => {
    const r = area.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    target.style.transform = `rotateY(${x * strength}deg) rotateX(${-y * strength * .7}deg)`;
  });
  area.addEventListener('pointerleave', () => { target.style.transform = ''; });
}
tiltOnHover($('.hero'), $('#portrait'), 14);

(function phone() {
  const phone = $('#phone'), img = $('#phoneImg'), dots = $('#shotDots');
  const shots = PROJECTS[0].shots;
  let idx = 0, timer;
  tiltOnHover($('#showcase'), phone, 22);
  dots.innerHTML = shots.map((_, i) => `<button type="button" aria-label="${i + 1}" class="${i === 0 ? 'on' : ''}"></button>`).join('');
  function show(i) {
    img.classList.add('swap');
    setTimeout(() => {
      idx = (i + shots.length) % shots.length; img.src = shots[idx]; img.classList.remove('swap');
      $$('button', dots).forEach((d, j) => d.classList.toggle('on', j === idx));
    }, 350);
  }
  const auto = () => { clearInterval(timer); timer = setInterval(() => show(idx + 1), 3200); };
  dots.addEventListener('click', e => { const b = e.target.closest('button'); if (b) { show([...dots.children].indexOf(b)); auto(); } });
  shots.forEach(s => { const i = new Image(); i.src = s; });
  auto();
  phone.style.cursor = 'pointer';
  phone.addEventListener('click', () => openProject('frizzy'));
  $('#showDetails').addEventListener('click', () => openProject('frizzy'));
  $('#showPlay').insertAdjacentHTML('afterbegin', PLAY_ICON);
})();

// ---------- Project management ----------
function renderPM() {
  $('#pmGrid').innerHTML = PM.map(c => `
    <article class="pm-card reveal">
      <div class="pm-top"><span class="pm-icon">${c.icon}</span><span class="pm-stat">${L(c.stat)}</span></div>
      <h3>${L(c.title)}</h3>
      <p>${L(c.text)}</p>
    </article>`).join('');
  $('#pmSkills').innerHTML = PM_SKILLS.map(s => `<span class="skill">${L(s)}</span>`).join('');
  observeReveals($('#pmGrid'));
}

// ---------- Magnetic buttons ----------
if (!reduceMotion) $$('.magnetic').forEach(b => {
  b.addEventListener('pointermove', e => {
    const r = b.getBoundingClientRect();
    b.style.transform = `translate(${(e.clientX - r.left - r.width / 2) * .25}px, ${(e.clientY - r.top - r.height / 2) * .35}px)`;
  });
  b.addEventListener('pointerleave', () => { b.style.transform = ''; });
});

// ---------- Reveal + counters ----------
let firstRender = true;
const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in');
    $$('[data-count]', e.target).forEach(countUp);
    revealObserver.unobserve(e.target);
  });
}, { threshold: .12, rootMargin: '0px 0px -40px 0px' });
function observeReveals(root) {
  $$('.reveal:not(.in)', root).forEach((el, i) => {
    if (!firstRender) { el.classList.add('in'); return; }
    el.style.transitionDelay = `${(i % 3) * 80}ms`;
    revealObserver.observe(el);
  });
}
function countUp(el) {
  const target = +el.dataset.count, suffix = el.dataset.suffix || '';
  if (reduceMotion) { el.textContent = target + suffix; return; }
  const start = performance.now(), dur = 1400;
  (function step(t) {
    const k = Math.min(1, (t - start) / dur), eased = 1 - Math.pow(1 - k, 3);
    el.textContent = Math.round(target * eased) + suffix;
    if (k < 1) requestAnimationFrame(step);
  })(start);
}

// ---------- Projects ----------
const grid = $('#projectGrid'), filtersEl = $('#filters'), activeTechEl = $('#activeTech');
let currentCat = 'all', currentTech = null;
const projTech = p => p.tech.map(L);
const arrow = '<svg viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';

function renderProjects() {
  grid.innerHTML = PROJECTS.map(p => `
    <article class="card reveal ${p.featured ? 'featured' : ''}" data-id="${p.id}" tabindex="0" role="button" aria-label="${L(p.title)}">
      <div class="card-media" style="background:${p.icon.bg || 'radial-gradient(circle at 30% 20%, #ffe9d6, #e9f7ef 70%)'}">
        ${p.shots ? `<div class="shots">${p.shots.slice(0, 3).map(s => `<img src="${s}" alt="" loading="lazy">`).join('')}</div>` : `<span class="art">${p.icon.emoji}</span>`}
      </div>
      <div class="card-body">
        <div class="card-meta"><span>${p.year}</span><span class="badge ${p.live ? 'live' : ''}">${L(p.badge)}</span></div>
        <h3>${L(p.title)}</h3>
        <p>${L(p.short)}</p>
        <div class="tags">${projTech(p).slice(0, p.featured ? 8 : 4).map(t => `<span class="tag">${t}</span>`).join('')}</div>
        <span class="card-more">${T('ui.details')} ${arrow}</span>
      </div>
    </article>`).join('');
  filtersEl.innerHTML = CATEGORIES.map(c => {
    const n = c.id === 'all' ? PROJECTS.length : PROJECTS.filter(p => p.cats.includes(c.id)).length;
    return `<button class="chip" data-cat="${c.id}" role="tab">${L(c.label)}<span class="count">${n}</span></button>`;
  }).join('');
  observeReveals(grid);
  applyFilter();
}

function applyFilter() {
  $$('.chip', filtersEl).forEach(c => c.classList.toggle('active', c.dataset.cat === currentCat));
  $$('.card', grid).forEach(card => {
    const p = PROJECTS.find(x => x.id === card.dataset.id);
    const show = (currentCat === 'all' || p.cats.includes(currentCat)) && (!currentTech || projTech(p).includes(currentTech));
    card.classList.toggle('hide', !show);
  });
  activeTechEl.hidden = !currentTech;
  if (currentTech) activeTechEl.innerHTML = `<span>${T('projects.using', { t: currentTech })}</span><button type="button">${T('projects.clear')}</button>`;
}
filtersEl.addEventListener('click', e => {
  const b = e.target.closest('.chip'); if (!b) return;
  currentCat = b.dataset.cat; applyFilter();
});
activeTechEl.addEventListener('click', e => { if (e.target.closest('button')) { currentTech = null; applyFilter(); } });
grid.addEventListener('click', e => { const c = e.target.closest('.card'); if (c) openProject(c.dataset.id); });
grid.addEventListener('keydown', e => { if ((e.key === 'Enter' || e.key === ' ') && e.target.classList.contains('card')) { e.preventDefault(); openProject(e.target.dataset.id); } });

if (!reduceMotion && matchMedia('(hover: hover)').matches) {
  grid.addEventListener('pointermove', e => {
    const card = e.target.closest('.card'); if (!card) return;
    const r = card.getBoundingClientRect(), x = e.clientX - r.left, y = e.clientY - r.top;
    card.style.setProperty('--mx', x + 'px'); card.style.setProperty('--my', y + 'px');
    card.style.transform = `perspective(900px) rotateX(${(y / r.height - .5) * -6}deg) rotateY(${(x / r.width - .5) * 6}deg) translateY(-4px)`;
  });
  grid.addEventListener('pointerout', e => {
    const card = e.target.closest('.card');
    if (card && !card.contains(e.relatedTarget)) card.style.transform = '';
  });
}

// ---------- Modal ----------
const modal = $('#modal'), modalBody = $('#modalBody');
let lastFocus, openId = null;
function openProject(id) {
  const p = PROJECTS.find(x => x.id === id); if (!p) return;
  if (modal.hidden) lastFocus = document.activeElement;
  openId = id;
  modalBody.innerHTML = `
    <div class="modal-hero">
      <div class="m-icon" style="background:${p.icon.bg || 'transparent'}">${p.icon.img ? `<img src="${p.icon.img}" alt="">` : p.icon.emoji}</div>
      <div><h3 id="modalTitle">${L(p.title)}</h3><p class="m-sub">${L(p.subtitle)} · ${p.year}</p></div>
    </div>
    <p class="m-desc">${L(p.desc)}</p>
    ${p.shots ? `
      <div class="gallery">
        <div class="gallery-track">${p.shots.map((s, i) => `<img src="${s}" alt="${L(p.title)} ${i + 1}">`).join('')}</div>
        <button class="icon-btn gallery-nav prev" aria-label="Previous"><svg viewBox="0 0 24 24"><path d="M15 6l-6 6 6 6"/></svg></button>
        <button class="icon-btn gallery-nav next" aria-label="Next"><svg viewBox="0 0 24 24"><path d="M9 6l6 6-6 6"/></svg></button>
      </div>` : ''}
    <h4>${T('projects.did')}</h4>
    <ul>${L(p.points).map(x => `<li>${x}</li>`).join('')}</ul>
    <h4>${T('projects.tech')}</h4>
    <div class="tags">${projTech(p).map(t => `<span class="tag">${t}</span>`).join('')}</div>
    ${p.links.length ? `<div class="modal-links">${p.links.map(l => l.play
      ? `<a class="btn play" href="${l.url}" target="_blank" rel="noopener">${PLAY_ICON}<span>${T('projects.play')}</span></a>`
      : `<a class="btn ghost" href="${l.url}" target="_blank" rel="noopener">${l.label} <svg viewBox="0 0 24 24"><path d="M7 17 17 7M8 7h9v9"/></svg></a>`).join('')}</div>` : ''}
    ${p.links.some(l => l.play) ? `<p class="play-note">${T('projects.playNote')}</p>` : ''}
  `;
  modal.hidden = false;
  document.body.style.overflow = 'hidden';
  $('.modal-close').focus();
  const track = $('.gallery-track', modalBody);
  if (track) {
    $('.prev', modalBody).onclick = () => track.scrollBy({ left: -230, behavior: 'smooth' });
    $('.next', modalBody).onclick = () => track.scrollBy({ left: 230, behavior: 'smooth' });
    track.onclick = e => {
      if (e.target.tagName !== 'IMG') return;
      const lb = document.createElement('div');
      lb.className = 'lightbox'; lb.innerHTML = `<img src="${e.target.src}" alt="">`;
      lb.onclick = () => lb.remove();
      document.body.appendChild(lb);
    };
  }
}
function closeModal() {
  modal.hidden = true; openId = null;
  document.body.style.overflow = '';
  lastFocus?.focus?.();
}
modal.addEventListener('click', e => { if (e.target.closest('[data-close]')) closeModal(); });

// ---------- Skills ----------
const skillsEl = $('#skills');
function renderSkills() {
  const used = new Set(PROJECTS.flatMap(projTech));
  skillsEl.innerHTML = SKILLS.map(g => `
    <div class="skill-group reveal">
      <h3><span>${g.icon}</span>${L(g.title)}</h3>
      <div class="skill-list">${g.items.map(s => `<button type="button" class="skill ${used.has(s) ? 'linked' : ''}" data-skill="${s}">${s}</button>`).join('')}</div>
    </div>`).join('');
  observeReveals(skillsEl);
}
skillsEl.addEventListener('pointerover', e => {
  const s = e.target.closest('.skill.linked'); if (!s) return;
  $$('.card', grid).forEach(c => c.classList.toggle('glow', projTech(PROJECTS.find(p => p.id === c.dataset.id)).includes(s.dataset.skill)));
});
skillsEl.addEventListener('pointerout', e => {
  if (!e.target.closest('.skill')) return;
  $$('.card.glow', grid).forEach(c => c.classList.remove('glow'));
});
skillsEl.addEventListener('click', e => {
  const s = e.target.closest('.skill'); if (!s) return;
  if (!s.classList.contains('linked')) { toast(T('skills.used', { t: s.dataset.skill })); return; }
  currentTech = s.dataset.skill; currentCat = 'all'; applyFilter();
  $('#projects').scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
});

// ---------- Timeline ----------
const tl = $('#timeline');
function renderTimeline() {
  const open = new Set($$('.tl-card.open', tl).map(c => +c.dataset.i));
  if (firstRender) open.add(0);
  tl.innerHTML = '<span class="line-fill"></span>' + EXPERIENCE.map((x, i) => `
    <li class="tl-item reveal">
      <div class="tl-card ${open.has(i) ? 'open' : ''}" data-i="${i}">
        <button class="tl-head" type="button" aria-expanded="${open.has(i)}">
          <span class="org">${L(x.org)}<span class="tl-type">${L(x.type)}</span></span><span class="when">${L(x.when)}</span>
          <span class="role-t">${L(x.role)}</span><span class="where">${L(x.where)}</span>
          <span class="tl-toggle">${T('ui.details')} <svg viewBox="0 0 24 24"><path d="m6 9 6 6 6-6"/></svg></span>
        </button>
        <div class="tl-details"><div>
          <ul>${L(x.points).map(p => `<li>${p}</li>`).join('')}</ul>
          <div class="tl-tags">${x.tags.map(t => `<span class="tag">${L(t)}</span>`).join('')}</div>
        </div></div>
      </div>
    </li>`).join('');
  observeReveals(tl);
  updateTimeline();
}
tl.addEventListener('click', e => {
  const head = e.target.closest('.tl-head'); if (!head) return;
  const card = head.parentElement, open = card.classList.toggle('open');
  head.setAttribute('aria-expanded', open);
});
function updateTimeline() {
  const fill = $('.line-fill', tl); if (!fill) return;
  const r = tl.getBoundingClientRect();
  const p = Math.min(1, Math.max(0, (innerHeight * .6 - r.top) / r.height));
  fill.style.height = `calc(${p * 100}% - 16px)`;
}

// ---------- Awards ----------
const awardList = $('#awardList');
function renderAwards() {
  awardList.innerHTML = AWARDS.map(a => `
    <article class="award reveal">
      <div class="award-icon">${a.icon}</div>
      <p class="award-date">${L(a.date)}</p>
      <h3>${L(a.title)}</h3>
      <p>${L(a.text)}</p>
    </article>`).join('');
  observeReveals(awardList);
}

// ---------- Command palette ----------
const palette = $('#palette'), pInput = $('#paletteInput'), pList = $('#paletteList');
const go = id => () => $(id).scrollIntoView({ behavior: reduceMotion ? 'auto' : 'smooth' });
function buildCommands() {
  return [
    { icon: '👋', label: T('nav.about'), group: T('pg.section'), run: go('#about') },
    { icon: '🧩', label: T('nav.projects'), group: T('pg.section'), run: go('#projects') },
    { icon: '🛠️', label: T('nav.skills'), group: T('pg.section'), run: go('#skills-section') },
    { icon: '🧭', label: T('nav.experience'), group: T('pg.section'), run: go('#experience') },
    { icon: '⭐', label: 'Frizzy', group: T('pg.section'), run: go('#showcase') },
    { icon: '🗂️', label: T('nav.pm'), group: T('pg.section'), run: go('#pm') },
    { icon: '🏆', label: T('nav.awards'), group: T('pg.section'), run: go('#awards') },
    { icon: '✉️', label: T('nav.contact'), group: T('pg.section'), run: go('#contact') },
    ...PROJECTS.map(p => ({ icon: p.icon.emoji || '🧊', label: `${L(p.title)} — ${L(p.subtitle)}`, group: T('pg.project'), run: () => openProject(p.id) })),
    { icon: '🌐', label: T('cmd.lang'), group: T('pg.action'), run: () => setLang(lang === 'tr' ? 'en' : 'tr') },
    { icon: '🌓', label: T('cmd.theme'), group: T('pg.action'), run: toggleTheme },
    { icon: '📋', label: T('cmd.copy'), group: T('pg.action'), run: () => copyEmail() },
    { icon: '🐙', label: 'GitHub', group: T('pg.link'), run: () => open('https://github.com/nurdanpehlivan', '_blank') },
    { icon: '💼', label: 'LinkedIn', group: T('pg.link'), run: () => open('https://linkedin.com/in/nurdanpehlivan', '_blank') },
  ];
}
let commands = [], filtered = [], sel = 0;
const norm = s => s.toLocaleLowerCase('tr').normalize('NFD').replace(/[̀-ͯ]/g, '').replace(/ı/g, 'i');
function renderPalette() {
  const q = norm(pInput.value.trim());
  filtered = commands.filter(c => norm(c.label + ' ' + c.group).includes(q));
  sel = Math.min(sel, Math.max(0, filtered.length - 1));
  pList.innerHTML = filtered.length
    ? filtered.map((c, i) => `<li role="option" class="${i === sel ? 'sel' : ''}" data-i="${i}"><span class="p-ico">${c.icon}</span>${c.label}<span class="p-group">${c.group}</span></li>`).join('')
    : `<li>${T('palette.none')}</li>`;
  $('.sel', pList)?.scrollIntoView({ block: 'nearest' });
}
function openPalette() { if (!modal.hidden) closeModal(); commands = buildCommands(); palette.hidden = false; pInput.value = ''; sel = 0; renderPalette(); pInput.focus(); }
function closePalette() { palette.hidden = true; }
function runSel(i = sel) { const c = filtered[i]; if (!c) return; closePalette(); c.run(); }
$('#paletteBtn').addEventListener('click', openPalette);
pInput.addEventListener('input', () => { sel = 0; renderPalette(); });
pList.addEventListener('click', e => { const li = e.target.closest('li[data-i]'); if (li) runSel(+li.dataset.i); });
pList.addEventListener('pointermove', e => {
  const li = e.target.closest('li[data-i]'); if (!li || +li.dataset.i === sel) return;
  sel = +li.dataset.i; $$('li', pList).forEach(x => x.classList.toggle('sel', x === li));
});
palette.addEventListener('click', e => { if (e.target.closest('[data-close-palette]')) closePalette(); });

addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') { e.preventDefault(); palette.hidden ? openPalette() : closePalette(); return; }
  if (e.key === 'Escape') {
    const lb = $('.lightbox'); if (lb) return lb.remove();
    if (!palette.hidden) return closePalette();
    if (!modal.hidden) return closeModal();
  }
  if (!palette.hidden) {
    if (e.key === 'ArrowDown') { e.preventDefault(); sel = (sel + 1) % filtered.length; renderPalette(); }
    else if (e.key === 'ArrowUp') { e.preventDefault(); sel = (sel - 1 + filtered.length) % filtered.length; renderPalette(); }
    else if (e.key === 'Enter') { e.preventDefault(); runSel(); }
  }
});

// ---------- Apply language ----------
function applyLang() {
  document.documentElement.lang = lang;
  document.title = lang === 'tr' ? 'Nurdan Pehlivan · Android Developer' : 'Nurdan Pehlivan · Android Developer';
  $$('[data-i18n]').forEach(el => { el.innerHTML = T(el.dataset.i18n); });
  $$('[data-i18n-title]').forEach(el => { el.title = T(el.dataset.i18nTitle); });
  $$('[data-i18n-aria]').forEach(el => el.setAttribute('aria-label', T(el.dataset.i18nAria)));
  pInput.placeholder = T('palette.placeholder');
  $$('#langBtn [data-l]').forEach(s => s.classList.toggle('on', s.dataset.l === lang));
  // a skill filter is a translated label, so drop it if it no longer exists
  if (currentTech && !PROJECTS.some(p => projTech(p).includes(currentTech))) currentTech = null;
  renderProjects(); renderSkills(); renderTimeline(); renderAwards(); renderPM();
  if (openId) openProject(openId);
  if (!palette.hidden) { commands = buildCommands(); renderPalette(); }
  startTyping();
}
function setLang(l) {
  lang = l;
  try { localStorage.setItem('lang', l); } catch {}
  applyLang();
  toast(T('ui.langSwitched'));
}
$('#langBtn').addEventListener('click', () => setLang(lang === 'tr' ? 'en' : 'tr'));

applyLang();
observeReveals(document);
firstRender = false;
onScroll();
