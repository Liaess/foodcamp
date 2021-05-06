const eDrinks =[
    {bebida: "Guaraná", preco: "23,99", imagem: "images/guarana.jpg"},
    {bebida: "Fanta Laranja", preco: "22,99", imagem: "images/cocacola.jpg" },
    {bebida: "Sprite Geladinha", preco: "19,99", imagem: "images/sprite.jpg"},
    {bebida: "Pepsi pode ser", preco: "21,99", imagem: "images/pepsi.jpg"}
]

export default function Drinks(){
    return(
        <div className="container">
            <div className="title2">
                <p>Agora, sua bebida</p>  
            </div>
            <div className="boxes">
                {eDrinks.map((eDrinks) =>
                    <div className="ebox">
                        <img className="imgsize" src={eDrinks.imagem} alt={eDrinks.bebida}></img>
                        <h3>{eDrinks.bebida}</h3>
                        <h4>Lata 350ml</h4>
                        <h5>R$ {eDrinks.preco}</h5>
                    </div>
                )}
            </div>
        </div>
    )
}