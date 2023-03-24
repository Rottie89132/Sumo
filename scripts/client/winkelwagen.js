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

function addToCart(naam) {
    let product = productenLijst.find(item => item.naam === naam);
    let cart = JSON.parse(sessionStorage.getItem('cart')) || []
    let huidigProduct = cart.find(item => item.naam == naam)

    huidigProduct.aantal++
    huidigProduct.prijs += product.prijs;
    sessionStorage.setItem('cart', JSON.stringify(cart))
    
    console.log(huidigProduct)

    
}

function RemoveFromCart(naam) {
    let product = productenLijst.find(item => item.naam === naam);
    let cart = JSON.parse(sessionStorage.getItem('cart')) || []
    let huidigProduct = cart.find(item => item.naam == naam)

    huidigProduct.aantal--
    huidigProduct.prijs -= product.prijs;
    sessionStorage.setItem('cart', JSON.stringify(cart))
    
    console.log(huidigProduct)
    
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
            <td><button class="btn btn" onclick="addToCart('${product.naam}')"><i class="fa-solid fa-plus"></i></button><button class="btn" onclick="RemoveFromCart('${product.naam}')"><i class="fa-solid fa-trash-can"></i></button></td>
        </tr>`
    });

    //Hier begin je
    
    btw = Number(totaalPrijs) * 0.09
    btwBody.innerHTML = '€' + btw.toFixed(2)
    totaalBody.innerHTML = '€' + totaalPrijs.toFixed(2);
    
    if (totaalPrijs >= 50) {

        korting = totaalPrijs * 0.15;
        btw = Number(totaalPrijs.toFixed(2) - korting.toFixed(2)) * 0.09
        let nieuwPrijs = totaalPrijs.toFixed(2) - korting.toFixed(2)
        kortingBody.innerHTML = '€' + korting.toFixed(2);

        totaalBody.innerHTML = `<span class="text-decoration-line-through" style="color: red;">€${totaalPrijs.toFixed(2) }</span>`+ `<span class='ms-3 text-decoration-none'>€${nieuwPrijs.toFixed(2)}</span>`;
        btwBody.innerHTML = '€' + btw.toFixed(2)
    } else {
        kortingBody.innerHTML = '€0.00'
    }
    
}

window.onload = () => {
    updateCart() 
    winkelwagen();
}