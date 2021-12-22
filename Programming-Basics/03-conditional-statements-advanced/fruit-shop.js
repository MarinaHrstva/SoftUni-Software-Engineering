function fruitShop(arg1, arg2, arg3) {
    let fruit = arg1;
    let day = arg2;
    let quantity = arg3;
    let price = 0;
 
    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        switch (fruit) {
            case ("banana"): price = quantity * 2.5; break;
            case ("apple"): price = quantity * 1.2; break;
            case ("orange"): price = quantity * 0.85; break;
            case ("grapefruit"): price = quantity * 1.45; break;
            case ("kiwi"): price = quantity * 2.7; break;
            case ("pineapple"): price = quantity * 5.5; break;
            case ("grapes"): price = quantity * 3.85; break;
      
        }
        
    } else if (day === "Saturday" || day === "Sunday") {
        switch (fruit) {
            case ("banana"): price = quantity * 2.7; break;
            case ("apple"): price = quantity * 1.25; break;
            case ("orange"): price = quantity * 0.9; break;
            case ("grapefruit"): price = quantity * 1.6; break;
            case ("kiwi"): price = quantity * 3; break;
            case ("pineapple"): price = quantity * 5.6; break;
            case ("grapes"): price = quantity * 4.2; break;
        
        }
      
    } 
    if (price>0){
        console.log(price.toFixed(2));
    }    
    else { 
               console.log("error");
 
    }
 
 
}
fruitShop("tomato",
"Monday",
"0.5")
