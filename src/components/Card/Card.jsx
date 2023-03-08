import style from "./card.module.scss";


export default function Card(props) {
    const { english, transcription, russian } = props.word;
    const { change, setChange } = props;

    function onChan() {
        setChange(false);
    }




    return (

        <div className={style.container}>
            <div className={style.container__out}>
                <div className={style.container__inner}>
                    <p className={style.word}>{english}</p>
                    <p className={style.transcription}>{transcription}</p>
                </div>
            </div>
            <div className={style.container__trans}>
                {change === true ? <button className={style.button} onClick={onChan}>Проверить</button> : <p className={style.rusword}>{russian}</p>}
            </div>
        </div> 
    );
}

