const isLoggedIn = true;
const role = "user";

if(!isLoggedIn){
    console.log("Please log in")
}

if(isLoggedIn && role === "admin"){
    console.log("Welcome admin");
}

else if(isLoggedIn){
    console.log("Welcome user");
}