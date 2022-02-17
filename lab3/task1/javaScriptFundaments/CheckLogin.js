let visitor = prompt("Who's there?", "");
if(visitor == "Admin"){
    let password = prompt("Password?", "");
    if(password == "TheMaster"){
        alert("Welcome!");
    }
    else if(password == "" || password == null){
        alert("Canceled");
    }
    else{
        alert("Wrong password");
    }
}
else if(visitor == null || visitor == ""){
    alert("Canceled");
}
else{
    alert("I don't know you");
}