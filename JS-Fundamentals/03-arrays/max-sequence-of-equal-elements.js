function maxSequenceOfEqualElements(array) {
    let maxSequence = [];
   
    for (let i = 0; i < array.length; i++) {
        let tempSequence = [];
        let currentElement = array[i];
        tempSequence.push(currentElement)
        for (let j = i + 1; j < array.length; j++) {
            let nextElement = array[j];
            if (currentElement === nextElement) {
                tempSequence.push(nextElement);
            } else {
                break;
            }
        }
        if (tempSequence.length > maxSequence.length) {
            maxSequence = tempSequence;
        }
    }
    console.log(maxSequence.join(' '));
}
maxSequenceOfEqualElements([2, 1, 1, 2, 3, 3, 2, 2, 2, 1])
maxSequenceOfEqualElements([0, 1, 1, 5, 2, 2, 6, 3, 3])