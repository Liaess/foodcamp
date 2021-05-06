import React from "react";
import ReactDOM from "react-dom";
import Top from "./Components/Top"
import Menu from "./Components/Menu/Menu"
import Finish from "./Components/Finish"

import "./CSS/reset.css";
import "./CSS/styles.css";

function App(){
    return(
        <>
            <Top />
            <Menu />
            <Finish />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));