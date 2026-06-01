import {
  slug, CLASSES, WARRIOR, PROFESSIONS,
  MINING, HERBS, SKINNING,
  ZONES, ZONE_BY_SLUG,
  OTHER_CATEGORIES, RDF, WEAPON_MASTERS, PROFESSION_PERKS,
} from './data.js';

const root     = document.getElementById('app-root');
const title    = document.getElementById('screen-title');
const backBtn  = document.getElementById('back-btn');
const tabLinks = document.querySelectorAll('.tab');

const PROF_DATA = { mining: MINING, herbalism: HERBS, skinning: SKINNING };
const PROF_LABEL = { mining: 'Mining', herbalism: 'Herbalism', skinning: 'Skinning' };

// ── Routing ─────────────────────────────────────────────────────
function parseHash() {
  const h = location.hash.replace(/^#\/?/, '');
  return h ? h.split('/').filter(Boolean) : ['class'];
}

function goBack() {
  const parts = parseHash();
  if (parts.length <= 1) return;
  parts.pop();
  location.hash = '#/' + parts.join('/');
}

backBtn.addEventListener('click', goBack);
window.addEventListener('hashchange', render);
window.addEventListener('DOMContentLoaded', () => {
  if (!location.hash) location.hash = '#/class';
  render();
});

// ── Render dispatch ─────────────────────────────────────────────
function render() {
  const parts = parseHash();
  const [tab, a, b] = parts;
  tabLinks.forEach(t => t.classList.toggle('active', t.dataset.tab === tab));
  backBtn.hidden = parts.length <= 1;
  document.documentElement.style.setProperty('--class-accent', '#C79C6E');

  if (tab === 'class')      return renderClass(a, b);
  if (tab === 'profession') return renderProfession(a, b);
  if (tab === 'zones')      return renderZones(a);
  if (tab === 'other')      return renderOther(a);
  root.innerHTML = '';
  title.textContent = 'wowref';
}

// ── Class tab ───────────────────────────────────────────────────
function renderClass(classId, specId) {
  if (!classId) {
    title.textContent = 'Class';
    root.innerHTML = `
      <ul class="list">
        ${CLASSES.map(c => `
          <li>
            <a class="row ${c.enabled ? '' : 'is-disabled'}"
               href="${c.enabled ? `#/class/${c.id}` : ''}"
               aria-disabled="${!c.enabled}">
              <span class="row-swatch" style="background:${c.color}; color:${c.color}"></span>
              <span class="row-title" style="color:${c.color}">${c.name}</span>
              ${c.enabled ? '<span class="row-chev">›</span>' : '<span class="row-badge">soon</span>'}
            </a>
          </li>
        `).join('')}
      </ul>`;
    return;
  }

  if (classId === 'warrior') {
    const spec = WARRIOR.specs.find(s => s.id === specId) || WARRIOR.specs[0];
    title.innerHTML = `Warrior <span class="title-sub">· ${spec.name}</span>`;
    document.documentElement.style.setProperty('--class-accent', WARRIOR.color);

    root.innerHTML = `
      <nav class="segmented" role="tablist" aria-label="Spec">
        ${WARRIOR.specs.map(s => `
          <a class="seg ${s.id === spec.id ? 'active' : ''}" href="#/class/warrior/${s.id}">${s.name}</a>
        `).join('')}
      </nav>

      <section class="card glass">
        <div class="card-label">Stat Priority · ${spec.role}</div>
        <div class="pill-row">
          ${spec.priority.map((p, i) => `
            <span class="pill ${i === 0 ? 'pill-primary' : ''}">${p}</span>
            ${i < spec.priority.length - 1 ? '<span class="pill-arrow">›</span>' : ''}
          `).join('')}
        </div>
      </section>

      <section class="card glass">
        <div class="card-label">Caps</div>
        <div class="kv-list">
          ${spec.caps.map(c => `
            <div class="kv-row">
              <div class="kv-key">${c.label}</div>
              <div class="kv-val">${c.value}</div>
              <div class="kv-note muted">${c.note}</div>
            </div>
          `).join('')}
        </div>
      </section>

      <section class="card glass">
        <div class="card-label">Signature talents</div>
        <ul class="timeline">
          ${spec.signatures.map(s => `
            <li><span class="lvl">${s.lvl}</span><span class="ability">${s.name}</span></li>
          `).join('')}
        </ul>
      </section>
    `;
  }
}

// ── Profession tab ──────────────────────────────────────────────
function renderProfession(profId, materialId) {
  if (!profId) {
    title.textContent = 'Profession';
    root.innerHTML = `
      <ul class="list">
        ${PROFESSIONS.map(p => `
          <li>
            <a class="row ${p.enabled ? '' : 'is-disabled'}"
               href="${p.enabled ? `#/profession/${p.id}` : ''}"
               aria-disabled="${!p.enabled}">
              <span class="row-title">${p.name}</span>
              <span class="row-meta muted">${p.kind}</span>
              ${p.enabled ? '<span class="row-chev">›</span>' : '<span class="row-badge">soon</span>'}
            </a>
          </li>
        `).join('')}
      </ul>`;
    return;
  }

  const data = PROF_DATA[profId];
  if (!data) { root.innerHTML = `<section class="card glass"><p class="muted">${PROFESSIONS.find(p => p.id === profId)?.name || profId} — coming soon.</p></section>`; return; }

  if (!materialId) {
    title.textContent = PROF_LABEL[profId];
    const calcRow = profId === 'skinning' ? `
      <a class="row row-calc" href="#/profession/skinning/calculator">
        <span class="row-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24"><rect x="4" y="3" width="16" height="18" rx="3" fill="none" stroke="currentColor" stroke-width="1.8"/><rect x="7" y="6" width="10" height="3" rx="1" fill="currentColor"/><circle cx="8.5" cy="13" r="1.1" fill="currentColor"/><circle cx="12" cy="13" r="1.1" fill="currentColor"/><circle cx="15.5" cy="13" r="1.1" fill="currentColor"/><circle cx="8.5" cy="17" r="1.1" fill="currentColor"/><circle cx="12" cy="17" r="1.1" fill="currentColor"/><circle cx="15.5" cy="17" r="1.1" fill="currentColor"/></svg>
        </span>
        <span class="row-title">Mob Level → Skill</span>
        <span class="row-meta muted">calculator</span>
        <span class="row-chev">›</span>
      </a>
    ` : '';
    root.innerHTML = `
      ${calcRow}
      <ul class="list">
        ${data.map(m => `
          <li>
            <a class="row row-mat" href="#/profession/${profId}/${m.id}">
              <span class="row-title">${m.name}</span>
              ${thresholdBar(m.skill)}
              <span class="row-chev">›</span>
            </a>
          </li>
        `).join('')}
      </ul>`;
    return;
  }

  if (profId === 'skinning' && materialId === 'calculator') {
    return renderSkinningCalc();
  }

  const mat = data.find(m => m.id === materialId);
  if (!mat) { root.innerHTML = '<p class="muted">Not found.</p>'; return; }
  title.textContent = mat.name;
  root.innerHTML = `
    <section class="card glass">
      <div class="card-label">Skill thresholds</div>
      ${thresholdBar(mat.skill, 'lg')}
    </section>
    <section class="card glass">
      <div class="card-label">Zones</div>
      ${zoneChips(mat.zones)}
    </section>
  `;
}

// ── Skinning skill table ────────────────────────────────────────
function skinReqSkill(level) {
  if (level <= 10) return 1;
  if (level <= 20) return (level - 10) * 10;
  return level * 5;
}

function renderSkinningCalc() {
  title.textContent = 'Mob Level → Skill';
  const cell = (L) => `<div class="lvl-row"><span class="lvl-n">${L}</span><span class="lvl-skill">${skinReqSkill(L)}</span></div>`;
  const col = (start) => Array.from({ length: 20 }, (_, i) => cell(start + i)).join('');
  const cols = [1, 21, 41, 61].map(s => `<div class="lvl-col">${col(s)}</div>`).join('');

  root.innerHTML = `
    <section class="card glass">
      <div class="card-label">Mob level → required skill</div>
      <div class="lvl-cols">${cols}</div>
    </section>

    <section class="card glass">
      <div class="card-label">Formula</div>
      <p class="muted" style="margin:0;">
        Skill ≤ 100: max mob level = skill ÷ 10 + 10<br/>
        Skill &gt; 100: max mob level = skill ÷ 5
      </p>
    </section>
  `;
}

// ── Zones tab ───────────────────────────────────────────────────
function renderZones(zoneSlug) {
  if (!zoneSlug) {
    title.textContent = 'Zones';
    const sorted = [...ZONES].sort((a, b) => a.min - b.min || a.name.localeCompare(b.name));
    root.innerHTML = `
      <ul class="list">
        ${sorted.map(z => `
          <li>
            <a class="row row-zone" href="#/zones/${slug(z.name)}">
              <span class="row-lvl">${z.min}${z.max !== z.min ? `–${z.max}` : ''}</span>
              <span class="row-title">${z.name}</span>
              <span class="row-meta muted">${continentShort(z.continent)}</span>
              <span class="row-chev">›</span>
            </a>
          </li>
        `).join('')}
      </ul>`;
    return;
  }

  const zone = ZONE_BY_SLUG[zoneSlug];
  if (!zone) { root.innerHTML = '<p class="muted">Zone not found.</p>'; return; }
  title.textContent = zone.name;

  const inZone = (list) => list.filter(m => m.zones.includes(zone.name));
  const ores  = inZone(MINING);
  const herbs = inZone(HERBS);
  const hides = inZone(SKINNING);

  root.innerHTML = `
    <section class="card glass">
      <div class="kv-list">
        <div class="kv-row"><div class="kv-key">Level</div><div class="kv-val">${zone.min}${zone.max !== zone.min ? `–${zone.max}` : ''}</div><div></div></div>
        <div class="kv-row"><div class="kv-key">Continent</div><div class="kv-val">${zone.continent}</div><div></div></div>
        <div class="kv-row"><div class="kv-key">Faction</div><div class="kv-val">${zone.faction}</div><div></div></div>
      </div>
    </section>

    ${materialSection('Ores',    'mining',    ores)}
    ${materialSection('Herbs',   'herbalism', herbs)}
    ${materialSection('Skinning','skinning',  hides)}
  `;
}

function materialSection(label, profId, list) {
  if (!list.length) return '';
  return `
    <section class="card glass">
      <div class="card-label">${label}</div>
      <ul class="list">
        ${list.map(m => `
          <li>
            <a class="row row-mat" href="#/profession/${profId}/${m.id}">
              <span class="row-title">${m.name}</span>
              ${thresholdBar(m.skill)}
              <span class="row-chev">›</span>
            </a>
          </li>
        `).join('')}
      </ul>
    </section>`;
}

// ── Other tab ───────────────────────────────────────────────────
function renderOther(catId) {
  if (!catId) {
    title.textContent = 'Other';
    root.innerHTML = `
      <ul class="list">
        ${OTHER_CATEGORIES.map(c => `
          <li>
            <a class="row" href="#/other/${c.id}">
              <span class="row-title">${c.name}</span>
              <span class="row-meta muted">${c.blurb}</span>
              <span class="row-chev">›</span>
            </a>
          </li>
        `).join('')}
      </ul>`;
    return;
  }

  if (catId === 'rdf') {
    title.textContent = 'RDF Brackets';
    root.innerHTML = RDF.map(b => `
      <section class="card glass">
        <div class="card-label">${b.bracket}</div>
        <ul class="kv-list">
          ${b.dungeons.map(([n, lo, hi]) => `
            <li class="kv-row dungeon-row">
              <div class="kv-key">${lo}${hi !== lo ? `–${hi}` : ''}</div>
              <div class="kv-val">${n}</div>
              <div></div>
            </li>
          `).join('')}
        </ul>
      </section>
    `).join('');
    return;
  }

  if (catId === 'weaponmasters') {
    title.textContent = 'Weapon Masters';
    root.innerHTML = WEAPON_MASTERS.map(w => `
      <section class="card glass">
        <div class="wm-head">
          <div class="wm-name">${w.name}</div>
          <div class="wm-race muted">${w.race}</div>
        </div>
        <div class="muted wm-loc">${w.city} · ${w.loc}</div>
        <ul class="list-inline" style="margin-top:10px;">
          ${w.teaches.map(t => `<li class="chip">${t}</li>`).join('')}
        </ul>
      </section>
    `).join('');
    return;
  }

  if (catId === 'professionperks') {
    title.textContent = 'Profession Perks';
    const byTier = ['Top', 'Solid', 'Niche', 'Gather'];
    root.innerHTML = byTier.map(tier => `
      <section class="card glass">
        <div class="card-label">${tier === 'Top' ? 'Top tier' : tier === 'Gather' ? 'Gathering passives' : tier + ' alternatives'}</div>
        <ul class="kv-list">
          ${PROFESSION_PERKS.filter(p => p.tier === tier).map(p => `
            <li class="kv-row">
              <div class="kv-key">${p.name}</div>
              <div class="kv-val">${p.note}</div>
              <div></div>
            </li>
          `).join('')}
        </ul>
      </section>
    `).join('');
    return;
  }

  root.innerHTML = '<p class="muted">Not found.</p>';
}

// ── Helpers ─────────────────────────────────────────────────────
function thresholdBar(req, size = '') {
  const bands = [
    { k: 'orange', v: req      },
    { k: 'yellow', v: req + 25 },
    { k: 'green',  v: req + 50 },
    { k: 'gray',   v: req + 75 },
  ];
  return `<span class="thresholds ${size === 'lg' ? 'thresholds-lg' : ''}">
    ${bands.map(b => `<span class="th th-${b.k}">${b.v}</span>`).join('')}
  </span>`;
}

function zoneChips(zoneNames) {
  return `<ul class="list-inline">
    ${zoneNames.map(z => {
      const s = slug(z);
      const known = ZONE_BY_SLUG[s];
      return known
        ? `<li><a class="chip chip-link" href="#/zones/${s}">${z}</a></li>`
        : `<li class="chip">${z}</li>`;
    }).join('')}
  </ul>`;
}

function continentShort(c) {
  return { 'Eastern Kingdoms': 'EK', 'Kalimdor': 'Kal', 'Outland': 'Out', 'Northrend': 'Nor' }[c] || c;
}
