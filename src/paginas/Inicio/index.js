import Banner from "../../componentes/Banner"
import PostCard from "../../componentes/PostCard"
import db from "../../db.json"
import { useState } from "react"





const Inicio = ({listaPost, aoClicar}) => {

    const [buscar,setBuscar] = useState("")

    const buscarLowerCase = buscar.toLowerCase()

    const postsFiltrados = db.posts.filter((post) => 
    post.titulo.toLowerCase().includes(buscarLowerCase) || 
    post.descricao.toLowerCase().includes(buscarLowerCase)
    )
    

    return (
        <div>
            <Banner/>

            <input 
            type="search" 
            value={buscar} 
            onChange={(evento) => setBuscar(evento.target.value)
            }></input>

            <ul>
                <li>
                    {postsFiltrados.map((post)=> (
                        <PostCard  aoDeletar={item =>aoClicar(item)} key={post.id} autor={post.autor} id={post.id} titulo={post.titulo} descricao={post.texto}/>))}             
                </li>

            </ul>
            

    
        </div>

    )
}


export default Inicio