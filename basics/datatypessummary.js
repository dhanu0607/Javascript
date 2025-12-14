//premitive data types
// 7 types:String,number,boolean,null,undefined,symbol,bigint

const score = 100;
const s = 100.1;
const isLoggedIn = false;
const outsideTemp = null;
let userEmail = undefined;
const id = Symbol('1223');
const anotrherId = Symbol('1223');

console.log(id === anotrherId);

const bigNumber = 2577895522336556n;

//reference type(Non premitive)
// Array, Objects ,functions
const heros = ["goku","vegeta", "gohan"];
let myobj = {
    name :"dhanush",
    age : 20,
}
const my_function = function(){
    console.log("Hello Goku");
    
}

console.log(typeof my_function);

