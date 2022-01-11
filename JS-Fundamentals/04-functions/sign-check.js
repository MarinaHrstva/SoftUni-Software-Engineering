function signCheck(a,b,c) {
    let result=a*b*c;
    
    if (result>=0) {
        return 'Positive';
    }else{
        return 'Negative';
    }
}
console.log(signCheck(-2,3,4));