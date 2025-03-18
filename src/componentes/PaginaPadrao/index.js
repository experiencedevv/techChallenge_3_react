import { Outlet } from "react-router-dom"
import Menu from "../Menu"



const PaginaPadrao = () => {
    return(
        <body>

            <Menu/>

            <Outlet/>




        </body>

    )
}


export default PaginaPadrao