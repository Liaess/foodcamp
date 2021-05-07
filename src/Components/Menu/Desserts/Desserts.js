import React from "react"
import EachDesserts from "./EachDesserts"
const eDesserts = [
    {desserts:"Pudim", desc: "Pudim de leite condensado", price: "8,99", image: "images/pudim.jpeg", id: 1},
    {desserts: "Bolo Biscoito", desc: "Bolo caseiro feito com amor e biscoito", price: "8,59", image: "images/bolobiscoito.jpg", id: 2},
    {desserts: "Gelatina colorida", desc: "Gelatina com diversos sabores", price: "3,99", image: "images/gelatina-colorida.jpg", id: 3},
    {desserts: "Mini torta", desc: "Mini torta pequena sabor morango", price: "6,59", image: "images/minitortinha.jpg", id: 4}
]

export default function Desserts({orderDesserts, setOrderDesserts}){
    return(
    <div className="container">
        <div className="title">
            <p>Por fim, sua sobremesa</p>  
        </div>
        <div className="boxes">
            {eDesserts.map((eDesserts) =>
                <EachDesserts desserts={eDesserts.desserts} desc={eDesserts.desc} price={eDesserts.price} image={eDesserts.image} key={eDesserts.id} orderDesserts={orderDesserts} setOrderDesserts={setOrderDesserts}/>
            )}
        </div>
    </div>
    )
}


