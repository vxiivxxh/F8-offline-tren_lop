const inputEL = document.querySelector("input");
const btn = document.querySelector("button");
const previewEL = document.querySelector(".preview img");
let previewURL;
inputEL.addEventListener("change", (e) => {
  if (previewURL) {
    URL.revokeObjectURL(previewURL); //Hàm thu hồi để tránh rò rỉ bộ nhớ
  }
  const previewURL = URL.createObjectURL(e.target.files[0]);
  previewEL.src = previewURL;
});

btn.addEventListener("click", async () => {
  const file = inputEL.files[0];
  const formData = new FormData();
  formData.append("file", file);
  btn.innerText = "Uploading....";
  btn.disabled = true;
  const response = await fetch(`https://api.escuelajs.co/api/v1/files/upload`, {
    method: "POST",
    body: formData,
  });
  const data = await response.json();
  previewEL.src = data.location;
  btn.innerText = "Upload";
  btn.disabled = false;
});

//Blob URL: Mã hoá nội dung (text, ảnh, video,...) thành dạng nhị phân (Binary) --> Cung cấp URL để truy cập
//Blob sẽ bị mất khi tắt tab, reload,...

//Upload file
//Make HTTP Request (Form Data) -->Binary --> Server --> URL
