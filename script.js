// ----- Sample product data -----
const products = [
    {
        id: 1,
        name: "Classic Tee",
        category: "Clothing",
        price: 200,
        rating: 4.5,
        image: "./images/classic tee.jpg",
        description: "Soft cotton classic tee available in multiple colors."
    },
    {
        id: 2,
        name: "Wireless Headphones",
        category: "Electronics",
        price: 895,
        rating: 4.2,
        image: "./images/wireless headphones.webp",
        description: "Noise-cancelling over-ear wireless headphones."
    },
    {
        id: 3,
        name: "Ceramic Mug",
        category: "Home",
        price: 120,
        rating: 3.9,
        image: "./images/ceramic mug.jpg",
        description: "Dishwasher-safe ceramic mug (350 ml)."
    },
    {
        id: 4,
        name: "Gaming Mouse",
        category: "Electronics",
        price: 5475,
        rating: 4.8,
        image: "./images/gaming mouse.webp",
        description: "Ergonomic RGB gaming mouse with 6 programmable buttons."
    },
    {
        id: 5,
        name: "Desk Lamp",
        category: "Home",
        price: 299,
        rating: 4.1,
        image: "./images/desk lamp.jpg",
        description: "LED desk lamp with adjustable brightness and USB charger."
    },
    {
        id: 6,
        name: "Slim Fit Jeans",
        category: "Clothing",
        price: 3999,
        rating: 4.3,
        image: "./images/slim fit jeans.webp",
        description: "Dark-wash stretch denim with a modern slim silhouette."
    },
    {
        id: 7,
        name: "Leather Wallet",
        category: "Accessories",
        price: 245,
        rating: 4.1,
        image: "./images/leather wallet.webp",
        description: "Genuine leather bi-fold wallet with RFID protection."
    },
    {
        id: 8,
        name: "Sports Water Bottle",
        category: "Sports",
        price: 140,
        rating: 4.6,
        image: "./images/sports water bottle.jpg",
        description: "BPA-free 750 ml bottle with one-click flip top."
    },
    {
        id: 9,
        name: "Yoga Mat",
        category: "Sports",
        price: 299,
        rating: 4.4,
        image: "./images/yoga mat.jpg",
        description: "6 mm thick non-slip mat ideal for yoga and pilates."
    },
    {
        id: 10,
        name: "Bluetooth Speaker",
        category: "Electronics",
        price: 450,
        rating: 4.2,
        image: "./images/bluetooth speaker.webp",
        description: "Portable waterproof speaker with 12 h battery life."
    },
    {
        id: 11,
        name: "Smartwatch S2",
        category: "Electronics",
        price: 1299,
        rating: 4.0,
        image: "./images/smartwatch.jpg",
        description: "Fitness tracking, heart-rate monitor and message alerts."
    },
    {
        id: 12,
        name: "Stainless Steel Knife Set",
        category: "Home",
        price: 595,
        rating: 4.7,
        image: "./images/knife set.webp",
        description: "8-piece chef-grade knife block with ergonomic handles."
    },
    {
        id: 13,
        name: "Cotton Bedsheet (Queen)",
        category: "Home",
        price: 320,
        rating: 3.9,
        image: "./images/cotton bedsheet.webp",
        description: "400-thread-count breathable cotton in solid colors."
    },
    {
        id: 14,
        name: "Aroma Scented Candles – 3-Pack",
        category: "Home",
        price: 55,
        rating: 4.5,
        image: "./images/candle.jpg",
        description: "Lavender, vanilla & sandalwood long-burn soy candles."
    },
    {
        id: 15,
        name: "Wireless Charger Pad",
        category: "Electronics",
        price: 225,
        rating: 4.0,
        image: "./images/wireless charger pad.webp",
        description: "Qi-certified 15 W fast charge pad with LED indicator."
    },
    {
        id: 16,
        name: "4-Port USB-C Hub",
        category: "Electronics",
        price: 2699,
        rating: 4.3,
        image: "./images/4-Port USB-C Hub.avif",
        description: "Adds HDMI, USB-A and card reader to any USB-C laptop."
    },
    {
        id: 17,
        name: "Insulated Lunch Bag",
        category: "Accessories",
        price: 160,
        rating: 4.4,
        image: "./images/insulated lunch bag.webp",
        description: "Keeps meals hot or cold up to 6 h; wipe-clean interior."
    },
    {
        id: 18,
        name: "Hydrating Face Serum",
        category: "Beauty",
        price: 215,
        rating: 4.6,
        image: "./images/Hydrating Face Serum.jpg",
        description: "Vitamin-C & hyaluronic acid for glowing skin."
    },
    {
        id: 19,
        name: "Matte Lipstick Duo",
        category: "Beauty",
        price: 799,
        rating: 4.2,
        image: "./images/Matte Lipstick Duo.webp",
        description: "Two long-wear shades: Rosewood & Crimson."
    },
    {
        id: 20,
        name: "Bamboo Cutting Board",
        category: "Home",
        price: 425,
        rating: 4.3,
        image: "./images/Bamboo Cutting Board.jpg",
        description: "Eco-friendly thick board with juice groove."
    },
    {
        id: 21,
        name: "Classic Novel Set",
        category: "Books",
        price: 490,
        rating: 4.9,
        image: "./images/Classic Novel Set.webp",
        description: "Hardcover box set of 5 literary classics."
    },
    {
        id: 22,
        name: "Laptop Backpack 15.6\"",
        category: "Accessories",
        price: 490,
        rating: 4.5,
        image: "./images/Laptop Backpack.jpg",
        description: "Water-resistant with USB port and anti-theft pocket."
    },
    {
        id: 23,
        name: "Desk Organizer Tray",
        category: "Home",
        price: 119,
        rating: 3.8,
        image: "./images/Desk Organizer Tray.webp",
        description: "Minimalist metal tray for pens, notes and gadgets."
    },
    {
        id: 24,
        name: "Noise-Isolating Earbuds",
        category: "Electronics",
        price: 2999,
        rating: 3.7,
        image: "./images/Noise-Isolating Earbuds.jpg",
        description: "In-ear wired earbuds with mic and tangle-free cable."
    },
    {
        id: 25,
        name: "Portable SSD 500 GB",
        category: "Electronics",
        price: 950,
        rating: 4.8,
        image: "./images/Portable SSD 500 GB.webp",
        description: "High-speed USB-C external solid-state drive."
    },
    {
        id: 26,
        name: "Cotton Baseball Cap",
        category: "Clothing",
        price: 125,
        rating: 4.1,
        image: "./images/Cotton Baseball Cap.jpg",
        description: "Adjustable unisex cap with breathable eyelets."
    },
    {
        id: 27,
        name: "Running Shoes Pro",
        category: "Sports",
        price: 680,
        rating: 4.4,
        image: "./images/Running Shoes Pro.jpg",
        description: "Lightweight cushioned shoes for road or trail."
    },
    {
        id: 28,
        name: "Foaming Cleanser 150 ml",
        category: "Beauty",
        price: 399,
        rating: 4.0,
        image: "./images/Foaming Cleanser 150 ml.jpg",
        description: "Gentle sulfate-free face wash for all skin types."
    },
    {
        id: 29,
        name: "Graphic Hoodie",
        category: "Clothing",
        price: 440,
        rating: 4.6,
        image: "./images/Graphic Hoodie.webp",
        description: "Mid-weight fleece hoodie with front-pouch pocket."
    },
    {
        id: 30,
        name: "Cookbook: Quick Meals",
        category: "Books",
        price: 180,
        rating: 4.3,
        image: "./images/Cookbook Quick Meals.jpg",
        description: "100 easy 30-minute recipes with step-by-step photos."
    }
];


/* ---------- DOM refs ---------- */
const grid          = document.getElementById("productGrid");
const searchInput   = document.getElementById("searchInput");
const categoryFilter= document.getElementById("categoryFilter");
const priceFilter   = document.getElementById("priceFilter");
const ratingFilter  = document.getElementById("ratingFilter");

const modal         = document.getElementById("productModal");
const modalImg      = document.getElementById("modalImg");
const modalTitle    = document.getElementById("modalTitle");
const modalDesc     = document.getElementById("modalDesc");
const modalPrice    = document.getElementById("modalPrice");
const modalRating   = document.getElementById("modalRating");
const modalAddBtn   = document.getElementById("modalAddBtn");

const cartBtn       = document.getElementById("cartBtn");
const cartPanel     = document.getElementById("cartPanel");
const closeCart     = document.getElementById("closeCart");
const cartItemsList = document.getElementById("cartItems");
const cartCount     = document.getElementById("cartCount");
const cartTotal     = document.getElementById("cartTotal");
const checkoutBtn   = document.getElementById("checkoutBtn");

const accountBtn    = document.getElementById("accountBtn");
const accountMenu   = document.getElementById("accountMenu");

/* ---------- State ---------- */
let cart = [];
let currentModalProduct = null;

/* ---------- Build category list ---------- */
(function populateCategories () {
  const cats = [...new Set(products.map(p => p.category))].sort();
  categoryFilter.innerHTML =
    `<option value="">All categories</option>` +
    cats.map(c => `<option value="${c}">${c}</option>`).join("");
})();

/* ---------- Render Products ---------- */
function renderProducts(list) {
  grid.innerHTML =
    list.length === 0
      ? `<p>No products match your criteria.</p>`
      : list.map(p => `
          <div class="card" data-id="${p.id}">
            <img src="${p.image}" alt="${p.name}" />
            <div class="card-body">
              <h3 class="title">${p.name}</h3>
              <p class="price">₹${p.price.toFixed(2)}</p>
              <p class="rating">${"★".repeat(Math.round(p.rating))} (${p.rating})</p>
              <button class="add-cart-btn" data-id="${p.id}">
                <i class="fa-solid fa-cart-plus"></i> Add
              </button>
            </div>
          </div>`
        ).join("");

  /* add listeners */
  grid.querySelectorAll(".add-cart-btn").forEach(btn =>
    btn.addEventListener("click", e => {
      e.stopPropagation();
      addToCart(+btn.dataset.id);
    })
  );
  grid.querySelectorAll(".card").forEach(card =>
    card.addEventListener("click", () => {
      const product = products.find(p => p.id === +card.dataset.id);
      openModal(product);
    })
  );
}

/* ---------- Filter logic ---------- */
function filterProducts() {
  const term       = searchInput.value.toLowerCase();
  const cat        = categoryFilter.value;
  const priceRange = priceFilter.value;
  const minRating  = ratingFilter.value ? +ratingFilter.value : 0;

  const filtered = products.filter(p => {
    const matchTerm   = p.name.toLowerCase().includes(term) || p.category.toLowerCase().includes(term);
    const matchCat    = !cat || p.category === cat;
    const matchRating = p.rating >= minRating;

    let matchPrice = true;
    if (priceRange) {
      const [min, max] = priceRange.split("-").map(Number);
      matchPrice = p.price >= min && p.price <= max;
    }
    return matchTerm && matchCat && matchPrice && matchRating;
  });

  renderProducts(filtered);
}
[searchInput, categoryFilter, priceFilter, ratingFilter].forEach(el =>
  el.addEventListener("input", filterProducts)
);

/* ---------- Modal ---------- */
function openModal(product) {
  currentModalProduct = product;
  modalImg.src            = product.image;
  modalTitle.textContent  = product.name;
  modalDesc.textContent   = product.description;
  modalPrice.textContent  = `Price: ₹${product.price.toFixed(2)}`;
  modalRating.textContent = `Rating: ${product.rating} / 5`;
  modal.classList.remove("hidden");
}
document.getElementById("closeModal").onclick = () => modal.classList.add("hidden");
modal.onclick = e => { if (e.target === modal) modal.classList.add("hidden"); };
modalAddBtn.onclick = () => { addToCart(currentModalProduct.id); modal.classList.add("hidden"); };

/* ---------- Cart helpers ---------- */
function addToCart(id) {
  const row = cart.find(i => i.id === id);
  row ? row.qty++ : cart.push({ ...products.find(p => p.id === id), qty: 1 });
  updateCartUI();
}
function incrementQty(id) { addToCart(id); }
function decrementQty(id) {
  const row = cart.find(i => i.id === id);
  if (!row) return;
  row.qty--; if (row.qty === 0) cart = cart.filter(i => i.id !== id);
  updateCartUI();
}
function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  updateCartUI();
}

/* ---------- Redraw cart panel ---------- */
function updateCartUI() {
  cartCount.textContent = cart.reduce((s, i) => s + i.qty, 0);

  cartItemsList.innerHTML = cart.length === 0
    ? `<li style="padding:1rem 1.25rem;">Cart is empty.</li>`
    : cart.map(item => `
        <li class="cart-item">
          <img src="${item.image}" alt="${item.name}">
          <div class="info">
            <h4>${item.name}</h4>
            <p>₹${item.price.toFixed(2)}</p>
            <div class="qty-controls">
              <button class="qty-btn" data-id="${item.id}" data-act="decr">−</button>
              <span>${item.qty}</span>
              <button class="qty-btn" data-id="${item.id}" data-act="incr">＋</button>
            </div>
          </div>
          <button class="delete-btn" data-id="${item.id}">&times;</button>
        </li>`
      ).join("");

  /* delegate qty / delete events */
  cartItemsList.querySelectorAll(".qty-btn").forEach(btn =>
    btn.onclick = () =>
      btn.dataset.act === "incr"
        ? incrementQty(+btn.dataset.id)
        : decrementQty(+btn.dataset.id)
  );
  cartItemsList.querySelectorAll(".delete-btn").forEach(btn =>
    btn.onclick = () => removeFromCart(+btn.dataset.id)
  );

  cartTotal.textContent = cart
    .reduce((s, i) => s + i.price * i.qty, 0)
    .toFixed(2);
}

/* ---------- Cart panel & account menu UI ---------- */
cartBtn.onclick   = () => cartPanel.classList.toggle("hidden");
closeCart.onclick = () => cartPanel.classList.add("hidden");

accountBtn.onclick = () => accountMenu.classList.toggle("hidden");
window.addEventListener("click", e => {
  if (!accountBtn.contains(e.target) && !accountMenu.contains(e.target))
    accountMenu.classList.add("hidden");
});

/* ---------- Checkout behaviour ---------- */
checkoutBtn.onclick = () => {
  if (!cart.length) { alert("Cart is empty!"); return; }
  alert("Thanks for shopping with us ❤️");
  window.location.reload();               // full reset ✔
};

/* ---------- Boot ---------- */
renderProducts(products);   // initial grid
updateCartUI();             // empty cart view
filterProducts();           // guarantee filters start fresh