
//function statement
function a(){
    console.log("a called");
}

//function expression
var b = function(){
    console.log("b called")
}

a();
b();


//difference between the function statement and function expression is that before the function declaration calling a function in function statement doesn;t give any error but in case of fucntion expression is give error


//anonymous fucntion: fucntion without name 
// function(){

// }


//named function expression
var c = function xyz(){
    console.log("c called");
}

c();
// xyz(): //gives error


//first class function:- ability used function as a argument, parameter or as a return value
const d = function(para1){
    return function xyz(){

    }
}
console.log(d())


//callback fucntion
setTimeout(function(){
    console.log("Timer")
}, 5000)

function x(y){
    console.log("x");
    y();
}

x(function y(){
    console.log("y")
})


//arrow function
let number = [3,2,5];
number.sort((a,b) => a - b);
console.log(number);



//Higher Order Function
const radius = [3,4,2];

const area = function (radius){
    return Math.PI * radius * radius;
}

const diameter  = function ( radius) {
    return 2 * radius;
} 

const calculate = function(radius, logic){
    const output = [];
    for ( let  i = 0; i < radius.length; i++ ){
        output.push(logic(radius[i]))
    }
    return output;
}

console.log(calculate(radius, area))
console.log(calculate(radius, diameter))