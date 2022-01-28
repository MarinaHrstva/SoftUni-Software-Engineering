function rotateArray(array, rotations) {
    rotations = rotations % array.length; 
    let piece=array.splice(-rotations)
    
    return piece.concat(array).join(' ');
}

console.log(rotateArray(["Banana", "Orange", "Coconut", "Apple"], 15));

// for (let i = 0; i < rotations; i++) {
    //     let el = array.pop();
    //     array.unshift(el);
    // }