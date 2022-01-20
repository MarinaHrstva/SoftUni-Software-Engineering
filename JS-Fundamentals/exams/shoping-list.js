function shopingList(input) {

    let list = input.shift().split('!');

    for (let line of input) {
        let [command, product, newProduct] = line.split(' ');
        if (command === 'Go') {
            break;
        } else if (command === 'Urgent') {
            if (list.includes(product)) {
                continue;
            } else {
                list.unshift(product);
            }

        } else if (command === 'Unnecessary') {
            let index = list.indexOf(product);
            if (index != -1) {
                list.splice(index, 1)
            }

        } else if (command === 'Correct') {
            let index = list.indexOf(product);
            if (index != -1) {
                list[index] = newProduct;
            }

        } else if (command === 'Rearrange') {
            let index = list.indexOf(product);
            if (index !== -1) {
                let element = list.splice(index, 1)
                list.push(element)
            }

        }

    }

    console.log(list.join(', '));
    
}

shopingList((["Tomatoes!Potatoes!Bread",
    "Unnecessary Milk",
    "Urgent Tomatoes",
    "Go Shopping!"])
)