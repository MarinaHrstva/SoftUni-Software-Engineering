function stringLength(string1, string2, string3) {
    function sum(a, b, c) {
         return a.length + b.length + c.length
         }
    console.log(sum(string1,string2,string3));
    console.log(Math.floor(sum(string1,string2,string3)/3));
}

stringLength("chocolate", "ice cream", "cake");
