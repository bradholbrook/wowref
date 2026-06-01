const SCREENS = {
  home:   { title: 'Home',   body: 'This is the home tab. Replace me with real content.' },
  browse: { title: 'Browse', body: 'Browse reference data — classes, items, zones, etc.' },
  search: { title: 'Search', body: 'Search across everything indexed in wowref.' },
  more:   { title: 'More',   body: 'Settings, about, and other secondary actions.' },
};

const tabs = document.querySelectorAll('.tab');
const titleEl = document.getElementById('screen-title');
const bodyEl  = document.getElementById('screen-body');

tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const id = tab.dataset.tab;
    tabs.forEach((t) => {
      const active = t === tab;
      t.classList.toggle('active', active);
      t.setAttribute('aria-selected', active ? 'true' : 'false');
    });
    const screen = SCREENS[id];
    if (screen) {
      titleEl.textContent = screen.title;
      bodyEl.textContent = screen.body;
    }
  });
});
