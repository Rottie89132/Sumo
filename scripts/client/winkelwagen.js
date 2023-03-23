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

function winkelwagen() {
    let winkelwagenBody = document.getElementById('winkelwagenBody')
    let cart = sessionStorage.getItem('cart') || [];
    let btwBody = document.getElementById("btw");
    let kortingBody = document.getElementById("korting");
    let totaalBody = document.getElementById("totaal");
    
    if(cart.length == 0) {
        btwBody.innerHTML = '€0.00'
        totaalBody.innerHTML = '€0.00'
        kortingBody.innerHTML = '€0.00'
        return
    }
    
    let cartJson = JSON.parse(cart)

    let totaalPrijs = 0;
    let btw = 0;
    let korting = 0;

    cartJson.forEach(product => {
        totaalPrijs += product.prijs;
        winkelwagenBody.innerHTML += `
        <tr>
            <td>${product.naam}</td>
            <td>$${product.prijs.toFixed(2)}</td>
            <td>${product.aantal}</td>
            <td>+ / -</td>
        </tr>`
    });

    //Hier begin je
    
    btw = Number(totaalPrijs) * 0.09
    btwBody.innerHTML = '€' + btw.toFixed(2)
    totaalBody.innerHTML = '€' + totaalPrijs.toFixed(2);
    
    if (totaalPrijs >= 30) {
        korting = totaalPrijs * 0.1;
        kortingBody.innerHTML = '€' + korting.toFixed(2);
    } else {
        kortingBody.innerHTML = '€0.00'
    }
    
}

window.onload = () => {
    updateCart() 
    winkelwagen();
}