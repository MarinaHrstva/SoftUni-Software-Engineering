function softUniReception(array) {
    let totalPerHour =Number(array.shift())+Number(array.shift())+Number(array.shift());
    let studentsCount=Number(array.shift())

    let counter = 0;

    while (studentsCount > 0) {
        counter++
        studentsCount -= totalPerHour
    }

    let breaks = counter / 3;
    let time = counter + Math.floor(breaks);

    console.log(`Time needed: ${time}h.`);
}

softUniReception(['5','6','4','20'])