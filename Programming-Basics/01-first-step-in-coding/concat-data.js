function concatData(arg1, arg2, arg3, arg4){
    let name = arg1;
    let lastName = arg2;
    let age = Number(arg3);
    let town = arg4;

    console.log(`You are ${name} ${lastName}, a ${age}-years old person from ${town}. ` );

}

concatData(`Maria`, `Ivanova`, 20, `Sofia`)

