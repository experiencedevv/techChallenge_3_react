import { useParams } from "react-router-dom"
import imagemPost from "../../img/dom-professor-otimizar tempo.jpeg"
import { Link } from "react-router-dom"




const Post = ({listaPost}) => {
    const parametro = useParams()
    

    const post = listaPost.find((post)=>{
        return(post.id === parametro.id)
    })

    



    return(
        <body>
            <div>
                <img src={imagemPost}/>
            </div>

            <h2>
                {post.titulo}
            </h2>

            <p>
                {post.descricao}
            </p>
            <Link to={`/formulario/${post.id}`}>
                <button>Editar</button>
            </Link>

            





        </body>

    )
}

export default Post