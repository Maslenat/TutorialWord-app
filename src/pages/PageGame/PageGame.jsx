import { useState } from "react";
import Card from "../../components/Card/Card";
import massiv from "../../massiv.json";
import Buttongame from "../../components/Buttongame/Buttongame";
import style from "./style.module.scss";
import React from "react";


PageGame.defaultProps = {
    words: massiv,
    lastIndex: Number(massiv.length - 1)
};

function PageGame(props) {


    const [ind, setIndex] = useState(0);
    const [change, setChange] = useState(true);




    const { words } = props;

    const lastIndex = Number(words.length - 1);

    console.log("GAME NEWW- BUTTON-CARD")

    return (
        <div className={style.wrapper}  >

            <Buttongame ind={ind} setIndex={setIndex} setChange={setChange} lastIndex={lastIndex} />

            <Card word={words[ind]} change={change} setChange={setChange} key={ind} />
            <Buttongame arrow={'true'} ind={ind} setIndex={setIndex} setChange={setChange} lastIndex={lastIndex} />

        </div>
    )


}


export default PageGame;