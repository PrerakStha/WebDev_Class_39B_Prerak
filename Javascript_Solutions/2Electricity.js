const units = 20;
let bill = 0;
if (units <= 50) {
    bill = units * 5;
}
else if (units <= 100) {
    bill = units * 7;
}
else if (units <= 200) {
    bill = units * 10;
}
else {
    bill = units * 12;
}
console.log("The electricity bill is ", bill); 