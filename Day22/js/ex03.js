//DOM HTML: Các thao tác với 1 thẻ HTML
const contentEL = document.querySelector(".content");
//1.Lấy nội dung bên trong
// console.log(contentEL.innerHTML);

//innerText:bỏ khoảng trắng
// console.log(contentEL.innerText);

//textContent:Lấy nd giữ nguyên khoảng trắng
// console.log(contentEL.textContent);

//2. Lấy nội dung bên trong và chính nó
// console.log(contentEL.outerHTML);

//3. Cập nhật nội dung bên trong
// // contentEL.innerHTML=`<h2>Xin chào</h2>`;
// contentEL.innerText = `<h2>Xin chào</h2>`;
// contentEL.innerText = `<h2>Xin chào</h2>`;
// contentEL.outerHTML= `<h2>Xin chào</h2>`;

//4.Xoá phần tử HTML
// contentEL.remove();

// const btn = document.querySelector("button");
// let contentInnerHTML = contentEL.innerHTML;

// btn.addEventListener("click", (e) => {
//   if (contentEL.innerHTML) {
//     btn.innerText = "Hiện";
//     contentEL.innerHTML = "";
//   } else {
//     btn.innerText = "Ẩn";
//     contentEL.innerHTML = contentInnerHTML;
//   }
// });

//Attribute
// const imgEL = document.querySelector("img");
// console.log(imgEL.src);
// console.log(imgEL.title);
// console.log(imgEL.id);
// console.log(imgEL.alt);
// console.log(imgEL.width);
// console.log(imgEL.height);
// console.log(imgEL.className);
// imgEL.src =
//   "https://fastly.picsum.photos/id/704/536/354.jpg?hmac=k_PDx86tD-ILOtsUOKY9t5LAL5ycKiQ4ryVdlxhWoek";

const input = document.querySelector("input");
const btn = document.querySelector("button");
const imgEL = document.querySelector(".image");
btn.disabled = true;
input.addEventListener("input", () => {
  if (input.value) {
    btn.disabled = false;
  } else {
    btn.disabled = true;
  }
});
btn.addEventListener("click", () => {
  const img = document.createElement("img");
  img.src = input.value;
  img.width = 300;
  imgEL.innerHTML = "";
  imgEL.append(img);
  input.value = "";
});
