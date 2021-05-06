import EachFood from "./EachFood"
const eFoods = [
    {dish:"Triplo Cheddar", desc: "Hambúrguer artesanal com três camadas de cheddar!!!!", price: "23,99", image: "images/3cheddar.jpg", id: 1, quantidade: 0},
    {dish: "Tiras de frango da casa", desc: "12 pedaços de frago para você se deliciar", price: "22,99", image: "images/popeyes frango.jpg", id: 2, quantidade: 0},
    {dish: "Batata frita c/Cheddar&Bacon", desc: "Nossa batata com cheddar e bacon", price: "19,99", image: "images/batatafritacheedar.png", id: 3, quantidade: 0},
    {dish: "Hambúrguer vegano da casa", desc: "Uma receita caseira para veganos!", price: "21,99", image: "images/receitas-vegana.jpg", id: 4, quantidade: 0}
]

export default function Food(){
    return(
    <div className="container">
        <div className="title">
            <p>Primeiro, seu prato</p>  
        </div>
        <div className="boxes">
            {eFoods.map((eFoods) =>
                <EachFood dish={eFoods.dish} desc={eFoods.desc} price={eFoods.price} image={eFoods.image} key={eFoods.id}/>
            )}
        </div>
    </div>
    )
}