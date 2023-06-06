import Game from "../../components/Game/Game";
import words from "../../words.json";
import { React } from "react";


function PageGame() {


    return (
        <>
       <Game words={words}/>
        </>
       
    )


}


export default PageGame;