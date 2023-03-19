let productenLijst = [
    {
        "naam": "CRISPY CHICKEN SALAD",
        "beschrijving": "KROKANTE KIP | SLA MIX | FRUITY MAYO | SESAM",
        "prijs": 6.00,
        "porties": 2,
        "image": "crisy.png"
    },
    {
        "naam": "EBIKO SALAD",
        "beschrijving": "KRAB | SLA MIX | MAYO | EBIKO | SESAM",
        "prijs": 5.80,
        "porties": 2,
        "image": "ham.png"
    },
    {
        "naam": "WAKAME SALAD",
        "beschrijving": "WAKAME | SLA MIX | SESAM SOJA DRESSING | SESAM",
        "prijs": 6.00,
        "porties": 2,
        "image": "green.png"
    },
    {
        "naam": "SALMON SALAD",
        "beschrijving": "ZALM | SPICY RETTICH | SLA MIX | SESAM SOJA DRESSING",
        "prijs": 7.00,
        "porties": 2,
        "image": "salmon.png"
    }
    ,
    {
        "naam": "CRISPY CHICKEN SALAD",
        "beschrijving": "KROKANTE KIP | SLA MIX | FRUITY MAYO | SESAM",
        "prijs": 6.00,
        "porties": 2,
        "image": "crisy.png"
    },
    {
        "naam": "CRISPY CHICKEN SALAD",
        "beschrijving": "KROKANTE KIP | SLA MIX | FRUITY MAYO | SESAM",
        "prijs": 6.00,
        "porties": 2,
        "image": "crisy.png"
    }
]

function addToCart(naam) {
    if (sessionStorage.length === 0) {
        let product = productenLijst.find(item => item.naam === naam);
        let cart = [{
            naam: product.naam,
            prijs: product.prijs,
            porties: 2,
            aantal: 1
        }]
        sessionStorage.setItem('cart', JSON.stringify(cart))
    } else {
        let product = productenLijst.find(item => item.naam === naam);
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

window.onload = () => {
    updateCart()
    let productenBody = document.getElementById('producten')
    productenLijst.forEach(product => {
        productenBody.innerHTML += `<div class="col-5">
        <div class="card">
          <div class="card-body">
            <img src="./media/${product.image}" width="15%">
            <h5 class=" fw-bold">${product.naam}</h5>
            <p class="text-pinky fw-semibold">${product.beschrijving}</p>
            <hr>
            <div>
              <p class="px-3 py-1 rounded-2 d-inline-block bg-grayish me-2">
                <i class="fa-solid fa-sack-dollar me-2"></i>€${product.prijs.toFixed(2)}
              </p>
              <p class="px-3 py-1 rounded-2 d-inline-block bg-grayish">
                <i class="fa-solid fa-user-group me-2"></i></i>X ${product.porties}
              </p>
            </div>
            <button class="d-block btn btn-warning text-white" onclick="addToCart('${product.naam}')">Add to Cart
              <i class="fa-solid fa-cart-shopping ms-2"></i>
            </button>
          </div>
        </div>
      </div>`
    });
}
