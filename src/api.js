import axios from "axios";

// local  onde está as minhas informações db
const api = axios.create({
    baseURL: "http://localhost:3001"
})

export default api


 export function deletarPost(teste){
    axios.delete(`http://localhost:3001/posts/${teste.id}`)
    .then(()=>{console.log("post deletado").setPost(null)})}