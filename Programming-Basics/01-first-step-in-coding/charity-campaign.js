function charityCampaign(input1, input2, input3, input4, input5){

let days = Number(input1);
let confectioner = Number(input2);
let cakes = Number(input3);
let waffels = Number(input4);
let pancakes = Number(input5);

let sumCakes = cakes * 45;
let sumWaffels = waffels * 5.80;
let sumPancakes = pancakes * 3.20;

let sumPerDay = (sumCakes + sumWaffels + sumPancakes) * confectioner;
let sumCampaign = sumPerDay * days;

let total = sumCampaign - ( sumCampaign / 8);

console.log(total)
}

charityCampaign("23", "8", "14", "30", "16")