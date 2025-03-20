import Form from "../../componentes/Form"



const Formulario = ({novoPost, listaPost, aoAtualizarPost}) => {

    


    return(

        <Form
        aoNovoPostCadastrado = {item => novoPost(item)}
        posts ={listaPost}
        aoNovoPostAtualizado={item => aoAtualizarPost(item)}
        />
    )
}



export default Formulario