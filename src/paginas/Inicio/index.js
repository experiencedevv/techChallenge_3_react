import { useParams } from "react-router-dom"
import Banner from "../../componentes/Banner"
import PostCard from "../../componentes/PostCard"





const Inicio = ({listaPost}) => {

    

    return (
        <div>
            <Banner/>
            <h1>barra de pesquisa</h1>
            <ul>
                <li>
                    {listaPost.map((post)=> (
                        <PostCard  key={post.id} autor={post.autor} id={post.id} titulo={post.titulo} descricao={post.texto}/>))}             
                </li>

            </ul>
            

    
        </div>

    )
}


export default Inicio