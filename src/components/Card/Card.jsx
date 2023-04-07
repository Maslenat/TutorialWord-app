import { useEffect,forwardRef } from "react";
import style from "./card.module.scss";

import "./card.module.scss";

const Card = forwardRef((props, ref) => {

    const { english, transcription, russian } = props.word;
    const { change, setChange,Counter } = props;

  


    function onChan() {
        setChange(false);
      
       
    }
function buttonClick(){
    Counter();
    onChan();

}

    useEffect(() => {
       
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
                {change === true ? <input  ref={ref} onClick={buttonClick} type ="button" value="Проверить" className={style.button}/> : <div className={style.rusword}>{russian}</div>}
            </div>

        </div> 
    );
});
export default Card;

