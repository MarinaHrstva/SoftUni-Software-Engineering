function adAstra(text) {
    let regex = /(\#|\|)(?<name>[A-Za-z ]+)\1(?<data>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g
    let totalCalories = 0;
    let food = ''
    let matches = text[0].match(regex)
        .forEach(element => {
            let regex = /(#|\|)(?<name>[A-Za-z ]+)\1(?<data>\d{2}\/\d{2}\/\d{2})\1(?<calories>\d{1,5})\1/g

            let curMatch = regex.exec(element)
            let cal = Number(curMatch['groups'].calories)
            totalCalories += cal;
            let foodName = curMatch['groups'].name
            let date = curMatch['groups'].data
            let calories = curMatch['groups'].calories

            food += `Item: ${foodName}, Best before: ${date}, Nutrition: ${calories}` + '\n'
        });

    let days = Math.floor(totalCalories / 2000);
    console.log(`You have food to last you for: ${days} days!`);
    console.log(food);

}

adAstra(
    ['$$#@@%^&#Fish#24/12/20#8500#|#Incorrect#19.03.20#450|$5*(@!#Ice Cream#03/10/21#9000#^#@aswe|Milk|05/09/20|2000|']
)