import words from "../../words.json";
import Gameneww from "../../pages/PageGame/PageGame";



export default function Wrappergame() {

    return (
        <div>
            {console.log("GAME WRAPPER")}
            {words.length > 0 ? <Gameneww words={words} /> : <Gameneww />}
        </div>
    );
}


