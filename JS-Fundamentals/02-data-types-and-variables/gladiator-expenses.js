function gladiatorExpenses(lostFight, helmetPrice, swordPrice, shieldPrice, armourPrice) {

    let helmetCount = Math.trunc(lostFight / 2);
    let swordCount = Math.trunc(lostFight / 3);
    let shieldCount = Math.trunc(lostFight / 6);
    let armourCount = 0;

    if (shieldCount >= 2) {
        armourCount = Math.trunc(shieldCount / 2);
    }

    let totalPrice = helmetCount * helmetPrice + swordCount * swordPrice + shieldCount * shieldPrice + armourCount * armourPrice;
    console.log(`Gladiator expenses: ${totalPrice.toFixed(2)} aureus`);
}
gladiatorExpenses(23, 12.50, 21.50, 40, 200)