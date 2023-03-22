import style from "./table.module.scss";
import TableRow from "./TableRow";
import words from "../../words.json"
import Thead from "./Thead";

function Table() {


    return (

        <table className={style.table}>
            <Thead />
            <tbody>
                {words.map((word) => (<TableRow word={word} key={word.id} />))}
            </tbody>

        </table>


    );
}

export default Table;
