/* import Table from "./components/Table/Table";
import Card from "./components/Card/Card" */
import words from "./words.json";
import Gameneww from "./components/Gamenew/Gamenew";
import "./app.css";

function App() {

  return (
    <div>

      <Gameneww words={words} />

    </div>
  );
}

export default App;
