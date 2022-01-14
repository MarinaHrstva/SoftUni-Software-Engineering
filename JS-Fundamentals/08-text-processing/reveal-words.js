function revealWords(words,text){
let arrWords=words.split(', ')

for (const w of arrWords) {
    let template='*'.repeat(w.length)
   text=text.replace(template,w)
}

console.log(text);

}

revealWords('great',
'softuni is ***** place for learning new programming languages'
)