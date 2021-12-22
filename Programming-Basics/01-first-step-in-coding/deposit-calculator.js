function depositCalculator(input1, input2, input3) {
    let deposit = Number(input1);
    let months = Number(input2);
    let percent = Number(input3);

    let totalSum = deposit + months * ((deposit * (percent/100 )) / 12);

    console.log(totalSum);




}

function depositCalculator("200", "3", "5.7") 
