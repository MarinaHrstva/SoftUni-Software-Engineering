function vacation(arg) {
    let index = 0;
    let priceVacation = Number(arg[index]);
    index++;
    let money = Number(arg[index]);
    index++;
    let spendCounter = 0;
    let daysCounter = 0;

    let command = arg[index];
    index++;
    let currentMoney = Number(arg[index]);
    index++;

    while (money < priceVacation) {

        daysCounter++;

        if (command === "spend") {
            spendCounter++;
            money -= currentMoney;
        }
        if (money < 0) {
            money = 0;
        }
        if (spendCounter >= 5) {
            console.log(`You can't save the money.`)
            console.log(`${spendCounter}`);
            break;
        }
        if (command === "save") {
            money += currentMoney;
            spendCounter = 0;
        }
        command = arg[index];
        index++;
        currentMoney = Number(arg[index]);
        index++;
    }

    if (money >= priceVacation) {
        console.log(`You saved the money for ${daysCounter} days.`)
    }

}

vacation(["110",
"60",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10",
"spend",
"10"])

