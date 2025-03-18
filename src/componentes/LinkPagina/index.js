import { Link } from "react-router-dom"


const LinkPagina = ({to, children}) => {
    return(
        <Link to={to}>
            <p>{children}</p>
        </Link>
    )
}


export default LinkPagina