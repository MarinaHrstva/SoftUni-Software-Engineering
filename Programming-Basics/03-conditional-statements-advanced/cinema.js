function cinema(arg1, arg2, arg3) {
    let type = arg1;
    let rows = Number(arg2);
    let columns = Number(arg3);
    let result = 0;


    switch (type) {
        case "Premiere": result = rows * columns * 12; break;
        case "Normal": result = rows * columns * 7.50; break;
        case "Discount": result = rows * columns * 5;break;
    }
    console.log(`${result.toFixed(2)} leva`);
}
cinema("Premiere", "10", "12")
