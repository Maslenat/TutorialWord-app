import { createContext,useState,useEffect } from "react";
import { getWords } from "../../Services/GET";
import Loader from "../Loader/Loader";
import { React } from "react";

export const wordContext=createContext();

export function ContentProvider ({children}) {

    const [words,setWords]=useState();
    const [isLoading, setLoading]=useState(true);
    const [error, setError]=useState(null);

    const value={words,setWords};
   
    async function getServicesWords(){
         const words = await getWords().catch((error)=>setError(error));
         setWords(words); setLoading(false);
    }





    useEffect(()=>{getServicesWords()},[]);

    if (isLoading) return (<Loader/>);
    if(error){ return <h1>Ошибка при загрузке данных с сервера {error.message}</h1>;}

    return(
        <wordContext.Provider  value={value}>
        {children}
        </wordContext.Provider>
    );


}