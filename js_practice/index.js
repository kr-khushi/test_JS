
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