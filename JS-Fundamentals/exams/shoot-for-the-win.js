function shootForTheWin(input) {
    let targets = input.shift().split(' ').map(Number);
    let counter = 0;
    for (let index of input) {
       
        if (index === 'End') {
            console.log(`Shot targets: ${counter} -> ${targets.join(' ')}`);
        } 

        index = Number(index);
        if (targets[index]) {
            counter++;
            let temp = targets[index]
            targets[index] = -1;
            let tempArr=[];
            for (let element of targets) {
                if (element===-1) {
                    tempArr.push(element);
                }else if (element<=temp) {
                    tempArr.push(element+temp);
                }else if(element>temp){
                    tempArr.push(element-temp)
                }
               
            }
            targets=tempArr;
        }

    }

}

shootForTheWin((["24 50 36 70",
    "0",
    "4",
    "3",
    "1",
    "End"])
)