//Module
// Tách ra thành những chức năng nhỏ, mỗi chức năng là 1 file, mỗi file thì là 1 module, module này có thể gọi module khác
//-> sau đó cần 1 file để gom tất cả các module lại ( file chạy chính )

//if,else thì là phạm vi block
//trong 1 hàm là phạm vi function

//import
// import a, { b as _b, c } from "../modules/home.js";
// //Trùng from thì gộp đc và bắt buộc import default phải đứng trc
// console.log(a);
// console.log(_b);
// console.log(c);

//Muốn đổi tên thì dùng từ khoá as(alias)

// import doSomething, { a, b } from "../modules/home.js";
// doSomething();
// console.log(a);
// console.log(b);

// //import tất cả
// import * as home from "../modules/home.js";
// console.log(home);
