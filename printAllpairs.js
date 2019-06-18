//write a function which prints all the pairs of arr[n][n].
//Big O(n^2)
function printAllpairs(n){
    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            console.log(i,j);
        }
    }
}

printAllpairs(2);