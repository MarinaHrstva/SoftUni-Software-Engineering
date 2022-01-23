function roadRadar(speed, area) {
    let difference = 0;
    let limit = 0

    switch (area) {
        case 'motorway':
            limit = 130;
            difference = speed - limit; break;
        case 'interstate':
            limit = 90;
            difference = speed - limit; break;
        case 'city':
            limit = 50;
            difference = speed - limit; break;
        case 'residential':
            limit = 20;
            difference = speed - limit; break;
    }

    if (difference <= 0) {
        console.log(`Driving ${speed} km/h in a ${limit} zone`);
    } else if (difference <= 20) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - speeding`)
    } else if (difference <= 40) {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - excessive speeding`)
    } else {
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${limit} - reckless driving`)
    }

}
roadRadar(40, 'city')
roadRadar(21, 'residential')