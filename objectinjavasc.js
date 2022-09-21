// // /* 
// // let <object_name> = {
// //     <property>:<value>
// //     <key>:<value>,
// //     <attribute>:<value>,
// // }
// // */
// let abc = {
//     1: "mango",
//     2: "apple"
// };
// console.log(abc[1]+" " +abc[2]);

// // function ram (){
// //     let a=5;
// //     let b= 6;
// //     var sum;
// //     sum = a+b;
// //     console.log(sum);
// // }
// // ram ();

// let numbers = [1,2,3,4,5];
// let result = numbers.map((el) => el*2);
// console.log(result);
// let text = "Helo, manjo, djhkf , manjo ,tingo , manjo";
// const b = text.replace("manjo","mano");
// console.log(b);

// let text = " Hello world! this is mfakjl  ";
// // const abb = text.trim();
// // console.log(abb);
// // console.log(text);
// console.log(text.charAt(5));


// function value(){
//     const add = 15+15;
//     console.log(add);
// }

// setTimeout(value,"1000");
const array = [1,2,3,4,5,"mango","rahul","rahul"];
let array1 = [];
// for (let i=0;i<=array.length;i++){
//     if(typeof(array[i])=="number"){
//         array1.push(array[i]);
//     }
// }

//  MRTHOD - 1 To find numbers from array
// const found = array.find(el => (if(typeof(array[i])=="number"){
//     array1.push(array[i]);
// } );
// console.log(found);

// let a = true;
// new Promise((resolveOuter) => {
//     resolveOuter(
//       new Promise((resolveInner) => {
//         setTimeout(resolveInner, 1000);
//       })
//     );
//   });
function namecall(name){
    console.log(`Hello ${name}`);
}
// function setname(){
//     let a = "Rahul shah";
// }
// namecall("Rahul Shah");
setTimeout(function (){
    namecall("Rahul shah");
},1000);