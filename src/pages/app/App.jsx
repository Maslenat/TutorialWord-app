
import style from "./app.module.scss";
import Header from "../../components/Header/Header";
import { React } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

import { PageError, PageGame, PageHome, PageTutorial } from "../index";

function App() {

  return (
    <div className={style.wrapper} >
      <Router >
        <Header />


        <Routes>
          <Route path='/' index element={<PageHome />} />
          <Route path='/main' element={<PageTutorial />} />
          <Route path="/game" element={<PageGame />} />
          <Route path="*" element={<PageError />} />

        </Routes>


      </Router>
    </div>
  );
}


export default App;



 
