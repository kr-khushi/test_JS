// const cart = ["top", "kurta", "pant"];

// const promise = createOrder(cart);
// console.log(promise);

// promise.then(function(orderId){
//     console.log(orderId);
// })

// function createOrder(cart){
//     const pr = new Promise(function(resolve, reject){
//         if(!validateCart(cart)){
//             const err = new Error("Cart is not validate");
//             reject(err)
//         }

//         const orderId =  "1234";
//         if(orderId){
//             setTimeout(function(){
//                 resolve(orderId)
//             }, 5000)
//         }
//     })
//     return pr;
// }

// function validateCart(cart){
//     return true;
// }




function fetchData(){
    return new Promise(function(resolve, reject){
        setTimeout(function(){
            const success = true;
            if(success){
                const data = {message: "Date fetched successfully"};
                resolve(data)
            }
            else{
                const err = new Error("Error while fetching data")
                reject(err)
            }

        }, 2000)
    })
}

// fetchData()
// .then(function(data){
//     console.log("success : " + data.message)
// })
// .catch(function(error){
//     console.log("Error : " + error.message)
// })


//promise chain
// function processData(data){
//     return new Promise(function(resolve, reject){
//         setTimeout(function(){
//             data.modifiedMessage = data.message.toUpperCase();
//             resolve(data)
//         })
//     }, 1000)
// }


// fetchData()
// .then(function(data){
//     console.log("step 1: " + data.message);
//     return processData(data)
// })
// .then(function(modifiedData){
//     console.log("step 2: " + modifiedData. modifiedMessage)
// }) 
// .catch(function(err){
//     console.log("error : " +  err.message)
// })




// async - await  promise
const p = new Promise(function(resolve, reject){
    setTimeout(() => {
        resolve("Promise Resolved Value!!")
    }, 5000)
})


// async function handlePromise(){
//     console.log("Hello World!")
//     //JS  Engine waiting for primse to return
//     const val = await p;
//     console.log("Hello")
//     console.log(val)

// }

// handlePromise()


// //without async awit promise
// function getData(){
//     // JS engine will not wait for to return promise
//     p.then((res) => console.log(res));

//     console.log("hello00")
// }


// getData()





const API =  "https://api.github.com/users/kr-khushi";

async function getData(){
    const data = await fetch(API);

    const  jsonValue = await data.json()

    console.log(jsonValue)
}

getData()