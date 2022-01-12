function sortAnArrayByTwoCriteria(array){
    
    return array.sort((a,b)=>a.length-b.length || a.localeCompare(b)).join('\n');

}

sortAnArrayByTwoCriteria(["alpha", "beta", "gamma"])