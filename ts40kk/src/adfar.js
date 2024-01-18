const obj={
    name:"Adfar",
    age:35,
    gender:"male"
}
var {name,age,gender} = obj
console.log(name)
console.log(age)
console.log(gender)

var arr1 = [1,2,3,4,5];
var arr3 = [11,22,33,44,55];
var arr2 = [...arr1,...arr3];
arr1[3] = "a"
console.log(arr2);
console.log(arr1);