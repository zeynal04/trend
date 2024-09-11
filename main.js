// Fetch data from  API and set it to array
let products = []

axios.get("https://fakestoreapi.com/products")
.then(res => {
    products = res.data
    displayProducts(products)
})


// showing fetched data on the screen

function displayProducts (productsDisplay) {

    const cardsContent = document.querySelector('.cards-contentt');
    cardsContent.innerHTML="";

    productsDisplay.forEach(product => {
        cardsContent.innerHTML +=`
           <div class="card-container">
                <div class="card-image1">
                    <img src="${product.image}" class="card-image"></img>
                </div>
                <div class="card-text">
                    <h3 class="card-title">${product.title}</h3>
                    <div style="overflow: hidden; width: 290px; height: 100px;">
                        <p class="card-description">${product.description}</p>
                    </div>
                    <div class="rating">
                        <span class="rating-rate">${product.rating.rate}</span>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-regular fa-star-half-stroke"></i>
                        <span class="rating-count">(${product.rating.count})</span>
                        <p class="card-price">${product.price} TL</p>
                    </div>
                </div>
                <div class="card-badges">
                    <div class="badge-left">
                        <img src="https://cdn.dsmcdn.com/web/production/campaign-coupon-icon.svg" alt="">
                        <span>Kupon Fırsatı</span>
                    </div>
                    <div class="badge-right">
                        <img src="https://cdn.dsmcdn.com/web/production/campaign-product-promotion-icon.svg" alt="">
                        <span>Çok Al Az Öde</span>
                    </div>
                </div>
                <i class="fa-regular fa-heart"></i>
            </div>
        `
    })
}

// add search functionality 

 document.querySelector(".searchInput").addEventListener("input",(e)=>{
    const searchItems = e.target.value.toLowerCase()
    const filteredItems = products.filter(item => item.title.toLowerCase().includes(searchItems))
    displayProducts(filteredItems)
   })




// header scroll functionality 

    window.addEventListener("scroll", () => {
        let header = document.querySelector(".header-bottom")
        if (window.scrollY > 150) {
            header.classList.add("headerAnime")
        } else {
            header.classList.remove("headerAnime")
        }
    })





 
