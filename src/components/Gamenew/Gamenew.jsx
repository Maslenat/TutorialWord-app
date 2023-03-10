import { useState } from "react";
import Card from "../Card/Card";
import massiv from "../../massiv.json";
import Buttongame from "../Buttongame/Buttongame";
import style from "./gamenew.module.scss";
import React from "react";

export default function Gameneww(word) {

    const [ind, setIndex] = useState(0);
    const [change, setChange] = useState(true);

    Gameneww.defaultProps = { word: massiv };

    const lastIndex = Number(word.length - 1);



    return (
        <div className={style.wrapper}>
            <Buttongame ind={ind} setIndex={setIndex} setChange={setChange} lastIndex={lastIndex} />
            <Card word={word[ind]} change={change} setChange={setChange} />
            <Buttongame arrow={'true'} ind={ind} setIndex={setIndex} setChange={setChange} lastIndex={lastIndex} />

        </div>
    )


}



