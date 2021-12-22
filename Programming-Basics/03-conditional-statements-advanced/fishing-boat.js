function fishingBoat(arg1, arg2, arg3) {

    let budget = Number(arg1);
    let season = arg2;
    let group = Number(arg3);
    let price = 0;


    switch (season) {
        case "Spring":
            price = 3000; break;
        case "Summer":
            price = 4200; break;
        case "Autumn":
            price = 4200; break
        case "Winter":
            price = 2600; break;
    }

    if (group <= 6) {
        price *= 0.9;
    } else if (group >= 7 && group <= 11) {
        price *= 0.85;
    } else {
        price *= 0.75;
    }


    if (season != "Autumn" && group % 2 == 0) {
        price *= 0.95;
    }


    if (price > budget) {
        console.log(`Not enough money! You need ${(price - budget).toFixed(2)} leva.`)
    } else {
        console.log(`Yes! You have ${(budget - price).toFixed(2)} leva left.`)
    }


}

fishingBoat("3000", "Summer", "11")


// "Spring", "Summer", "Autumn", "Winter"
// Тони и приятели много обичали да ходят за риба, те са толкова запалени по риболова, че решават да отидат на риболов с кораб.
//  Цената за наемане на кораба зависи от сезона и броя рибари.
// Цената зависи от сезона:
// •	Цената за наем на кораба през пролетта е  3000 лв.
// •	Цената за наем на кораба през лятото и есента е  4200 лв.
// •	Цената за наем на кораба през зимата е  2600 лв.
// В зависимост от броя си групата ползва отстъпка:
// •	Ако групата е до 6 човека включително  –  отстъпка от 10%.
// •	Ако групата е от 7 до 11 човека включително  –  отстъпка от 15%.
// •	Ако групата е от 12 нагоре  –  отстъпка от 25%. 
// Рибарите ползват допълнително 5% отстъпка ако са четен брой освен ако не е есен - тогава нямат допълнителна отстъпка. 
// Напишете функция, която да пресмята дали рибарите ще съберат достатъчно пари. 
