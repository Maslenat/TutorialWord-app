import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleArrowRight,
    faCircleArrowLeft

} from '@fortawesome/free-solid-svg-icons';
import style from "./buttongame.module.scss";
import { click } from '@testing-library/user-event/dist/click';


const arrowright = <FontAwesomeIcon icon={faCircleArrowRight} />;
const arrowleft = <FontAwesomeIcon icon={faCircleArrowLeft} />;


export default function Buttongame(props) {


    const { setChange, arrow, ind, setIndex, lastIndex } = props;
    console.log(lastIndex);
    console.log(ind);

    const Clickright = () => {

        let count = ind === lastIndex ? 0 : ind + 1;
        setIndex(count);
    }

    const Clickleft = () => {

        let count = ind === 0 ? lastIndex : ind - 1;

        setIndex(count);
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


        <div className={style.wrapper}>
            {arrow ?
                (< button className={style.button} onClick={UpdateR} >
                    {arrowright}
                </button >) : (< button className={style.button} onClick={UpdateL}> {arrowleft} </button >)

            }


        </div >


    );
}


