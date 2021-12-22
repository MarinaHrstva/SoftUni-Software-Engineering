function fishTank(input1, input2, input3, input4,) {
    let lenght = Number(input1);
    let width = Number(input2);
    let height = Number(input3);
    let percent = Number(input4);

    let volume = lenght * width * height;
    let totalLitres = volume * 0.001;
    let litres = totalLitres - (totalLitres * ((percent / 100));

    console.log(litres)



}
fishTank("85", "75", "47", "17")