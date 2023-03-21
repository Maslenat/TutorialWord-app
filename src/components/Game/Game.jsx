import style from "./game.module.scss";
import Card from "../Card/Card";
import words from "../../words.json"

export default function Game() {

    return (
        <div className={style.container}>

            {words.map((word) => <Card {...word} key={word.id} />)}


        </div>
    );
}
