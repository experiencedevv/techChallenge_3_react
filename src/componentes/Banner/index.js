import styles from "./Banner.module.css";
import imagemBanner from "../../img/Hero.png"
const Banner = () => {
  return(
      <body>
          <div className={styles.banner}>
              <img 
              src={imagemBanner}
              alt="Imagem logo learnPlus banner"/>
          </div>
      </body>
  )
}
export default Banner;