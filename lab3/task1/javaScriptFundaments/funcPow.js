let x, n;
function pow(x, n){
    return x ** n;
}

x = prompt("x =", 0);
n = prompt("n =", 0);

if(n < 1){
    alert(`Power ${n} is not supported, use a positive integer`);
}
else{
    alert(pow(x, n));
}