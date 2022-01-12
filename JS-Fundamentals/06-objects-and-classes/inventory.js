function inventory(input) {

    input.map(line => {
        let [name, level, items] = line.split(' / ')
              items = items.split(', ')
            .sort((a, b) => a.localeCompare(b))
            .join(', ')
        return {
            name, 
            level: Number(level),
            items  
        }
    }).sort((a, b) => a.level - b.level)
        .forEach(hero => {
            console.log(`Hero: ${hero.name}`);
            console.log(`level => ${hero.level}`);
            console.log(`items => ${hero.items}`);
        });



}


inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)