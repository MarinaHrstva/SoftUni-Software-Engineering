function strOccurences(text,word){
let counter=0;
text=text.split(' ')

for (const w of text) {
    if (w===word) {
        counter++
    }
}

console.log(counter);

}

strOccurences("This is a word and it also is a sentence",
"is"
)