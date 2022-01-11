function smallestOfThreeNumbers(a,b,c){

let smallest=Number.MAX_SAFE_INTEGER

function isSmalest(n){
    if(n<smallest){
        smallest=n
    }
}

for (const num of arguments) {
    isSmalest(num)
}
return smallest

}

console.log(smallestOfThreeNumbers(1,2,3));