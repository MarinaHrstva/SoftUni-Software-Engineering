function heroesFunc(input) {
    let n = input.shift();
    let heroes = {};
    for (let i = 0; i < n; i++) {
        let [hero, hp, mp] = input.shift().split(' ')
        heroes[hero] = {
            hp: Number(hp),
            mp: Number(mp)
        }
    }

    input.pop()
    input.forEach(element => {
        let [command, ...args] = element.split(' - ')

        if (command === 'CastSpell') {
            let [hero, mp, spellName] = [...args]
            mp = Number(mp);
            if (heroes[hero].mp >= mp) {
                heroes[hero]['mp'] -= mp
                console.log(`${hero} has successfully cast ${spellName} and now has ${heroes[hero].mp} MP!`);
            } else {
                console.log(`${hero} does not have enough MP to cast ${spellName}!`);
            }
        } else if (command === 'TakeDamage') {
            let [hero, hp, attacker] = [...args];
            hp = Number(hp);
            if (heroes[hero]['hp'] > hp) {
                heroes[hero]['hp'] -= hp;
                console.log(`${hero} was hit for ${hp} HP by ${attacker} and now has ${heroes[hero]['hp']} HP left!`);
            } else {
                console.log(`${hero} has been killed by ${attacker}!`);
                delete heroes[hero]
            }
        } else if (command === 'Recharge') {
            let [hero, mp] = [...args];
            mp = Number(mp)
            let oldMP = heroes[hero]['mp']
            heroes[hero]['mp'] = Math.min(200, oldMP + mp);
            console.log(`${hero} recharged for ${heroes[hero]['mp'] - oldMP} MP!`);
        } else if (command === 'Heal') {
            let [hero, hp] = [...args];
            hp = Number(hp);
            let oldHP = heroes[hero]['hp']
            heroes[hero]['hp'] = Math.min(100, oldHP + hp);
            console.log(`${hero} healed for ${heroes[hero]['hp'] - oldHP} HP!`);
        }

    });

    let sorted = Object.keys(heroes)
        .sort((a, b) => heroes[b]['hp'] - heroes[a]['hp'] || a.localeCompare(b))
        .forEach(element => {
            console.log(element);
            console.log(`  HP: ${heroes[element]['hp']}`);
            console.log(`  MP: ${heroes[element]['mp']}`);

        })

}


heroesFunc([4,
    'Adela 90 150',
    'SirMullich 70 40',
    'Ivor 1 111',
    'Tyris 94 61',
    'Heal - SirMullich - 50',
    'Recharge - Adela - 100',
    'CastSpell - Tyris - 1000 - Fireball',
    'TakeDamage - Tyris - 99 - Fireball',
    'TakeDamage - Ivor - 3 - Mosquito',
    'End',]

)