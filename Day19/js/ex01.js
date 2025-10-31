console.log(Array.prototype);

//1.length
//-Lấy số lượng phần tử
//- Cắt mảng theo số lượng

// const myArr=["Item 1","Item 2","Item 3","Item 4"];
// console.log(myArr.length);
// myArr.length=2;
// console.log(myArr);

//3.index0f(value)
// const myArr=["Item 1","Item 2","Item 3","Item 4"];
// console.log(myArr.indexOf("Item 2"));

//4. lastIndex0f(value)
// const myArr=["Item 1","Item 2","Item 3","Item 4"];
// console.log(myArr.lastIndexOf("Item 2"));

//5. includes
// const myArr=["Item 1","Item 2","Item 3","Item 4"];
// console.log(myArr.includes("Item 2"));

//6. slice(start, end)
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// console.log(myArr.slice(1, 3));

//7. push():Thêm phần tử vào cuối mảng
//- Trả về số lượng
//- Thay đổi mảng ban đầu
// const myArr=["Item 1","Item 2","Item 3","Item 4"];
// const count = myArr.push("A", "B");
// console.log(myArr);
// console.log(count);

//8. unshift(): Thêm phần tử vào đầu mảng
//- Trả về số lượng
// Thay đổi mảng ban đầu
// const myArr=["Item 1","Item 2","Item 3","Item 4"];
// const count = myArr.unshift("A", "B");
// console.log(myArr);
// console.log(count);

//9.pop():Xoá phần tử cuối mảng
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.pop();
// console.log(myArr);

//10. shift():Xoá phần tử đầu mảng
// const myArr=["Item 1","Item 2","Item 3","Item 4"];
// myArr.shift();
// console.log(myArr);

//11. splice(start, deleteCount):Xoá deleteCount phần tử từ vị trí start
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
//  myArr.splice(1,2);
//  myArr.splice(1);
//  myArr.splice(1,1,"A","B","C");
// myArr.splice(1,0,"A","B","C");
// const result = myArr.splice(1, 2, "A", "B", "C");
// console.log(myArr);
// console.log(result);

//12. split() và join(): tách mảng và nối mảng thành chuỗi
// let fullname="Tạ Hoàng An";
// const fullnameArr= fullname.split(" ");
// fullnameArr.push("OK");
// fullname=fullnameArr.join(" ");
// console.log(fullname);

//13.sort()
// const names =["Tung", "Duong", "An", "Tuan"];
// const result= names.sort();
// console.log(names);
// console.log(result);

// const numbers = [5, 2, 1, 4, 10, 8, 100];
// numbers.sort((a, b) => {
//   //a:Phần tử sau
//   //b:Phần tử trước
//   //Nếu return về số âm: b sẽ đứng trc a
//   //Nếu return về số dương:Giữ nguyên
//   //   if (b > a) {
//   //     return -1;
//   //   }
//   // rút gọn
//   return a - b;
// });
// console.log(numbers);

//Bài tập: Sắp xếp mảng trái cây dưới theo thứ tự độ dài tăng dần
// const fruits = ["Cam", "Chuối", "Bưởi", "Dưa hấu", "Xoài", "Thanh long"];
// fruits.sort((a, b) => a.length - b.length);
// console.log(fruits);

//bài tập:Sắp xếp danh sách userss theo tên tăng dần
// const users = [
//   "Ta Hoang An",
//   "Nguyen Minh Hoang",
//   "Vu Quoc Dung",
//   "Pham Van Tuan",
//   "Nguyen Tuan Anh",
// ];
// const getFirstName = (fullname) => {
//   return fullname.split(" ").slice(-1).join(" ");
// };
// users.sort((a, b) => {
//   if (getFirstName(a) < getFirstName(b)) {
//     return -1;
//   }
// });
// console.log(users);

//14. reverse():Đảo ngược mảng
// const myArr=["Item 1","Item 2","Item 3","Item 4"];
// myArr.reverse();
// console.log(myArr);

//Mảng 2 chiều
// const myArr = [
//   [1, 2],
//   [3, 4],
//   [5, 6],
// ];
// console.log(myArr);
// console.log(myArr[1][0]);
// myArr[myArr.length - 1].push(7);
// console.log(myArr);

//Bài tập: Chunk array
// const numbers = [1, 2, 3, 4, 5, 5, 6, 7, 8, 9];
// const size = 2;
// const newArr=[];
// //outtput: [[1,2], [3,4], [5,6], [7,8],[9]]
// for (let i = 0; i < numbers.length; i+=size) {
//   const chunk = numbers.slice(i, i+size);
//   newArr.push(chunk);
// }

// console.log(newArr);

//15.forEach(callback)
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 4"];
// myArr.forEach((value, index) => {
//   console.log(value, index);
// });

//16.map(callback)
// const numbers = [5, 2, 9, 7];
// const newArr = numbers.map((value, index) => {
//   console.log(value, index);
//   return value * 2;
// });
// console.log(newArr);

//17. filter(callback)
// const numbers = [5, 2, 9, 7];
// const newArr = numbers.filter((value, index) => {
//   console.log(value, index)
//   return index;
// });
// console.log(newArr);

//Bài tập;Lọc trùng mảng dưới đây(dùng filter)
// const myArr = ["Item 1", "Item 2", "Item 3", "Item 2", "Item 4"];
// console.log(myArr);

// const newArr = myArr.filter((value, index) => {
//   // console.log(myArr.indexOf(value));
//   return myArr.indexOf(value) === index;
// });
// console.log(newArr);

//Ví dụ:lấy ra các phần tử là số lẻ --> nhân đôi (Chỉ trả về phần tử đã nhân đôi)
const numbers = [1, 2, 3, 4, 5, 6, 7];
const newArr = numbers
  .filter((value) => value % 2 !== 0)
  .map((value) => value * 2);
console.log(newArr);
