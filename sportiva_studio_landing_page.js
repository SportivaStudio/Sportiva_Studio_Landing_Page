// Global State & Product Database
const products = [
  {
    id: 1,
    title: "Pink Sculpting Seamless Set",
    category: "activewear",
    sub: "activewear",
    price: "$68.00",
    code: "SPORTIVA10",
    isBestseller: true,
    link: "https://example.com/affiliate-link-1",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Non-Slip Aesthetic Grip Socks",
    category: "pilates",
    sub: "accessories",
    price: "$18.00",
    code: "GRIP10",
    isBestseller: true,
    link: "https://example.com/affiliate-link-2",
    img: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Dusty Rose Resistance Bands Set",
    category: "equipment",
    sub: "bands",
    price: "$26.00",
    code: "BAND10",
    isBestseller: true,
    link: "https://example.com/affiliate-link-3",
    img: "https://images.unsplash.com/photo-1598289431512-b97b0917affc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 4,
    title: "Pure Glow Marine Collagen",
    category: "supplements",
    sub: "all",
    price: "$42.00",
    code: "GLOW20",
    isBestseller: true,
    link: "https://example.com/affiliate-link-4",
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 5,
    title: "Thick Eco-Friendly Pilates Mat",
    category: "pilates",
    sub: "equipment",
    price: "$54.00",
    code: "MAT10",
    isBestseller: false,
    link: "https://example.com/affiliate-link-5",
    img: "https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 6,
    title: "Gym Heavy Resistance Loop",
    category: "gym",
    sub: "bands",
    price: "$22.00",
    code: "GYM10",
    isBestseller: false,
    link: "https://example.com/affiliate-link-6",
    img: "https://images.unsplash.com/photo-1517838277536-f5f99be501cd?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 7,
    title: "Compact Pilates Reformer Machine",
    category: "pilates",
    sub: "equipment",
    price: "$450.00",
    code: "STUDIO50",
    isBestseller: false,
    link: "https://example.com/affiliate-link-7",
    img: "https://images.unsplash.com/photo-1518611012118-696072aa579a?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 8,
    title: "Post-Workout Clean Protein Powder",
    category: "supplements",
    sub: "all",
    price: "$48.00",
    code: "CLEAN15",
    isBestseller: false,
    link: "https://example.com/affiliate-link-8",
    img: "https://images.unsplash.com/photo-1579722821273-0f6c7d44362f?auto=format&fit=crop&w=600&q=80"
  }
];

// Sub-categories mapping
const subCategoryMap = {
  all: [],
  activewear: ["all"],
  equipment: ["all", "mat", "bands", "machines", "other"],
  pilates: ["all", "accessories", "activewear", "equipment"],
  gym: ["all", "mat", "bands", "machines", "other"],
  supplements: ["all"]
};

// Application State
let currentLang = 'en';
let currentCategory = 'all';
let currentSubCategory = 'all';
let savedProductIds = JSON.parse(localStorage.getItem('sportiva_saved') || '[]');
let currentUser = null;

// Multi-language Translations
const translations = {
  en: {
    promo: "✨ EXCLUSIVE CREATOR DISCOUNTS APPLIED AT CHECKOUT ✨",
    navBestsellers: "Bestsellers",
    navCatalog: "Catalog",
    navAbout: "About Us",
    heroTitle: "Elevate Your Daily Workout Routine",
    heroSubtitle: "Discover premium aesthetic activewear, non-slip Pilates gear, and clean daily supplements.",
    heroBtn1: "Shop Bestsellers",
    heroBtn2: "Explore Categories",
    secBestsellersTitle: "Our Bestsellers",
    secBestsellersSub: "Most loved items this week",
    catMainTitle: "Full Product Catalog",
    catMainSub: "Filter by category to find your perfect studio aesthetic",
    aboutTitle: "About Sportiva Studio Group",
    aboutP1: "Sportiva Studio was founded with a singular mission: to bridge aesthetic fitness culture with clean, high-performance daily essentials.",
    aboutP2: "Through direct partnerships with leading wellness brands, we bring exclusive discount codes and direct access to authentic products.",
    shopBtn: "Shop Now ↗",
    savedBtn: "Saved",
    pinBtn: "📌 Pin"
  },
  fr: {
    promo: "✨ RÉDUCTIONS EXCLUSIVES CRÉATEUR APPLIQUÉES AU CHECKOUT ✨",
    navBestsellers: "Meilleures Ventes",
    navCatalog: "Catalogue",
    navAbout: "À Propos",
    heroTitle: "Élevez Votre Routine d'Entraînement",
    heroSubtitle: "Découvrez des vêtements de sport esthétiques, des équipements de Pilates et des compléments récents.",
    heroBtn1: "Voir les Bestsellers",
    heroBtn2: "Explorer les Catégories",
    secBestsellersTitle: "Nos Meilleures Ventes",
    secBestsellersSub: "Articles les plus aimés cette semaine",
    catMainTitle: "Catalogue Complet",
    catMainSub: "Filtrez par catégorie pour trouver votre style idéal",
    aboutTitle: "À Propos du Groupe Sportiva Studio",
    aboutP1: "Sportiva Studio a été fondé pour associer la culture du fitness esthétique à des essentiels performants.",
    aboutP2: "Grâce à nos partenariats directs, nous proposons des codes de réduction exclusifs et un accès direct aux produits officiels.",
    shopBtn: "Acheter ↗",
    savedBtn: "Sauvegardé",
    pinBtn: "📌 Épingler"
  },
  de: {
    promo: "✨ EXKLUSIVE RABATTE BEIM CHECKOUT AUTOMATISCH ANGEWENDET ✨",
    navBestsellers: "Bestseller",
    navCatalog: "Katalog",
    navAbout: "Über Uns",
    heroTitle: "Werten Sie Ihre Workout-Routine Auf",
    heroSubtitle: "Entdecken Sie ästhetische Activewear, rutschfeste Pilates-Ausrüstung und reine Nahrungsergänzungsmittel.",
    heroBtn1: "Bestseller Shoppen",
    heroBtn2: "Kategorien Erkunden",
    secBestsellersTitle: "Unsere Bestseller",
    secBestsellersSub: "Beliebteste Produkte dieser Woche",
    catMainTitle: "Vollständiger Produktkatalog",
    catMainSub: "Filtern Sie nach Kategorie für Ihren perfekten Studio-Look",
    aboutTitle: "Über Die Sportiva Studio Gruppe",
    aboutP1: "Sportiva Studio wurde gegründet, um ästhetische Fitnesskultur mit leistungsstarken Essentials zu verbinden.",
    aboutP2: "Durch direkte Partnerschaften bieten wir exklusive Rabattcodes und direkten Zugang zu offiziellen Produkten.",
    shopBtn: "Jetzt Kaufen ↗",
    savedBtn: "Gespeichert",
    pinBtn: "📌 Pinnen"
  }
};

// Initialize Page
document.addEventListener("DOMContentLoaded", () => {
  checkUserCookie();
  renderBestsellers();
  renderProducts();
  updateCartUI();
  handleHashNavigation();
});

// User Cookie & Authentication Logic
function checkUserCookie() {
  const match = document.cookie.match(new RegExp('(^| )sportiva_user=([^;]+)'));
  if (match) {
    currentUser = { email: decodeURIComponent(match[2]) };
    updateAuthUI();
  }
}

function openAuthModal() {
  document.getElementById('auth-modal').classList.remove('hidden');
}

function closeAuthModal() {
  document.getElementById('auth-modal').classList.add('hidden');
}

function handleGoogleAuth() {
  const mockEmail = "user.google@gmail.com";
  setAuthUser(mockEmail);
  showToast("Signed in with Google!");
  closeAuthModal();
}

function handleEmailAuth(e) {
  e.preventDefault();
  const email = document.getElementById('auth-email').value;
  setAuthUser(email);
  showToast("Account created successfully!");
  closeAuthModal();
}

function setAuthUser(email) {
  currentUser = { email };
  // Store Cookie for 30 Days
  const date = new Date();
  date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
  document.cookie = `sportiva_user=${encodeURIComponent(email)};expires=${date.toUTCString()};path=/`;
  document.cookie = `sportiva_cookie_consent=accepted;expires=${date.toUTCString()};path=/`;
  updateAuthUI();
}

function updateAuthUI() {
  const btnText = document.getElementById('auth-btn-text');
  if (currentUser) {
    btnText.innerText = currentUser.email.split('@')[0];
  } else {
    btnText.innerText = "Sign In";
  }
}

// Intercept Actions if Unauthenticated
function requireAuth(actionCallback) {
  if (!currentUser) {
    openAuthModal();
  } else {
    actionCallback();
  }
}

// Bestsellers Horizontal Scroll Slider
function renderBestsellers() {
  const container = document.getElementById('bestsellers-container');
  const bestsellers = products.filter(p => p.isBestseller);
  
  container.innerHTML = bestsellers.map(p => `
    <div id="product-${p.id}" class="w-48 sm:w-56 flex-shrink-0 bg-white border border-[#F5E6EA] rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all p-3 flex flex-col justify-between">
      <div>
        <div class="relative h-40 rounded-lg overflow-hidden mb-2 bg-[#FFF5F7]">
          <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover">
          <button onclick="toggleSaveProduct(${p.id})" class="absolute top-2 right-2 w-7 h-7 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-[#B57288] hover:bg-white transition-colors">
            <i class="${savedProductIds.includes(p.id) ? 'fa-solid' : 'fa-regular'} fa-heart text-xs"></i>
          </button>
        </div>
        <h4 class="text-xs font-semibold text-[#2C2C2C] truncate">${p.title}</h4>
        <p class="text-[11px] text-[#B57288] font-bold mt-0.5">${p.price}</p>
      </div>
      <div class="mt-3 flex items-center gap-1.5">
        <button onclick="handleShopClick('${p.link}')" class="flex-1 bg-[#B57288] hover:bg-[#9A5B70] text-white text-[10px] uppercase tracking-wider py-1.5 rounded-full font-medium transition-colors text-center">
          ${translations[currentLang].shopBtn}
        </button>
        <button onclick="pinToPinterest(${p.id})" class="p-1.5 text-red-600 hover:bg-red-50 rounded-full text-xs" title="Pin to Pinterest">
          <i class="fa-brands fa-pinterest"></i>
        </button>
      </div>
    </div>
  `).join('');
}

function scrollBestsellers(amount) {
  document.getElementById('bestsellers-container').scrollBy({ left: amount, behavior: 'smooth' });
}

// Category & Sub-Category Filtering
function selectMainCategory(cat) {
  currentCategory = cat;
  currentSubCategory = 'all';

  // Update Main Category Buttons Active State
  document.querySelectorAll('#main-category-buttons .cat-btn').forEach(btn => {
    if (btn.dataset.cat === cat) {
      btn.className = "cat-btn active bg-[#B57288] text-white text-xs font-medium px-4 py-2 rounded-full transition-all shadow-sm";
    } else {
      btn.className = "cat-btn bg-white border border-[#E8A5B8] text-[#555] hover:bg-[#FDE8ED] text-xs font-medium px-4 py-2 rounded-full transition-all";
    }
  });

  renderSubCategories();
  renderProducts();
}

function renderSubCategories() {
  const container = document.getElementById('subcategory-buttons');
  const subs = subCategoryMap[currentCategory] || [];

  if (subs.length <= 1) {
    container.innerHTML = '';
    return;
  }

  container.innerHTML = subs.map(sub => `
    <button onclick="selectSubCategory('${sub}')" class="px-3 py-1 rounded-full border ${currentSubCategory === sub ? 'bg-[#E8A5B8] text-white border-[#E8A5B8]' : 'bg-white text-[#666] border-[#F5C2D0] hover:bg-[#FDE8ED]'} capitalize transition-colors">
      ${sub}
    </button>
  `).join('');
}

function selectSubCategory(sub) {
  currentSubCategory = sub;
  renderSubCategories();
  renderProducts();
}

// Render Main Catalog Grid
function renderProducts() {
  const container = document.getElementById('product-grid');
  let filtered = products;

  if (currentCategory !== 'all') {
    filtered = filtered.filter(p => p.category === currentCategory);
  }

  if (currentSubCategory !== 'all') {
    filtered = filtered.filter(p => p.sub === currentSubCategory);
  }

  if (filtered.length === 0) {
    container.innerHTML = `<div class="col-span-full text-center py-8 text-xs text-[#888]">No products found in this subcategory.</div>`;
    return;
  }

  container.innerHTML = filtered.map(p => `
    <div id="product-${p.id}" class="product-card bg-white border border-[#F5E6EA] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all p-3 flex flex-col justify-between">
      <div>
        <div class="relative h-44 sm:h-52 rounded-xl overflow-hidden mb-3 bg-[#FFF5F7]">
          <img src="${p.img}" alt="${p.title}" class="w-full h-full object-cover">
          <button onclick="toggleSaveProduct(${p.id})" class="absolute top-2 right-2 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#B57288] hover:bg-white transition-colors shadow-sm">
            <i class="${savedProductIds.includes(p.id) ? 'fa-solid' : 'fa-regular'} fa-heart text-sm"></i>
          </button>
          ${p.code ? `<span class="absolute bottom-2 left-2 bg-[#B57288] text-white text-[9px] font-bold px-2 py-0.5 rounded-full">CODE: ${p.code}</span>` : ''}
        </div>
        <h4 class="text-xs sm:text-sm font-semibold text-[#2C2C2C] leading-snug">${p.title}</h4>
        <p class="text-xs text-[#B57288] font-bold mt-1">${p.price}</p>
      </div>

      <div class="mt-4 flex items-center gap-2">
        <button onclick="handleShopClick('${p.link}')" class="flex-1 bg-[#B57288] hover:bg-[#9A5B70] text-white text-xs uppercase tracking-wider py-2 rounded-full font-medium transition-colors text-center">
          ${translations[currentLang].shopBtn}
        </button>
        <button onclick="pinToPinterest(${p.id})" class="p-2 border border-[#E8A5B8] text-red-600 hover:bg-red-50 rounded-full text-xs transition-colors" title="Pin this product">
          <i class="fa-brands fa-pinterest"></i>
        </button>
      </div>
    </div>
  `).join('');
}

// Shopping Bag / Drawer Toggle
function toggleCart() {
  const drawer = document.getElementById('cart-drawer');
  const overlay = document.getElementById('cart-overlay');
  
  if (drawer.classList.contains('hidden')) {
    drawer.classList.remove('hidden');
    setTimeout(() => overlay.classList.remove('opacity-0'), 10);
  } else {
    overlay.classList.add('opacity-0');
    setTimeout(() => drawer.classList.add('hidden'), 300);
  }
}

function toggleSaveProduct(id) {
  requireAuth(() => {
    if (savedProductIds.includes(id)) {
      savedProductIds = savedProductIds.filter(item => item !== id);
      showToast("Removed from saved items");
    } else {
      savedProductIds.push(id);
      showToast("Saved to your Bag!");
    }
    localStorage.setItem('sportiva_saved', JSON.stringify(savedProductIds));
    updateCartUI();
    renderBestsellers();
    renderProducts();
  });
}

function updateCartUI() {
  document.getElementById('cart-count').innerText = savedProductIds.length;
  document.getElementById('cart-total-count').innerText = savedProductIds.length;

  const container = document.getElementById('cart-items-container');
  const savedItems = products.filter(p => savedProductIds.includes(p.id));

  if (savedItems.length === 0) {
    container.innerHTML = `<p class="text-center text-xs text-[#888] py-8">Your bag is empty. Heart items to save them!</p>`;
    return;
  }

  container.innerHTML = savedItems.map(item => `
    <div class="flex items-center gap-3 p-2 bg-[#FAF7F8] rounded-xl border border-[#F5E6EA]">
      <img src="${item.img}" alt="${item.title}" class="w-14 h-14 object-cover rounded-lg">
      <div class="flex-1 min-w-0">
        <h5 class="text-xs font-semibold text-[#2C2C2C] truncate">${item.title}</h5>
        <p class="text-[11px] text-[#B57288] font-bold">${item.price}</p>
        <a href="${item.link}" target="_blank" rel="noopener sponsored" class="inline-block text-[10px] text-[#B57288] underline mt-0.5">
          View Official Site ↗
        </a>
      </div>
      <button onclick="toggleSaveProduct(${item.id})" class="text-[#999] hover:text-red-500 p-2">
        <i class="fa-solid fa-trash-can text-xs"></i>
      </button>
    </div>
  `).join('');
}

// Redirect Outbound Shop Link Handler
function handleShopClick(link) {
  requireAuth(() => {
    window.open(link, '_blank', 'noopener,sponsored');
  });
}

// Pinterest Direct Share with Hash URL
function pinToPinterest(productId) {
  const currentOrigin = window.location.origin + window.location.pathname;
  const deepLink = encodeURIComponent(`${currentOrigin}#product-${productId}`);
  const product = products.find(p => p.id === productId);
  const description = encodeURIComponent(`Shop ${product.title} on Sportiva Studio! ✨ Use code ${product.code || 'SPORTIVA10'} for discounts.`);
  const image = encodeURIComponent(product.img);
  
  const pinterestUrl = `https://pinterest.com/pin/create/button/?url=${deepLink}&media=${image}&description=${description}`;
  window.open(pinterestUrl, '_blank');
}

// Handle Pinterest Hash Deep Link Navigation (e.g. #product-3)
function handleHashNavigation() {
  const hash = window.location.hash;
  if (hash && hash.startsWith('#product-')) {
    const targetElement = document.querySelector(hash);
    if (targetElement) {
      setTimeout(() => {
        targetElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        targetElement.classList.add('highlight-product');
        setTimeout(() => targetElement.classList.remove('highlight-product'), 4500);
      }, 500);
    }
  }
}

// Multi-Language Switcher
function changeLanguage(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.getElementById('txt-promo').innerText = t.promo;
  document.getElementById('nav-bestsellers').innerText = t.navBestsellers;
  document.getElementById('nav-catalog').innerText = t.navCatalog;
  document.getElementById('nav-about').innerText = t.navAbout;
  document.getElementById('hero-title').innerText = t.heroTitle;
  document.getElementById('hero-subtitle').innerText = t.heroSubtitle;
  document.getElementById('hero-btn-1').innerText = t.heroBtn1;
  document.getElementById('hero-btn-2').innerText = t.heroBtn2;
  document.getElementById('sec-bestsellers-title').innerText = t.secBestsellersTitle;
  document.getElementById('sec-bestsellers-sub').innerText = t.secBestsellersSub;
  document.getElementById('cat-main-title').innerText = t.catMainTitle;
  document.getElementById('cat-main-sub').innerText = t.catMainSub;
  document.getElementById('about-title').innerText = t.aboutTitle;
  document.getElementById('about-p1').innerText = t.aboutP1;
  document.getElementById('about-p2').innerText = t.aboutP2;

  renderBestsellers();
  renderProducts();
}

// Toast System
function showToast(message) {
  const toast = document.getElementById('toast');
  document.getElementById('toast-msg').innerText = message;
  toast.classList.remove('translate-y-20', 'opacity-0');
  setTimeout(() => {
    toast.classList.add('translate-y-20', 'opacity-0');
  }, 3000);
}