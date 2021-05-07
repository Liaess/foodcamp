import Food from "./Food/Food"
import Drinks from "./Drinks/Drink"
import Desserts from "./Desserts/Desserts"
import React from "react"

export default function Menu({orderFood, setOrderFood, orderDrinks, setOrderDrinks, orderDesserts, setOrderDesserts}){

    return(
        <>
            <Food orderFood={orderFood} setOrderFood={setOrderFood}/>
            <Drinks orderDrinks={orderDrinks} setOrderDrinks={setOrderDrinks}/>
            <Desserts orderDesserts={orderDesserts} setOrderDesserts={setOrderDesserts}/>
        </>
    )
}