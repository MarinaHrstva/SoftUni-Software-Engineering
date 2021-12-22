function multiplicationTable(arg1) {

    let num = Number(arg1);

    for (let i = 1; i <= 10; i++) {
        console.log(`${i} * ${num} = ${i * num}`)
    }
}

multiplicationTable("5")