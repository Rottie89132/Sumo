import { updateCart, addToCart} from "./cart.js"
import { producten } from "./producten.js"

let productenLijst = producten()
window.addToCart = addToCart

const path = window.location.pathname
if(path == "/bestel.html"){

    window.onload = () => {
        updateCart()
        let productenBody = document.getElementById('producten')
        productenLijst.forEach(product => {
            productenBody.innerHTML += `<div class="col-5">
            <div class="card">
              <div class="card-body">
                <img src="./media/${product.image}" width="15%">
                <h5 class=" fw-bold">${product.naam}</h5>
                <p class="text-pinky fw-semibold text-break">${product.beschrijving}</p>
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
    
} else {
    window.onload = () => {
        updateCart()
    }
}

