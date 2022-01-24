function theLift(input) {
    let queue = Number(input.shift());
    let wagons = input.shift().split(' ').map(Number);


    for (let i = 0; i < wagons.length; i++) {
        let currentWagon = wagons[i];
        if (currentWagon < 4) {
            let dif = 4 - currentWagon;
            if(queue-dif<0){
                dif=queue
            }
            wagons[i] += dif;
            queue -= dif;
            continue;
        } if (currentWagon === 4) {
            continue;
        }

    }
if (wagons.includes(3,2,1,0)) {
  console.log('The lift has empty spots!');
  console.log(wagons.join(' '));
}else{
    console.log(`There isn't enough space! ${queue} people in a queue!`);
    console.log((wagons.join(' ')));
}
}



theLift([
    "20",
    "0 2 0"
   ]
   
)