function smallShop(arg1, arg2, arg3) {
    let product = arg1;
    let city = arg2;
    let quantity = Number(arg3);
    let price = 0;

    // град / продукт	coffee	water	beer	sweets	peanuts
    //         Sofia	  0.50	0.80	1.20	1.45	1.60
    //         Plovdiv	   0.40	0.70	1.15	1.30	1.50
    switch (city) {
        case "Sofia":
            switch (product) {
                case "coffee":  price = quantity * 0.5; break;
                case "water":  price = quantity * 0.8; break;
                case "beer":  price = quantity * 1.2; break;
                case "sweets":  price = quantity * 1.45; break;
                case "peanuts":  price = quantity * 1.6; break;
            }; break;
        case "Plovdiv":
            switch (product) {
                case "coffee":  price = quantity * 0.4; break;
                case "water":  price = quantity * 0.7; break;
                case "beer":  price = quantity * 1.15; break;
                case "sweets": price = quantity * 1.3; break;
                case "peanuts":price = quantity * 1.5; break;
            }; break;
        case "Varna":
            switch (product) {
                case "coffee":  price = quantity * 0.45; break;
                case "water":  price = quantity * 0.7; break;
                case "beer": price = quantity * 1.10; break;
                case "sweets": price = quantity * 1.35; break;
                case "peanuts":  price = quantity * 1.55; break;
            }; break;

    }


    console.log(price);
}
smallShop("coffee", "Varna", "2")
