function converter(arg1, arg2, arg3) {
    let num = Number(arg1);
    let metric1 = arg2;
    let metric2 = arg3;
    let result = 0;

    if (metric1 === "mm" && metric2 === "m") {
        result = num / 1000;
    } else if (metric1 === "mm" && metric2 === "cm") {
        result = num / 10;
    } else if (metric1 === "m" && metric2 === "cm") {
        result = num * 100;
    } else if (metric1 === "m" && metric2 === "mm") {
        result = num * 1000;
    } else if (metric1 === "cm" && metric2 === "mm") {
        result = num * 10;
    } else if (metric1 === "cm" && metric2 === "m") {
        result = num / 100;
    }


    console.log(result.toFixed(3));

}

converter("45", "cm", "mm")