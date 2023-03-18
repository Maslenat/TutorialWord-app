import { useState } from "react";
import Card from "../Card/Card";
import massiv from "../../massiv.json";
import Buttongame from "../Buttongame/Buttongame";
import style from "./gamenew.module.scss";
import React from "react";


Gameneww.defaultProps = {
    words: massiv,
    lastIndex: Number(massiv.length - 1)
};

function Gameneww(props) {


    const [ind, setIndex] = useState(0);
    const [change, setChange] = useState(true);




    const { words } = props;

    const lastIndex = Number(words.length - 1);



    return (
        <div className={style.wrapper}  >

            <Buttongame ind={ind} setIndex={setIndex} setChange={setChange} lastIndex={lastIndex} />

            <Card word={words[ind]} change={change} setChange={setChange} key={ind} />
            <Buttongame arrow={'true'} ind={ind} setIndex={setIndex} setChange={setChange} lastIndex={lastIndex} />

        </div>
    )


}


export default Gameneww;