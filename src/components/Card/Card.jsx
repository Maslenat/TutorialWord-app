import style from "./card.module.scss";
import { useState } from "react";

export default function Card() {
    const [click, setClick] = useState(true);
    function onClick() {
        setClick(!click);
    }
    return (
        <div className={style.container}>
            <div className={style.container__out}>
                <div className={style.container__inner}>
                    <p className={style.word}>Apple</p>
                    <p className={style.transcription}>[ ˈæpl ]</p>
                </div>
            </div>
            <div className={style.container__trans}>
                {click ? <button className={style.button} onClick={onClick}>Проверить</button> : <p className={style.rusword}>Яблоко</p>}
            </div>
        </div>
    );
}

