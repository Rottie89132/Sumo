function updateCart() {
    let cart = JSON.parse(sessionStorage.getItem('cart'))
    let cartBody = document.getElementById('cart')
    if(!cart) return;
    let prijs = 0;

    cart.forEach(product => { prijs += product.prijs });
    cartBody.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> €${prijs.toFixed(2)}`
}

window.onload = () => { updateCart()}