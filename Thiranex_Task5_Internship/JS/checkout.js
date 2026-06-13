const form =
document.getElementById(
"checkout-form"
);

form.addEventListener(
"submit",
function(event){

    event.preventDefault();

    localStorage.removeItem(
    "cart"
    );

    localStorage.removeItem(
    "buyNowProduct"
    );

    window.location.href =
    "success.html";

});