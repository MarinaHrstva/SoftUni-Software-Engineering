function salary(arg) {

    let tabCount = Number(arg[0]);
 
    let salaryAmount = Number(arg[1]);


    for (let i = 2; i < arg.length; i++) {

        let currentTab = arg[i];

        if (currentTab === "Facebook") {
            salaryAmount = salaryAmount - 150;
        } else if (currentTab === "Instagram") {
            salaryAmount -= 100;
        } else if (currentTab === "Reddit") {
            salaryAmount -= 50
        }
       
    }
    if (salaryAmount <= 0) {
        console.log("You have lost your salary.");
    }else{
        console.log(salaryAmount)
    }

}

salary(["3",
"500",
"Facebook",
"Stackoverflow.com",
"softuni.bg"])


