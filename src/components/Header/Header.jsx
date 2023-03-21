import style from "./header.module.scss";
import logo from '../../img/Logo.svg';

import {

    Link
} from "react-router-dom";



const Header = () => (

    <header className={style.header} >
        {console.log("HEADER")}
        <div className={style.header__wrapper}>
            <Link to="/main" className={style.logo}>
                <img src={logo} alt='logo' />
            </Link>
            <nav className={style.nav} >
                <Link to="/main" className={style.link}>
                    Main
                </Link>
                <Link to="/game" className={style.link}>
                    Game
                </Link>
            </nav>
        </div>


    </header >


)

export default Header;

