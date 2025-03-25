import { Link } from "react-router-dom";
import styles from "./LinkPagina.module.css";

const LinkPagina = ({ to, children }) => {
  return (
    <Link to={to} className={styles.link}>
      <p>{children}</p>
    </Link>
  );
};

export default LinkPagina;
