
import style from "./card.module.scss";

import "./card.module.scss";
import { useRef,useEffect } from "react";

const Card = ({word, change, setChange,Counter,anime}) => {

    function onChan() {
        setChange(false);
    }
  
    function buttonClick(){
    Counter();
    onChan();
    }
const ref=useRef();

   let stlCont;

   if (anime==="right") {stlCont=`${style.container} ${style.animright}`}
     else if(anime==="left") {stlCont=`${style.container} ${style.animleft}`}
       else stlCont=`${style.container}`;
       
    useEffect(()=>{if (anime!=="none") ref.current.focus()},[])


    return (
        
        <div id={'card'} className={stlCont}>
        
            <div className={style.container__out}>
                <div className={style.word}>{word.english}</div>
                <div className={style.transcription}>{word.transcription}</div>


            </div>
            <div className={style.container__trans}>
                {change === true ? <input ref={ref} onClick={buttonClick} type ="button" value="Проверить" className={style.button}/> : <div className={style.rusword}>{word.russian}</div>}
            </div>

        </div> 
    );
}

export default Card;

