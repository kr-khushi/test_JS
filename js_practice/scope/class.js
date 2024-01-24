class first {
    constructor (name){
        this.name = name;

    }
    getName(){
        return this.name;
    }

    setName(newName){
        this.name = newName
    }
}

const name = new first("John Doe");
console.log(name)
console.log(name.getName())


name.setName("HEllo");
console.log(name.getName())



//inheritance 
class Animal{
    constructor(leg){
        this.leg = leg;
    }
    walk(){
        console.log("walk");
    }
}

class Bird extends Animal{
    constructor(leg){
        super(leg)
    }
    fly(){
        console.log("fly")
    }
};

let bird = new Bird(2);
console.log(bird.walk())
console.log(bird.fly())