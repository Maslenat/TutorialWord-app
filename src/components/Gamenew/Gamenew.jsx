import { useState } from "react";
import Card from "../Card/Card";
import massiv from "../../massiv.json"
import Buttongame from "../Buttongame/Buttongame";
import style from "./gamenew.module.scss";


export default function Gameneww(props) {
    const { words } = props;


    const massivword = words === undefined ? [...massiv] : [...words];


    const [ind, setIndex] = useState(0);

    const [change, setChange] = useState(true);
    const lastIndex = Number(massivword.length - 1);
    console.log(lastIndex);
    console.log(ind);
    console.log('renderG');

    return (
        <div className={style.wrapper}>
            <Buttongame ind={ind} setIndex={setIndex} setChange={setChange} lastIndex={lastIndex} />

            <Card word={massivword[ind]} change={change} setChange={setChange} />
            <Buttongame arrow={'true'} ind={ind} setIndex={setIndex} setChange={setChange} lastIndex={lastIndex} />

        </div>
    )


}



