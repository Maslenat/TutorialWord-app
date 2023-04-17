import style from "./table.module.scss";
import TableRow from "./TableRow";
import words from "../../words.json"
import Thead from "./Thead";
import { useState } from "react";

function Table() {
const [value, setValue]=useState({});
console.log(value);



    return (

        <table className={style.table}>
            <Thead />
            <tbody>
                {words.map((word) => (<TableRow setValue={setValue} word={word} key={word.id} />))}
            </tbody>

        </table>


    );
}

export default Table;
