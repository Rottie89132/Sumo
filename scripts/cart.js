import { producten } from "./producten.js"

function addToCart(naam) {
    if (sessionStorage.length === 0) {
        let product = producten().find(item => item.naam === naam);
        let cart = [{
            naam: product.naam,
            prijs: product.prijs,
            porties: 2,
            aantal: 1
        }]
        sessionStorage.setItem('cart', JSON.stringify(cart))
    } else {
        let product = producten().find(item => item.naam === naam);
        let cart = JSON.parse(sessionStorage.getItem('cart')) || []
        if (Array.isArray(cart)) {
            let huidigProduct = cart.find(item => item.naam == naam)
            if (!huidigProduct) {
                let nieuwProduct = {
                naam: product.naam,
                prijs: product.prijs,
                porties: 2,
                aantal: 1
                }
                cart.push(nieuwProduct)
                sessionStorage.setItem('cart', JSON.stringify(cart))
            } else {
                huidigProduct.aantal++
                huidigProduct.prijs += product.prijs;
                sessionStorage.setItem('cart', JSON.stringify(cart))
            }
        }
    }
    updateCart()
}

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

export { updateCart, addToCart};