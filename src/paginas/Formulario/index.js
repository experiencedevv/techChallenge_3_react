import Form from "../../componentes/Form"



const Formulario = ({novoPost, listaPost, aoAtualizarPost}) => {

    


    return(

        <Form
        aoNovoPostCadastrado = {item => novoPost(item)}
        posts ={listaPost}
        atualizar={item => aoAtualizarPost(item)}
        />
    )
}



export default Formulario