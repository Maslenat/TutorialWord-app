import style from "./table.module.scss";
import TableRow from "./TableRow";
import massiv from "../../words.json";
import Thead from "./Thead";
import { useState,useContext, useEffect } from "react";
import { wordContext } from "../Mycontext/Mycontext";



function Table(props) {
const [value, setValue] = useState({});
 const {words} = useContext(wordContext); 

 




    return (

        <table className={style.table}>
            <Thead  />
            <tbody>
                {words.map((word) => (<TableRow setValue={setValue} word={word} key={word.id} />))}
            </tbody>

        </table>


    );
}

export default Table;
