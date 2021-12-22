function scholarship(arg1, arg2, arg3) {
    let money = Number(arg1);
    let grade = Number(arg2);
    let salary = Number(arg3);


    let socialscholarship = salary - (salary * 0.65)
    let scholarshipForExcellentResults = grade * 25;



    if (grade >= 5.5) {
        if (scholarshipForExcellentResults >= socialscholarship) {
            console.log(`You get a scholarship for excellent results ${Math.floor(scholarshipForExcellentResults)} BGN`)
        } else if (socialscholarship > scholarshipForExcellentResults) {
            if (money < salary) {
                console.log(`You get a Social scholarship ${Math.floor(socialscholarship)} BGN`)
            }
        }
    } else if (grade >= 4.5) {
        if (money >= salary) {
            console.log("You cannot get a scholarship!")
        } else {
            console.log(`You get a Social scholarship ${Math.floor(socialscholarship)} BGN`)
        }
    } else {
        console.log("You cannot get a scholarship!")
    }

}

scholarship("480.00", "4.60", "450.00")



