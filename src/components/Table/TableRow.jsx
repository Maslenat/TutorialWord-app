import { text } from "@fortawesome/fontawesome-svg-core";
import Button from "../Button/Button";
function TableRow({ eng, trans, rus, tag, isSelect }) {
    const isSave = isSelect ? true : false;
    return (<>
        {isSelect ? (<> <tr>
            <td>{eng}</td>
            <td>{trans}</td>
            <td>{rus}</td>
            <td>{tag}</td>
            <td><Button isSave={isSave} /></td>
        </tr ></>) : (<>
            <tr>
                <td><div>{eng}</div><input type={text} /></td>
                <td><div>{trans}</div><input type={text} /></td>
                <td><div>{rus}</div><input type={text} /></td>
                <td><div>{tag}</div><input type={text} /></td>
                <td><Button isSave={isSave} /></td>
            </tr>





        </>)

        }
    </>)
}





export default TableRow;
