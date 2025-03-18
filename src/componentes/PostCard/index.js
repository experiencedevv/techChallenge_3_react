import  styles from "./Post.module.css"
import { Link } from "react-router-dom"
import imagemCard from "../../img/dom-professor-otimizar tempo.jpeg"



const PostCard = ({titulo, id, autor}) => {



    return(
        
        

            <div className={styles.post}>
        <Link to={`/post/${id}`}>
                <img 
                    className={styles.capa}
                    src={imagemCard}
                    alt="Imagem da capa do post"
                />

                <h2 className={styles.titulo}>{titulo}</h2>
                <h6>{autor}</h6>
                <button className={styles.botaoLer}>Ler</button>
        </Link>
                <button className={styles.botaoLer}>Editar</button>
                <button className={styles.botaoLer}>Deletar</button>
            </div>
        
        
        

    )

}



export default PostCard