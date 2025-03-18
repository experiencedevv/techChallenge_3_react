import BotaoForm from "../BotaoForm"
import { useState } from "react"
import CampoForm from "../CampoForm"
import { useParams } from "react-router-dom"
import axios from "axios"




const Form = ({aoNovoPostCadastrado, posts, atualizar}) =>{



    // configuracao da pagina de ediçao
    const parametro = useParams()



    const [titulo, setTitulo] = useState("")
    const [descricao, setDescricao] = useState("")
    const [autor, setAutor] = useState("")

    const aoSalvar = (evento) =>{
        evento.preventDefault()
        aoNovoPostCadastrado({
            titulo: titulo,
            descricao: descricao,
            autor: autor
        })



        setTitulo(" ")
        setAutor(" ")
        setDescricao(" ")
        


    }

    /*const aoAtualizar = (evento) =>{
        evento.preventDefault()
        atualizar({
            id: 1,
            titulo: titulo,
            descricao: descricao,
            autor: autor
        })

        setTitulo(" ")
        setAutor(" ")
        setDescricao(" ")
        


    }*/





    return(
        <form onSubmit={aoSalvar}>
            <label> Titulo</label>
            <CampoForm 
                valor={titulo}
                tipo="text" 
                obrigatorio={true}
                aoAlterado={item => setTitulo(item)}
                placeholder ="Título"
            />

            <label>Descrição</label>
            <CampoForm 
                valor={descricao}
                tipo="text" 
                obrigatorio={true}
                aoAlterado={item => setDescricao(item)}
                placeholder ="Descrição"
            />

            <label>Autor</label>
            <CampoForm 
                valor={autor}
                tipo="text" 
                obrigatorio={true} 
                aoAlterado={item => setAutor(item)}
                placeholder ="Nome do Autor"
            />

            <BotaoForm>
                {"Enviar"}
            </BotaoForm>

            

        </form>
    )
}


export default Form