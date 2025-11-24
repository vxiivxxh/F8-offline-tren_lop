//event object: Object Mô tả thông tin của 1 sự kiện

//key(keyup, keydown):Lấy phím
//which:Lấy phím chuột(1:trái, 2:giữa, 3: phải)
//ctrlKey: Giữ phím ctrl
//shift: Giữ phím shift
//altKey:Giữ phím alt
//offsetX
//offsetY
//clientX
//clientY
//target:tác động vào cái nào thì nó trả về cái đấy
// const btn = document.querySelector("button");
// btn.addEventListener("mousedown", (e) => {
//   console.log(e);
//   console.log(e.target);
// });

//Phương thức:
//e.preventDefault():Ngăn hành động mặc định của thẻ html
// const a = document.querySelector("a");
// a.addEventListener("click", (e) => {
//   e.preventDefault();
//   console.log(a.href);
// });

//contextmenu
// document.addEventListener("contextmenu", (e) => {
//   e.preventDefault();
//   console.log("chuột phải");
//   console.log(e.clientX, e.clientY);
// });

const box = document.querySelector(".box");
const btn = document.querySelector("button");
btn.addEventListener("click", (e) => {
  e.stopPropagation();
  console.log("btn clicked");
});
box.addEventListener("click", (e) => {
  console.log("box clicked");
});
