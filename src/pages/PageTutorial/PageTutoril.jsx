import Addword from "../../components/AddWord/Addword"
import Table from "../../components/Table/Table"
import { useEffect } from "react";
import Loader from "../../components/Loader/Loader";
export default function PageTutorial() {
    useEffect(()=>{
        global.addEventListener('unload', (e) => {let cords = ['scrollX','scrollY']; cords.forEach(cord => localStorage[cord] = window[cord])});
        let points=['scrollX','scrollY']; window.scroll(...points.map(cord => localStorage[cord]))
       return()=>{global.removeEventListener('unload', (e) => {let cords = ['scrollX','scrollY']; cords.forEach(cord => localStorage[cord] = window[cord])})}},[])
   
    return (

        <>
        <Addword/>
         <Table />
               </>

    )
}