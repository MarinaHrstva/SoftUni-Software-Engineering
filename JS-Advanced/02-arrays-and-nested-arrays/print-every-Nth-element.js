function printNthElement(arr, n) {

return arr.filter((x,i)=>i%n==0)

}

console.log(printNthElement(["5", "20", "31", "4", "20"], 2));
