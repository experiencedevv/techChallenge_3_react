import { BrowserRouter, Routes, Route } from "react-router-dom";
import Inicio from './paginas/Inicio';
import Formulario from "./paginas/Formulario";
import Post from "./paginas/Post";
import PaginaPadrao from "./componentes/PaginaPadrao";
import { useState } from "react";
import db  from "./db.json"
import axios from "axios"
import { useEffect } from "react";
import { v4 as uuidv4 } from 'uuid'
import Login from "./paginas/LoginNovoCadastro";

function App() {

  const [posts, setPost] = useState(db.posts)

  // get all
  useEffect(()=>{
    axios.get("http://localhost:3001/posts").then((response)=>{
        setPost(response.data)})

  })

  // API de criar um novo post
  function enviarPost(post){
    axios.post("http://localhost:3001/posts",{
        id: uuidv4(),
        titulo: post.titulo,
        descricao: post.descricao,
        autor: post.autor
    }).then((response)=>{console.log(`Inserido com sucesso`)})
  }

  // API de criar login e senha
  function enviarLogin(cadastro){
    axios.post("http://localhost:3001/acessos",{
        id: uuidv4(),
        login: cadastro.login,
        senha: cadastro.senha,
    }).then((response)=>{console.log(`Inserido com sucesso e login senha`)})
  }

  // API deletar post
  function deletarPost(teste){
    axios.delete(`http://localhost:3001/posts/${teste.id}`)
    .then(()=>{console.log("post deletado")})
  }

  // API Editar post
  function atualizarPost(post){
    console.log(post)
    axios.put(`http://localhost:3001/posts/${post.id}`,
    { id: post.id,
      titulo: post.titulo,
      descricao: post.descricao,
      autor: post.autor
    }).then((response) => console.log(response.data))
  }

  





  return (
    <BrowserRouter>
      <Routes>
        <Route path="/post" element={<PaginaPadrao/>}>
          <Route path="/post/aluno" element={<Inicio listaPost={posts} />} />
          <Route path="/post/professor" element={<Inicio listaPost={posts} aoClicar={item => deletarPost(item)}/>} />
          <Route path="/post/formulario" element={<Formulario listaPost={posts} novoPost={item => enviarPost(item)}  />} />
          <Route path="/post/formulario/:id" element={<Formulario listaPost={posts} aoAtualizarPost={item => atualizarPost(item)} />} />
          <Route path="/post/:id" element={<Post listaPost={posts}/>} />
        


        </Route>
        <Route path="/" element={<Login />}/>
        <Route path="/novoCadastro" element={<Login aoNovoLogin={item => enviarLogin(item)}/>}/>
        <Route path="*" element="Página não encontrada"/>
      </Routes>
    </BrowserRouter>
  );
}

export default App
