function cutAndreverse(str) {
    let first = str.substring(0, str.length / 2)
    let second = str.substring(str.length / 2)
    first = first.split('').reverse().join('')
    second = second.split('').reverse().join('')

 console.log(first);   
 console.log(second);
}

cutAndreverse('tluciffiDsIsihTgnizamAoSsIsihT')