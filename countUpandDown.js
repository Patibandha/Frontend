//write a function which counts up and down of n numbers.
function countUpandDown(n){
    for(let i=0;i<=n;i++){
        console.log(i);
    }
    console.log("At the top!\n Going down");
    for(let j=n-1;j>=0;j--){
        console.log(j);
    }
    console.log("Back Down! Bye");
}

countUpandDown(5);
