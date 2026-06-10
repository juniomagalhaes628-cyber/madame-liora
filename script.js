// ── ensure novidades/saldos tags ──────────────────────────────
products.forEach(p => {
  if (p.new && !p.cat.includes('novidades')) p.cat.push('novidades');
  if (p.sale && !p.cat.includes('saldos'))   p.cat.push('saldos');
});

// ── STATE ─────────────────────────────────────────────────────
let cart     = JSON.parse(localStorage.getItem('ml_cart')  || '[]');
let wishlist = JSON.parse(localStorage.getItem('ml_wish')  || '[]');
let users    = JSON.parse(localStorage.getItem('ml_users') || '[]');
let orders   = JSON.parse(localStorage.getItem('ml_orders')|| '[]');
let session  = JSON.parse(localStorage.getItem('ml_sess')  || 'null');
let curPage  = 'home';
let curCat   = 'all';

// ── INIT ──────────────────────────────────────────────────────
// Scripts estão no fim do <body> — o DOM já está pronto quando este
// código corre. Não podemos depender de DOMContentLoaded (já disparou).
// Chamamos init() diretamente.
// ── 3D capability flags ───────────────────────────────────────
const REDUCED_MOTION = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const FINE_POINTER   = window.matchMedia('(hover: hover) and (pointer: fine)').matches;
const TILT_OK        = FINE_POINTER && !REDUCED_MOTION;

function init() {
  renderHomeGrid();
  renderBestGrid();
  renderAcGrid();
  refreshBadges();
  refreshUserUI();
  initDropdowns();
  initScrollReveal();
  initTilt();
  initParallax();
  initHero3DLazy();
  initHeroCarousel();
  window.addEventListener('scroll', () =>
    document.getElementById('header').classList.toggle('scrolled', scrollY > 50));
}

// ── 3D TILT (Emil: write transform directly, rAF, fine-pointer only) ─
function initTilt() {
  if (!TILT_OK) return;
  // delegate on each grid + the product detail image
  document.querySelectorAll('.pgrid').forEach(grid => attachTilt(grid, '.pcard'));
  // product page is rendered later; observe it via event delegation on main
  document.getElementById('main').addEventListener('pointermove', e => {
    const img = e.target.closest('.pd-img');
    if (img) tiltEl(img, e);
  });
  document.getElementById('main').addEventListener('pointerout', e => {
    const img = e.target.closest('.pd-img');
    if (img && !img.contains(e.relatedTarget)) resetTilt(img);
  });
}

function attachTilt(scope, sel) {
  scope.addEventListener('pointermove', e => {
    const card = e.target.closest(sel);
    if (card) tiltEl(card, e);
  });
  scope.addEventListener('pointerout', e => {
    const card = e.target.closest(sel);
    if (card && !card.contains(e.relatedTarget)) resetTilt(card);
  });
}

let _tiltRaf;
function tiltEl(el, e) {
  const r = el.getBoundingClientRect();
  const px = (e.clientX - r.left) / r.width  - 0.5; // -0.5..0.5
  const py = (e.clientY - r.top)  / r.height - 0.5;
  const max = 9; // deg, matches --tilt-max
  cancelAnimationFrame(_tiltRaf);
  _tiltRaf = requestAnimationFrame(() => {
    el.classList.add('tilting');
    el.style.setProperty('--ry', (px *  max).toFixed(2) + 'deg');
    el.style.setProperty('--rx', (py * -max).toFixed(2) + 'deg');
  });
}
function resetTilt(el) {
  el.classList.remove('tilting');
  el.style.removeProperty('--rx');
  el.style.removeProperty('--ry');
}

// ── PARALLAX (Emil: subtle, rAF-throttled, off in reduced-motion) ─
function initParallax() {
  if (REDUCED_MOTION) return;
  const layers = [
    { el: document.querySelector('.hero__content'), speed: 0.18 },
  ].filter(l => l.el);
  if (!layers.length) return;
  let ticking = false;
  window.addEventListener('scroll', () => {
    if (ticking) return;
    ticking = true;
    requestAnimationFrame(() => {
      const y = window.scrollY;
      layers.forEach(l => { l.el.style.transform = `translateY(${y * l.speed}px)`; });
      ticking = false;
    });
  }, { passive: true });
}

// ── HERO 3D COVERFLOW CAROUSEL ────────────────────────────────
function initHeroCarousel() {
  const stage = document.getElementById('cfStage');
  const dotsEl = document.getElementById('cfDots');
  if (!stage) return;

  // featured = novidades, fall back to priciest dresses
  let feat = products.filter(p => p.new);
  if (feat.length < 5) feat = feat.concat(
    products.filter(p => !p.new && p.cat.includes('vestidos')).slice(0, 6)
  );
  feat = feat.slice(0, 7);
  if (!feat.length) { document.getElementById('heroCarousel')?.remove(); return; }

  // build slides
  stage.innerHTML = feat.map((p, i) => `
    <div class="cf-item" data-i="${i}" onclick="cfClick(${i}, ${p.id})">
      <img src="${p.img}" alt="${p.name}" loading="eager"/>
      <div class="cf-item__tag">${p.name.split(' - ')[0]}
        <span class="cf-item__price">${fmt(p.price)}</span>
      </div>
    </div>`).join('');
  dotsEl.innerHTML = feat.map((_, i) =>
    `<button class="cf-dot" data-i="${i}" aria-label="Slide ${i+1}"></button>`).join('');

  const items = [...stage.querySelectorAll('.cf-item')];
  const dots  = [...dotsEl.querySelectorAll('.cf-dot')];
  const N = items.length;
  let cur = 0, timer = null;

  function layout() {
    items.forEach((el, i) => {
      // shortest signed distance around the ring
      let off = i - cur;
      if (off >  N / 2) off -= N;
      if (off < -N / 2) off += N;
      const abs = Math.abs(off);
      const x = off * 132;            // horizontal spread
      const z = -abs * 220;           // depth
      const ry = off * -32;           // rotation toward viewer
      const op = abs > 2 ? 0 : 1 - abs * 0.28;
      const blur = abs === 0 ? 0 : Math.min(abs * 1.5, 3);
      el.style.transform =
        `translate3d(${x}px,0,${z}px) rotateY(${ry}deg) scale(${abs===0?1:0.9})`;
      el.style.opacity = op;
      el.style.filter = `blur(${blur}px)`;
      el.style.zIndex = String(100 - abs);
      el.classList.toggle('is-active', off === 0);
    });
    dots.forEach((d, i) => d.classList.toggle('is-active', i === cur));
  }
  function go(n) { cur = (n + N) % N; layout(); }
  function next() { go(cur + 1); }
  function prev() { go(cur - 1); }

  // expose click handler that centres or opens
  window.cfClick = (i, id) => { if (i === cur) openProduct(id); else go(i); };

  document.getElementById('cfNext').onclick = () => { next(); restart(); };
  document.getElementById('cfPrev').onclick = () => { prev(); restart(); };
  dots.forEach(d => d.onclick = () => { go(+d.dataset.i); restart(); });

  // autoplay (paused on hover / hidden tab / reduced-motion stays still but advances)
  function start() { if (!REDUCED_MOTION) timer = setInterval(next, 4000); }
  function stop()  { clearInterval(timer); timer = null; }
  function restart() { stop(); start(); }
  const wrap = document.getElementById('heroCarousel');
  wrap.addEventListener('pointerenter', stop);
  wrap.addEventListener('pointerleave', start);
  document.addEventListener('visibilitychange', () => document.hidden ? stop() : start());

  // drag / swipe
  let down = false, sx = 0;
  stage.addEventListener('pointerdown', e => { down = true; sx = e.clientX; stop(); });
  window.addEventListener('pointerup', e => {
    if (!down) return; down = false;
    const dx = e.clientX - sx;
    if (Math.abs(dx) > 40) (dx < 0 ? next() : prev());
    start();
  });

  layout();
  start();
}

// ── HERO WebGL (lazy + capability check, silent fallback) ─────────
function initHero3DLazy() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  // capability check: skip on reduced-motion, small screens, or weak CPUs
  const smallScreen = window.matchMedia('(max-width: 640px)').matches;
  const weakCPU = (navigator.hardwareConcurrency || 4) < 4;
  if (REDUCED_MOTION || smallScreen || weakCPU) return;

  const hero = document.getElementById('hero');
  if (!('IntersectionObserver' in window)) return;
  const io = new IntersectionObserver((entries) => {
    if (!entries.some(e => e.isIntersecting)) return;
    io.disconnect();
    import('./hero3d.js')
      .then(m => m.initHero3D(canvas))
      .catch(() => { /* leave the <img> fallback */ });
  }, { threshold: 0.1 });
  io.observe(hero);
}

// ── SCROLL REVEAL (Emil: sections fade-in as they enter viewport) ─
function initScrollReveal() {
  const targets = document.querySelectorAll(
    '.home-section, .cats-section, .reviews-section, .strip'
  );
  if (!('IntersectionObserver' in window)) {
    targets.forEach(el => el.classList.add('revealed'));
    return;
  }
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('revealed');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  targets.forEach(el => io.observe(el));
}

// Garantia: se por acaso ainda não carregou, espera; senão chama já
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ── DROPDOWN ──────────────────────────────────────────────────
// Abordagem: CSS hover para desktop, classe .drop-open para clique/touch.
// SEM onclicks no HTML — tudo via addEventListener aqui.
function initDropdowns() {
  document.querySelectorAll('.has-drop').forEach(item => {
    const drop = item.querySelector('.drop');
    if (!drop) return;
    let closeTimer;

    // ── Desktop: hover ──
    item.addEventListener('mouseenter', () => {
      clearTimeout(closeTimer);
      item.classList.add('drop-open');
    });
    item.addEventListener('mouseleave', () => {
      closeTimer = setTimeout(() => item.classList.remove('drop-open'), 150);
    });

    // ── Touch/clique no trigger (span) ──
    item.querySelector('span').addEventListener('click', e => {
      e.stopPropagation();
      const opening = !item.classList.contains('drop-open');
      // fecha todos
      document.querySelectorAll('.has-drop').forEach(x => x.classList.remove('drop-open'));
      if (opening) item.classList.add('drop-open');
    });
  });

  // Fechar ao clicar fora
  document.addEventListener('click', () => {
    document.querySelectorAll('.has-drop').forEach(x => x.classList.remove('drop-open'));
  });
}

function closeAllDrops() {
  document.querySelectorAll('.has-drop').forEach(x => x.classList.remove('drop-open'));
}

function navDrop(cat) {
  closeAllDrops();
  nav(cat);
}

// ── CAT LABELS ────────────────────────────────────────────────
const CAT_LABELS = { novidades:'Novidades', vestidos:'Vestidos', tops:'Tops & Blusas',
  calcas:'Calças', saias:'Saias', casacos:'Casacos', conjuntos:'Conjuntos', macaoes:'Macacões',
  malas:'Malas', brincos:'Brincos', colares:'Colares', pulseiras:'Pulseiras', aneis:'Anéis', saldos:'Saldos' };
const catLabel = c => CAT_LABELS[c] || c;
const fmt = v => '€' + v.toFixed(2).replace('.', ',');

// ── PRODUCT CARD ──────────────────────────────────────────────
function card(p) {
  const inW = wishlist.includes(p.id);
  return `<div class="pcard" onclick="openProduct(${p.id})">
    <div class="pcard__img">
      <img src="${p.img}" alt="${p.name}" loading="lazy"/>
      <div class="pcard__badges">
        ${p.new  ? '<span class="tag tag--new">Novo</span>'   : ''}
        ${p.sale ? '<span class="tag tag--sale">Saldo</span>' : ''}
      </div>
      <div class="pcard__hover" onclick="event.stopPropagation()">
        <button class="btn-hadd" onclick="quickAdd(${p.id}, event)">Adicionar ao carrinho</button>
        <button class="btn-hwish ${inW?'active':''}" data-wish="${p.id}" onclick="toggleWish(${p.id}, event)">${inW?'♥':'♡'}</button>
      </div>
    </div>
    <div class="pcard__info">
      <p class="pcard__cat">${catLabel(p.cat[0])}</p>
      <p class="pcard__name">${p.name}</p>
      <p class="pcard__price">${fmt(p.price)}${p.oldPrice ? `<s>${fmt(p.oldPrice)}</s>` : ''}</p>
    </div>
  </div>`;
}

// ── HOME ──────────────────────────────────────────────────────
function renderHomeGrid() {
  const items = products.filter(p => p.new).slice(0, 12);
  const el = document.getElementById('homeGrid');
  el.innerHTML = items.map(card).join('');
  el.classList.add('stagger'); // Emil: stagger entrance
}

function renderBestGrid() {
  const items = products
    .filter(p => p.cat.some(c => ['vestidos','conjuntos'].includes(c)))
    .sort((a,b) => b.price - a.price)
    .slice(0, 8);
  const el = document.getElementById('bestGrid');
  if (el) { el.innerHTML = items.map(card).join(''); el.classList.add('stagger'); }
}

function renderAcGrid() {
  const items = products
    .filter(p => p.cat.some(c => ['malas','brincos','colares','pulseiras','aneis'].includes(c)))
    .slice(0, 8);
  const el = document.getElementById('acGrid');
  if (el) { el.innerHTML = items.map(card).join(''); el.classList.add('stagger'); }
}

function showHome() {
  show('homePage'); hide('shopPage'); hide('productPage');
  curPage = 'home';
  scrollTo(0, 0);
}

// ── NAVIGATION ────────────────────────────────────────────────
function nav(cat) {
  curCat = cat;
  show('shopPage'); hide('homePage'); hide('productPage');
  curPage = 'shop';
  const r = document.querySelector(`input[name="cf"][value="${cat}"]`);
  if (r) r.checked = true;
  applyFilters();
  scrollTo(0, 0);
}

function applyFilters() {
  const cat   = document.querySelector('input[name="cf"]:checked')?.value || 'all';
  const price = document.querySelector('input[name="pf"]:checked')?.value || 'all';
  const sort  = document.getElementById('sortSel')?.value || '';
  let list = [...products];
  if (cat !== 'all') list = list.filter(p => p.cat.includes(cat));
  if (price === '0-15')  list = list.filter(p => p.price <= 15);
  else if (price === '15-25') list = list.filter(p => p.price > 15 && p.price <= 25);
  else if (price === '25-50') list = list.filter(p => p.price > 25 && p.price <= 50);
  else if (price === '50+')   list = list.filter(p => p.price > 50);
  if (sort === 'price-asc')  list.sort((a,b) => a.price - b.price);
  else if (sort === 'price-desc') list.sort((a,b) => b.price - a.price);
  else if (sort === 'name') list.sort((a,b) => a.name.localeCompare(b.name));
  else if (sort === 'new')  list.sort((a,b) => (b.new?1:0)-(a.new?1:0));
  const titles = { all:'Todos os Produtos', ...CAT_LABELS };
  document.getElementById('shopTitle').textContent = titles[cat] || 'Produtos';
  document.getElementById('shopCount').textContent = `${list.length} produto${list.length !== 1 ? 's' : ''}`;
  const sg = document.getElementById('shopGrid');
  sg.innerHTML = list.length
    ? list.map(card).join('')
    : '<p class="no-results">Nenhum produto encontrado.</p>';
  restagger(sg);
}

// Emil: re-trigger the stagger entrance whenever the grid content changes
function restagger(el) {
  el.classList.remove('stagger');
  void el.offsetWidth;
  el.classList.add('stagger');
}

// ── SEARCH ────────────────────────────────────────────────────
function toggleSearch() {
  const bar = document.getElementById('searchBar');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) document.getElementById('searchInput').focus();
  else document.getElementById('searchInput').value = '';
}

function doSearch(q) {
  if (!q.trim()) return;
  const r = products.filter(p => p.name.toLowerCase().includes(q.toLowerCase()) || p.desc.toLowerCase().includes(q.toLowerCase()));
  show('shopPage'); hide('homePage'); hide('productPage');
  document.getElementById('shopTitle').textContent = `Resultados para "${q}"`;
  document.getElementById('shopCount').textContent = `${r.length} resultado${r.length !== 1 ? 's' : ''}`;
  const sg = document.getElementById('shopGrid');
  sg.innerHTML = r.length ? r.map(card).join('') : '<p class="no-results">Sem resultados.</p>';
  restagger(sg);
  document.querySelector('input[name="cf"][value="all"]').checked = true;
}

// ── PRODUCT DETAIL ────────────────────────────────────────────
function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  hide('homePage'); hide('shopPage'); show('productPage');
  curPage = 'product';
  const inW = wishlist.includes(p.id);
  const related = products.filter(x => x.cat[0] === p.cat[0] && x.id !== p.id).slice(0, 4);
  document.getElementById('productContent').innerHTML = `
    <div class="pd-back" onclick="goBack()">← Voltar</div>
    <div class="pd-grid">
      <div class="pd-img"><img src="${p.img}" alt="${p.name}"/></div>
      <div class="pd-info">
        <p class="pd-cat">${catLabel(p.cat[0])}</p>
        <h1 class="pd-name">${p.name}</h1>
        <div class="pd-price">${fmt(p.price)}${p.oldPrice?`<s>${fmt(p.oldPrice)}</s>`:''}</div>
        <p class="pd-desc">${p.desc}</p>
        <div class="pd-sizes">
          <label>Tamanho</label>
          <div class="size-btns">${p.sizes.map((s,i)=>`<button class="sz-btn${i===0?' active':''}" onclick="selSz(this)">${s}</button>`).join('')}</div>
        </div>
        <div class="pd-actions">
          <button class="btn-add-main" onclick="addToCartDetail(${p.id})">🛍️ Adicionar ao Carrinho</button>
          <button class="btn-wish-main ${inW?'active':''}" id="pdWish${p.id}" onclick="toggleWish(${p.id})">${inW?'♥ Favorito':'♡ Favoritos'}</button>
        </div>
        <div class="pd-meta">
          <span>✅ Em stock</span>
          <span>🚚 Envio 2–4 dias úteis · Grátis acima de €49,99</span>
          ${p.new  ? '<span>✨ Novidade — Edição limitada</span>' : ''}
          ${p.sale ? '<span>🏷️ Em saldo — Enquanto durar o stock</span>' : ''}
        </div>
      </div>
    </div>
    ${related.length ? `<div class="related"><div class="sec-hd"><span class="label">Também pode gostar</span></div><div class="pgrid">${related.map(card).join('')}</div></div>` : ''}
  `;
  scrollTo(0, 0);
}

function selSz(btn) {
  btn.closest('.size-btns').querySelectorAll('.sz-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function addToCartDetail(id) {
  const sz = document.querySelector('.sz-btn.active')?.textContent;
  const p  = products.find(x => x.id === id);
  addItem(id, sz || p.sizes[0]);
}

function goBack() {
  hide('productPage');
  if (curCat !== 'all') { show('shopPage'); curPage = 'shop'; }
  else showHome();
  scrollTo(0, 0);
}

// ── CART ──────────────────────────────────────────────────────
function quickAdd(id, ev) {
  const p = products.find(x => x.id === id);
  addItem(id, p.sizes[0]);
  // Emil: confirm the action with a brief success state on the clicked button
  if (ev && ev.target) {
    const btn = ev.target.closest('.btn-hadd');
    if (btn && !btn.dataset.busy) {
      btn.dataset.busy = '1';
      const orig = btn.textContent;
      btn.textContent = '✓ Adicionado';
      btn.classList.add('btn-hadd--done');
      setTimeout(() => {
        btn.textContent = orig;
        btn.classList.remove('btn-hadd--done');
        delete btn.dataset.busy;
      }, 1200);
    }
  }
}

function addItem(id, size) {
  const p = products.find(x => x.id === id);
  const key = `${id}::${size}`;
  const ex = cart.find(x => x.key === key);
  if (ex) ex.qty++;
  else cart.push({ key, id, size, qty: 1 });
  saveCart();
  toast(`"${p.name}" adicionado ao carrinho 🛍️`);
}

function removeItem(key) { cart = cart.filter(x => x.key !== key); saveCart(); renderCart(); }

function changeQty(key, d) {
  const it = cart.find(x => x.key === key);
  if (!it) return;
  it.qty += d;
  if (it.qty <= 0) cart = cart.filter(x => x.key !== key);
  saveCart(); renderCart();
}

function saveCart() {
  localStorage.setItem('ml_cart', JSON.stringify(cart));
  refreshBadges();
}

function renderCart() {
  const body = document.getElementById('cartBody');
  const ft   = document.getElementById('cartFt');
  if (!cart.length) {
    body.innerHTML = `<div class="cart-empty"><p>🛍️</p><p>O carrinho está vazio</p><button onclick="closeCart();showHome()">Continuar a comprar</button></div>`;
    ft.style.display = 'none';
    document.getElementById('cartQtyLabel').textContent = '';
    return;
  }
  let sub = 0;
  body.innerHTML = cart.map(it => {
    const p = products.find(x => x.id === it.id);
    if (!p) return '';
    const line = p.price * it.qty; sub += line;
    return `<div class="ci">
      <img class="ci__img" src="${p.img}" alt="${p.name}"/>
      <div class="ci__info">
        <p class="ci__name">${p.name}</p>
        <p class="ci__sz">Tamanho: ${it.size}</p>
        <div class="ci__row">
          <div class="ci__qty">
            <button onclick="changeQty('${it.key}',-1)">−</button>
            <span>${it.qty}</span>
            <button onclick="changeQty('${it.key}',1)">+</button>
          </div>
          <span class="ci__price">${fmt(line)}</span>
        </div>
        <button class="ci__rm" onclick="removeItem('${it.key}')">Remover</button>
      </div>
    </div>`;
  }).join('');
  const ship = sub >= 49.99 ? 0 : 3.99;
  const grand = sub + ship;
  document.getElementById('cartSubtotal').textContent = fmt(sub);
  document.getElementById('cartShipRow').innerHTML = ship === 0
    ? '<span>✅ Envio grátis</span><span>€0,00</span>'
    : `<span>Envio</span><span>${fmt(ship)}</span>`;
  document.getElementById('cartGrand').textContent = fmt(grand);
  document.getElementById('cartQtyLabel').textContent = `(${cart.reduce((s,x)=>s+x.qty,0)})`;
  ft.style.display = '';
}

function openCart() {
  renderCart();
  document.getElementById('cartSide').classList.add('open');
  document.getElementById('cartOverlay').classList.add('open');
}
function closeCart() {
  document.getElementById('cartSide').classList.remove('open');
  document.getElementById('cartOverlay').classList.remove('open');
}

// ── WISHLIST ──────────────────────────────────────────────────
function toggleWish(id, ev) {
  const added = !wishlist.includes(id);
  if (added) {
    wishlist.push(id);
    toast('Adicionado aos favoritos ♥');
  } else {
    wishlist = wishlist.filter(x => x !== id);
    toast('Removido dos favoritos');
  }
  localStorage.setItem('ml_wish', JSON.stringify(wishlist));
  refreshBadges();
  // update any visible wish buttons
  document.querySelectorAll(`[data-wish="${id}"]`).forEach(b => {
    b.classList.toggle('active', wishlist.includes(id));
    b.textContent = wishlist.includes(id) ? '♥' : '♡';
  });
  // Emil: pop the heart only when adding (the moment of delight)
  if (added && ev && ev.target) {
    const heart = ev.target.closest('.btn-hwish');
    if (heart) { heart.classList.remove('heart-pop'); void heart.offsetWidth; heart.classList.add('heart-pop'); }
  }
  const pdBtn = document.getElementById(`pdWish${id}`);
  if (pdBtn) {
    pdBtn.classList.toggle('active', wishlist.includes(id));
    pdBtn.textContent = wishlist.includes(id) ? '♥ Favorito' : '♡ Favoritos';
  }
}

function openWishlist() {
  if (!wishlist.length) { toast('Os seus favoritos estão vazios'); return; }
  const list = products.filter(p => wishlist.includes(p.id));
  show('shopPage'); hide('homePage'); hide('productPage');
  document.getElementById('shopTitle').textContent = '♥ Favoritos';
  document.getElementById('shopCount').textContent = `${list.length} peça${list.length !== 1 ? 's' : ''}`;
  document.getElementById('shopGrid').innerHTML = list.map(card).join('');
  scrollTo(0, 0);
}

function openWishlistPanel() {
  closeAuth();
  setTimeout(openWishlist, 200);
}

// ── BADGES ────────────────────────────────────────────────────
let _lastCartQty = 0, _lastWishQty = 0;
function refreshBadges() {
  const qty = cart.reduce((s,x) => s+x.qty, 0);
  const cb = document.getElementById('cBadge');
  cb.textContent = qty;
  // Emil: pulse the badge only when the count actually grows — feedback, not decoration
  if (qty > _lastCartQty) pulse(cb);
  _lastCartQty = qty;

  const wb = document.getElementById('wBadge');
  if (wishlist.length) {
    wb.textContent = wishlist.length;
    wb.style.display = 'flex';
    if (wishlist.length > _lastWishQty) pulse(wb);
  } else {
    wb.style.display = 'none';
  }
  _lastWishQty = wishlist.length;
}

function pulse(el) {
  el.classList.remove('badge-pulse');
  void el.offsetWidth; // restart animation
  el.classList.add('badge-pulse');
}

// ── AUTH ──────────────────────────────────────────────────────
function openAuth() {
  if (session) showAccountPanel();
  else switchAuth('login');
  document.getElementById('authModal').classList.add('open');
  document.getElementById('authOverlay').classList.add('open');
}
function closeAuth() {
  document.getElementById('authModal').classList.remove('open');
  document.getElementById('authOverlay').classList.remove('open');
}

function switchAuth(mode) {
  hide('loginForm'); hide('regForm'); hide('accountPanel');
  document.getElementById('tabLogin').classList.toggle('active', mode === 'login');
  document.getElementById('tabReg').classList.toggle('active',   mode === 'reg');
  show(mode === 'login' ? 'loginForm' : 'regForm');
  document.getElementById('loginErr').textContent = '';
  document.getElementById('regErr').textContent   = '';
}

function showAccountPanel() {
  hide('loginForm'); hide('regForm'); show('accountPanel');
  hide('tabLogin'); hide('tabReg');
  document.getElementById('accountAvatar').textContent = session.name[0].toUpperCase();
  document.getElementById('accountName').textContent   = `Olá, ${session.name.split(' ')[0]}!`;
  document.getElementById('accountEmail').textContent  = session.email;
}

function doLogin(e) {
  e.preventDefault();
  const email = document.getElementById('loginEmail').value.trim();
  const pass  = document.getElementById('loginPass').value;
  const user  = users.find(u => u.email === email && u.pass === pass);
  if (!user) { document.getElementById('loginErr').textContent = 'Email ou password incorretos.'; return; }
  session = { name: user.name, email: user.email };
  localStorage.setItem('ml_sess', JSON.stringify(session));
  refreshUserUI();
  showAccountPanel();
  toast(`Bem-vinda, ${user.name.split(' ')[0]}! 👋`);
}

function doRegister(e) {
  e.preventDefault();
  const name  = document.getElementById('regName').value.trim();
  const email = document.getElementById('regEmail').value.trim();
  const pass  = document.getElementById('regPass').value;
  if (users.find(u => u.email === email)) {
    document.getElementById('regErr').textContent = 'Este email já está registado.'; return;
  }
  users.push({ name, email, pass });
  localStorage.setItem('ml_users', JSON.stringify(users));
  session = { name, email };
  localStorage.setItem('ml_sess', JSON.stringify(session));
  refreshUserUI();
  showAccountPanel();
  toast(`Conta criada! Bem-vinda, ${name.split(' ')[0]}! 🎉`);
}

function doLogout() {
  session = null;
  localStorage.removeItem('ml_sess');
  refreshUserUI();
  closeAuth();
  toast('Sessão terminada. Até breve!');
}

function refreshUserUI() {
  const label = session ? session.name.split(' ')[0] : '';
  document.getElementById('userLabel').textContent      = label;
  document.getElementById('mobUserLabel').textContent   = session ? `${label} — Conta` : 'Iniciar Sessão';
  const tabs = document.querySelectorAll('.auth-tab');
  tabs.forEach(t => t.style.display = session ? 'none' : '');
}

function togglePw(id, btn) {
  const inp = document.getElementById(id);
  if (inp.type === 'password') { inp.type = 'text'; btn.textContent = '🙈'; }
  else { inp.type = 'password'; btn.textContent = '👁'; }
}

// ── CHECKOUT ──────────────────────────────────────────────────
function openCheckout() {
  closeCart();
  if (!cart.length) { toast('O carrinho está vazio!'); return; }
  // Pre-fill from session
  if (session) {
    document.getElementById('ckName').value  = session.name  || '';
    document.getElementById('ckEmail').value = session.email || '';
  }
  buildCkSummary();
  ckGoTo(1);
  document.getElementById('ckModal').classList.add('open');
  document.getElementById('ckOverlay').classList.add('open');
}
function closeCheckout() {
  document.getElementById('ckModal').classList.remove('open');
  document.getElementById('ckOverlay').classList.remove('open');
}

function ckGoTo(step) {
  [1,2,3].forEach(s => {
    const el = document.getElementById(`ckStep${s}`);
    if (el) el.style.display = s === step ? '' : 'none';
    const dot = document.getElementById(`stepDot${s}`);
    if (dot) { dot.classList.toggle('active', s === step); dot.classList.toggle('done', s < step); }
  });
}

function ckNext(e, step) {
  if (e) e.preventDefault();
  if (step === 2) buildCkSummary();
  ckGoTo(step);
}
function ckBack(step) { ckGoTo(step); }

function buildCkSummary() {
  let sub = 0;
  const rows = cart.map(it => {
    const p = products.find(x => x.id === it.id);
    if (!p) return '';
    const line = p.price * it.qty; sub += line;
    return `<div class="ck-row"><span>${p.name} × ${it.qty} (${it.size})</span><span>${fmt(line)}</span></div>`;
  }).join('');
  const ship  = sub >= 49.99 ? 0 : 3.99;
  const grand = sub + ship;
  const html  = `${rows}<div class="ck-row ck-row--total"><span>Total</span><span>${fmt(grand)}</span></div>`;
  ['ckSummary1','ckSummary2'].forEach(id => { const el = document.getElementById(id); if (el) el.innerHTML = html; });
}

function selectPayMethod(m) {
  ['mbway','card','paypal','transfer'].forEach(x => {
    const f = document.getElementById(`pm_${x}_form`);
    if (f) f.style.display = x === m ? '' : 'none';
    const l = document.getElementById(`pm_${x}`);
    if (l) l.classList.toggle('selected', x === m);
  });
}

function fmtCard(inp) {
  let v = inp.value.replace(/\D/g,'').substring(0,16);
  inp.value = v.replace(/(.{4})/g,'$1 ').trim();
}
function fmtExp(inp) {
  let v = inp.value.replace(/\D/g,'').substring(0,4);
  if (v.length > 2) v = v.slice(0,2)+'/'+v.slice(2);
  inp.value = v;
}

function ckNext(e, step) {
  if (e) e.preventDefault();
  if (step === 3) { processOrder(); return; }
  if (step === 2) buildCkSummary();
  ckGoTo(step);
}

function processOrder() {
  const method = document.querySelector('input[name="payMethod"]:checked')?.value || 'mbway';
  const orderNum = 'ML-' + Date.now().toString().slice(-6);
  const name  = document.getElementById('ckName')?.value  || '';
  const email = document.getElementById('ckEmail')?.value || '';
  const addr  = document.getElementById('ckAddr')?.value  || '';
  const city  = document.getElementById('ckCity')?.value  || '';

  // Simulate payment processing
  let sub = 0;
  const items = cart.map(it => {
    const p = products.find(x => x.id === it.id);
    if (!p) return null;
    const line = p.price * it.qty; sub += line;
    return { name: p.name, qty: it.qty, size: it.size, price: line };
  }).filter(Boolean);

  const ship = sub >= 49.99 ? 0 : 3.99;
  const order = { id: orderNum, date: new Date().toLocaleDateString('pt-PT'), name, email, addr: `${addr}, ${city}`, method, items, sub, ship, total: sub + ship, status: 'Confirmada' };

  orders.push(order);
  localStorage.setItem('ml_orders', JSON.stringify(orders));
  if (session) {
    // attach order to user
    order.userEmail = session.email;
  }

  // Clear cart
  cart = [];
  saveCart();

  // Build confirmation
  const methodNames = { mbway:'MB WAY', card:'Cartão', paypal:'PayPal', transfer:'Transferência Bancária' };
  document.getElementById('ckOrderNum').textContent = `Encomenda #${orderNum}`;
  document.getElementById('ckConfirmMsg').textContent = `Obrigada, ${name.split(' ')[0]}! A sua encomenda foi recebida e será processada em breve.`;
  document.getElementById('ckSuccessDetails').innerHTML = `
    <div class="ck-det"><span>Método de Pagamento</span><strong>${methodNames[method]}</strong></div>
    <div class="ck-det"><span>Entrega em</span><strong>${addr}, ${city}</strong></div>
    <div class="ck-det"><span>Total Pago</span><strong>${fmt(sub + ship)}</strong></div>
    <div class="ck-det"><span>Confirmação enviada para</span><strong>${email}</strong></div>`;

  ckGoTo(3);
  toast(`Encomenda #${orderNum} confirmada! 🎉`);
}

// ── ORDERS ────────────────────────────────────────────────────
function openOrders() {
  closeAuth();
  const userOrders = session
    ? orders.filter(o => o.email === session.email || o.userEmail === session.email)
    : orders;
  const el = document.getElementById('ordersList');
  if (!userOrders.length) {
    el.innerHTML = '<p class="no-results">Ainda não tem encomendas.</p>';
  } else {
    el.innerHTML = userOrders.reverse().map(o => `
      <div class="order-card">
        <div class="order-card__hd">
          <strong>#${o.id}</strong>
          <span class="order-status">${o.status}</span>
          <span>${o.date}</span>
        </div>
        <div class="order-card__items">${o.items.map(i=>`<span>${i.name} × ${i.qty}</span>`).join(', ')}</div>
        <div class="order-card__ft"><span>Total: ${fmt(o.total)}</span><span>📦 ${o.addr}</span></div>
      </div>`).join('');
  }
  document.getElementById('ordersModal').classList.add('open');
  document.getElementById('ordersOverlay').classList.add('open');
}
function closeOrders() {
  document.getElementById('ordersModal').classList.remove('open');
  document.getElementById('ordersOverlay').classList.remove('open');
}

// ── MOBILE MENU ───────────────────────────────────────────────
function toggleMobile() {
  document.getElementById('mobMenu').classList.toggle('open');
  document.getElementById('mobOverlay').classList.toggle('open');
}

// ── UTILS ─────────────────────────────────────────────────────
function show(id) {
  const el = document.getElementById(id);
  if (!el) return;
  el.style.display = '';
  // Emil: gentle fade-up on page switch — masks the hard display swap
  el.classList.remove('page-in');
  void el.offsetWidth;
  el.classList.add('page-in');
}
function hide(id) { const el = document.getElementById(id); if (el) el.style.display = 'none'; }

function toast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3200);
}
