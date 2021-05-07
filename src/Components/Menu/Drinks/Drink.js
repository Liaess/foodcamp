import React from "react"
import EachDrinks from "./EachDrinks.js"
const eDrinks = [
    {drinks: "Guaraná", price: "6,99", desc:"Lata 350ml", image: "images/guarana.jpg", id: 1},
    {drinks: "Fanta Laranja", price: "5,99", desc:"Lata 350ml", image: "images/cocacola.jpg", id: 2},
    {drinks: "Sprite Geladinha", price: "4,99", desc:"Lata 350ml", image: "images/sprite.jpg", id: 3},
    {drinks: "Pepsi pode ser", price: "5,79", desc:"Lata 350ml", image: "images/pepsi.jpg", id: 4}
]

export default function Drinks({orderDrinks, setOrderDrinks}){
    return(
    <div className="container">
        <div className="title2">
            <p>Agora, sua bebida</p>
        </div>
        <div className="boxes2">
            {eDrinks.map((eDrinks) =>
                <EachDrinks drinks={eDrinks.drinks} desc={eDrinks.desc} price={eDrinks.price} image={eDrinks.image} key={eDrinks.id} orderDrinks={orderDrinks} setOrderDrinks={setOrderDrinks}/>
            )}
        </div>
    </div>
    )
}