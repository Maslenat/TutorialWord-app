import { useEffect,useRef } from "react";
import style from "./card.module.scss";

import "./card.module.scss";

export default function Card(props) {
    const { english, transcription, russian } = props.word;
    const { change, setChange,Counter } = props;

    const btnref=useRef();

    function onChan() {
        setChange(false);
       
    }
function buttonClick(){
    Counter();
    onChan();

}

    useEffect(() => {
        btnref.current.focus();
        let btnR = document.getElementById("btnR");
        let btnL = document.getElementById("btnL");
        btnR.addEventListener('click', () => { document.getElementById('card').className = style.animationR })
        btnL.addEventListener('click', () => { document.getElementById('card').className = style.animationL })

        return () => {
            btnR.removeEventListener('click', () => { document.getElementById('card').className = style.animationR })
            btnL.removeEventListener('click', () => { document.getElementById('card').className = style.animationL })
        }


    }, [])

   

    return (

        <div id={'card'} className={style.container}   >

            <div className={style.container__out}>
                <div className={style.word}>{english}</div>
                <div className={style.transcription}>{transcription}</div>


            </div>
            <div className={style.container__trans}>
                {change === true ? <input  ref={btnref} onClick={buttonClick} type ="button" value="Проверить" className={style.button}/> : <div className={style.rusword}>{russian}</div>}
            </div>

        </div> 
    );
}

