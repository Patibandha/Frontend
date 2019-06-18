//write a function which accepts an array as argument and returns the elements only at even Indexes.
//Big O(n)
function OnlyElementsAtEvenIndex(array){
    var newArray = Array(Math.ceil(array.length/2));
    for(var i=0;i<array.length;i++){
        if(i%2 == 0){
            newArray[i/2] = array[i];
        }
    }
    return newArray;
}

console.log(OnlyElementsAtEvenIndex([1,2,3,4,5]));