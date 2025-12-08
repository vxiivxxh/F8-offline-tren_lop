const instance = axios.create({
  baseURL: "https://api.escuelajs.co/api/v1",
});
instance.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("access_token");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});
instance.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

//Tìm hiểu upload files
//Js Module(import, export)
//npm
//vite