const productContainer =
document.getElementById("product-container");

const categoryFilter =
document.getElementById("category-filter");

const cartCount =
document.getElementById("cart-count");

let cart =
JSON.parse(
localStorage.getItem("cart")
) || [];

function updateCartCount(){

    if(cartCount){
        cartCount.textContent =
        cart.length;
    }
}

function saveCart(){

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );
}

function addToCart(id){

    const product = products.find(
        product => product.id === id
    );

    let cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    cart.push(product);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    document.getElementById(
        "cart-count"
    ).textContent = cart.length;

    alert(
        product.name +
        " added to cart!"
    );
}
function buyNow(id){

    const product =
    products.find(
        product =>
        product.id === id
    );

    localStorage.setItem(
        "buyNowProduct",
        JSON.stringify(product)
    );

    window.location.href =
    "checkout.html";
}

function displayProducts(productList){

    productContainer.innerHTML = "";

    productList.forEach(product => {

        productContainer.innerHTML += `

        <div class="product-card">

            <img
            src="${product.image}"
            alt="${product.name}">

            <div class="product-info">

                <h3>
                ${product.name}
                </h3>

                <p>
                ${product.description}
                </p>

                <p class="price">
                ₹${product.price}
                </p>

                <button
                class="add-cart-btn"
                onclick="addToCart(${product.id})">

                Add To Cart

                </button>

                <button
                class="buy-now-btn"
                onclick="buyNow(${product.id})">

                Buy Now

                </button>

            </div>

        </div>

        `;
    });
}

function filterProducts(){

    const category =
    categoryFilter.value;

    if(category === "all"){

        displayProducts(products);

        return;
    }

    const filteredProducts =
    products.filter(
        product =>
        product.category === category
    );

    displayProducts(filteredProducts);
}

categoryFilter.addEventListener(
    "change",
    filterProducts
);

displayProducts(products);

updateCartCount();