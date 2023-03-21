import { useEffect } from "react";
import style from "./card.module.scss";

import "./card.module.scss";

export default function Card(props) {
    const { english, transcription, russian } = props.word;
    const { change, setChange } = props;



    function onChan() {
        setChange(false);
    }


    useEffect(() => {
        let btnR = document.getElementById("btnR");
        console.log(btnR);
        let btnL = document.getElementById("btnL");
        btnR.addEventListener('click', () => { document.getElementById('card').className = style.animationR })
        btnL.addEventListener('click', () => { document.getElementById('card').className = style.animationL })

        return () => {
            btnR.removeEventListener('click', () => { document.getElementById('card').className = style.animationR })
            btnL.removeEventListener('click', () => { document.getElementById('card').className = style.animationL })
        }


    }, [])

    console.log("рендер карты");

    return (

        <div id={'card'} className={style.container}   >

            <div className={style.container__out}>
                <div className={style.word}>{english}</div>
                <div className={style.transcription}>{transcription}</div>


            </div>
            <div className={style.container__trans}>
                {change === true ? <button className={style.button} onClick={onChan}>Проверить</button> : <div className={style.rusword}>{russian}</div>}
            </div>

        </div> 
    );
}

