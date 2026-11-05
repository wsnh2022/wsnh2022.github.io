const CACHE = 'ai-prompts-v13';
const SHELL = './prompts.html';
// everything prompts.html needs to work offline; a new file in assets/prompts/ goes here too
const FILES = [
  SHELL,
  './assets/prompts/styles.css',
  './assets/prompts/data/library.js',
  './assets/prompts/data/understand-learn.js',
  './assets/prompts/data/write-communicate.js',
  './assets/prompts/data/think-decide.js',
  './assets/prompts/data/work-business.js',
  './assets/prompts/data/code-data.js',
  './assets/prompts/data/workflows.js',
  './assets/prompts/icons.js',
  './assets/prompts/app.js',
  './assets/prompts/welcome-wave.js'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(FILES.map(f => new Request(f, { cache: 'reload' }))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

function saveCopy(key, res) {
  if (res.ok && !res.redirected) {
    const copy = res.clone();
    caches.open(CACHE).then(c => c.put(key, copy));
  }
  return res;
}

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.mode === 'navigate') {
    // network first; a fresh prompts page also refreshes its offline copy
    const isPrompts = /\/prompts(\.html)?$/.test(url.pathname);
    e.respondWith(
      fetch(e.request)
        .then(res => (isPrompts ? saveCopy(SHELL, res) : res))
        .catch(() => caches.match(SHELL))
    );
  } else if (url.origin === location.origin && url.pathname.includes('/assets/prompts/')) {
    // the page's styles, code and prompt data: always check the server for the latest
    // (a quick "not changed" when nothing changed), the saved copy when offline
    e.respondWith(
      fetch(e.request, { cache: 'no-cache' })
        .then(res => saveCopy(e.request, res))
        .catch(() => caches.match(e.request, { ignoreSearch: true }))
    );
  }
});
