import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: "4bab3b7051f000ea1f14a039161e857d",
        language: "ko-KR",
    }
})

export default instance;