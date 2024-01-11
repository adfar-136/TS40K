console.log(a);
console.log(sum(6));
var a = 10;
console.log(a);
function sum(x){
    var y =x*x;
    return y;
}
var double = sum(5);
console.log(double);
// console.log(greet)
var greet = function(){
    console.log("Hello Motto");
}
greet()
var greet1=function(x){
    return x*x
}
var greet2 =(x)=>x*x;
console.log(greet1(5))
console.log(greet2(50))