import axios from "axios";

// local  onde está as minhas informações db
const api = axios.create({
    baseURL: "http://localhost:3001"
})

export default api