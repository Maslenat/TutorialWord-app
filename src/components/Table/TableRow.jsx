import { text } from "@fortawesome/fontawesome-svg-core";
import Button from "../Button/Button";
import style from "./table.module.scss";
import { useState } from "react";


function TableRow(props) {

    const { english, transcription, russian, tags } = props.word;
    const [edit, setEdit] = useState(true);




    return (<>
        {edit ? (<><tr>
        <td>{english}</td>
        <td>{transcription}</td>
        <td>{russian}</td>
        <td>{tags}</td>
        <td><Button isSave={edit} setEdit={setEdit} /></td></tr ></>) :
        (<><tr className={style.rowinput}>
            <td><div>{english}</div><input type={text} defaultValue={english} /></td>
            <td><div>{transcription}</div><input type={text} defaultValue={transcription} /></td>
            <td><div>{russian}</div><input type={text} defaultValue={russian} /></td>
            <td><div>{tags}</div><input type={text} defaultValue={tags} /></td>
            <td><Button isSave={edit} setEdit={setEdit} /></td></tr></>)}</>)
}





export default TableRow;
