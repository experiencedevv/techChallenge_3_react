import styles from "./CampoForm.module.css";

const CampoForm = ({ tipo, lista, obrigatorio, aoAlterado, valor, placeholder }) => {
  
  const aoDigitado = (evento) => {
    aoAlterado(evento.target.value);
  };

  return (
    <div className={styles.campo}>
      <input 
        className={styles.input}
        placeholder={placeholder}
        value={valor}
        onChange={aoDigitado}
        required={obrigatorio}
        type={tipo}
      />
    </div>
  );
};

export default CampoForm;
