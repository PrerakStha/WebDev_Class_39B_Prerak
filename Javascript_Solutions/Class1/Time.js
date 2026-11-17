const hour = 13;

if (hour >= 1 && hour <= 24) {
  if (hour >= 5 && hour <= 11) {
    console.log("Good morning");
  } else if (hour >= 12 && hour <= 17) {
    console.log("Good afternoon");
  } else {
    console.log("Good Evening");
  }
}
else{
    console.log("U are in wrong time")
}
