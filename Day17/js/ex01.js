//Hàm

//1. expression function
// const showMessage = function () {
//   console.log("a");
// };
// if (typeof showMessage === "function") {
//   showMessage();
// }

//2.callback function (Truyền vào )
// const doSomething = function () {
//   console.log("doSomething");
// };
// const doSomething2 = function () {
//   console.log("doSomething2");
// };
// const handler = function(){
//     doSomething("An");
// };
// const display = function (func) {
//   console.log("dislay");
//   //func --> Hàm đại diện
//   if (typeof func === "function") {
//     func();
//   }
// };
// // display(doSomething)
// // display(function () {
// //   doSomething("An");
// // });
// display(handler);

//3.rest parameter
// const sum = function (a, b, ...args) {
//   console.log(a, b);
//   console.log(args);
// };
// sum(1, 2, 3, 4, 5, 6);

// 4. IIFE (phù hợp cho những TH dùng 1 lần )
// (function(value){
//     console.log("Học js", value);

// })("F8");

//5.Arrow function(rút gọn cú pháp hàm thông thường nhưng không thay thế)
// const showMessage=(msg) =>{
//     console.log("Xin chào", msg);

// };
// showMessage(msg);

// const sum = (a, b) => {
// return a + b;
// };
//or
//  const sum = (a,b )=> a+b
// console.log(sum(10, 20));

//Đệ quy
//-Kỹ thuật gọi chính hàm đang định nghĩa để tạo vòng lặp
//-Có 2 phần
//+ Phần cơ sở
//+ Lời gọi đệ quy

// const showNumber = (n) => {
//   console.log(n);
//   if (n > 1) {
//     showNumber(n - 1);
//   }
// };
// showNumber(10);

//Tính tổng cấc số từ 1 đến n (Dùng đệ quy)
// const getTotal = (n) => {
//   if (n === 1) {
//     return 1;
//   }
//   return n + getTotal(n - 1);
// };
// console.log(getTotal(10));

//Tính tổng các số chẵn
const getTotal = (n) => {
  if(n<2){
    return 0;
  }
    if (n % 2 !== 0) {
    n--;
    }

  return n + getTotal(n-2);
};
console.log(getTotal(12));
