import { Link } from "react-router-dom"
import logoMenu from "../../img/Abstract.png"
import iconeUser from "../../img/User.png"
import styles from "./Menu.module.css"

const Menu = () =>{
    return(
        <header>
            <div className={styles.nomeclasse}>
                <img 
                src={logoMenu}
                alt="logo LeanPlus"/>

                <h1>LearnPlus</h1>
            </div>
            <div>
                <ul>
                    <li >
                        Home
                    </li>
                    <li>
                        <Link to={"/"}>
                       <img 
                       src={iconeUser}
                       alt="Icone de usuário menu"/> Sair
                       </Link>
                    </li>
                </ul>

            </div>
        </header>

    )
}



export default Menu