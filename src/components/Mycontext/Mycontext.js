import { createContext,useState } from "react";

export const wordContext=createContext()

export function ContentProvider ({children}) {

    const [words,setWords]=useState([1,2,12,35])
    const value={words,setWords}

    return(
        <wordContext.Provider  value={value}>
        {children}
        </wordContext.Provider>
    );


}