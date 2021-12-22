function volleyball(arg1, arg2, arg3) {
    let yearType = arg1;
    let hollidays = Number(arg2);
    let weekendsHomeTown = Number(arg3);

    let sofiaWeekends = (48 - weekendsHomeTown) * 3 / 4;
    let holidaysVolley = hollidays * 2 / 3;

    let result = sofiaWeekends + holidaysVolley + weekendsHomeTown
    if (yearType === "leap") {
        result *= 1.15;
    }




    console.log(Math.floor(result))


    // Входните данни се получават като аргументи: 
    // •	Първият съдържа думата "leap" (високосна година) или "normal" (невисокосна).
    // •	Вторият съдържа цялото число p – брой празници в годината (които не са събота и неделя).
    // •	Третият съдържа цялото число h – брой уикенди, в които Влади си пътува до родния град.


}

volleyball("leap",
    "5",
    "2")
