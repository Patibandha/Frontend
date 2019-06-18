//write a function which accepts the number n and print out till the number or at least till 5.
function logAtleast5(n){
    for(var i=1; i<=Math.max(5,n); i++){
        console.log(i);
    }
}

//write a function which accepts the number n and print out till the number or at most till 5.
function logAtmost5(n){
    for(var i=1; i<=Math.min(5,n); i++){
        console.log(i);
    }
}
logAtleast5(6);
console.log("\n\n");
logAtmost5(6);