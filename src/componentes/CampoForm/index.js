

const  CampoForm = ({tipo, lista, obrigatorio, aoAlterado, valor, placeholder})=>{

    const aoDigitado = (evento) =>{
        aoAlterado(evento.target.value)
    }

    

    return(
        <div>
            <input   placeholder={placeholder} value={valor} onChange={aoDigitado} required={obrigatorio} type={tipo}></input>

        </div>
    )
}


export default CampoForm