function wordsTracker(input) {
    let tracker = {};
    let words = input[0].split(' ').forEach(element => {
        tracker[element]=0
    });

input.shift()

input.forEach(element=>{
if ((tracker.hasOwnProperty(element))) {
    tracker[element]++
}
})

let sorted=Object.keys(tracker)
.sort((a,b)=>tracker[b]-tracker[a])
.forEach(element => {
    console.log(`${element} - ${tracker[element]}`);
});

}    


wordsTracker([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the',
    'occurances', 'of', 'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task'
]
)