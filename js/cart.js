// const translations = window.translations;
//
// (function(){
//   let cart = [];
//
//   // function loadCart() {
//   //   try {
//   //     const stored = localStorage.getItem('cart');
//   //     if (stored) cart = JSON.parse(stored) || [];
//   //   } catch (e) {
//   //     cart = [];
//   //   }
//   // }
//     function loadCart() {
//         let cart = JSON.parse(localStorage.getItem("cart")) || [];
//         const itemsContainer = document.getElementById("cart-items");
//         const totalPriceEl = document.getElementById("total-price");
//
//         itemsContainer.innerHTML = "";
//         let total = 0;
//
//         cart.forEach((item, index) => {
//             const productKey = "product" + item.id;
//             const lang = localStorage.getItem("lang") || "en";
//             const name = translations[lang][productKey];
//
//             const price = item.price;
//             total += price;
//
//             const row = document.createElement("div");
//             row.classList.add("cart-row");
//             row.innerHTML = `
//             <span>${name}</span>
//             <span>$ ${price.toFixed(2)}</span>
//             <button class="remove-item" data-index="${index}">✖</button>
//         `;
//
//             itemsContainer.appendChild(row);
//         });
//
//         totalPriceEl.innerHTML = `${translations[localStorage.getItem("lang") || "en"]["total"]}: $ ${total.toFixed(2)}`;
//
//         // Delete item handler
//         document.querySelectorAll(".remove-item").forEach(btn => {
//             btn.onclick = () => {
//                 const idx = btn.dataset.index;
//                 cart.splice(idx, 1);
//                 localStorage.setItem("cart", JSON.stringify(cart));
//                 loadCart();
//             };
//         });
//     }
//
//   function saveCart() {
//     try {
//       localStorage.setItem('cart', JSON.stringify(cart));
//     } catch (e) {
//       // ignore
//     }
//   }
//
//   function bumpCartBadge() {
//     const badge = document.getElementById('cart-count');
//     if (!badge) return;
//     badge.classList.remove('bump');
//     // force reflow so animation retriggers
//     void badge.offsetWidth;
//     badge.classList.add('bump');
//   }
//
//   function updateCartCount() {
//     const badge = document.getElementById('cart-count');
//     if (badge) {
//       badge.textContent = cart.length;
//       if (cart.length > 0) bumpCartBadge();
//     }
//   }
//
//   function addItem(name, price) {
//     if (!name || isNaN(price)) return;
//     cart.push({ name: name, price: Number(price) });
//     saveCart();
//     updateCartCount();
//   }
//
//   function loadCartFromUrl() {
//     try {
//       const params = new URLSearchParams(window.location.search);
//       const itemsParam = params.get('items');
//       if (itemsParam) {
//         const decoded = atob(decodeURIComponent(itemsParam));
//         const parsed = JSON.parse(decoded);
//         if (Array.isArray(parsed)) {
//           cart = parsed;
//           saveCart();
//         }
//       }
//     } catch (e) {
//       // ignore
//     }
//   }
//
//   function renderCart() {
//     const cartItemsDiv = document.getElementById('cart-items');
//     const totalPriceEl = document.getElementById('total-price');
//     if (!cartItemsDiv || !totalPriceEl) return;
//
//     cartItemsDiv.innerHTML = '';
//
//     if (!cart.length) {
//       cartItemsDiv.innerHTML = '<p data-key="emptyCart">Your cart is empty.</p>';
//       totalPriceEl.innerHTML = '<span data-key="total">Total</span>: $ 0.00';
//       return;
//     }
//
//     let total = 0;
//     cart.forEach((item, index) => {
//       const row = document.createElement('div');
//       row.className = 'cart-row';
//
//       const nameSpan = document.createElement('span');
//       nameSpan.textContent = item.name;
//
//       const priceSpan = document.createElement('span');
//       priceSpan.textContent = '$ ' + Number(item.price).toFixed(2);
//
//       const removeBtn = document.createElement('button');
//       removeBtn.textContent = '\u00D7';
//       removeBtn.className = 'cart-remove';
//       removeBtn.addEventListener('click', () => {
//         cart.splice(index, 1);
//         saveCart();
//         renderCart();
//         updateCartCount();
//       });
//
//       row.appendChild(nameSpan);
//       row.appendChild(priceSpan);
//       row.appendChild(removeBtn);
//       cartItemsDiv.appendChild(row);
//
//       total += Number(item.price);
//     });
//
//     totalPriceEl.innerHTML = '<span data-key="total">Total</span>: $ ' + total.toFixed(2);
//   }
//
//   document.addEventListener('DOMContentLoaded', () => {
//     loadCart();
//     loadCartFromUrl();
//     updateCartCount();
//     renderCart();
//
//     // Add-to-cart buttons
//     document.querySelectorAll('.add-to-cart').forEach(btn => {
//       btn.addEventListener('click', () => {
//         const card = btn.closest('.product-card');
//         if (!card) return;
//         const nameEl = card.querySelector('h3');
//         const priceEl = card.querySelector('.price');
//         if (!nameEl || !priceEl) return;
//
//         const name = nameEl.textContent.trim();
//         const priceText = priceEl.textContent.replace('$', '').trim();
//         const price = parseFloat(priceText);
//         addItem(name, price);
//       });
//     });
//
//     // Modal add-to-cart
//     const modalAdd = document.getElementById('modal-add');
//     if (modalAdd) {
//       modalAdd.addEventListener('click', () => {
//         const nameEl = document.getElementById('modal-name');
//         const priceEl = document.getElementById('modal-price');
//         if (!nameEl || !priceEl) return;
//
//         const name = nameEl.textContent.trim();
//         const priceText = priceEl.textContent.replace('$', '').trim();
//         const price = parseFloat(priceText);
//         addItem(name, price);
//       });
//     }
//
//     // Checkout button
//     const checkoutBtn = document.getElementById('checkout-btn');
//     if (checkoutBtn) {
//       checkoutBtn.addEventListener('click', () => {
//         if (!cart.length) {
//           alert('Your cart is empty.');
//           return;
//         }
//         alert('Checkout is a demo – items stay in your browser only.');
//       });
//     }
//
//     // Ensure clicking on Cart link carries items via URL when running from file://
//     const cartLink = document.getElementById('cart-link');
//     if (cartLink) {
//       cartLink.addEventListener('click', (e) => {
//         if (!cart.length) return;
//         try {
//           const encoded = encodeURIComponent(btoa(JSON.stringify(cart)));
//           cartLink.href = 'cart.html?items=' + encoded;
//         } catch (err) {
//           // ignore; fall back to plain link
//         }
//       });
//     }
//   });
// })();




//////////////////////
const translations = window.translations;

(function () {
    let cart = [];

    /* -----------------------------
       تحميل السلة من localStorage
    ------------------------------*/
    function loadCart() {
        try {
            const stored = localStorage.getItem("cart");
            cart = stored ? JSON.parse(stored) : [];
        } catch (e) {
            cart = [];
        }
    }

    /* -----------------------------
       حفظ السلة
    ------------------------------*/
    function saveCart() {
        try {
            localStorage.setItem("cart", JSON.stringify(cart));
        } catch (e) {}
    }

    /* -----------------------------
       تحديث رقم السلة
    ------------------------------*/
    function updateCartCount() {
        const badge = document.getElementById("cart-count");
        if (badge) {
            badge.textContent = cart.length;
        }
    }

    /* -----------------------------
       إضافة منتج
    ------------------------------*/
    function addItem(id, price) {
        cart.push({ id, price });
        saveCart();
        updateCartCount();
    }

    /* -----------------------------
       عرض السلة في cart.html
    ------------------------------*/
    function renderCart() {
        const itemsContainer = document.getElementById("cart-items");
        const totalPriceEl = document.getElementById("total-price");
        if (!itemsContainer || !totalPriceEl) return;

        itemsContainer.innerHTML = "";
        let total = 0;

        const lang = localStorage.getItem("lang") || "en";

//         cart.forEach((item, index) => {
//             // const productKey = "product" + item.id;
//             // const lang = localStorage.getItem("lang") || "en";
//             // const name = translations[lang][productKey];
//             //
//              const price = item.price;
//              total += price;
//             //
//             // const row = document.createElement("div");
//             // row.classList.add("cart-row");
//             // row.innerHTML = `
//             //     <span>${name}</span>
//             //     <span>$ ${price.toFixed(2)}</span>
//             //     <button class="remove-item" data-index="${index}">✖</button>
//             // `;
//             const productKey = "product" + item.id;
//             const lang = localStorage.getItem("lang") || "en";
//             const name = translations[lang][productKey];
//
//             const row = document.createElement("div");
//             row.classList.add("cart-row");
//             row.innerHTML = `
//     <span>${name}</span>
//     <span>$ ${price.toFixed(2)}</span>
//     <button class="remove-item" data-index="${index}">✖</button>
// `;
//
//
//             itemsContainer.appendChild(row);
//         });
        cart.forEach((item, index) => {

            const productKey = "product" + item.id;
            const lang = localStorage.getItem("lang") || "en";
            const name = translations[lang][productKey];

            const price = item.price;     // ← رجّعيه
            total += price;               // ← مهم

            const row = document.createElement("div");
            row.classList.add("cart-row");
            row.innerHTML = `
        <span>${name}</span>
        <span>$ ${price.toFixed(2)}</span>
        <button class="remove-item" data-index="${index}">✖</button>
    `;

            itemsContainer.appendChild(row);
        });

        totalPriceEl.innerHTML = `
            ${translations[lang]["total"]}: $ ${total.toFixed(2)}
        `;

        // حذف عنصر من السلة
        document.querySelectorAll(".remove-item").forEach(btn => {
            btn.onclick = () => {
                const idx = btn.dataset.index;
                cart.splice(idx, 1);
                saveCart();
                renderCart();
                updateCartCount();
            };
        });
    }

    /* -----------------------------
        تحميل محتويات السلة من URL
    ------------------------------*/
    function loadCartFromUrl() {
        try {
            const params = new URLSearchParams(window.location.search);
            const itemsParam = params.get("items");
            if (itemsParam) {
                const decoded = atob(decodeURIComponent(itemsParam));
                cart = JSON.parse(decoded);
                saveCart();
            }
        } catch (e) {}
    }

    /* -----------------------------
       إضافة من زر add-to-cart في المنتجات
    ------------------------------*/
    function initAddToCartButtons() {
        document.querySelectorAll(".add-to-cart").forEach(btn => {
            btn.addEventListener("click", () => {
                const card = btn.closest(".product-card");
                const id = card.dataset.id;
                const price = parseFloat(
                    card.querySelector(".price").textContent.replace("$", "")
                );

                addItem(id, price);
            });
        });
    }

    /* -----------------------------
       زر Checkout (تجريبي)
    ------------------------------*/
    function initCheckout() {
        const checkoutBtn = document.getElementById("checkout-btn");
        if (checkoutBtn) {
            checkoutBtn.addEventListener("click", () => {
                if (!cart.length) {
                    alert("Your cart is empty.");
                    return;
                }
                alert("Checkout is a demo — items stay in your browser only.");
            });
        }
    }

    /* -----------------------------
       تطبيق الترجمة فور فتح Cart
    ------------------------------*/
    function applyCartTranslations() {
        const lang = localStorage.getItem("lang") || "en";
        document.documentElement.lang = lang;
        document.body.dir = lang === "ar" ? "rtl" : "ltr";

        document.querySelectorAll("[data-key]").forEach(el => {
            const key = el.dataset.key;
            if (key && translations[lang][key]) {
                if (el.tagName === "INPUT") {
                    el.placeholder = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
    }

    /* -----------------------------
          تشغيل كل شيء
    ------------------------------*/
    document.addEventListener("DOMContentLoaded", () => {
        loadCart();
        loadCartFromUrl();
        updateCartCount();
        renderCart();
        applyCartTranslations();  // ⭐ مهم جداً
        initAddToCartButtons();
        initCheckout();
    });
})();
////////////////////////////////////////////////