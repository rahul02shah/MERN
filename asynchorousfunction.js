// console.log("mango");
// sum = (a,b)=>{
//     let c=a+b;
//     return c;
// };
// let result = sum (4,5);
// product = ()=>{
//     console.log(result *2);
// }
// setTimeout(product,2000);
// console.log(result);

function callMeAgain(){
    console.log("Hello Sir ");
}

function handlePromise(resolve, reject) {
    reject("rejectedd....")
}
setTimeout(callMeAgain, 0)

// setTimeout(() => {
//     console.log("Mango");
// }, 0)

let promise = new Promise(handlePromise)
console.log({ promise });
promise
    .then(res => {
        console.log({ res });
    })
    .catch((err) => {
        console.log({ err });
    })


console.log("last+++++++++");

