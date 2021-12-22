function invalidNumber(arg1) {
    let num = Number(arg1);


    // Дадено число е валидно, ако е в диапазона [100…200] или е 0. Да се напише функция, 
    // която приема аргумент  цяло число, и печата "invalid" ако въведеното число не е валидно

    if (num >= 100 && num<= 200 || num === 0) {
     }else{console.log("invalid");
    }



}

invalidNumber("75")