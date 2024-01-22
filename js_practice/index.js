
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


