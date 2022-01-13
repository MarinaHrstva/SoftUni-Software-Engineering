function meetings(input) {
    let week = {};

    input.forEach(element => {
        let [day, name] = element.split(' ');

        if (week.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`);
        } else {
            week[day] = name;
            console.log(`Scheduled for ${day}`);
        }
    });

    for (const key in week) {
        console.log(`${key} -> ${week[key]}`);
    }

}

meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])
