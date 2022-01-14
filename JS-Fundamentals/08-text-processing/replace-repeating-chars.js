function replaceRepeating(str){
let result='';

for (const char of str) {
    if (result[result.length-1] != char) {
        result+=char
    }
}
console.log(result);
}

replaceRepeating('aaaaabbbbbcdddeeeedssaa')