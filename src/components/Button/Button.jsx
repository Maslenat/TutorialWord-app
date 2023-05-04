import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faPencil,
    faCheck,
    faTrash,
    faXmark
} from '@fortawesome/free-solid-svg-icons';
import style from "./button.module.scss";
import { wordContext } from "../Mycontext/Mycontext";
import { useContext, useEffect } from 'react'; 
import { delWords } from '../../Services/POST';


const edit = <FontAwesomeIcon icon={faPencil} />;
const save = <FontAwesomeIcon icon={faCheck} />;
const del = <FontAwesomeIcon icon={faTrash} />;
const cancel = <FontAwesomeIcon icon={faXmark} />;

export default function Button({ isSave, setEdit, active, saveWord, noEdit, id, setError}) {
 /*  const {words,setWords}=useContext(wordContext); */

  function delWordServices( ) {
    let quest  = window.confirm("Удалить слово?");
      
    if(quest){
      delWords(id);
      /* const newwords=[...words];
      const index = newwords.findIndex(n => n.id === id);
        if ( index !== -1 ) {                
          newwords.splice(index, 1);
        }
      setWords(newwords);  */
      window.location.reload();
    }
    
}  
  
  function noEdite() {
    noEdit();
    setEdit(!isSave);
    setError({});
  }


  function edt() {
    setEdit(!isSave);
}
function changeWordServices() {
const edit= saveWord();
  if(edit){
    setEdit(!isSave); alert("Изменения успешно сохранены!")
    window.location.reload();
   }
   
}


  
  return (
    <div className={style.wrapper}>
            {isSave ?
                (<>< button className={style.button} onClick={edt}>
                    {edit}
                </button >
                    < button className={style.button} onClick={delWordServices}>
                        {del}
                    </button >
                </>) : (<>< button className={style.button} disabled={active} onClick={changeWordServices} >
                    {save}
                </button >
                    < button className={style.button}  onClick={noEdite}>
                        {cancel}
                    </button ></>)
            }
    </div >)
}

