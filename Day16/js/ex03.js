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

function getTotal(a, b) {
  let total = a + b;
  //total= biến cục bộ
  console.log(total);
}
getTotal(10, 20);
