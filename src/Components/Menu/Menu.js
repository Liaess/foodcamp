import Food from "./Food/Food"
import Drinks from "./Drinks/Drink"
// import Dessert from "./Dessert"
import React from "react"

export default function Menu({orderFood, setOrderFood, orderDrinks, setOrderDrinks}){

    return(
        <>
            <Food orderFood={orderFood} setOrderFood={setOrderFood}/>
            <Drinks orderDrinks={orderDrinks} setOrderDrinks={setOrderDrinks}/>
            {/* <Dessert orderDessert={orderDessert} setOrderDessert={setOrderDessert}/> */}
        </>
    )
}