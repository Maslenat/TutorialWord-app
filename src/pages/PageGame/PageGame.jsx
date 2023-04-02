import Game from "../../components/Game/Game";
import words from "../../words.json";



function PageGame() {


    return (
        <>
       <Game words={words}/>
        </>
       
    )


}


export default PageGame;