import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});

export const onRequestPost = async (url: string) => {
  try {
    return await instance.get(url);
  } catch (error: any) {
    console.log(error);
    throw error.data;
  }
};
