function arrayModifier(input) {


   
    // •	"decrease" decreases all elements in the array with 1.
    let array = input.shift().split(' ')
    array = array.map(Number);

    function swap(array, firstIndex, secondIndex) {
        let tempElement = array[firstIndex];
        array[firstIndex] = array[secondIndex];
        array[secondIndex] = tempElement;
        return array
    }
    function multiply(array, firstIndex, secondIndex) {
        array[firstIndex] = array[firstIndex] * array[secondIndex];
        return array
    }
    for (let line of input) {
        let [command, firstIndex, secondIndex] = line.split(' ')

        if (command === 'swap') {
            array = swap(array, firstIndex, secondIndex);
        } else if (command === 'multiply') {
            array = multiply(array, firstIndex, secondIndex);
        }else if (command==='decrease') {
           array=array.map(x=>x-1)
        }else{
            break;
        }
    }
    console.log(array.join(', '));

}

arrayModifier(['1 2 3 4',
'swap 0 1',
'swap 1 2',
'swap 2 3',
'multiply 1 2',
'decrease',
'end']
);