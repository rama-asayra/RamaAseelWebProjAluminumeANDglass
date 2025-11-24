// const filterButtons = document.querySelectorAll(".filter-btn");
// const products = document.querySelectorAll(".product-card");
// const modal = document.getElementById("productModal");
//
// filterButtons.forEach(btn=>{
//     btn.addEventListener("click",()=>{
//         filterButtons.forEach(b=>b.classList.remove("active"));
//         btn.classList.add("active");
//         const cat = btn.dataset.filter;
//         products.forEach(p=>{
//             p.style.display = (cat==="all" || p.dataset.category===cat) ? "block" : "none";
//         });
//     });
// });
//
// function openDetails(btn){
//     const card = btn.closest(".product-card");
//     modal.style.display = "flex";
//     modalImage.src = card.dataset.img;
//     modalTitle.innerText = card.dataset.title;
//     modalDesc.innerText = card.dataset.desc;
//     modalPrice.innerText = card.dataset.price;
//     modalOld.innerText = card.dataset.old;
// }
//
// function closeDetails(){
//     modal.style.display = "none";
// }
const filterBtns = document.querySelectorAll(".filter-btn");
const products = document.querySelectorAll(".product-card");

filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
        filterBtns.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");

        const filter = btn.getAttribute("data-filter");

        products.forEach(product => {
            const category = product.getAttribute("data-category");

            if (filter === "all" || category === filter) {
                product.style.display = "block";
                setTimeout(()=> product.classList.add("show"), 50);
            } else {
                product.style.display = "none";
                product.classList.remove("show");
            }
        });
    });
});
