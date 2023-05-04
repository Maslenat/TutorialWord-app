import Button from "../Button/Button";
import style from "./table.module.scss";
import {   useEffect, useState } from "react";
import { useContext } from 'react'; 
import { wordContext } from "../Mycontext/Mycontext";
import {changeWord, isEmpty,checkValid} from "../../js/toolsforword";
import { updateWords } from "../../Services/POST";

function TableRow(props) {
    const {words, setWords}=useContext(wordContext);
    const { english, transcription , russian, tags, id } = props.word;
    const [edit, setEdit] = useState(true);
    const [state,setState]=useState();
    const [active, setActive]=useState(false);
    const inputword={ english:english, transcription:transcription, russian:russian, tags:tags, id:id };
    const [error, setError]=useState({english:"",russian:""});
    
    useEffect(()=>{setState(inputword)},[]);


    function handleChange(e) {
        
      const newState={...state}
      const name =e.target.name;
      const value=e.target.value;
      newState[name]=value;

      if (value===""){
        e.target.className=style.input_error;
        setActive(true)} else { 
           e.target.className=style.input;
           setActive(false);
           }

      setState(newState);
    }

    function noEdit() {
     setState(inputword);
        }    



 
  
function saveWord  () {
  const word={...state}
 /*  let newwords=[...words]; */
  const error=checkValid(word);
      
  if ( !isEmpty(error) ) {
    setError(error); return false;
    }else{
      updateWords(word); 
       return true;
    }
}

   



    return (<>
        {edit ? (<><tr>
        <td>{english}</td>
        <td>{transcription}</td>
        <td>{russian}</td>
        <td>{tags}</td>
        <td><Button isSave={edit} setEdit={setEdit}  id={id} /></td></tr ></>) :
        (<><tr className={style.rowinput}>
            <td><div>{english}</div><input className={style.input}  type="text" name="english"  value={state.english} onChange={handleChange}/><div className={style.error}>{error['english']}</div>
           </td>
            <td><div>{transcription}</div><input className={style.input} type="text" name="transcription"  value={state.transcription} onChange={handleChange} /></td>
            <td><div>{russian}</div><input className={style.input}  type="text" name="russian"  value={state.russian} onChange={handleChange} /><div className={style.error}>{error['russian']}</div></td>
            <td><div>{tags}</div><input className={style.input}  type="text" name="tags"  value={state.tags} onChange={handleChange} /></td>
            <td><Button  saveWord={saveWord}  active={active} isSave={edit} setEdit={setEdit} noEdit={noEdit} setState={setState} id={id} setError={setError} /></td></tr></>)}</>)
}






export default TableRow;
