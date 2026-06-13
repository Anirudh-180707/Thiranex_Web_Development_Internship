const cartItems =
document.getElementById("cart-items");

const totalPrice =
document.getElementById("total-price");

function loadCart(){

    const cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    cartItems.innerHTML = "";

    let total = 0;

    if(cart.length === 0){

        cartItems.innerHTML = `
        <h3>Your cart is empty.</h3>
        `;

        totalPrice.textContent = "0";

        return;
    }

    cart.forEach((product,index)=>{

        total += product.price;

        cartItems.innerHTML += `

        <div class="cart-item">

            <div>

                <h3>
                    ${product.name}
                </h3>

                <p>
                    ${product.description}
                </p>

                <h4>
                    ₹${product.price}
                </h4>

            </div>

            <button
            class="remove-btn"
            onclick="removeItem(${index})">

            Remove

            </button>

        </div>

        `;
    });

    totalPrice.textContent = total;
}

function removeItem(index){

    const cart =
    JSON.parse(
        localStorage.getItem("cart")
    ) || [];

    cart.splice(index,1);

    localStorage.setItem(
        "cart",
        JSON.stringify(cart)
    );

    loadCart();
}

loadCart();