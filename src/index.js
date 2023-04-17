import React from 'react';
import ReactDOM from 'react-dom/client';
import "./style/normalize.css";
import App from './pages/app/App';



const root = ReactDOM.createRoot(document.getElementById('root'));
/* 
 function Test() {
  const [value, setValue] = useState('Не пусто');
 

  const handleChange = (e) => {
    e.target.value===""?  setValue('Не пусто'):  setValue(e.target.value);
  };

  return  <input type="text" value={value} onChange={handleChange}/>   
   
  
}
 */
  root.render(
  
    <App />
 
);
