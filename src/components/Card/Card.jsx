import { forwardRef } from "react";
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

