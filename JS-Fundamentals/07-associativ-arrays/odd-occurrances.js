function odd(input) {
    input = input.split(' ')
    let obj = {};

    input.forEach(element => {
        element = element.toLowerCase()
        if (!obj.hasOwnProperty(element)) {
            obj[element] = 0;
        }
        obj[element]++
    });

    let filtered = Object.keys(obj)

}

odd('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')