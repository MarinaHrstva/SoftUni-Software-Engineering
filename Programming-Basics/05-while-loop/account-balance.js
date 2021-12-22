// function accountBalance(input) {

//     let index = 0;
//     let total = 0;
//     let currentOperation = input[index];


//     while (currentOperation !== "NoMoreMoney") {
//         currentOperation=Number(input[index]);
//         if (currentOperation < 0) {
//             console.log(`Invalid operation!`);
//             break;
//         }
//         total += Number(currentOperation);
//         console.log(`Increase: ${currentOperation.toFixed(2)}`);
//         index++


//     }
//     console.log(`Total: ${total}`);
// }

function accountBalance(input) {
    let deposit = input[0];
    let balance = 0;
    let index = 1;
    while (deposit !== "NoMoreMoney") {
        let amount = Number(deposit);
        if (amount < 0) {
            console.log(`Invalid operation!`);
            break;
        }
        balance += amount;
        console.log(`Increase: ${amount.toFixed(2)}`);
        deposit = input[index];
        index++;
    }
    console.log(`Total: ${balance.toFixed(2)}`);
}

accountBalance(["5.51",
    "69.42",
    "100",
    "NoMoreMoney"])

