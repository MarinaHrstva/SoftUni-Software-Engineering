function fruitMarket(input1, input2, input3, input4, input5){
let strawberryPrice = Number(input1);
let bananasKg = Number(input2);
let orangesKg = Number(input3);
let raspberryKg = Number(input4);
let strawberryKg = Number (input5);

let raspberryPrice = strawberryPrice / 2;
let orangesPrice = raspberryPrice - (0.4 * raspberryPrice);
let bananasPrice = raspberryPrice - (0.8 *raspberryPrice);

let sumRaspberry = raspberryPrice * raspberryKg;
let sumOranges = orangesPrice * orangesKg;
let sumBananas = bananasPrice * bananasKg;
let sumStrawberry = strawberryPrice * strawberryKg;

let totalAmount = sumRaspberry + sumOranges + sumBananas + sumStrawberry;

console.log(totalAmount);
}


fruitMarket("48", "10", "3.3", "6.5", "1.7")