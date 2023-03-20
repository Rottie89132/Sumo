function updateCart() {
    let cart = JSON.parse(sessionStorage.getItem('cart'))
    if(!cart) return;
    let prijs = 0;
    cart.forEach(product => {
        console.log(product)
        prijs += product.prijs;
    });
    let cartBody = document.getElementById('cart')
    cartBody.innerHTML = `<i class="fa-solid fa-cart-shopping"></i> €${prijs.toFixed(2)}`
}

window.onload = () => {
    updateCart()
}