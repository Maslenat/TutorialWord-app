function changeWord(arr,word){
    const newarr=arr.forEach((item, index) => {
      if (item["id"]===word.id) arr.splice(index,1,word)});
      return newarr;

}

function isEmpty(obj) {
    for (let key in obj ) {
      return false;
    }
    return true;
     
}

const checkValid=function(word){
        const newErrors = Object.keys(word).reduce((errors, item) => {
          let result = {...errors};
      
          switch (item) {
            case 'english':if(word[item]===''){
              result = {
                ...errors,
                       [item]:'Поле обязательно для заполнения',
              } } else if( !/^[ a-z ]*$/i.test(word[item])) {
               result = {
                ...errors,
                       [item]:'Допускаются только английские буквы',
              }}
              break;
           
            case 'russian':
              if(word[item]===''){
                result = {
                  ...errors,
                         [item]:'Поле обязательно для заполнения',
                } } else if ( !/^[ а-я ]*$/i.test(word[item])) {
                   result = {
                    ...errors,
                           [item]:'Допускаются только русские буквы',
                  }
                 
                }
                break;

             

            
             
                
            case 'tags':
              
                      break;
                      case 'transcription':
                        if(word[item]===''){
                          result = {
                            ...errors,
                                   [item]:'Поле обязательно для заполнения',
                          } }
                        break;
                        default:
                         break;}
                 
         
      
          return result;
            },{})
      
        return newErrors;
}

  export  {changeWord,isEmpty,checkValid};