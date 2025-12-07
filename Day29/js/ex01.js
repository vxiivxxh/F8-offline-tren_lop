const BASE_URL = "http://localhost:3000";
// const addUser=async(data)=>{
// //Chuyển data -> json
// const dataJson= JSON.stringify(data);
// const response= await fetch(`${BASE_URL}/users`,{
//     method:"POST",
//     headers:{
//         "Content-Type": "application/json",
//     },
//     body: dataJson,
// })
// console.log(response);
// };

// addUser({
//     name:"Hoàng An",
//     email:"hoangan.web@gmail.com"
// });

// const updateUser = async (id, data) => {
//   const dataJson = JSON.stringify(data);
//   const response = await fetch(`${BASE_URL}/users/${id}`, {
//     method: "PATCH",
//     headers: {
//       "Content-Type": "aplication/json",
//     },
//     body: dataJson,
//   });
//   console.log(response);
// };
// updateUser(6, {
//   name: "An ok",
// });

const deleteUser = async (id) => {
  const response = fetch(`${BASE_URL}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "aplication/json",
    },
  });
  console.log(response);
};
deleteUser(6);
