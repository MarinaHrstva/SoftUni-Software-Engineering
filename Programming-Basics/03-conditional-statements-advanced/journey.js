function journey(arg1, arg2) {
    let budget = Number(arg1);
    let season = arg2;
    let price = 0;
    let journeyType = 0;
    let destination = 0;

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer":
                price = budget - (budget * 0.7)
                journeyType = "Camp"; break;
            case "winter":
                price = budget - (budget * 0.3);
                journeyType = "Hotel"; break;
        }

    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer":
                price = budget - (budget * 0.6);
                journeyType = "Camp"; break;
            case "winter":
                price = budget - (budget * 0.2);
                journeyType = "Hotel"; break;
        }
    } else {
        destination = "Europe";
        journeyType = "Hotel";
        price =budget- (budget * 0.1);
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${journeyType} - ${price.toFixed(2)}`)



}


//  Първи ред – "Somewhere in [дестинация]" измежду "Bulgaria", "Balkans" и "Europe"
// 	Втори ред – "{Вид почивка} - {Похарчена сума}"

journey("50", "summer")