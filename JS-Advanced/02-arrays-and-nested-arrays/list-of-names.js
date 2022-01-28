function listOfNames(arr){
    let result='';
    arr.sort((a,b)=>a.localeCompare(b))
    .forEach((x,i)=>{
        result+= `${i+1}.${x}\n`;
    })

    return result;
}

console.log(listOfNames(["John", "Bob", "Christina", "Ema"]));