function strSubStr(word,text){
let surched=word.toLowerCase();
text=text.toLowerCase();

if (text.includes(surched)) {
    console.log(word);
 }else{
    console.log(`${word} not found!`);
}

}

strSubStr('python',
'JavaScript is the best programming language'
)