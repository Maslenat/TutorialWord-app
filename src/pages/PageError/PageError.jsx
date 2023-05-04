
import style from "./style.module.scss";
import error from '../../img/404.svg';




function PageError () {
    return(
    <div className={style.wrapper}>

        <img src={error} alt="" />
        <p>страница не найдена </p>


    </div>
);
    }
export default PageError;