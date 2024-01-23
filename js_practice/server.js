

//call method
const person = {
    fullname: function(){
        return this.fname + " " + this.lname ;
    },
    fullName: function(cityName, countryName){
        return this.fname + " " + this.lname + " " + cityName + " " + countryName;
    },
    
}



const person1 = {
    fname : "John",
    lname : "Doe"
}

const person2 = {
    fname : "Smith",
    lname : "Doe"
}

console.log(person.fullName.call(person2, "london", "canada"))
console.log(person.fullname.call(person1))


//in call method takes arguments as a saperate
//whereas in apply method takes arguments as an array

console.log(person.fullName.apply(person2, ["Oslo", "Norway"]))


//class inheritance
class Car{
    constructor(brand) {
        this.brand = brand
    }
    present(){
        return this.brand;
    }
}

class Model extends Car{
    constructor(brand, mod){
        super(brand)
        this.mod = mod;
    }
    show(){
        return "model = " + this.mod + " brand : " + this.brand;
    }
}

const myCar = new Model("Ford", "Mustang");
console.log(myCar.present())
console.log(myCar.show())


//settter and getter method in class
class Parent{
    constructor(fname, lname){
        this._fname = fname
        this._lname = lname
    }
    get fname(){
        return this._fname;
    }
    set fname(x){
        this._fname = x;
    }
    get lname(){
        return this._lname;
    }
    set lname(x){
        this._lname = x
    }
}

const full_name = new Parent("Khushi", "Patel");
console.log(full_name.fname)
console.log(full_name.lname)

full_name.fname = "John";
full_name.lname = "doe"

console.log(full_name.fname + " " + full_name.lname)



//callback function
function display(some){
    console.log(some)
}

// function cal_sum(a,b){
//     let sum = a + b;
//     display(sum);
// }

// cal_sum(3,2)


function cal_sum(a,b, mycallback){
    let sum = a + b;
    mycallback(sum)
}

cal_sum(2,3,display)



//set Interval fucntion is used to call a function in a secific interval
setInterval(myFucntion, 1000)

function myFucntion(){
    let d = new Date();
    console.log(d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds());
}