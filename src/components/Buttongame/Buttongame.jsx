import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleArrowRight,
    faCircleArrowLeft

} from '@fortawesome/free-solid-svg-icons';
import style from "./buttongame.module.scss";



const arrowright = <FontAwesomeIcon icon={faCircleArrowRight} />;
const arrowleft = <FontAwesomeIcon icon={faCircleArrowLeft} />;


export default function Buttongame(props) {


    const { setChange, arrow, ind, setIndex, lastIndex } = props;
    console.log(lastIndex);
    console.log(ind);

    const Clickright = () => {

        let count = ind === lastIndex ? 0 : ind + 1;


        // Симулируем задержку кода
        setTimeout(function () {
            setIndex(count);
        }, 1000);

    }

    const Clickleft = () => {

        let count = ind === 0 ? lastIndex : ind - 1;
        setTimeout(function () {
            setIndex(count);
        }, 1000);
    }

    const Change = () => {

        setChange(true);

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
            {console.log("Кнопка")}
            {arrow ?
                (< button id="btnR" className={style.button} onClick={UpdateR} >
                    {arrowright}
                </button >) : (< button id="btnL" className={style.button} onClick={UpdateL}> {arrowleft} </button >)

            }


        </div >


    );
}


