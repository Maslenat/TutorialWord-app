
import style from "./app.module.scss";
import Header from "./components/Header/Header";
import { React } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Table from "./components/Table/Table";
import Wrappergame from "./components/WrapperGame/Wrappergame";
import NoMatch from "./components/NoMatch/NoMatch";

function App() {

  return (
    <div className={style.wrapper} >
      <Router >

        <Header />

        <Routes>
          <Route path='/' index element={<Table />} />
          <Route path='/main' element={<Table />} />
          <Route path="/game" element={<Wrappergame />} />
          <Route path="*" element={<NoMatch />} />

        </Routes>


    </Router>
    </div>
  );
}


export default App;
