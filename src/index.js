import React from "react";
import ReactDOM from "react-dom";
import Top from "./Components/Top"
import Menu from "./Components/Menu/Menu"
import Finish from "./Components/Finish"

import "./CSS/reset.css";
import "./CSS/styles.css";

function App(){
    const [orderFood, setOrderFood] = React.useState([]);
    const [orderDrinks, setOrderDrinks] = React.useState([]);
    // const [orderDessert, setOrderDessert] = React.useState([]);
    return(
        <>
            <Top />
            <Menu orderFood={orderFood} setOrderFood={setOrderFood} orderDrinks={orderDrinks} setOrderDrinks={setOrderDrinks} />
            <Finish />
        </>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));