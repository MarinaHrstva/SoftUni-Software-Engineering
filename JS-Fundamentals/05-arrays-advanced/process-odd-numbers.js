function processOddNumbers(array){
// Write a function that prints the elements at odd positions from the array, doubled and in reverse order.
let output=[];

for (let i = 0; i < array.length; i++) {
   if(i%2!=0){
       output.push(array[i])
   }
    
}

return output.map(x=>x*2).reverse().join(' ')
}
console.log(processOddNumbers([10, 15, 20, 25]))