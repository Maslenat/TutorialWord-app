import style from "./button.module.scss";


export default function  Buttonadd({addWord}) {
   
   function handleClick(){
      addWord();

   }
   return (
    <><button onClick={handleClick} className={style.button}>+</button></>
   )
   
}