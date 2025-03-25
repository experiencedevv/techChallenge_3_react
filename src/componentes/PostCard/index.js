import styles from "./Post.module.css";
import { Link } from "react-router-dom";
import imagemCard from "../../img/dom-professor-otimizar tempo.jpeg";

const PostCard = ({ titulo, id, autor, aoDeletar }) => {
  function aoEvento() {
    aoDeletar({ id: id });
  }

  const isProfessorPage = window.location.pathname === "/post/professor";

  return (
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

      {isProfessorPage && (
        <Link to={`/post/formulario/${id}`}>
          <button className={styles.botaoLer}>Editar</button>
        </Link>
      )}

      {isProfessorPage && (
        <button onClick={aoEvento} className={`${styles.botaoLer} ${styles.deletar}`}>
          Deletar
        </button>
      )}
    </div>
  );
};

export default PostCard;
