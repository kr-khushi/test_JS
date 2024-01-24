const color = ['red', 'blue', 'orange', 'pink', 'white', 'black'];

console.log("for of")
for(let colors of color){
    console.log(colors)
}


console.log("entries()")
for(const [index, colors] of color.entries()){
    console.log( index + " " + colors)
}


console.log("for in")
for(let colors in color){
    console.log(colors)
}


//array destructuring
let [color1, color2, color3, ...args] = color;
console.log(color1);
console.log(color2)
console.log(args)


//object destructuring
let employee = {
    id : 101,
    name : {
        firstName : "John",
        lastName : "Doe"
    }
};

let {
    id,
    name: {
        firstName,
        lastName
    },
    name
} = employee

console.log(firstName)
console.log(lastName)
console.log(name)
console.log(id)



//array of
let num = Array.of(3);
console.log(num.length);
console.log(num[0])
console.log(num[1])

let char = Array.of('A', 'B', 'C');
console.log(char.length)
console.log(char[1])


//find method
let number = [1,2,3,4,5];
console.log(number.find(x => x % 2 == 0))
console.log(number.findIndex(x => x % 2 == 0))