//Đồng bộ
// alert("Xin chào anh em");
// console.log("Bla bla");

//Bất đồng bộ

// Giúp ctr chạy nhanh hơn
//Web Api
//Javascript engine vs runtime

//Xử lý bất đồng bộ => Biến nó thành các tác vụ bất đồng bộ
//Ví dụ:
//- Bấm button
//- Gọi dữ liệu từ server
//- Chờ server trả về
//- Hiện Thị kết quả lên trình duyệt

// const getUsers = (callback) => {
//   setTimeout(() => {
//     const users = ["User 1", "User 2", "User 3"];
//     //Giả sử:Lấy users mất thời gian
//     //callback()
//     callback(users);
//   }, 2000);
// };
// const getProduct = (callback) => {
//   setTimeout(() => {
//     const products = ["Product 1", "Product 2", "Product 3"];

//     callback(products);
//   }, 1000);
// };
// getUsers((users) => {
//   console.log(users);
//   getProduct((products) => {
//     console.log(products);
//   });
// });

//Promise
//- Object có sẵn của Js
//- Chứa dữ liệu có kết quả trong tương lai (thường áp đụng cho các tác vụ bất đồng bộ)
//- State:
//+ Pending: chờ (mặc định)
//+ fulfilled: Đã thực thi thành công
//+ rejected: Đã thực thi nhưng thất bại

//1. Khởi tạo Promise
const myPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    //resolve: Hàm dùng để chứa dữ liệu nếu thanhf công
    //reject: Hàm dùng để chứa dữ liệu nếu thất bại
    let check = false;
    if (check) {
      resolve("Thành Công");
    } else {
      reject("Lỗi rồi");
    }
  }, 1000);
});

//2. Truy cập kết quả Promise
//then: đọc dữ liệu của resolve
//catch: dùng để bắt lỗi(reject)
//Trong trường hợp nào thì đều phải có finally
// myPromise
//   .then((data) => {
//     console.log(data);
//   })

//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Xong");
//   });

//Promise chain: a().b().c()
// myPromise
//   .then((data) => {
//     console.log(data);
//     return "A";
//   })
//   .then((data) => {
//     console.log(data);
//     return "B";
//   })
//   .then((data) => {
//     console.log(data);
//   });

const myPromise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject("Error F8");
  }, 1000);
});
const myPromise3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("F9");
  }, 1000);
});
myPromise.then((data) => {});

