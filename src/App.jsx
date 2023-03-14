/* import Table from "./components/Table/Table";
import Card from "./components/Card/Card" */
import words from "./words.json";
import Gameneww from "./components/Gamenew/Gamenew";
import "./app.css";



function App() {

  return (
    <div>
      {words.length > 0 ? <Gameneww words={words} /> : <Gameneww />}



    </div>
  );
}


export default App;
