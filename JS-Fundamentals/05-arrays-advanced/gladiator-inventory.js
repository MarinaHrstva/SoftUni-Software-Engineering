function gladiatorInventory(input) {
    let inventory = input.shift().split(' ');

    for (let line of input) {
        let [command, equipment] = line.split(' ');

        if (command === 'Buy') {
            if (!inventory.includes(equipment)) {
                inventory.push(equipment);
            }

        } else if (command === 'Trash') {
            let index = inventory.indexOf(equipment);
            if (index !== -1) {
                inventory.splice(index, 1)
            }

        } else if (command === 'Repair') {
            let index = inventory.indexOf(equipment);
            let piece = inventory.splice(index, 1);
            inventory.push(...piece);

        } else if (command === 'Upgrade') {
            let upgr = equipment.split('-');
            let index = inventory.indexOf(upgr[0]);
            if (index===-1){
                break;
            } {
                
            }
            inventory.splice(index + 1, 0, upgr.join(':'));
        }

    }

    console.log(inventory.join(' '));

}

gladiatorInventory(['SWORD Shield Spear',
    'Buy Bag',
    'Trash Shield',
    'Repair Spear',
    'Upgrade SWORD-Steel']
)