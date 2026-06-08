// ===== PRODUCT DATA =====
const products = [
  // VESTIDOS
  { id: 1, name: 'Vestido Floral "Belle"', cat: ['vestidos','novidades'], price: 29.99, emoji: '👗', desc: 'Vestido floral delicado com corte midi. Tecido leve e fluido, perfeito para o dia a dia ou ocasiões especiais.', sizes: ['XS','S','M','L','XL'], new: true },
  { id: 2, name: 'Vestido "Velvet Rose"', cat: ['vestidos'], price: 39.99, emoji: '🌹', desc: 'Vestido elegante em veludo cotelê com decote em V. Ideal para jantares e eventos especiais.', sizes: ['S','M','L'] },
  { id: 3, name: 'Vestido Midi "Lace Dream"', cat: ['vestidos','saldos'], price: 19.99, oldPrice: 34.99, emoji: '🤍', desc: 'Vestido midi em renda delicada. Sofisticado e elegante com acabamentos premium.', sizes: ['XS','S','M','L'], sale: true },
  { id: 4, name: 'Vestido Curto "Summer Glow"', cat: ['vestidos','novidades'], price: 24.99, emoji: '🌸', desc: 'Vestido curto vibrante, perfeito para os dias quentes. Corte favorecedor para todas as silhuetas.', sizes: ['XS','S','M','L','XL'], new: true },
  { id: 5, name: 'Vestido "Sunset Wrap"', cat: ['vestidos'], price: 32.99, emoji: '🧡', desc: 'Vestido wrap com padrão tie-dye em tons quentes. Elegante e versátil para qualquer ocasião.', sizes: ['S','M','L','XL'] },

  // TOPS
  { id: 6, name: 'Blusa "Soft Romance"', cat: ['tops','novidades'], price: 15.99, emoji: '🌷', desc: 'Blusa fluida em tecido suave com detalhes em renda. Combina com tudo!', sizes: ['XS','S','M','L','XL'], new: true },
  { id: 7, name: 'Top Colete "Velvet"', cat: ['tops'], price: 18.99, emoji: '💜', desc: 'Colete em veludo com botões vintage. Perfeito sobre camisas ou sozinho nos dias quentes.', sizes: ['S','M','L'] },
  { id: 8, name: 'Blusa "Garden Party"', cat: ['tops','saldos'], price: 11.99, oldPrice: 17.99, emoji: '🌿', desc: 'Blusa bordada com motivos florais delicados. Leve e elegante para o dia a dia.', sizes: ['XS','S','M','L'], sale: true },
  { id: 9, name: 'T-Shirt "Minimal Chic"', cat: ['tops'], price: 13.99, emoji: '🤍', desc: 'T-shirt premium com corte feminino e logo discreto. O essencial do guarda-roupa moderno.', sizes: ['XS','S','M','L','XL','XXL'] },
  { id: 10, name: 'Corpete "Star Night"', cat: ['tops','novidades'], price: 21.99, emoji: '⭐', desc: 'Corpete estruturado com detalhes metalizados. Para uma noite inesquecível.', sizes: ['S','M','L'], new: true },

  // CALÇAS
  { id: 11, name: 'Calças "Lace Bow"', cat: ['calcas','novidades'], price: 18.00, emoji: '🎀', desc: 'Calças wide-leg com detalhe de laço nas costas. Tendência da estação!', sizes: ['XS','S','M','L','XL'], new: true },
  { id: 12, name: 'Calças de Ganga "Bloom Stitch"', cat: ['calcas'], price: 29.99, emoji: '🌻', desc: 'Calças de ganga com bordado floral na barra. Um toque único para o seu look.', sizes: ['34','36','38','40','42'] },
  { id: 13, name: 'Calças "Palazzo Dream"', cat: ['calcas'], price: 22.99, emoji: '🌊', desc: 'Calças palazzo em tecido fluido. Conforto e elegância em cada passo.', sizes: ['XS','S','M','L','XL','XXL'] },
  { id: 14, name: 'Calças Cargo "Urban Girl"', cat: ['calcas','saldos'], price: 16.99, oldPrice: 24.99, emoji: '🪖', desc: 'Calças cargo com múltiplos bolsos. Estilo urbano e funcional.', sizes: ['XS','S','M','L'], sale: true },

  // SAIAS
  { id: 15, name: 'Saia Mini "Tweed Chic"', cat: ['saias','novidades'], price: 23.99, emoji: '💎', desc: 'Saia mini em tweed com forro. Elegante e sofisticada para qualquer ocasião.', sizes: ['XS','S','M','L'], new: true },
  { id: 16, name: 'Saia Midi "Boho Floral"', cat: ['saias'], price: 19.99, emoji: '🌺', desc: 'Saia midi com estampa floral boho. Fluida e romântica, perfeita para o Verão.', sizes: ['XS','S','M','L','XL'] },
  { id: 17, name: 'Saia "Satin Slip"', cat: ['saias'], price: 26.99, emoji: '✨', desc: 'Saia em cetim com corte enviesado. Luxo e feminilidade num só look.', sizes: ['XS','S','M','L'] },

  // CASACOS
  { id: 18, name: 'Blazer "Power Femme"', cat: ['casacos','novidades'], price: 49.99, emoji: '👔', desc: 'Blazer oversized em tecido texturado. Autoridade e estilo para o trabalho e além.', sizes: ['XS','S','M','L','XL'], new: true },
  { id: 19, name: 'Casaco "Camel Dream"', cat: ['casacos'], price: 59.99, emoji: '🐪', desc: 'Casaco clássico em tom camel. Um investimento atemporal para o seu guarda-roupa.', sizes: ['S','M','L','XL'] },
  { id: 20, name: 'Cardigan "Cozy Knit"', cat: ['casacos','saldos'], price: 22.99, oldPrice: 35.99, emoji: '🧶', desc: 'Cardigan longo em malha macia. Conforto máximo para os dias frescos.', sizes: ['S','M','L','XL','XXL'], sale: true },

  // CONJUNTOS
  { id: 21, name: 'Conjunto "Linen Set"', cat: ['conjuntos','novidades'], price: 44.99, emoji: '🍃', desc: 'Conjunto de blusa e calças em linho. Fresco, elegante e sustentável.', sizes: ['XS','S','M','L','XL'], new: true },
  { id: 22, name: 'Conjunto "Satin Duo"', cat: ['conjuntos'], price: 52.99, emoji: '💫', desc: 'Conjunto de top e saia em cetim cor-de-rosa. Perfeito para eventos especiais.', sizes: ['S','M','L'] },

  // MACACÕES
  { id: 23, name: 'Macacão "Denim Jump"', cat: ['macaoes'], price: 34.99, emoji: '🦋', desc: 'Macacão em ganga com cintura ajustável. Prático, moderno e super versátil.', sizes: ['XS','S','M','L','XL'] },
  { id: 24, name: 'Macacão "Floral Jumpsuit"', cat: ['macaoes','novidades'], price: 38.99, emoji: '🌼', desc: 'Macacão com estampa floral e perna larga. Um look completo numa só peça.', sizes: ['XS','S','M','L'], new: true },

  // MALAS
  { id: 25, name: 'Mala BAGCO "Mini Tote"', cat: ['malas','novidades'], price: 19.99, emoji: '👜', desc: 'Mini tote bag em pele sintética premium. Espaçosa e elegante para o dia a dia.', sizes: ['Único'], new: true },
  { id: 26, name: 'Mala "Bucket Bag"', cat: ['malas'], price: 24.99, emoji: '🪣', desc: 'Bucket bag em camurça sintética. Tendência atemporal com múltiplos compartimentos.', sizes: ['Único'] },
  { id: 27, name: 'Carteira Coveri', cat: ['malas','saldos'], price: 7.99, oldPrice: 14.99, emoji: '💼', desc: 'Carteira elegante com múltiplos bolsos internos. Marca Coveri de qualidade italiana.', sizes: ['Único'], sale: true },
  { id: 28, name: 'Mala "Croc Clutch"', cat: ['malas'], price: 15.99, emoji: '🐊', desc: 'Clutch com textura crocodilo em várias cores. O acessório perfeito para qualquer look.', sizes: ['Único'] },

  // BRINCOS
  { id: 29, name: 'Brincos "Hoop Gold"', cat: ['brincos','novidades'], price: 8.99, emoji: '💛', desc: 'Brincos argola banhados a ouro. Clássicos e elegantes para qualquer ocasião.', sizes: ['Único'], new: true },
  { id: 30, name: 'Brincos "Pearl Drop"', cat: ['brincos'], price: 11.99, emoji: '🤍', desc: 'Brincos pendentes com pérola sintética. Sofisticados e delicados.', sizes: ['Único'] },
  { id: 31, name: 'Brincos "Crystal Star"', cat: ['brincos','saldos'], price: 5.99, oldPrice: 9.99, emoji: '⭐', desc: 'Brincos em forma de estrela com cristais. Modernos e brilhantes.', sizes: ['Único'], sale: true },

  // COLARES
  { id: 32, name: 'Colar "Layered Gold"', cat: ['colares'], price: 12.99, emoji: '✨', desc: 'Colar em camadas banhado a ouro. Trendy e versátil para layering.', sizes: ['Único'] },
  { id: 33, name: 'Colar "Pearl Chain"', cat: ['colares','novidades'], price: 14.99, emoji: '🦪', desc: 'Colar de pérolas sintéticas com fecho dourado. Elegância clássica e atemporal.', sizes: ['Único'], new: true },

  // PULSEIRAS
  { id: 34, name: 'Pulseira "Charm Set"', cat: ['pulseiras'], price: 9.99, emoji: '📿', desc: 'Set de 3 pulseiras com charms delicados. Perfeitas para usar em conjunto ou separadas.', sizes: ['Único'] },
  { id: 35, name: 'Pulseira "Gold Cuff"', cat: ['pulseiras','novidades'], price: 13.99, emoji: '💛', desc: 'Pulseira rígida banhada a ouro. Minimalista e elegante.', sizes: ['Único'], new: true },

  // ANÉIS
  { id: 36, name: 'Anel "Floral Ring"', cat: ['aneis'], price: 6.99, emoji: '💍', desc: 'Anel com design floral em metal dourado. Delicado e feminino.', sizes: ['15','16','17','18'] },
  { id: 37, name: 'Anel "Statement"', cat: ['aneis','saldos'], price: 4.99, oldPrice: 8.99, emoji: '💜', desc: 'Anel statement com pedra roxa. Ousado e moderno.', sizes: ['15','16','17','18'], sale: true },
];

// ===== STATE =====
let cart = JSON.parse(localStorage.getItem('mlCart') || '[]');
let wishlist = JSON.parse(localStorage.getItem('mlWishlist') || '[]');
let currentPage = 'home';
let currentCat = 'all';
let filteredProducts = [...products];

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderHomeGrid();
  updateCartBadge();
  updateWishlistBadge();
  setupScrollHeader();
  setupDropdownNav();
  setupScrollObserver();
});

// ===== HEADER SCROLL =====
function setupScrollHeader() {
  window.addEventListener('scroll', () => {
    document.getElementById('header').classList.toggle('scrolled', window.scrollY > 40);
  });
}

// ===== DROPDOWN NAV LINKS =====
function setupDropdownNav() {
  document.querySelectorAll('.dropdown a[data-cat]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      filterCat(link.dataset.cat);
    });
  });
}

// ===== SCROLL OBSERVER =====
function setupScrollObserver() {
  const obs = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target); }});
  }, { threshold: 0.1 });
  document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));
}

// ===== RENDER PRODUCT CARD =====
function renderCard(p) {
  const inWish = wishlist.includes(p.id);
  const imgHTML = `<div class="product-card__emoji">${p.emoji}</div>`;
  return `
    <div class="product-card" onclick="openProduct(${p.id})">
      <div class="product-card__img">
        ${imgHTML}
        <div class="product-card__badges">
          ${p.new ? '<span class="badge-tag badge-tag--new">Novo</span>' : ''}
          ${p.sale ? '<span class="badge-tag badge-tag--sale">Saldo</span>' : ''}
        </div>
        <div class="product-card__actions" onclick="event.stopPropagation()">
          <button class="btn-add-cart" onclick="addToCart(${p.id})">Adicionar</button>
          <button class="btn-wishlist" onclick="toggleWishlistItem(${p.id})">${inWish ? '♥' : '♡'}</button>
        </div>
      </div>
      <div class="product-card__info">
        <p class="product-card__cat">${catLabel(p.cat[0])}</p>
        <p class="product-card__name">${p.name}</p>
        <div class="product-card__price">
          <span class="price-current">€${p.price.toFixed(2).replace('.',',')}</span>
          ${p.oldPrice ? `<span class="price-old">€${p.oldPrice.toFixed(2).replace('.',',')}</span>` : ''}
        </div>
      </div>
    </div>`;
}

function catLabel(cat) {
  const labels = { novidades:'Novidades', vestidos:'Vestidos', tops:'Tops & Blusas', calcas:'Calças', saias:'Saias', casacos:'Casacos', conjuntos:'Conjuntos', macaoes:'Macacões', malas:'Malas', brincos:'Brincos', colares:'Colares', pulseiras:'Pulseiras', aneis:'Anéis', saldos:'Saldos' };
  return labels[cat] || cat;
}

// ===== HOME GRID =====
function renderHomeGrid() {
  const newItems = products.filter(p => p.new).slice(0, 8);
  document.getElementById('homeGrid').innerHTML = newItems.map(renderCard).join('');
}

// ===== SHOW HOME =====
function showHome() {
  document.getElementById('homePage').style.display = '';
  document.getElementById('shopPage').style.display = 'none';
  document.getElementById('productPage').style.display = 'none';
  currentPage = 'home';
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== FILTER CATEGORY =====
function filterCat(cat) {
  currentCat = cat;
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('shopPage').style.display = '';
  document.getElementById('productPage').style.display = 'none';
  currentPage = 'shop';

  // Update sidebar radio
  const radio = document.querySelector(`input[name="catFilter"][value="${cat}"]`);
  if (radio) radio.checked = true;

  applyFilters();
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ===== APPLY FILTERS =====
function applyFilters() {
  const cat = document.querySelector('input[name="catFilter"]:checked')?.value || 'all';
  const price = document.querySelector('input[name="priceFilter"]:checked')?.value || 'all';
  const sort = document.getElementById('sortSelect')?.value || 'default';

  let list = [...products];

  if (cat !== 'all') list = list.filter(p => p.cat.includes(cat));

  if (price === '0-15') list = list.filter(p => p.price <= 15);
  else if (price === '15-25') list = list.filter(p => p.price > 15 && p.price <= 25);
  else if (price === '25-50') list = list.filter(p => p.price > 25 && p.price <= 50);
  else if (price === '50+') list = list.filter(p => p.price > 50);

  list = sortList(list, sort);
  filteredProducts = list;

  const titles = { all:'Todos os Produtos', novidades:'✨ Novidades', vestidos:'Vestidos', tops:'Tops & Blusas', calcas:'Calças', saias:'Saias', casacos:'Casacos', conjuntos:'Conjuntos', macaoes:'Macacões', malas:'Malas', brincos:'Brincos', colares:'Colares', pulseiras:'Pulseiras', aneis:'Anéis', saldos:'🏷️ Saldos' };
  document.getElementById('shopTitle').textContent = titles[cat] || 'Produtos';
  document.getElementById('shopCount').textContent = `${list.length} produto${list.length !== 1 ? 's' : ''}`;
  document.getElementById('shopGrid').innerHTML = list.length ? list.map(renderCard).join('') : '<p style="color:var(--muted);padding:40px 0">Nenhum produto encontrado.</p>';
}

function sortProducts(val) { applyFilters(); }

function sortList(list, sort) {
  if (sort === 'price-asc') return [...list].sort((a,b) => a.price - b.price);
  if (sort === 'price-desc') return [...list].sort((a,b) => b.price - a.price);
  if (sort === 'name') return [...list].sort((a,b) => a.name.localeCompare(b.name));
  return list;
}

// ===== SEARCH =====
function toggleSearch() {
  const bar = document.getElementById('searchBar');
  bar.classList.toggle('open');
  if (bar.classList.contains('open')) document.getElementById('searchInput').focus();
}

function searchProducts(val) {
  if (!val.trim()) return;
  const q = val.toLowerCase();
  const results = products.filter(p => p.name.toLowerCase().includes(q) || p.desc.toLowerCase().includes(q));

  document.getElementById('homePage').style.display = 'none';
  document.getElementById('shopPage').style.display = '';
  document.getElementById('productPage').style.display = 'none';

  document.getElementById('shopTitle').textContent = `Resultados para "${val}"`;
  document.getElementById('shopCount').textContent = `${results.length} produto${results.length !== 1 ? 's' : ''}`;
  document.getElementById('shopGrid').innerHTML = results.length ? results.map(renderCard).join('') : '<p style="color:var(--muted);padding:40px 0">Nenhum produto encontrado.</p>';

  // Reset sidebar
  const radio = document.querySelector('input[name="catFilter"][value="all"]');
  if (radio) radio.checked = true;
}

// ===== PRODUCT DETAIL =====
function openProduct(id) {
  const p = products.find(x => x.id === id);
  if (!p) return;

  document.getElementById('homePage').style.display = 'none';
  document.getElementById('shopPage').style.display = 'none';
  document.getElementById('productPage').style.display = '';
  currentPage = 'product';

  const inWish = wishlist.includes(p.id);
  const related = products.filter(x => x.cat[0] === p.cat[0] && x.id !== p.id).slice(0, 4);

  document.getElementById('productDetail').innerHTML = `
    <div class="product-detail__back" onclick="goBack()">← Voltar</div>
    <div class="product-detail__grid">
      <div class="product-detail__images">
        <div class="product-detail__main-img">${p.emoji}</div>
      </div>
      <div class="product-detail__info">
        <p class="product-detail__cat">${catLabel(p.cat[0])}</p>
        <h1 class="product-detail__name">${p.name}</h1>
        <div class="product-detail__price">
          <span class="price-current">€${p.price.toFixed(2).replace('.',',')}</span>
          ${p.oldPrice ? `<span class="price-old">€${p.oldPrice.toFixed(2).replace('.',',')}</span>` : ''}
        </div>
        <p class="product-detail__desc">${p.desc}</p>
        <div class="product-detail__size">
          <label>Tamanho</label>
          <div class="size-options">
            ${p.sizes.map((s,i) => `<button class="size-btn ${i===0?'active':''}" onclick="selectSize(this,'${s}')">${s}</button>`).join('')}
          </div>
        </div>
        <div class="product-detail__actions">
          <button class="btn-add-to-cart-detail" onclick="addToCartDetail(${p.id})">🛍️ Adicionar ao Carrinho</button>
          <button class="btn-wishlist-detail" onclick="toggleWishlistItem(${p.id})" id="wishBtn${p.id}">${inWish ? '♥ Remover dos Favoritos' : '♡ Adicionar aos Favoritos'}</button>
        </div>
        <div class="product-detail__meta">
          <span><strong>Referência:</strong> ML-${String(p.id).padStart(4,'0')}</span>
          <span><strong>Disponibilidade:</strong> Em stock</span>
          <span><strong>Envio:</strong> 2–4 dias úteis · Grátis acima de €49,99</span>
          ${p.new ? '<span><strong>✨ Novidade</strong> — Edição limitada sem reposição</span>' : ''}
        </div>
      </div>
    </div>
    ${related.length ? `
    <div style="margin-top:60px">
      <div class="section-header"><span class="label">Também pode gostar</span></div>
      <div class="products-grid">${related.map(renderCard).join('')}</div>
    </div>` : ''}
  `;
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function selectSize(btn, size) {
  btn.closest('.size-options').querySelectorAll('.size-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

function goBack() {
  if (currentPage === 'product') {
    document.getElementById('productPage').style.display = 'none';
    if (currentCat === 'all' || currentCat === '') {
      showHome();
    } else {
      document.getElementById('shopPage').style.display = '';
      currentPage = 'shop';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }
}

function addToCartDetail(id) {
  const p = products.find(x => x.id === id);
  const selectedSize = document.querySelector('.size-btn.active')?.textContent || p.sizes[0];
  addToCartWithSize(id, selectedSize);
}

// ===== CART =====
function addToCart(id) {
  const p = products.find(x => x.id === id);
  addToCartWithSize(id, p.sizes[0]);
}

function addToCartWithSize(id, size) {
  const p = products.find(x => x.id === id);
  const key = `${id}-${size}`;
  const existing = cart.find(x => x.key === key);
  if (existing) { existing.qty++; }
  else { cart.push({ key, id, size, qty: 1 }); }
  saveCart();
  showToast(`"${p.name}" adicionado ao carrinho 🛍️`);
}

function removeFromCart(key) {
  cart = cart.filter(x => x.key !== key);
  saveCart();
  renderCartSidebar();
}

function changeQty(key, delta) {
  const item = cart.find(x => x.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) cart = cart.filter(x => x.key !== key);
  saveCart();
  renderCartSidebar();
}

function saveCart() {
  localStorage.setItem('mlCart', JSON.stringify(cart));
  updateCartBadge();
  renderCartSidebar();
}

function updateCartBadge() {
  const total = cart.reduce((s, x) => s + x.qty, 0);
  document.getElementById('cartBadge').textContent = total;
}

function renderCartSidebar() {
  const container = document.getElementById('cartItems');
  const footer = document.getElementById('cartFooter');

  if (!cart.length) {
    container.innerHTML = `<div class="cart-empty"><svg width="60" height="60" fill="none" stroke="currentColor" stroke-width="1" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z"/></svg><p>O carrinho está vazio</p></div>`;
    footer.style.display = 'none';
    return;
  }

  let total = 0;
  container.innerHTML = cart.map(item => {
    const p = products.find(x => x.id === item.id);
    if (!p) return '';
    const subtotal = p.price * item.qty;
    total += subtotal;
    return `
      <div class="cart-item">
        <div class="cart-item__img">${p.emoji}</div>
        <div class="cart-item__info">
          <p class="cart-item__name">${p.name}</p>
          <p class="cart-item__size">Tamanho: ${item.size}</p>
          <div class="cart-item__row">
            <div class="cart-item__qty">
              <button onclick="changeQty('${item.key}',-1)">−</button>
              <span>${item.qty}</span>
              <button onclick="changeQty('${item.key}',1)">+</button>
            </div>
            <span class="cart-item__price">€${subtotal.toFixed(2).replace('.',',')}</span>
          </div>
          <p class="cart-item__remove" onclick="removeFromCart('${item.key}')">Remover</p>
        </div>
      </div>`;
  }).join('');

  document.getElementById('cartTotal').textContent = `€${total.toFixed(2).replace('.',',')}`;
  document.getElementById('cartShipping').textContent = total >= 49.99 ? '✅ Envio grátis incluído!' : `Faltam €${(49.99 - total).toFixed(2).replace('.',',')} para envio grátis`;
  footer.style.display = '';
}

function toggleCart() {
  const sidebar = document.getElementById('cartSidebar');
  const overlay = document.getElementById('cartOverlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('open');
  if (sidebar.classList.contains('open')) renderCartSidebar();
}

// ===== WISHLIST =====
function toggleWishlistItem(id) {
  if (wishlist.includes(id)) {
    wishlist = wishlist.filter(x => x !== id);
    showToast('Removido dos favoritos');
  } else {
    wishlist.push(id);
    const p = products.find(x => x.id === id);
    showToast(`"${p.name}" adicionado aos favoritos ♥`);
  }
  localStorage.setItem('mlWishlist', JSON.stringify(wishlist));
  updateWishlistBadge();
  // update btn if on detail page
  const btn = document.getElementById(`wishBtn${id}`);
  if (btn) btn.textContent = wishlist.includes(id) ? '♥ Remover dos Favoritos' : '♡ Adicionar aos Favoritos';
}

function toggleWishlist() {
  if (!wishlist.length) { showToast('A sua lista de favoritos está vazia'); return; }
  currentCat = 'favoritos';
  document.getElementById('homePage').style.display = 'none';
  document.getElementById('shopPage').style.display = '';
  document.getElementById('productPage').style.display = 'none';
  const list = products.filter(p => wishlist.includes(p.id));
  document.getElementById('shopTitle').textContent = '♥ Favoritos';
  document.getElementById('shopCount').textContent = `${list.length} produto${list.length !== 1 ? 's' : ''}`;
  document.getElementById('shopGrid').innerHTML = list.map(renderCard).join('');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function updateWishlistBadge() {
  const badge = document.getElementById('wishlistBadge');
  if (wishlist.length) { badge.textContent = wishlist.length; badge.style.display = 'flex'; }
  else { badge.style.display = 'none'; }
}

// ===== MOBILE MENU =====
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ===== TOAST =====
function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 3000);
}
