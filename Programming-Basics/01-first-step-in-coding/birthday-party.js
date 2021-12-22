function birthdayParty(input){
    
    let rent = Number(input);
    let cakePrice = rent * 0.2;
    let drinksPrice = (cakePrice - (cakePrice * (45 /100)));
    let animatorPrice = rent / 3;

    let total = rent + cakePrice + drinksPrice + animatorPrice;


    console.log(total);


}

birthdayParty("2250")