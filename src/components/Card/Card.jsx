import style from "./card.module.scss";
import { useState } from "react";

export default function Card(props) {
    const { english, transcription, russian } = props.word;
    const [click, setClick] = useState(true);
    const stl = click ? style.container : style.container_none;

    function onClick() {
        setClick(!click);

    }

    return (

        <div className={stl}>
            <div className={style.container__out}>
                <div className={style.container__inner}>
                    <p className={style.word}>{english}</p>
                    <p className={style.transcription}>{transcription}</p>
                </div>
            </div>
            <div className={style.container__trans}>
                {click ? <button className={style.button} onClick={onClick}>Проверить</button> : <p className={style.rusword}>{russian}</p>}
            </div>
        </div> 
    );
}

