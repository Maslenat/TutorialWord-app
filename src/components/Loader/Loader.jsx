import style from "./style.module.scss";
import { React } from "react";
export default function Loader() {
    return(
        <div className={style.container}>
            <div className={style.cube}>
               <div className={`${style.face} ${style.front}`}>Loading</div>
               <div className={`${style.face} ${style.right}`}>Loading</div>
               <div className={`${style.face} ${style.back}`}>Loading</div>
               <div className={`${style.face} ${style.left}`}>Loading</div>
               <div className={`${style.face} ${style.top}`}>Loading</div>
               <div className={`${style.face} ${style.bottom}`}>Loading</div>
            </div>
        </div>

    )


}