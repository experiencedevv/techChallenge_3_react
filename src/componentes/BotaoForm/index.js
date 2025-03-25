import styles from "./BotaoForm.module.css";

const BotaoForm = ({ children }) => {
  return (
    <button className={styles.button}>{children}</button>
  );
};

export default BotaoForm;
