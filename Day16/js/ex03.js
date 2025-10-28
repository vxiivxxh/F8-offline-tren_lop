//Hàm
//-Cú pháp trong lập trình
//-Cho phép nhóm các đoạn ctr con và đặt tên -->Tiện cho việc  gọi lại

//Hàm thường thể hiện là 1 hành động (Đặt tên dùng động từ, biến thì dùng danh từ)
//Tên hàm: getMessage, showUser, setCustomer,...

//Cú pháp:
/*
Định nghĩa hàm

function tenham(){
    Thân hàm
}

function tenham(thamso1, thamso2,...){
    Thân hàm
}

Gọi hàm:
tenham()
tenham(doiso1, doiso2,...)
*/
//Khi định nghĩa hàm thì đc gọi là tham số

//Khi gọi hàm thì đc gọi là đối số

//Tránh đặt quá nhiều tham số(Tối đa 5 tham số)

//Và 1 hàm thì không nên quá 25 dòng

// function getMessage(msg, status){
//     // console.log("Xin chào", msg);
//     console.log(msg);
//     console.log(status);
// }
// getMessage("F8");
// // getMessage("F9");

//Tham số mặc định:
// function getMessage(msg, status ="success"){
//     console.log(msg);
//     console.log(status);
// }
// getMessage("F8", "error");

//Phạm vi của js
//1. global
//2. function
//3. block
//4.module

//scope(Biến cục bộ):

// function getTotal(a, b) {
//   let total = a + b;
//   //total= biến cục bộ
//   if (total > 0) {
//     console.log(total);
//     let c = 10;
//   }
//   console.log(c);
// }
// getTotal(10, 20);

//Muốn sử dụng đc biến total ở bên ngoài thì dùng từ khoá return: Hàm trả về giá trị
//Lưu ý: Khi từ khoá return đc gọi -->Hàm sẽ thoát (tức là bên dưới return có gì thì nó sẽ bỏ qua k chạy )
// function getTotal(a, b) {
//   let total = a + b;
//   //total= biến cục bộ
//   return total;
//   console.log("Xin chào");
// }
// console.log(getTotal(10, 20));

// function getDivi(a, b) {
//   if (b !== 0) {
//     return a / b;
//   }
//   return false;
// }
// console.log(getDivi(10, 0));

//Hàm kiểm tra số nguyên tố
// function isPrime(n) {
//   if (n % 1 !== 0 || n <= 1) {
//     // ||: hoặc
//     return false;
//   }
//   for (let i = 2; i < n; i++) {
//     if (n % i === 0) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(isPrime(45));

//Biến toàn cục. Lưu ý: chỉ đc truy cập không đc khai báo lại vì nó sẽ trở thành biến cục bộ
// let data = "Xin chào F8";
// function getMessage() {
//   return data;
// }
// function setMessage(value){
//     data=value;
// }
// setMessage("OK chưa?");
// console.log(getMessage());

// let a = 10;

// function display(value1) {
//   let b = 20;
//   //Hàm closure
//   function showMessage(value2) {
//     let c = 30;
//     console.log(a);
//     console.log(b);
//     console.log(c);
//     console.log(value1);
//     console.log(value2);
//   }
//   return showMessage;
// }
// const showMsg = display("F8");
// showMsg("F9");

//Lưu ý: return tên hàm chứ k return lời gọi hàm để nó trả về hàm chứ k trả về giá trị hàm và gọi nó ở bên ngoài để kiểm soát

//TH2:
let a = 10;

function display(value1) {
  let b = 20;
  //Hàm closure
  //Hàm ẩn danh(anonymous function)
  return function (value2) {
    let c = 30;
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(value1);
    console.log(value2);
  };
  //   return showMessage;
}
const showMsg = display("F8");
showMsg("F9");
