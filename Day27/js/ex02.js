//refactor code
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
const totalPromise = new Promise((resolve) => {
  let total = 0;
  let count = 0;
  for (let i = 0; i < ids.length; i++) {
    getUsers(ids[i]).then((data) => {
      total += data.salary;
      count++;
      if (count === ids.length) {
        resolve(total);
      }
    });
  }
});
totalPromise.then((total) => {
  console.log(total);
});
//Promise.all(): Nhận vào một mảng chứa các promise-> Trả về 1 kết quả khi các promise thực thi xong hết
// const promiseArr = ids.map((id) => getUsers(id));
// Promise.all(promiseArr).then((data) => {
//   console.log(data);
// });

//Promise.race(): Trả về kết quả của promise thực thi nhanh nhất
Promise.race(promiseArr).then((data) => {
  console.log(data);
});
