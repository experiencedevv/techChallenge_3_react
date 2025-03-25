import BotaoForm from "../BotaoForm";
import { useState } from "react";
import CampoForm from "../CampoForm";
import { useParams } from "react-router-dom";
import styles from "./Form.module.css";
import axios from "axios";

const Form = ({ aoNovoPostCadastrado, posts, aoNovoPostAtualizado }) => {
  const parametro = useParams();

  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [autor, setAutor] = useState("");

  const aoSalvar = (evento) => {
    evento.preventDefault();
    aoNovoPostCadastrado({
      titulo: titulo,
      descricao: descricao,
      autor: autor
    });

    setTitulo("");
    setAutor("");
    setDescricao("");
  };

  function AoAtualizar(evento) {
    evento.preventDefault();

    aoNovoPostAtualizado({
      id: parametro.id,
      titulo: titulo,
      descricao: descricao,
      autor: autor
    });

    setTitulo("");
    setAutor("");
    setDescricao("");

    window.location.pathname = "/post/professor";
  }

  return (
    <form
      onSubmit={
        window.location.pathname !== "/post/formulario"
          ? AoAtualizar
          : aoSalvar
      }
      className={styles.form}
    >
      <label>Título</label>
      <CampoForm
        valor={titulo}
        tipo="text"
        obrigatorio={true}
        aoAlterado={(item) => setTitulo(item)}
        placeholder="Título"
      />

      <label>Descrição</label>
      {/* ALTERAÇÃO: Campo de descrição agora é um <textarea> */}
      <div className={styles.campo}>
        <textarea
          className={styles.textarea}
          placeholder="Descrição"
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          required
        />
      </div>

      <label>Autor</label>
      <CampoForm
        valor={autor}
        tipo="text"
        obrigatorio={true}
        aoAlterado={(item) => setAutor(item)}
        placeholder="Nome do Autor"
      />

      <BotaoForm>Enviar</BotaoForm>
    </form>
  );
};

export default Form;
