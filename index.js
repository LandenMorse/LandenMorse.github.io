/*
    Landen Morse
    9/22/2024
*/


function addShoe(name, img,purchaseLink, price, reviewLink, category) {
    const shoeEntry = document.createElement("div");
    shoeEntry.className = "shoe";

    shoeEntry.innerHTML = `<img src="${img}" alt="${name}"><h2>${name}</h2><p><a href="${purchaseLink}">Purchase</a>, Price: ${price}</p><p><a href="${reviewLink}">In-Depth Review</a></p>`;
    document.getElementById(category).appendChild(shoeEntry);
}

function addRecommendedShoe(name, img,purchaseLink, price, reviewLink, category) {
    const shoeEntry = document.createElement("div");
    shoeEntry.className = "shoe";

    shoeEntry.innerHTML = `<img src="${img}" alt="${name}"><h2>${name}</h2><p><a href="${purchaseLink}">Purchase</a>, Price: ${price}</p><p><a href="${reviewLink}">In-Depth Review</a></p><div class = "recommended"><p>Recommended!</p></div>`;
    document.getElementById(category).appendChild(shoeEntry);
}
/*
     shoe addition format: addShoe(name, image, purchaseLink, price, reviewLink, category
*/
//high budget
addRecommendedShoe("Nike Vaporfly 3", "images/highbudget/Vaporfly3.jfif", "https://www.nike.com/t/vaporfly-3-mens-road-racing-shoes-8DD182/DV4129-700", "$270", "https://believeintherun.com/shoe-reviews/nike-vaporfly-next-percent-3/", "high-budget" )
addRecommendedShoe("New Balance SC Elite v4", "images/highbudget/scelitev4.jpg", "https://www.newbalance.com/pd/fuelcell-supercomp-elite-v4/WRCELV4-46423.html", "$250", "https://runrepeat.com/new-balance-fuel-cell-super-comp-elite-v-4", "high-budget")
addRecommendedShoe("New Balance SC Pacer v2", "images/highbudget/pacerv2", "https://www.newbalance.com/pd/fuelcell-supercomp-pacer-v2/MFCRRLL2-2E-105.html", "$200", "#", "high-budget")
// addShoe("Puma Fast FWD Nitro Elite", " ")
addShoe("Nike Vaporfly Next%2", "images/highbudget/Vaporfly2.jfif", "https://stockx.com/search?s=vaporfly+2", "$150-300", "https://runrepeat.com/nike-zoom-x-vaporfly-next-2", "high-budget")
addShoe("Adidas Adios Pro 3", "images/highbudget/adiospro3.jpeg", "https://www.adidas.com/us/adizero-adios-pro-3-m/IG6439.html", "$250", "https://runrepeat.com/adidas-adizero-adios-pro-3#rr-top-section", "high-budget")
addShoe("Hoka Rocket X2","images/highbudget/hokarocketx2.jpg","https://www.hoka.com/en/us/all-gender-footwear/rocket-x-2/1127927.html", "$250", "https://runrepeat.com/hoka-rocket-x-2", "high-budget")
addShoe("Asics Metaspeed Paris", "images/highbudget/metaspeedparis.jpg", "https://www.asics.com/us/en-us/metaspeed-edge-paris/p/ANA_1013A124-750.html", "$250", "https://runrepeat.com/asics-metaspeed-sky-paris", "high-budget")

//mid budget
addRecommendedShoe("Adidas Takumi Sen 10", "images/mediumbudget/takumisen10.jpeg", "https://www.adidas.com/us/adizero-takumi-sen-10-m/ID2793.html", "$180", "https://runrepeat.com/adidas-adizero-takumi-sen-10", "medium-budget")
addShoe("Nike Streakfly", "images/mediumbudget/streakfly.jpeg", "https://www.nike.com/t/streakfly-road-racing-shoes-8rTxtR/DJ6566-700", "$120-170", "https://runrepeat.com/nike-zoom-x-streakfly", "medium-budget")
addShoe("Hoka Cielo Road", "images/mediumbudget/hokacielo.jpg", "https://www.hoka.com/en/us/all-gender-footwear/cielo-road/1143490.html", "$170", "https://www.runningshoesguru.com/reviews/road/hoka-cielo-road-review/", "medium-budget")
//low budget
addRecommendedShoe("Nike Waffle 6", "images/lowbudget/waffle6.png", "https://www.nike.com/t/rival-waffle-6-road-and-cross-country-racing-shoes-txWgQr/DX7998-100", "$70", "#", "low-budget")
addShoe("Asics Hyper Speed 4", "images/lowbudget/hyperspeed4.jfif", "https://www.asics.com/us/en-us/hyper-speed-4/p/ANA_1011B874-750.html", "$100", "#", "low-budget")
addShoe("Hoka Crescendo XC", "images/lowbudget/hokacrescendo", "https://www.hoka.com/en/us/all-gender-footwear/crescendo-xc-spikeless/1141430.html", "$80", "#", "low-budget")
