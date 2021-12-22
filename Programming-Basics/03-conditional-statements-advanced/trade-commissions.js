function tradeCommissions(arg1, arg2) {
    let city = arg1;
    let sales = Number(arg2);
    let commission = 0;

    switch (city) {
        case "Sofia":
            if (sales >= 0 && sales <= 500) {
                commission = sales - (sales * 0.95);
            } else if (sales > 500 && sales <= 1000) {
                commission = sales - (sales * 0.93);
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales - (sales * 0.92);
            } else if (sales > 10000) {
                commission = sales - (sales * 0.88);
            } break;
        case "Varna":
            if (sales >= 0 && sales <= 500) {
                commission = sales - (sales * 0.955);
            } else if (sales > 500 && sales <= 1000) {
                commission = sales - (sales * 0.925);
            } else if (sales > 1000 && sales <= 10000) {
                commission = sales - (sales * 0.9);
            } else if (sales > 10000) {
                commission = sales - (sales * 0.87);
            } break;
        case "Plovdiv": if (sales >= 0 && sales <= 500) {
            commission = sales - (sales * 0.945);
        } else if (sales > 500 && sales <= 1000) {
            commission = sales - (sales * 0.92);
        } else if (sales > 1000 && sales <= 10000) {
            commission = sales - (sales * 0.88);
        } else if (sales > 10000) {
            commission = sales - (sales * 0.855);
        } break;
    }
    if (commission > 0) {
        console.log(commission.toFixed(2))
    } else { console.log("error") }


}

tradeCommissions("Kaspichan",
    "-50")

