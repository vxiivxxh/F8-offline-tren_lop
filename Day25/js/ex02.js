//DOM Navigation: Chọn các phần tử khác từ một phần tử đã có
// - element.parentElement --> Chọn phần tử cha gần nhất
// - element.children --> Chọn phần tử con gần nhất (Danh sách).
// - element.nextElementSibling --> Chọn phần tử kế tiếp
// - element.previousElementSibling --> Chọn phần tử phía trước

// const btnList = document.querySelectorAll("button");
// btnList.forEach((btn) => {
//   btn.addEventListener("click", () => {
//     //console.log(btn.parentElement.parentElement.parentElement);
//     const boxEL = btn.parentElement.parentElement;
//     // console.log(boxEL.nextElementSibling);
//     console.log(boxEL.previousElementSibling);
//   });
// });

const items = document.querySelectorAll("ul li");
items.forEach((item) => {
  item.children[0].addEventListener("click", () => {
    if (item.children[1]) {
      item.children[1].classList.add("show");
    }
  });
});
