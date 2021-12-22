function solve(arg1, arg2, arg3, arg4, arg5, arg6){
    let price = Number(arg1);
    let countPuzzle = Number(arg2);
    let countDoll = Number(arg3);
    let countBear = Number(arg4);
    let countMinnions = Number(arg5);
    let countTruck = Number(arg6);
 
    let money = countPuzzle * 2.60 + countDoll * 3 + countBear * 4.10 + countMinnions * 8.20 + countTruck * 2;
    let totalToyCount = countPuzzle + countDoll + countBear + countMinnions + countTruck;
    
    if (totalToyCount >= 50) {
        money = money * 0.75;
    }
    money = money * 0.90;
 
    if(money >=  price){
        let result = money - price
        console.log(`Yes! ${result.toFixed(2)} lv left.`)
} else {
    let result = Math.abs(money - price);
    console.log(`Not enough money! ${result.toFixed(2)} lv needed.`)
}
}


solve("40.8", "20", "25", "30", "50", "10");