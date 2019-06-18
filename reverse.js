//1. write a function that accepts a string input and returns a reversed copy.
//store the reversed string in string variable
function reverse1(s){
    var o = '';
    for(var i = s.length-1 ; i>=0 ; i--){
        o += s[i];  
    }
    return o;
}
//another way
//store the reversed string in array variable by just assigning string elements
function reverse2(s){
    var o = [];
    for(var i = s.length-1,j=0 ; i>=0 ; i--,j++){
        o[j] = s[i];
    }
    return o.join('');
}
//another way
//store the reversed string in array variable usig push method
function reverse3(s){
    var o=[];
    for(var i=0, len=s.length; i<=len; i++){
        o.push(s.charAt(len-i));
    }
    return o.join('');
}

var rev1 = reverse1("reverse");
var rev2 = reverse2("reverse");
var rev3 = reverse3("reverse");
console.log(rev1);
console.log(rev2);
console.log(rev3);