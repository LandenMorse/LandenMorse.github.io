function addShoe(name, img,purchaseLink, price, reviewLink, category) {
    const shoeEntry = document.createElement("div");
    shoeEntry.className = "shoe";

    shoeEntry.innerHTML = `<img src="${img}" alt="${name}"><h2>${name}</h2><p><a href="${purchaseLink}">Purchase</a>, Price: ${price}</p><p><a href="${reviewLink}">In-Depth Review</a></p>`;
    document.getElementById(category).appendChild(shoeEntry);
}

//high budget
addShoe("Nike Vaporfly 3", "images/highbudget/Vaporfly3.jfif", "https://www.nike.com/t/vaporfly-3-mens-road-racing-shoes-8DD182/DV4129-700", "$270", "https://believeintherun.com/shoe-reviews/nike-vaporfly-next-percent-3/", "high-budget" )
addShoe("Nike Vaporfly Next%2", "images/highbudget/Vaporfly2.jfif", "https://stockx.com/search?s=vaporfly+2", "$150-250", "https://runrepeat.com/nike-zoom-x-vaporfly-next-2", "high-budget")
addShoe("Adidas Adios Pro 3", "images/highbudget/adiospro3.jpeg", "https://www.adidas.com/us/adizero-adios-pro-3-m/IG6439.html", "$250", "https://runrepeat.com/adidas-adizero-adios-pro-3#rr-top-section", "high-budget")
addShoe("Hoka Rocket X2","images/highbudget/hokarocketx2.jpg","https://www.hoka.com/en/us/all-gender-footwear/rocket-x-2/1127927.html", "$250", "https://runrepeat.com/hoka-rocket-x-2", "high-budget")
addShoe("New Balance SC Elite v4", "images/highbudget/scelitev4.jpg", "https://www.newbalance.com/pd/fuelcell-supercomp-elite-v4/WRCELV4-46423.html", "$250", "https://runrepeat.com/new-balance-fuel-cell-super-comp-elite-v-4", "high-budget")
addShoe("Asics Metaspeed Paris", "images/highbudget/metaspeedparis.jpg", "https://www.asics.com/us/en-us/metaspeed-edge-paris/p/ANA_1013A124-750.html?size=4&width=Standard&utm_source=google&utm_medium=pla&CATARGETID=120223060000457319&CADevice=c&gad_source=1&gclid=CjwKCAjwlbu2BhA3EiwA3yXyuwQ0AnavtXcbbmMGv-4nry0UAi_aDwWHB3Tal1swZVlROqE26brl3hoCEtoQAvD_BwE", "$250", "https://runrepeat.com/asics-metaspeed-sky-paris", "high-budget")

//mid budget
addShoe("Nike Streakfly", "images/mediumbudget/streakfly", "https://www.nike.com/t/streakfly-road-racing-shoes-8rTxtR/DJ6566-700", "$120-170", "https://runrepeat.com/nike-zoom-x-streakfly", "high-budget")
addShoe("Adidas Takumi Sen 10", "images/mediumbudget/takumisen10", "https://www.adidas.com/us/adizero-takumi-sen-10-m/ID2793.html", "$180", "https://runrepeat.com/adidas-adizero-takumi-sen-10", "high-budget")
addShoe("Hoka Mach X", "images/mediumbudget/machx", "https://www.fleetfeet.com/products/mens-hoka-mach-x?sku=1141450-DDL&width=D", "$135", "https://runrepeat.com/hoka-mach-x", "high-budget")

//low budget
addShoe("Nike Waffle Racer 6", "images/lowbudget/nikewaffle", "#", "$40", "#", "low-budget");
addShoe()