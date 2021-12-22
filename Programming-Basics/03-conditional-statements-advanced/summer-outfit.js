function summerOutfit(arg1, arg2) {
    let degrees = Number(arg1);
    let partOfTheDay = arg2;

    let outfit = 0;
    let shoes = 0;


    switch (partOfTheDay) {

        case "Morning":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Sweatshirt";
                shoes = "Sneakers";
            } else if (degrees > 18 && degrees <= 24) {
                outfit = "Shirt";
                shoes = "Moccasins"
            } else {
                outfit = "T-Shirt";
                shoes = "Sandals"
            }; break;
        case "Afternoon":
            if (degrees >= 10 && degrees <= 18) {
                outfit = "Shirt";
                shoes = "Moccasins";
            } else if (degrees > 18 && degrees <= 24) {
                outfit = "T-Shirt";
                shoes = "Sandals"
            } else {
                outfit = "Swim Suit";
                shoes = "Barefoot";
            };break;
        case "Evening":
            outfit = "Shirt";
            shoes = "Moccasins";break;
    }

    console.log(`It's ${degrees} degrees, get your ${outfit} and ${shoes}.`)

}

summerOutfit("16", "Morning")
