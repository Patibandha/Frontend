//write a function that calculates the sum of all numbers from 1 up to some number n .
//Big O(n)
function addUpto(n){
    let total=0;
    for(let i=1;i<=n;i++){
        total += i;
    }
    return total;
}

//another way //Big O(1)
function addUpto1(n){
    return n*(n+1)/2;
}

var sum = addUpto(99);
var sum1 = addUpto1(99);

console.log(sum);
console.log(sum1);