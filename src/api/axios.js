import axios from "axios";

const Instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: "",
    language: "ko-KR",
  },
});

export default Instance;
