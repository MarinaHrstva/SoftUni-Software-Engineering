function cake(arg) {
    let index = 0;
    let width = arg[index];
    index++;
    let length = arg[index];
    index++;
    let allCakePieces = width * length;
   
    let tempCakePieces = 0;

    let currentCakePieces = arg[index];
    index++
   
    // (["10","10","2","3","4","5","6"])

    while (currentCakePieces !== "STOP") {
        tempCakePieces +=Number(currentCakePieces);
        if (tempCakePieces >= allCakePieces) {
            console.log(`No more cake left! You need ${tempCakePieces - allCakePieces} pieces more.`);
            break;
        }
        
        currentCakePieces = arg[index];
        index++;
        

    }

if(currentCakePieces==="STOP"){
    console.log(`${allCakePieces-tempCakePieces} pieces are left.` )
}


}

cake (["10",
"10",
"20",
"20",
"20",
"20",
"21"])


