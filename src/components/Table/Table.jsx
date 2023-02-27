import style from "./table.module.scss";
import TableRow from "./TableRow";
import words from "../../words.json"

function Table() {
    return (

        <table className={style.table}>
            <thead>

                <th>English</th>
                <th>Transcription</th>
                <th>Russian</th>
                <th>Tag</th>
                <th>Edit</th>


            </thead>
            <tbody>

                {words.map((word) => (
                    <TableRow isSelect={false} eng={word.english} rus={word.russian} trans={word.transcription} tag={word.tags} />
                ))}
            </tbody>

        </table>

    );
}

export default Table;
