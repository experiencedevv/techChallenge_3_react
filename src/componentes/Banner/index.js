import imagemBanner from "../../img/Horizontal Image.png"
import styles from "./Banner.module.css"

const Banner = () => {
    return(
        <body>

            <div>
                <img 
                src={imagemBanner}
                alt="Imagem logo learnPlus banner"/>

                <h1>LearnPlus</h1>

                <h6>Facilitando o compartilhamento de conhecimento entre educadores e estudantes.</h6>
            </div>




        </body>
    )
}

export default Banner