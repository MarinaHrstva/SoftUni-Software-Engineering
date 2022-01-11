function dungeonesrDark(array) {
    let coins = 0;
    let health = 100;
    let rooms = array.join('').split('|');
    let counter = 0;

    for (let line of rooms) {
        counter++
        let [command, num] = line.split(' ');
        num = Number(num);
        if (command === 'potion') {
            if (health + num > 100) {
                console.log(`You healed for ${100 - health} hp.`);
                health = 100;
            } else {
                console.log(`You healed for ${num} hp.`);
                health += num;
            }
            
            console.log(`Current health: ${health} hp.`);
        } else if (command === 'chest') {
            coins += num;
            console.log(`You found ${num} coins.`);
        } else {
            health -= num;
            if (health > 0) {
                console.log(`You slayed ${command}.`);
            } else {
                console.log(`You died! Killed by ${command}.`);
                console.log(`Best room: ${counter}`);
                break;
            }

        }

    }

    if (health > 0) {
        console.log(`You've made it!`);
        console.log(`Coins: ${coins}`);
        console.log(`Health: ${health}`);
    }

}
dungeonesrDark(["rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000"])

/**
You slayed rat.
You slayed bat.
You healed for 10 hp.
Current health: 80 hp.
You slayed rat.
You found 100 coins.
You died! Killed by boss.
Best room: 6


 *
 *
 */