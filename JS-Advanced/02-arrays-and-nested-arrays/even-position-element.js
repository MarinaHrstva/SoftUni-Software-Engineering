function evenPositionElements(arr){
    
    return arr.filter((x,i)=> i%2===0).join(' ')

}

console.log(evenPositionElements(['20', '30', '40', '50', '60']));