import React from "react";
import ReactDOM from "react-dom";
import Top from "./Components/Top"
import Food from "./Components/Food"
import Drinks from "./Components/Drinks"
import Dessert from "./Components/Dessert"
import Finish from "./Components/Finish"

function App(){
    return(
        <>
            <Top />
            <Food />
            <Drinks />
            <Dessert />
            <Finish />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));