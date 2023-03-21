import style from "./table.module.scss";
import TableRow from "./TableRow";
import words from "../../words.json"


function Table() {
    console.log("TABLE");

    return (

        <table className={style.table}>
            <thead>
                <tr>
                <th>English</th>
                <th>Transcription</th>
                <th>Russian</th>
                <th>Tag</th>
                <th>Edit</th>
                </tr>              


            </thead>
            <tbody>
                {words.map((word) => (<TableRow word={word} key={word.id} />))}
            </tbody>

        </table>


    );
}

export default Table;
