// Har bir taomga 100% mos, takrorlanmaydigan va tekshirilgan rasmlar ro'yxati
const MENU_ITEMS = [
  {
    id: 1,
    name: "Double Flame Burger",
    category: "burger",
    price: 42000,
    desc: "Ikki qavatli 100% mol go‘shti kotleti, chedder pishlog‘i, tuzlangan bodring va maxsus olovli sous.",
    image: "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Ikki qavatli mol go'shtli chizburger"
  },
  {
    id: 2,
    name: "Crispy Chicken Burger",
    category: "burger",
    price: 34000,
    desc: "Qarsildoq panirovkada qovurilgan tovuq filesi, aysberg salati va sarimsoqli mayonez sousi.",
    image: "https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Qarsildoq tovuqli burger"
  },
  {
    id: 3,
    name: "BBQ Bekon Burger",
    category: "burger",
    price: 45000,
    desc: "Grilda pishgan mol go‘shti, qovurilgan halqa piyoz, pishloq va dudlangan barbekyu sousi.",
    image: "https://images.pexels.com/photos/3219483/pexels-photo-3219483.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Barbekyu sousli katta burger"
  },
  {
    id: 4,
    name: "Pepperoni Pitsa (32 sm)",
    category: "pizza",
    price: 78000,
    desc: "Yupqa xamir, italyan pomidor sousi, motsarella pishlog‘i va achchiq pepperoni kolbasalari.",
    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Pepperoni kolbasali issiq pitsa"
  },
  {
    id: 5,
    name: "To‘rt Pishloqli Pitsa (32 sm)",
    category: "pizza",
    price: 82000,
    desc: "Motsarella, chedder, parmezan va dor-blyu pishloqlarining qaymoqli uyg‘unligi.",
    image: "https://images.pexels.com/photos/2147491/pexels-photo-2147491.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "To'rt xil pishloqli italyan pitsasi"
  },
  {
    id: 6,
    name: "Tandir Mol Go‘shtli Lavash",
    category: "lavash",
    price: 35000,
    desc: "Yupqa lavash xamirida yumshoq mol go‘shti, yangi pomidor, bodring, chipslar va maxsus sous.",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Qarsildoq tandir lavash"
  },
  {
    id: 7,
    name: "Qirollik Hot-Dog",
    category: "lavash",
    price: 24000,
    desc: "Yumshoq bulochka ichida dudlangan sosiska, xantal, ketchup, chedder pishlog‘i va qovurilgan piyoz.",
    image: "https://images.pexels.com/photos/4518656/pexels-photo-4518656.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Sous va pishloqli klassik hot-dog"
  },
  {
    id: 8,
    name: "Oltinrang Kartoshka Fri",
    category: "snacks",
    price: 18000,
    desc: "Tashqi tomoni qarsildoq, ichi yumshoq qovurilgan saralangan kartoshka tayoqchalari.",
    image: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Qarsildoq oltinrang kartoshka fri"
  },
  {
    id: 9,
    name: "Achchiq Tovuq Qanotchalari (8 dona)",
    category: "snacks",
    price: 38000,
    desc: "Maxsus ziravorlarda marinadlangan va qarsildoq qilib pishirilgan tovuq qanotchalari.",
    image: "https://images.pexels.com/photos/60616/fried-chicken-chicken-fried-crunchy-60616.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Qarsildoq qovurilgan tovuq qanotchalari"
  },
  {
    id: 10,
    name: "Muzdek Cola (0.5 L)",
    category: "drinks",
    price: 10000,
    desc: "Issiq taomlar bilan ajoyib uyg‘unlashuvchi salqin gazlangan ichimlik.",
    image: "https://images.pexels.com/photos/2983100/pexels-photo-2983100.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Muz bo'laklari bilan salqin kola ichimligi"
  },
  {
    id: 11,
    name: "Mevali Limonad (0.4 L)",
    category: "drinks",
    price: 16000,
    desc: "Yangi limon, yalpiz barglari va muzdek gazlangan suvdan tayyorlangan tetiklantiruvchi ichimlik.",
    image: "https://images.pexels.com/photos/96974/pexels-photo-96974.jpeg?auto=compress&cs=tinysrgb&w=600",
    alt: "Limon va yalpizli salqin limonad"
  }
];

// Aksiya kombolari
const PROMO_ITEMS = {
  101: {
    id: 101,
    name: "Do‘stlar Kombosi (Aksiya)",
    price: 72000,
    image: "https://images.pexels.com/photos/2983101/pexels-photo-2983101.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  102: {
    id: 102,
    name: "Oilaviy Pitsa Seti (Aksiya)",
    price: 109000,
    image: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
};

// Zaxira (Fallback) SVG tasvir generatsiyasi (agar rasm yuklanmay qolsa buzilgan belgi chiqmasligi uchun)
function getFallbackSvg(label = "FlameBite Taom") {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="600" height="450" viewBox="0 0 600 450">
    <rect width="600" height="450" fill="#ffedd5"/>
    <circle cx="300" cy="200" r="70" fill="#ff5722" opacity="0.15"/>
    <text x="300" y="210" font-family="sans-serif" font-size="42" text-anchor="middle">🍔</text>
    <text x="300" y="265" font-family="sans-serif" font-size="18" font-weight="bold" fill="#9a3412" text-anchor="middle">${label}</text>
  </svg>`;
  return `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(svg)}`;
}

// Rasmlarga global xatolik (onerror) himoyasini ulash
function attachImageFallback(imgEl, label) {
  imgEl.onerror = function () {
    if (!this.dataset.fallbackApplied) {
      this.dataset.fallbackApplied = "true";
      this.src = getFallbackSvg(label);
    }
  };
}

// Savat holati (localStorage orqali xavfsiz o'qish)
let cart = [];
try {
  const saved = localStorage.getItem("flamebite_cart");
  if (saved) cart = JSON.parse(saved);
} catch (e) {
  cart = [];
}

function saveCart() {
  try {
    localStorage.setItem("flamebite_cart", JSON.stringify(cart));
  } catch (e) {
    // Private rejimda xatolik bermasligi uchun
  }
}

function formatPrice(num) {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ") + " so‘m";
}

// Menyuni chizish
const menuGrid = document.getElementById("menuGrid");
const categoryTabs = document.getElementById("categoryTabs");

function renderMenu(category = "all") {
  if (!menuGrid) return;
  menuGrid.innerHTML = "";

  const filtered =
    category === "all"
      ? MENU_ITEMS
      : MENU_ITEMS.filter((item) => item.category === category);

  filtered.forEach((item) => {
    const card = document.createElement("article");
    card.className = "food-card";
    card.innerHTML = `
      <div class="food-img-wrap">
        <img src="${item.image}" alt="${item.alt}" loading="lazy" />
      </div>
      <div class="food-body">
        <h3 class="food-title">${item.name}</h3>
        <p class="food-desc">${item.desc}</p>
        <div class="food-footer">
          <span class="food-price">${formatPrice(item.price)}</span>
          <button class="add-btn" data-id="${item.id}">+ Savatga</button>
        </div>
      </div>
    `;

    const img = card.querySelector("img");
    attachImageFallback(img, item.name);

    const addBtn = card.querySelector(".add-btn");
    addBtn.addEventListener("click", () => addToCart(item));

    menuGrid.appendChild(card);
  });
}

// Kategoriya tugmalari
if (categoryTabs) {
  categoryTabs.addEventListener("click", (e) => {
    const btn = e.target.closest(".tab-btn");
    if (!btn) return;

    document.querySelectorAll(".tab-btn").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    renderMenu(btn.dataset.category);
  });
}

// Aksiya tugmalari
document.querySelectorAll(".add-promo-btn").forEach((btn) => {
  btn.addEventListener("click", () => {
    const promoId = Number(btn.dataset.id);
    const promoProduct = PROMO_ITEMS[promoId];
    if (promoProduct) {
      addToCart(promoProduct);
    }
  });
});

// Toast xabarnoma
const toastEl = document.getElementById("toast");
let toastTimer;

function showToast(message) {
  if (!toastEl) return;
  toastEl.textContent = message;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toastEl.classList.remove("show");
  }, 2200);
}

// Savatga qo'shish
function addToCart(product) {
  const existing = cart.find((item) => item.id === product.id);
  if (existing) {
    existing.qty += 1;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      qty: 1
    });
  }
  saveCart();
  updateCartUI();
  showToast(`"${product.name}" savatga qo‘shildi!`);
}

// Savat miqdorini o'zgartirish
function changeQty(id, delta) {
  const index = cart.findIndex((item) => item.id === id);
  if (index === -1) return;

  cart[index].qty += delta;
  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }
  saveCart();
  updateCartUI();
}

// Savat interfeysini yangilash
const cartCountEl = document.getElementById("cartCount");
const cartItemsEl = document.getElementById("cartItems");
const cartTotalEl = document.getElementById("cartTotal");
const cartFooterEl = document.getElementById("cartFooter");

function updateCartUI() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  if (cartCountEl) cartCountEl.textContent = totalQty;
  if (cartTotalEl) cartTotalEl.textContent = formatPrice(totalPrice);

  if (!cartItemsEl) return;

  if (cart.length === 0) {
    cartItemsEl.innerHTML = `<p class="empty-cart">Savatingiz hozircha bo‘sh. Menyudan mazali taom tanlang!</p>`;
    if (cartFooterEl) cartFooterEl.style.display = "none";
    return;
  }

  if (cartFooterEl) cartFooterEl.style.display = "block";
  cartItemsEl.innerHTML = "";

  cart.forEach((item) => {
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <img src="${item.image}" alt="${item.name}" class="cart-item-img" />
      <div class="cart-item-info">
        <div class="cart-item-title">${item.name}</div>
        <div class="cart-item-price">${formatPrice(item.price * item.qty)}</div>
      </div>
      <div class="qty-controls">
        <button class="qty-btn minus-btn" aria-label="Kamaytirish">−</button>
        <span>${item.qty}</span>
        <button class="qty-btn plus-btn" aria-label="Ko'paytirish">+</button>
      </div>
    `;

    const img = row.querySelector("img");
    attachImageFallback(img, item.name);

    row.querySelector(".minus-btn").addEventListener("click", () => changeQty(item.id, -1));
    row.querySelector(".plus-btn").addEventListener("click", () => changeQty(item.id, 1));

    cartItemsEl.appendChild(row);
  });
}

// Savat oynasini ochish / yopish
const cartDrawer = document.getElementById("cartDrawer");
const cartOverlay = document.getElementById("cartOverlay");
const openCartBtn = document.getElementById("openCartBtn");
const closeCartBtn = document.getElementById("closeCartBtn");

function toggleCart(isOpen) {
  if (!cartDrawer || !cartOverlay) return;
  cartDrawer.classList.toggle("open", isOpen);
  cartOverlay.classList.toggle("open", isOpen);
}

if (openCartBtn) openCartBtn.addEventListener("click", () => toggleCart(true));
if (closeCartBtn) closeCartBtn.addEventListener("click", () => toggleCart(false));
if (cartOverlay) cartOverlay.addEventListener("click", () => toggleCart(false));

// Buyurtmani rasmiylashtirish modali
const checkoutBtn = document.getElementById("checkoutBtn");
const checkoutModal = document.getElementById("checkoutModal");
const closeCheckoutModal = document.getElementById("closeCheckoutModal");
const orderForm = document.getElementById("orderForm");

if (checkoutBtn) {
  checkoutBtn.addEventListener("click", () => {
    if (cart.length === 0) return;
    toggleCart(false);
    if (checkoutModal) checkoutModal.classList.add("open");
  });
}

if (closeCheckoutModal) {
  closeCheckoutModal.addEventListener("click", () => {
    checkoutModal.classList.remove("open");
  });
}

if (orderForm) {
  orderForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("customerName").value.trim();
    cart = [];
    saveCart();
    updateCartUI();
    orderForm.reset();
    if (checkoutModal) checkoutModal.classList.remove("open");
    showToast(`Rahmat, ${name}! Buyurtmangiz qabul qilindi.`);
  });
}

// Mobil menyu
const mobileMenuBtn = document.getElementById("mobileMenuBtn");
const navLinks = document.getElementById("navLinks");

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });

  navLinks.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => navLinks.classList.remove("active"));
  });
}

// Sahifadagi statik rasmlarga ham fallback ulash
document.querySelectorAll("img[data-fallback]").forEach((img) => {
  attachImageFallback(img, img.alt || "FlameBite");
});

// Dastlabki yuklash
renderMenu("all");
updateCartUI();