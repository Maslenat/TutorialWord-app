import style from "./table.module.scss";
import TableRow from "./TableRow";
import words from "../../words.json"
import Thead from "./Thead";
import { useState,useContext } from "react";
import { wordContext } from "../Mycontext/Mycontext";

function Table() {
const [value, setValue] = useState({});
const {word,setWord} = useContext(wordContext);
console.log(word);
console.log (setWord);


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
