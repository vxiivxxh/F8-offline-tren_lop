const BASE_URL = ` http://localhost:3000`;
// fetch(`${BASE_URL}/users`)
//   .then((res) => {
//     return res.json();
//   })
//   .then((data) => {
//     console.log(data);
//   });
const render = (data) => {
  const userListEL = document.querySelector("");
};
const getUsers = async () => {
  try {
    const res = await fetch(`${BASE_URL}/users`);
    if (!res.ok) {
      throw new Error("Failed to fetch");
    }
    const data = await res.json();
    console.log(data);
  } catch (err) {
    console.log(err.message);
  }
};
getUsers();
