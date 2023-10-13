import axios from "axios";
export const fetchusers = async () => {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  console.log(response);
  return response.data;
};

export const Api = {
  fetchusers,
};
