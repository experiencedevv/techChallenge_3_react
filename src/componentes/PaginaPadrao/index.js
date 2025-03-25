import { Outlet } from "react-router-dom";
import Menu from "../Menu";
import styles from "./PaginaPadrao.module.css";

const PaginaPadrao = () => {
  return (
    <div className={styles.paginaPadrao}>
      <Menu />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default PaginaPadrao;
