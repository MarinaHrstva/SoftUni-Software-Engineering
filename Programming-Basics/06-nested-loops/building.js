function building(input) {
    let index = 0;
    let floorCount = Number(input[index++]);
    let roomCount = Number(input[index++]);

    for (let i = floorCount; i > 0; i--) {
        let result = "";
        for (let j = 0; j < roomCount; j++) {
            if (i === floorCount) {
                result += `L${i}${j} `
            }else if(i%2==0){
                result+=`O${i}${j} `
            }else if(i%2===1){
                result+=`A${i}${j} `
            }
        }
        console.log(result)
    }

}
building(["6", "4"])