function solve(input) {
    let n = input.shift();

    for (const line of input) {
        let regex = /(\*|@)(?<name>[A-Z]{1}[a-z]{2,})\1: (?<col>\[[A-Za-z]{1}\]\|\[[A-Za-z]{1}\]\|\[[A-Za-z]{1}\]\|)$/

        let isMatch = regex.test(line);
        if (isMatch) {
            let el = regex.exec(line);
            let name = el.groups.name;
            let cols = el.groups.col;
            let printLine = `${name}: `

            for (const char of cols) {
                let pattern = /[A-Za-z]/
                if (pattern.test(char)) {
                    let n = char.charCodeAt();
                    printLine += `${n} `
                }
            }
            console.log(printLine);
        } else {
            console.log(`Valid message not found!`);
        }

    }

}

solve((["3",
    "*Request*: [I]|[s]|[i]|",
    "*Taggy@: [73]|[73]|[73]|",
    "Should be valid @Taggy@: [v]|[a]|[l]|",
    "@Taggy@: [i]|[n]|[v]|[a]|[l]|[i]|[d]| this shouldn’t be valid"])
)