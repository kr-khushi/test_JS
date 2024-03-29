


function myProduct( ){
    let x = 3*4;
    document.getElementById("product").innerHTML = "the product of 3 & 4 is " +  x  +" .";
}


//object
const person = {
    firstName : "Khushi",
    lastName : "Patel",
    age : "21",
    fullName : function(){
        return this.firstName + " " + this.lastName;
    }
}

//access
console.log(person.firstName)
console.log(person["firstName"])
console.log(person.fullName())




//string
let text = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(text.length);
console.log(text.charAt(2));
console.log(text.at(2));
console.log(text.charCodeAt(2));
console.log(text[2])


let a = "Hello";
let b = "World!";
let c = a.concat(" ",b);
console.log(c)


//String Padding
let d = a.padStart(10,"x");
//padstart(lenth, any character or no.)
console.log(d)
console.log(a.repeat(3))

//replace: only replace first match
console.log(a.replace('l','i'))


//search in string
let text1 = "Please locate where 'locate' occurs!";
console.log("First index of locate " + text1.indexOf('locate'))
console.log("Lasr index of locate " + text1.lastIndexOf('locate'))


//Template String
let fname = "f.name";
let lname = "l.name";
let fullname = `${fname} ${lname}`;
console.log(fullname)



//array
var arr1 = ["hello", "world", 2];
console.log(arr1);
//access array using index
console.log(arr1[1]);
console.log(arr1.length);
//change the value of array 
arr1[0] = 1;
console.log(arr1)

// to add the element at the end of the array use push
arr1.push("Hello");
console.log(arr1)
//to remove the element at the end of the array use pop
arr1.pop();
console.log(arr1)

//to remove the element at the start of the array use shift
console.log(arr1.shift())
console.log(arr1)

//to add the element at the start of the array use unshift
arr1.unshift(1);
console.log(arr1)



//scope
var global_num = 10;

function fun1() {
    // oops_global = 5; //consider as a global 
    var oops_global = 5; //consider as a local 
}

function fun2() {
    var output = "";
    if(typeof global_num != "undefined"){
        output += "global_num = " + global_num;
    }
    if(typeof oops_global != "undefined"){
        output += "oops_global = "+ oops_global;
    }
    console.log(output)
}

fun1();
fun2();


const fruits = ["apple","banana","mango"];
console.log(fruits)
// toString() used to convert array to string
console.log(fruits.toString())


//looping array
let len = fruits.length;
var text3 = "";
console.log("Array print using looping method")
for(let i = 0; i<len; i++){
    text3 += fruits[i] + "\n";
}
console.log(text3)

//iteration using forEach
var text4 = "";
fruits.forEach(myFunction);
console.log("using forEach")
function myFunction(value){
    text4 += value + "\n";
}
console.log(text4)


const arr2 = [40];
const arr3 = new Array(40);
console.log(arr2)
console.log(arr3)

console.log(typeof arr2)
//to recognize the array
console.log(Array.isArray(arr2))
console.log(arr2 instanceof Array)
console.log(typeof arr3)
if(typeof arr2 === arr3){
    console.log("same")
}
else{
    console.log("not same")
}


//join method
console.log(fruits.join("+"))


//concate array
var arr4 = ["house", "flat", "bunglow"];
const arr5 = [1,2,3];
console.log(arr4.concat(arr5))
console.log(arr5.concat(4))


//splice method is used to add new element to an array, altered original array
arr4.splice(2,0,4,5);
console.log(arr4)
arr4.splice(2,2,"3")
console.log(arr4)

//toSpliced same as the splice method but creates new array and not altered any element of original array
arr4 = ["house", "flat", "bunglow"]
const new_arr4 = arr4.toSpliced(0,1," ");
console.log(new_arr4)

//slice method
console.log(arr4.slice(0,2))


//indexOf return the first element index 
//lastIndexOf return the last element index what we are trying to find

const arr6 = ["apple", "mango", "Kiwi", "apple"]
console.log(arr6.indexOf("apple"));
console.log(arr6.lastIndexOf("apple"));

//includes check the element present into an array or not
console.log(arr6.includes("Kiwi"))



//find method returns the value of the first array that passes a test function
var numbers = [4, 9, 1, 25, 29];
let first = numbers.find(myFunction);

function myFunction(value, index, array) {
  return value > 18;
} 

console.log(first)


//findIndex method returns the index value of the first array that passes a test function
let first_index = numbers.findIndex(myFunction);
console.log(first_index)


//findLast() method same as the find method but only difference is that finds the element that satisfies the test condition from the last
let last = numbers.findLast(x => x > 18);
console.log(last)

//findLastIndex method return the index of last element that statisfies the test condition
let last_index  = numbers.findLastIndex( x => x >18)
console.log(last_index)


//sort array works well with character but not with number so that work with number use comapre function
var ch = ['c','f','k','d'];
console.log(ch);
ch.sort();
console.log(ch)

console.log(numbers.sort(function(a,b){return a - b}))


var num = [1,6,8,4];
console.log(num);
num.sort();
console.log(num)

//for reverse array
num = [1,6,8,4];
console.log(num.reverse())


//for sorting array in descending order use sort and reverse both
num = [1,6,8,4];
num.sort();
num.reverse();
console.log(num)

//toSorted method used to sort an arrya but it creates new array without altering the original 
console.log(num.toSorted())

// toReversed() same as the reverse method but creates new array
console.log(ch.toReversed())


const cars = [
    {type:"Volvo", year:2016},
    {type:"Saab", year:2001},
    {type:"BMW", year:2010}
]; 

//sort with year
cars.sort(function(a,b){ return a.year - b.year})
console.log(cars)

//sort with character
cars.sort(function(a,b){
    let x = a.type.toLowerCase();
    let y = b.type.toLowerCase();

    if(x < y) return -1;
    if (x > y) return 1;
})

console.log("with type character :  \n", cars )


//filter method creates new array with the element that pass test condition
var num1 = [34,567,25,67];
const over34 = num1.filter(myFunction1);

function myFunction1(value,index,array){
    return value > 34;
}
console.log(over34)


//reduce method runs a function on each element of an array to produce single value
num1 = [1,2,3,4,5];
const product_num1 = num1.reduce(myFunction)

function myFunction(total, value){
    return total * value;
}
console.log(product_num1)


//every method return true if all the element of an array pass test function
const every = num1.every(myFunction1);
 
function myFunction1(value){
    return value>4
}
console.log(every)

//some method return true if some element of an array pass test function
const some = num1.some(myFunction1);
console.log(some)

//with method is used to update the element of an array
const month = ["jan", "Feb", "Mar", "April"];
console.log(month.with(2,"March"))


//The ... operator expands an iterable (like an array) into more elements
const n1 = [1,2,3];
const n2 = [4,5,6];
const n3 = [7,8,9];
const result = [...n1, ...n3];
const result1 = [...n1,...n2,...n3];
console.log(result)
console.log(result1)


//Date object
const date = new Date(0);
console.log(date)

var dates = new Date(100000000000);
console.log(dates)

dates = new Date();
console.log(dates.toDateString())
console.log(dates.toUTCString())
console.log(dates.toISOString())

const date1 = new Date("2024");
console.log(date1)

dates = new Date("03/25/2015")
console.log(dates)


//Date.parse() give the milisecond between the date and January 1, 1970
var msc = Date.parse("Jan 21 2024")
console.log(msc)

dates = new Date(msc);
console.log(dates)

const date3 = new Date();
console.log(date3)

var msc1 = Date.parse(date3);
console.log(msc1);

const date4 = new Date(msc1);
console.log(date4)


//get method is used to get Date, month, year, hour, second, minutes
console.log(date4.getDate())
console.log(date4.getFullYear())
console.log(date4.getDay())
console.log(date4.getHours())
console.log(date4.getMinutes())
console.log(date4)


//getTimezoneOffest gives the difference between the local time and UTC time
let diff = date4.getTimezoneOffset()
console.log(diff)

//set method is used to set the dates
const new_date = new Date();
new_date.setDate(22)
new_date.setFullYear(2024)
new_date.setMonth(0)
console.log(new_date)


//Random no 
function myRandomNo(){
    document.getElementById("randomno").innerHTML = Math.random();
}


//for in loop
var person1 = {
    fname: "John",
    lname: "Doe",
    age: 25
}
text = "";
for (let x in person1){
    text += person1[x] + "\n";
}
console.log(text)


car1 = ["BMW", "Volvo", "Mini"];
for(let x of car1){
    text += x + " "
}
console.log(text)



//set
const set = new Set();
set.add(1)
set.add(2);
set.add(3);
set.add(4);
set.add(5);
console.log(set)

set.forEach(function(value){
    console.log(value)
})

console.log(set.values())

//iterate using values
console.log("values")
for(const x of set.values()){
    console.log(x)
}

set.delete(5);
console.log(set)
console.log(set.has(4))
console.log(set.size)



//map function
var map = new Map();
map.set("apple", 10)
map.set("banana",8)
map.set("kiwi", 5)
map.set("orange",8)

console.log(map)
console.log(map.size)
console.log(map.has("apple"))
console.log(map.get("kiwi"))
console.log(map.delete("apple"))

map.forEach(function(value, key){
    console.log(value + " " + key)
})

text = ""
for(const x of map.entries()){
    text += x  + "\n";
}
console.log("==============")
console.log(text)



//type conversion
//string to number
console.log(Math.PI)
console.log("3.14")
console.log( " ")

console.log(parseInt("99.09 98"))
console.log(parseFloat("990.09 98"))

//string and toString used t convert the number to string
console.log(String(98))
console.log((76).toString())

//dates to number same work as the getTime
const t = new Date()
console.log(Number(t))
console.log(t.getTime())

//dates to string
console.log(String(t))
console.log(t.toString())



//error 
//try-catch-finally

let val = 10;
let val2 = 0;
try{
    alert(hello)
}
catch(err){
    console.log(err.name)
    console.log(err.message)
}
finally{
    console.log("Final block")
}



let x = this;
console.log(x)


//arrow function
hello = () => {
    console.log("hello, world!")
}

sum = (a,b) => {
    return a + b;
}

const total = sum(5,6)
console.log(total)



//class
class car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    age(){
        const date = new Date()
        return date.getFullYear() - this.year;
    }
}

const mycar = new car("BMW", 2017);
console.log(mycar.age());



//JSON
let text5 = {
    "employees":[
        {"firstName":"John", "lastName":"Doe"},
        {"firstName":"Anna", "lastName":"Smith"},
        {"firstName":"Peter", "lastName":"Jones"}
      ]
}

console.log(text5)

//convert JSON text into js object
let obj = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

var obj1 = JSON.parse(obj)
console.log(obj1.employees[1].firstName + "   " + obj1.employees[1].lastName)


var person2 = {
    fname: "John",
    lname: "Doe",
    language: "No"
}

//change object property
Object.defineProperty(person2, "language", {
    get: function(){
        return language;
    },

    set: function(value){
        language = value.toUpperCase();
    }
})

person2.language = 'hello';
console.log(person2.language)


//bind method can borrow a method of another object
const person3 = {
    fname: "john",
    lname: "doe",
    fullname : function(){
        return this.fname + " " + this.lname;
    }
}

const member = {
    fname: "Hege",
    lname: "Nilson"
}

console.log(person3.fullname.bind(member)())



//promise
const myPromise = new Promise(function(mySuccess, myError){
    setTimeout(function(){
        mySuccess("Helllllllllllllo!!!!")
    }, 3000)
})

myPromise.then(function(value){
    console.log(value)
})


const myPromise1 = new Promise(function(mySuccess, myError){
    setTimeout(function(){
        mySuccess("Hello from the another promise")
    },2000)
})

Promise.any([myPromise, myPromise1]).then((x) =>{
    console.log(x)
})


