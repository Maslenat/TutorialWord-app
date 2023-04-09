import { useState } from "react";
import Card from "../../components/Card/Card";
import massiv from "../../massiv.json";
import Buttongame from "../../components/Buttongame/Buttongame";
import style from "./style.module.scss";
import React from "react";



Game.defaultProps = {
    words: massiv,
    lastIndex: Number(massiv.length - 1)
};

function Game(props) {

    const {words}=props;
    const [ind, setIndex] = useState(0);
    const [change, setChange] = useState(true);
    
    const [learned, setLearned]=useState([]);

  const lastIndex = Number(words.length - 1);

  const newLearned=[...learned];
  
  
  
  const Counter=()=>{
if (!newLearned.includes(ind)) newLearned.push(ind);
setLearned(newLearned);
   
   }
   

    return (
        <main className={style.main}>
        <div className={style.wrapper}  >

            <Buttongame ind={ind} setIndex={setIndex} setChange={setChange} lastIndex={lastIndex} />
            <Card word={words[ind]} change={change} setChange={setChange} key={ind} Counter={Counter}  />
          
            <Buttongame arrow={'true'} ind={ind} setIndex={setIndex} setChange={setChange} lastIndex={lastIndex} />

        </div>
        <p>выучено <span>{learned.length}</span></p>
        </main>
    )


}


export default Game;