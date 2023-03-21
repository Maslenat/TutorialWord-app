
import style from "./app.module.scss";
import Header from "./components/Header/Header";
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Table from "./components/Table/Table";
import Wrappergame from "./components/WrapperGame/Wrappergame";
/* import NoMatch from "./components/NoMatch/NoMatch"; */


function App() {

  return (
    <Router>
      <div className={style.wrapper} >
        <Header />

        <Routes>
          <Route path="/game" element={<Wrappergame />} />
          <Route index path="/main" element={<Table />} />
        </Routes>

    </div>
    </Router>
  );
}


export default App;
