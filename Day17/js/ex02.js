//Chuỗi

let fullname = "Vũ Thành Vinh ";
//tenbienchuoi[chiso] --> Trả về ký tự
// console.log(fullname[0]);
// console.log(fullname[1]);
// console.log(fullname[2]);

//Lấy độ dài: tenbienchuoi.length
// console.log(fullname.length);

console.log(String.prototype);

//Các phương thức xử lý chuỗi
//1.charAt(index) --> Trả về ký tự theo index
// let str = "Học lập trình không khó";
// console.log(str.charAt(0));

//2. charCodeAt(index)-->Trả về mã ASCII của ký tự theo index( dùng cho những bài toán đặc thù như để người dùng nhập số đt thì ta chặn khoảng chữ từ bao nhiêu đến bao nhiêu)
// let str = "Học lập trình không khó";
// console.log(str.charCodeAt(0));

//3.index0f(sub_string)--> tìm chuỗi sub_string trong chuỗi cha và trả về index đầu tiên tìm đc, ngược lại sẽ trả về -1
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.indexOf("F8"));

//4.lastindex0f(sub_string)-->Giống index0f nhưng trả về giá trị cuối cùng tìm đc
// let str= "Học lập trình F8 không F8 khó";
// console.log(str.lastIndexOf("F8"));

//5. includes(sub_string) -->Tìm chuỗi con trong chuỗi cha -->Trả về true/ false
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.includes("F8"));

//6. slice(start, end)--> Cắt chuỗi từ start đến end-1
// let str = "Học lập trình F8 không F8 khó";
// // console.log(str.slice(1,5));
// // console.log(str.slice(1));
// console.log(str.slice(-5, -3));

//11. toLowerCase()-->Chuyển chuỗi thành chữ thường (có chữ thường sẽ có chữ Hoa)
// let str = "Học lập trình F8 không F8 khó";
// console.log(str.toLowerCase());

//12.trim() -->Loại bỏ khoảng trắng đầu và cuối chuỗi
// let str="            Học lập trình F8 không F8 khó";
// console.log(str);
// console.log(str.trim());

//13.trimStart()-->Loại bỏ khoảng trắng đầu chuỗi

//14.trimEnd()-->Loại bỏ khoảng trắng cuối chuỗi

//15. startsWith(sub_str)-->Kiểm tra chuỗi sub_string có nằm ở đầu chuỗi cha k?
// let pathname = "/admin/posts.html";
// console.log(pathname.startsWith("/admin"));

//16.endsWish(sub_str)

// let pathname = "/admin/posts.html";
// console.log(pathname.endsWith(".html"));

//Biểu thức chính quy (Regex)
let content = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem vero quisquam
      non repellat? 0834867892 Provident quae labore iusto quis totam, animi eos modi
      pariatur error, sunt doloribus quaerat placeat fuga enim doloremque
      deserunt adipisci quasi laudantium consequatur maxime suscipit quo!
      Provident sequi quo perferendis officia eveniet corrupti dolore. Earum
      inventore excepturi odio aperiam officiis, voluptatum dicta consectetur
      tempore beatae reprehenderit, error harum dignissimos enim eos quisquam
      nulla molestiae? +84312456797 Ipsum cupiditate voluptate iusto consequatur soluta,
      possimus sed voluptates autem quidem facere sit quae quod quo architecto
      unde! Asperiores nulla rem nobis blanditiis velit, numquam, vitae
      reiciendis adipisci accusantium eaque, laborum eveniet porro.`;

let pattern = /(0|\+84)\d{9}/g;
let results = content.match(pattern);
console.log(results);

// let email = "vinhvuthanh1111@gmail.com";
