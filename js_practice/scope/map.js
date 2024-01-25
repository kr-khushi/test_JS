const num = [1,2,3,4];

const output = num.map((x) => {
    // return x*2;
    return x.toString(2);
})

console.log(output)



//filter method
const output_filter = num.filter((x) => {
    return x % 2 === 0;
})
console.log(output_filter)


//reduce method
function findSum(num){
    let sum = 0;
    for(let i = 0; i< num.length; i++){
        sum = sum + num[i];
    }
    return sum;
}
console.log(findSum(num))

//using reduce method
const output_sum_reduce = num.reduce(function(acc, curr) {
    acc = acc + curr;
    return acc;
}, 0)
//0 will be the inital value of the acc
console.log(output_sum_reduce)


const output_max_reduce = num.reduce(function(acc, curr){
    if(curr > acc){
        acc = curr;
    }
    return acc;
}, 0)
console.log(output_max_reduce)



const users = [
    {firstName: "Khushi", lastName: "Patel", age: 26},
    {firstName: "Hello", lastName: "World", age: 51},
    {firstName: "Akshay", lastName: "Saini", age: 26},
    {firstName: "elon", lastName: "musk", age: 23}
]

const output_same_age = users.reduce(function(acc, curr){
    if(acc[curr.age]){
        acc[curr.age] = ++acc[curr.age];
    }
    else{
        acc[curr.age] = 1;
    }
    return acc;
}, {})

console.log(output_same_age)


//print the firstname of all the people whose age is less than 30
// const age_less_30 = users.filter((x) => x.age < 30 ).map((x) => x.firstName)

const age_less_30 = users.reduce(function(acc, curr){
    if(curr.age < 30){
        acc.push(curr.firstName);
    }
    return acc;
}, [])

console.log(age_less_30)


