function sumTable() {
let prices=document.querySelectorAll('table tbody tr td:last-of-type');

let sum=0;

for (const element of prices) {
    let price=Number(element.textContent);
    if(price){
        sum+=price
    }
}
document.getElementById('sum').textContent=sum
}