import style from "./style.module.scss";
import Thead from "../Table/Thead";
import { useState } from "react";
import Buttonadd from "../Button/Buttonadd";
import { isEmpty,checkValid} from "../../js/toolsforword";
import { useContext } from 'react'; 
import { wordContext } from "../Mycontext/Mycontext";
import { addPostWords } from "../../Services/POST";

export default function Addword() {
  const [ input, setInput] = useState({english:"", transcription:"", russian:"", tags:"",id:""});
  const {words,setWords}=useContext(wordContext);
  const [error, setError]=useState({english:"",russian:""});

  function handleChange(e) {
        
    const newinput={...input}
    const name =e.target.name;
    const value=e.target.value;
    newinput[name]=value ;
    setInput(newinput);
}
 function addWord(){
  const newinput={...input};
  for (let key in newinput){newinput[key]=String(newinput[key]).toLowerCase().trim();
    }/* 
  const arr=Array.from(words);
  let LastIndexWords =arr.length-1;
  let newId=+words[LastIndexWords].id+1;
  newinput["id"]=String(newId); */
  const emptyInput={english:"", transcription:"", russian:"", tags:"",id:""};
  const error=checkValid(newinput);

  if ( !isEmpty(error) ) {
    setError(error); 
    }else{
      
      addPostWords(newinput);
      setInput(emptyInput);
      setError({});
      console.log(alert("слово  добавлено"));
      window.location.reload();
    }
  
    } 
 
 

    return (
      <table className={style.table}>
        <Thead  />
          <tbody>
          <tr>
        <td><input className={style.input} required  type="text" name="english"  value={input.english} onChange={handleChange} /><div className={style.error}>{error['english']}</div></td>
        <td><input className={style.input}   type="text" name="transcription"  value={input.transcription} onChange={handleChange} /><div className={style.error}>{error['transcription']}</div></td>
        <td><input className={style.input} required  type="text" name="russian"  value={input.russian} onChange={handleChange} /><div className={style.error}>{error['russian']}</div></td>
        <td><input className={style.input}   type="text" name="tags"  value={input.tags} onChange={handleChange}/><div className={style.error}>{error['tags']}</div></td>
        <td><Buttonadd addWord={addWord}/></td>
        </tr >
          </tbody>
      </table>
        
    )
}

