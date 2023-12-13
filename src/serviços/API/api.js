import axios from "axios";

const estoca_api = axios.create({
    baseURL: "https://estoca-aqui-api-git-main-neemiasvieira.vercel.app/",
    timeout: 10000,
})

export default estoca_api;