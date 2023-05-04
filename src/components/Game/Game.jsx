import Card from "../../components/Card/Card";
import massiv from "../../massiv.json";
import Buttongame from "../../components/Buttongame/Buttongame";
import style from "./style.module.scss";
import React from "react";
import { useState,useContext } from "react";
import { wordContext } from "../Mycontext/Mycontext";



Game.defaultProps = {
    words: massiv,
    lastIndex: Number(massiv.length - 1)
};

function Game(props) {

   
    const [ind, setIndex] = useState(0);
    const [change, setChange] = useState(true);
    const [anime, setAnime] = useState("none");
    
    const [learned, setLearned]=useState([]);
    const {words} = useContext(wordContext); 

  const lastIndex = Number(words.length - 1);

  const newLearned=[...learned];
  
  
  
  const Counter=()=>{
if (!newLearned.includes(ind)) newLearned.push(ind);
setLearned(newLearned);
   
   }
 

    return (
        <main className={style.main}>
        <div className={style.wrapper}  >

            <Buttongame setAnime={setAnime} ind={ind} setIndex={setIndex} setChange={setChange} lastIndex={lastIndex} />
            <Card anime={anime}   newLear={learned.length} word={words[ind]} change={change} setChange={setChange} key={words[ind].id} Counter={Counter}  />
         
            <Buttongame setAnime={setAnime} arrow={'true'} ind={ind} setIndex={setIndex} setChange={setChange} lastIndex={lastIndex} />

        </div>
        <p>выучено <span>{learned.length}</span></p>
        </main>
    )


}


export default Game;