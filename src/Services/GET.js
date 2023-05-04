const getWords=()=>fetch('http://itgirlschool.justmakeit.ru/api/words').then(response => {
    if (response.ok) { 
        console.log(response);
       return response.json();
    } else {
    throw new Error();}}).then((response) =>response);


    export {getWords};
