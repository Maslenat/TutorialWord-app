import style from "./button.module.scss";
import { React } from "react";

export default function  Buttonadd({addWord}) {
   
   function handleClick(){
      addWord();

   }
   return (
    <><button onClick={handleClick} className={style.button}>+</button></>
   )
   
}