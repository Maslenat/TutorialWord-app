import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPencil,
    faCheck,
    faTrash,
    faXmark
} from '@fortawesome/free-solid-svg-icons';
import style from "./button.module.scss";


const edit = <FontAwesomeIcon icon={faPencil} />;
const save = <FontAwesomeIcon icon={faCheck} />;
const del = <FontAwesomeIcon icon={faTrash} />;
const cancel = <FontAwesomeIcon icon={faXmark} />;

function Button({ isSave, setEdit,block,getInput }) {

    function saveInput() {
        if (getInput()) setEdit(!isSave);
        
    }
    function edt() {
        
        setEdit(!isSave);
    }

    return (

        <div className={style.wrapper}>
            {isSave ?
                (<>< button className={style.button} onClick={edt}>
                    {edit}
                </button >
                    < button className={style.button}>
                        {del}
                    </button >
                </>) : (<>< button className={style.button} disabled={block} onClick={saveInput} >
                    {save}
                </button >
                    < button className={style.button} disabled={block} onClick={edt}>
                        {cancel}
                    </button ></>)


            }


        </div >


    );
}

export default Button;
