//flat():Làm phẳng mảng
// const numbers = [1, 2, [3, 4, [5], 6]];
// console.log(numbers);
// const result=numbers.flat(Infinity);
// console.log(result);

//Làm phẳng mảng trên không dùng hàm flat
// const flatArray=(arr)=>{
//     let newArr=[];
//     for(let value of arr){
// if(!Array.isArray(value)){
//     newArr.push(value);
// }else{
//     const result=flatArray(value);
//     newArr=newArr.concat(result)
// }
//     }
//     return newArr;
// }
// console.log(flatArray(numbers));

//reduce(callback, initialValue)
//callback:
//- accumulator
//- value
//- index

// const numbers = [5, 10, 15, 20, 25, 30];
// const result = numbers.reduce((acc, value, index) => {
//   console.log(`acc:${acc}, value:${value}, index:${index}`);
//   return value; // return về gì thì trả acc về giá trị đó
// },0);
// console.log(result);

// const total=numbers.reduce((acc, cur )=> acc+cur, 0);
// console.log(total);

//Ví dụ: Tìm max
// const numbers = [1, 8, 2, 9, -1];
// const max = numbers.reduce((acc, cur) => (cur < acc ? acc : cur));
// console.log(max);

//Bài tập:Lọc trùng mảng(dùng reduce)
// const users=["User 1", "User 2", "User 3", "User 2", "User 4"];
// const newUsers=users.reduce((acc,cur)=>{
// if(!acc.includes(cur)){
//     acc.push(cur);
// }
// return acc;
// },[])
// console.log(newUsers);

//Bài tập  Chunk aray
//-K dùng slice
//- Dùng reduce
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// const size = 2;
// //output: [[1,2], [3,4], [5,6], [7,8],[9]]
// const newArr = numbers.reduce(
//   (acc, cur) => {
//     if (acc[acc.length - 1].length < size) {
//       acc[acc.length - 1].push(cur);
//     } else {
//       acc.push([cur]);
//     }
//     return acc;
//   },
//   [[]]
// );
// console.log(newArr);

//Array-Like Object: Object giống mảng
// function doSomething() {
//   //Array.from()-->Chuyển array like về array
//   Array.from(arguments).forEach((item) => {
//     console.log(item);
//   });
//   //spread
//   console.log(arguments);
//   console.log(Array.from(arguments));
//   [...arguments].forEach((item) => {
//     console.log(item);
//   });
// }
// doSomething(1, 2, 3, 4, 5, 6);

//Copy array
// const a = ["An", "hoangan@gmail.com"];
// // const b = a;
// //Shallow copy
// //dùng method trả về mảng mới
// // const b=a.slice(0);
// // const b=[... a];

// //Deep copy
// //- Chuyển mảng về chuỗi json
// //- Chuyển json ngược lại về mảng
// //- json sẽ không chuyển đc hàm
// const json = JSON.stringify(a);
// console.log(json);

// const b = JSON.parse(json);
// b[0] = "An F8";
// b[b.length - 1][0] = "BTH";
// console.log(a);
// console.log(b);

const sum = (a, b) => a + b;
const values = [10, 20];
// console.log(sum(...values));// spread gọi hàm và

console.log(sum.apply(null, values)); // cách ngày xưa khi chưa có ...
