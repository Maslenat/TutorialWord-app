const addPostWords= (word) =>{
   fetch("/api/words/add",{
      method:"POST",
      headers: {
               'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(word)})
      .then((response)=>{if ( response.ok ) {
      console.log ( "Слово добавлено" ) } else { console.log( response );  throw new Error ( "Ошибка" ); }})
      .catch((e)=>console.log(e.message))
        }

const delWords= (id) =>{
   fetch(`/api/words/${id}/delete`,{
    method:"POST",
    headers: {
        'Content-Type': 'application/json;charset=utf-8',
    }})
   .then((response)=>{if(response.ok) { 
                     console.log("слово удалено")}
                     else { 
                     console.log(response);
                     throw new Error ("Ошибка");}})
   .catch((e)=>console.log(e.message))}
 
            
const updateWords = (word) =>{
   fetch(`/api/words/${word.id}/update`, {
     method: 'POST',
     headers: {
                'Content-Type': 'application/json;charset=utf-8',
              },
    body: JSON.stringify(word),
    }).then((response)=>{if(response.ok) {
        console.log("слово удалено")}
      else {
        console.log(response);
        throw new Error ("Ошибка");
}}).catch((e)=>console.log(e.message))}
export {addPostWords, delWords, updateWords}