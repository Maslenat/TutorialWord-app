
import Button from "../Button/Button";
import style from "./table.module.scss";
import { useState } from "react";



function TableRow(props) {

    const { english, transcription, russian, tags,id } = props.word;
    const [edit, setEdit] = useState(true);
    const [state,setState]=useState({eng:english, tran:transcription, rus:russian, tags:tags,id:id});
    const {setValue}=props;
  
   
    let block = false;
    
    function handleChange(e) {
        
        const newState={...state}
        const name =e.target.name;
        const value=e.target.value;
        newState[name]=value;
       value===""? e.target.className=style.input_error:e.target.className=style.input;

        setState(newState);
    }
    const regExp  = /[а-яё]/i;

        function getInput () {
        const value={...state};
        
            if (regExp.test(value.rus)) {setValue(value); return true}
            else {alert("Введите перевод кириллицей"); return false};
    
   }
  
  
    for (let key in state) {
        
        if(state[key] === "")
        block =true;
      }


    return (<>
        {edit ? (<><tr>
        <td>{english}</td>
        <td>{transcription}</td>
        <td>{russian}</td>
        <td>{tags}</td>
        <td><Button isSave={edit} setEdit={setEdit} /></td></tr ></>) :
        (<><tr className={style.rowinput}>
            <td><div>{english}</div><input className={style.input}   type="text" name="eng"  value={state.eng} onChange={handleChange}/></td>
            <td><div>{transcription}</div><input className={style.input} type="text" name="tran" value={state.tran} onChange={handleChange} /></td>
            <td><div>{russian}</div><input className={style.input}  type="text" name="rus"  value={state.rus} onChange={handleChange} /></td>
            <td><div>{tags}</div><input className={style.input}  type="text" name="tags"  value={state.tags} onChange={handleChange} /></td>
            <td><Button getInput={getInput} block={block} isSave={edit} setEdit={setEdit} /></td></tr></>)}</>)
}





export default TableRow;
