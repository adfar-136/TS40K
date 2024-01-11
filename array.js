// var arr = [1,2,3,4,5,6,7];
// var arr2 = arr.slice(1,5);
// var arr3 = arr.slice(1);
// console.log(arr2);
// console.log(arr3);
// arr.splice(1,0,"a","b","c");
// console.log(arr);

var arr = [2,4,6,8,10];
var arr2 = arr.map((item,index)=>{
    console.log(item,index);
    return item*2;
})
console.log(arr2)
