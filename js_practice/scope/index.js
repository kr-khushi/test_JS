var a = 10;
if(a == 10){
    var a = 20;
    console.log(a); //20
}
console.log(a); //20


let b = 30;
if(b == 30){
    let b = 40;
    console.log(b); //40
}
console.log(b)  //30


// const t; //gives syntax error 
const d = "hello";
// d = 'world';   //gives error bcoz of const immutable
console.log(d)




//rest para
function sum(...args){
    let total = 0;
    for(const a of args){
        total += a;
    }
    return total;
}

console.log(sum(1,2,3,4))

const odd = [1,3,5];
const combine = [...odd, 2,4,6];

console.log(combine)

function f(a,b, ...args){
    console.log(args);
}
f(1,2,3,4,5)




let rivers = ['Nile', 'Ganges', 'Yangte'];
let moreRivers = ['Danube', 'Amazon'];

console.log(rivers.push(...moreRivers))
console.log(rivers)