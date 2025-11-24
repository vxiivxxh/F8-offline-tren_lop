//EVENT
//fire-->listener(function)

//Cú pháp lắng nghe sự kiện
//element.on<ten-su-kien>=function( ) { Logic }
//Lưu ý: this
//Bất kỳ
const btn = document.querySelector(".btn");
let count = 0;
// btn.onclick = function (e) {
//   //   console.log("Ok chưa?");
//   count++;
//   btn.innerText = `Click me: ${count}`;
//   if (count === 5) {
//     btn.onclick = null;
//   }
// };

// btn.onmouseover = function () {
//   console.log("Over mouse");
// };

// btn.onclick = () => {
//   console.log("Click one");
// };
// btn.onclick = () => {
//   console.log("click two");
// };

//addEventListener(event-name, listener)
// btn.addEventListener("click", () => {
//   console.log("click me");
// });
// btn.addEventListener("click", () => {
//   console.log("click me 2");
// });

const handleClick = () => {
  count++;
  btn.innerText = `Click me:${count}`;
  if (count === 5) {
    btn.removeEventListener("click", handleClick);
  }
};
btn.addEventListener("click", handleClick);

//Danh sách các envent hay dùng
/*
- click
- dbclick
- mouseover
- mouseout
- mousemove
- mousedown
- mouseup
- keydown
- keyup
- submit
- change
- input
- focus
- blur
*/

const contentEL=document.querySelector("content")
SVGTextContentElement.addEventListener

const items = document.querySelectorAll("ul li");
items.forEach((item) => {
  item.addEventListener("click", () => {
    console.log(item);
  });
});
