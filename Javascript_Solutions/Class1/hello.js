const purchaseAmount = 200;
let discount = 0;


if(purchaseAmount >= 100){
   discount = (purchaseAmount * 20) /100
}
else if(purchaseAmount>= 50 && purchaseAmount<=99){
   discount = (purchaseAmount*10)/100
}
else if(purchaseAmount>50){
    discount = 0
}
else{
    console.log("Invalid")
}

const finalPrice = purchaseAmount - discount;
console.log(finalPrice)


