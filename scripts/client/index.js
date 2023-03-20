let productenLijst = [
  {
    naam: "CRISPY CHICKEN SALAD",
    beschrijving: "KROKANTE KIP | SLA MIX | FRUITY MAYO | SESAM",
    prijs: 6.0,
    porties: 2,
    image: "crisy.png",
    categorie: "salad",
  },
  {
    naam: "EBIKO SALAD",
    beschrijving: "KRAB | SLA MIX | MAYO | EBIKO | SESAM",
    prijs: 5.8,
    porties: 2,
    image: "ham.png",
    categorie: "salad",
  },
  {
    naam: "WAKAME SALAD",
    beschrijving: "WAKAME | SLA MIX | SESAM SOJA DRESSING | SESAM",
    prijs: 6.0,
    porties: 2,
    image: "green.png",
    categorie: "salad",
  },
  {
    naam: "SALMON SALAD",
    beschrijving: "ZALM | SPICY RETTICH | SLA MIX | SESAM SOJA DRESSING",
    prijs: 7.0,
    porties: 2,
    image: "salmon.png",
    categorie: "salad",
  },
  {
    naam: "EBI CALIFORNIA",
    beschrijving: "GARNAAL CALIFORNIA",
    prijs: 11.0,
    porties: 1,
    image: "Sushi1.png",
    categorie: "maki",
  },
  {
    naam: "UNAGI TAMAGO",
    beschrijving: "GEGRILDE PALING OMELET",
    prijs: 12.5,
    porties: 1,
    image: "Sushi2.png",
    categorie: "maki",
  },
  {
    naam: "CRISPY MAYO",
    beschrijving: "KROKANTE MAYO",
    prijs: 9.0,
    porties: 1,
    image: "Sushi3.png",
    categorie: "maki",
  },
  {
    naam: "TUNA",
    beschrijving: "TONIJN",
    prijs: 6.0,
    porties: 1,
    image: "Sushi4.png",
    categorie: "maki",
  },
  {
    naam: "BEEF NOODLES/RICE",
    beschrijving:
      "BEEF BLOKJES | TERIYAKISAUS | GEBAKKEN NOEDELS/RIJST OF WITTE RIJST",
    prijs: 7.0,
    porties: 2,
    image: "chick.png",
    categorie: "Hot bowls",
  },
  {
    naam: "FRIED RICE",
    beschrijving: "GEBAKKEN RIJST, SESAM, BOSUI",
    prijs: 7.0,
    porties: 2,
    image: "rice.png",
    categorie: "Hot bowls",
  },
  {
    naam: "VEGGIE NOODLES",
    beschrijving: "GEBAKKEN NOODLES",
    prijs: 7.0,
    porties: 2,
    image: "vegi.png",
    categorie: "Hot bowls",
  },
  {
    naam: "SALMON NOODLES/RICE",
    beschrijving:
      "GEGRILDE ZALM | PONZU SOYA DRESSING | GEBAKKEN NOEDELS/RIJST OF WITTE RIJST",
    prijs: 7.0,
    porties: 2,
    image: "slamon2.png",
    categorie: "Hot bowls",
  },
  {
    naam: "MISO SOUP",
    beschrijving:
      "MISO SOEP | TOFU | SHIITAKE | BOSUI",
    prijs: 3.5,
    porties: 1,
    image: "Miso.png",
    categorie: "sides",
  },
  {
    naam: "GYOZA",
    beschrijving:
      "6 X GEBAKKEN KIPPASTEI | PONZU SOJA",
    prijs: 6.8,
    porties: 1,
    image: "gyo.png",
    categorie: "sides",
  },
  {
    naam: "CHICKEN TERRIYAKI",
    beschrijving:
      "GEGRILDE KIPPENDIJ | TERIYAKISAUS| SESAM",
    prijs: 7.0,
    porties: 1,
    image: "TERIYAKI.png",
    categorie: "sides",
  },
  {
    naam: "SPRING ROLLS",
    beschrijving:
      "10 X VEGGIE MINI LOEMPIA'S MET SWEET CHILI SAUS",
    prijs: 6.2,
    porties: 2,
    image: "loempie.png",
    categorie: "sides",
  },
];

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

function categorie(naam) {
    let productenBody = document.getElementById('producten')
    productenBody.innerHTML = ''
    productenLijst.forEach(product => {
      if (product.categorie == naam) {
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
      }
    }) 
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


