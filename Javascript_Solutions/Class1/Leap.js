const year = 1;

if(year % 4 === 0 || year%100 !== 0){
console.log("It is a leap year")
}
else if(year % 400 === 0){
    console.log("It is a leap year")
}
else{
    console.log("It is wrong")
}