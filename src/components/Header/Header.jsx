import style from "./header.module.scss";
import logo from '../../img/Logo.svg';

import {

    NavLink
} from "react-router-dom";



const Header = () => (

    <header className={style.header} >
        {console.log("HEADER")}
        <div className={style.header__wrapper}>
            <NavLink to="/" className={style.logo}>
                <img src={logo} alt='logo' />
            </NavLink>
            <nav className={style.nav} >
                <NavLink to="/main" className={style.link}>
                    Main
                </NavLink>
                <NavLink to="/game" className={style.link}>
                    Game
                </NavLink>
            </nav>
        </div>


    </header >


)

export default Header;

