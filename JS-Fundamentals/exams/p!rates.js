function pirates(input) {

    let towns = {};
    for (const line of input) {
        let [town, population, gold] = input.shift().split('||');
        population = Number(population);
        gold = Number(gold);
        
        if (town === 'Sail') {
            break;
        }

        if (towns.hasOwnProperty(town)) {
            towns[town].population += population;
            towns[town].gold += gold;

        } else {
            towns[town] = {
                population,
                gold
            };

        }

    }

    input.pop();
    for (const line of input) {
        let [command, town, ...tokens] = line.split('=>');
        if (command === 'Plunder') {
            let people = Number(tokens[0]);
            let gold = Number(tokens[1]);
            console.log(`${town} plundered! ${gold} gold stolen, ${people} citizens killed.`);
            towns[town].population -= people;
            towns[town].gold -= gold;
            if (towns[town].population <= 0 || towns[town].gold <= 0) {
                console.log(`${town} has been wiped off the map!`);
                delete towns[town];
            }

        } else if (command === 'Prosper') {
            let gold = Number(tokens[0]);
            if (gold < 0) {
                console.log('Gold added cannot be a negative number!');
            } else {
                towns[town].gold += gold;
                console.log(`${gold} gold added to the city treasury. ${town} now has ${towns[town].gold} gold.`);
            }

        }

    }

    let sorted = Object.keys(towns)
    if (sorted.length) {
        console.log(`Ahoy, Captain! There are ${sorted.length} wealthy settlements to go to:`);
        sorted.sort((a, b) => towns[b].gold - towns[a].gold || towns[a].localeCompare(towns[b]))
            .forEach(town => {
                console.log(`${town} -> Population: ${towns[town].population} citizens, Gold: ${towns[town].gold} kg`);
            })

    } else {
        console.log('Ahoy, Captain! All targets have been plundered and destroyed!');
    }

}

pirates((["Nassau||95000||1000",
"San Juan||930000||1250",
"Campeche||270000||690",
"Port Royal||320000||1000",
"Port Royal||100000||2000",
"Sail",
"Prosper=>Port Royal=>-200",
"Plunder=>Nassau=>94000=>750",
"Plunder=>Nassau=>1000=>150",
"Plunder=>Campeche=>150000=>690",
"End"])

)



