function calculator(a,operator,b){
if(operator==='+'){
    return (a+b).toFixed(2)
}else if(operator==='-'){
    return (a-b).toFixed(2)
}else if(operator==='*'){
    return (a*b).toFixed(2)
}else if(operator==='/'){
    return (a/b).toFixed(2)
}

}