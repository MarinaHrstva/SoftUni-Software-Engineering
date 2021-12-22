function password(input) {

    let index = 0
    let user = input[index];
    index++;
    let pass = input[index];
    index++;
   let curentPass = input[index];

    while(curentPass!==pass){
        curentPass = input[index];
        index++
    }

console.log (`Welcome ${user}!`)

}
password(["Nakov",
    "1234",
    "Pass",
    "1324",
    "1234"])
