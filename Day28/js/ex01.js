//try... catch
// Chỉ Bắt lỗi biên dịch
//TH1 : chạy try khôngg có lỗi thì chuyển xuống finally
//Th2: chạy try có lỗi thì chuyển xuống catch rồi chuyển xuống finally
// try {
//   //   abc(); //--> catch
//   //   sayHi();
//   let a = 1;
//   if (a <= 10) {
//     const err = new Error("Không thoả mãn điều kiện");
//     throw err;
//   }
// } catch (error) {
//   console.log(error);
// }finally{
//     console.log("Kết thúc");

// }
// //abc();
// console.log("ok");

//async/await
//- async function: Hàm này sẽ bọc 1 promise(promise wrapper)(tương đương với promise resolve)
// const doSomething= async()=>{
//     return "ABC";
// };
// console.log(doSomething());

//- await: Đợi promise resolve(Mỗi một lần await là 1 lần then )
//Cú pháp: await promise
// const myPromise = new Promise((resolve,reject) => {
//   setTimeout(() => {
//     reject("Error");
//     // resolve("Result");
//   }, 2000);
// });
// const myPromise2 = new Promise((resolve) => {
//   setTimeout(() => {
//     resolve("Result2");
//   }, 1000);
// });
// const doSomething = async () => {
//   const data1 = await myPromise;
//   console.log(data1);
//   const data2 = await myPromise2;
//   console.log(data2);
// };

// doSomething();

// const getUsers = (userID) => {
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       const users = [
//         { id: 1, name: "User 1", salary: 1000 },
//         { id: 2, name: "User 2", salary: 2000 },
//         { id: 3, name: "User 3", salary: 3000 },
//       ];
//       const user = users.find((user) => user.id === userID);
//       resolve(user);
//     }, Math.random() * 2000);
//   });
// };
// const ids = [1, 2, 3];

// const getSalary = async () => {
//   let total = 0;
//   for (let i = 0; i < ids.length; i++) {
//     const id = ids[i];
//     const user = await getUsers(id);
//     total += user.salary;
//   }
//   console.log(total);
// };
// getSalary();

// (async () => {
//   let total = 0;
//   for (let i = 0; i < ids.length; i++) {
//     const id = ids[i];
//     const user = await getUsers(id);
//     total += user.salary;
//   }
//   console.log(total);
// })();

const myPromise = new Promise((resolve) => {
  resolve({
    content: new Promise((resolve) => {
      resolve("Hello anh em");
    }),
  });
});
const myPromise2 = new Promise((resolve) => {
  resolve(new Promise((resolve) => resolve("F8")));
});
const myPromise3 = Promise.reject("Error");
const doSomething = async () => {
  //   const data = await myPromise;
  //   const result = await data.content;
  //   console.log(result);
  //   const data = await myPromise2;
  //   console.log(data);
  try {
    return await myPromise3;
  } catch (error) {
    // console.log(error);
    // throw error;
    return Promise.reject(error);
  }
};
doSomething()
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log(error);
  });

//await nhận async gần nhất
const getUsers = (userID) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const users = [
        { id: 1, name: "User 1", salary: 1000 },
        { id: 2, name: "User 2", salary: 2000 },
        { id: 3, name: "User 3", salary: 3000 },
      ];
      const user = users.find((user) => user.id === userID);
      resolve(user);
    }, Math.random() * 2000);
  });
};
const ids = [1, 2, 3];

const getSalary = () => {
//   let total = 0;
//   ids.forEach(async (id) => {
//     const user = await getUsers(id);
//     total += user.salary;
//   });
// console.log(total);

  
  
};

getSalary();
//Yêu cầu: Tính tổng (Không dùng for, for of, for in )
