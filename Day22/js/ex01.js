//DOM = Document Object Model
// Element Node
//Attribute Node
//Text Node
console.dir(document);

//Truy cập vào element node
//1. document.getElementById(id) đọc từ trên xuống và chỉ lấy cái đầu tiên
// const h1 = document.getElementById("title");
// console.log(h1);

//2.document.getElementsByClassName(ten-class)
// const boxList = document.getElementsByClassName("box");
// console.log(boxList);
// boxList[0].innerText="Ok";

//3.document.getElementsByTagName(ten-class)
// const boxList=document.getElementsByTagName("div");
// console.log(boxList);
// boxList[1].innerText="Ahihi";

//4.document.querySelector(css-selector)
// const h1 = document.querySelector("#title");
// console.log(h1);

// const box = document.querySelector(".box:nth-of-type(2)");
// console.log(box);

//5.document.querySelectorAll(css-selector)
//  const boxList=document.querySelectorAll(".box");
//  console.log(boxList);

//Cách 1
// const items=document.querySelectorAll(".box2 .content ul li");
// console.log(items);

//Cách 2
const box2 = document.querySelector(".box2");
const content = box2.querySelector(".content");
const items = content.querySelectorAll("ul li");
console.log(items);

//Tạo element node:
