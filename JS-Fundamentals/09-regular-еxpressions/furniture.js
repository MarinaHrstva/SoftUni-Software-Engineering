function furniture(input) {
    let result = 'Bought furniture:';
    let sum = 0;
    for (const line of input) {
        let pattern = />>(?<name>[A-Za-z]+)<<(?<price>\d+\.?\d+)!(?<count>\d+)/g;
        let matched = pattern.exec(line);
        if (matched) {
            result += '\n' + matched.groups.name;
            sum += Number(matched.groups.price) * Number(matched.groups.count);

        }

    }
    return result + "\n" + `Total money spend: ${sum.toFixed(2)}`;

}

furniture(['>>Sofa<<312.23!3',
    '>>TV<<300!5',
    '>Invalid<<!5',
    'Purchase']
)