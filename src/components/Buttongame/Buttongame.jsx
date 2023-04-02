/* import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleArrowRight,
    faCircleArrowLeft

} from '@fortawesome/free-solid-svg-icons'; */
import style from "./buttongame.module.scss";

import arrowR from "../../img/arrowR.svg";
import arrowL from "../../img/arrowL.svg";
/* 
const arrowright = <FontAwesomeIcon icon={faCircleArrowRight} />;
const arrowleft = <FontAwesomeIcon icon={faCircleArrowLeft} />; */


export default function Buttongame(props) {


    const { setChange, arrow, ind, setIndex, lastIndex } = props;


    const Clickright = () => {

        let count = ind === lastIndex ? 0 : ind + 1;


        //  задержкa кода
        setTimeout(function () {
            setIndex(count);
        }, 600);

    }

    const Clickleft = () => {

        let count = ind === 0 ? lastIndex : ind - 1;
        setTimeout(function () {
            setIndex(count);
        }, 600);
    }

    const Change = () => {
        setTimeout(function () {
            setChange(true);
        }, 600);


    }
    function UpdateR() {
        Change();
        Clickright();
    }
    function UpdateL() {
        Change();
        Clickleft();
    }


    return (


        <div className={style.wrapper} >

            {arrow ?
                (< button id="btnR" className={style.button} onClick={UpdateR} >
                    <img src={arrowR} alt="arrowright" />
                </button >) : (< button id="btnL" className={style.button} onClick={UpdateL}> <img src={arrowL} alt="arrowleft" /> </button >)

            }


        </div >


    );
}


