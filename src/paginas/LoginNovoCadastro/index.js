import { Link } from "react-router-dom"
import CampoForm from "../../componentes/CampoForm"
import { useState } from "react"
import db  from "../../db.json"
import LinkPagina from "../../componentes/LinkPagina"



const Login = ({aoNovoLogin}) => {

    const [login, setLogin] = useState("")
    const [senha, setSenha] = useState("")

    const loginSenhaInvalida = ""

    const aoLogar= (evento) =>{
        evento.preventDefault()

        /*aoNovoLogin({
            login: login,
            senha: senha
        })*/

        const listaAcessos =  db.acessos
            
        const cadastro = listaAcessos.find((acesso) => {
            return( acesso.login == login & acesso.senha == senha)
        })

        if(cadastro !== undefined){
            window.location.pathname = "/"
        }
        // fazer caso nao possua cadastro


    }


    const aoCadastrar= (evento) =>{
        evento.preventDefault()

        aoNovoLogin({
            login: login,
            senha: senha
        })
        window.location.pathname = "/login"


    }






    return(
    <body>
        <div>
            <h1>{window.location.pathname === "/novoCadastro"? "Novo cadastro de professor" :"Login Professor"}</h1>
            <form onSubmit={window.location.pathname === "/novoCadastro"? aoCadastrar : aoLogar}>
                <CampoForm placeholder="Nome" aoAlterado={(item) =>setLogin(item)}/>
                <br></br>
                <CampoForm placeholder="Senha" aoAlterado={(item) =>setSenha(item)}/>
                <br></br>

                <button>{window.location.pathname === "/novoCadastro"? "Cadastrar" :"Entrar"}</button>
            </form>

            {window.location.pathname === "/login"?
                <LinkPagina to="/novoCadastro">Fazer meu cadastro</LinkPagina>
                :""}

            {window.location.pathname === "/login"?
                <LinkPagina to="/">Acessar como aluno</LinkPagina>
                :""}

            
        </div>
    </body>
)
}


export default Login