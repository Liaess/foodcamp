const eFoods =[
    {prato:"Triplo Cheddar", descricao: "Hambúrguer artesanal com três camadas de cheddar!!!!", preco: "23,99", imagem: "images/3cheddar.jpg"},
    {prato: "Tiras de frango da casa", descricao: "12 pedaços de frago para você se deliciar", preco: "22,99", imagem: "images/popeyes frango.jpg"},
    {prato: "Batata frita c/Cheddar&Bacon", descricao: "Nossa batata com cheddar e bacon", preco: "19,99", imagem: "images/batatafritacheedar.png"},
    {prato: "Hambúrguer vegano da casa", descricao: "Uma receita caseira para veganos!", preco: "21,99", imagem: "images/receitas-vegana.jpg"}
]
export default function Food(){
    return(
    <div className="container">
        <div className="title">
            <p>Primeiro, seu prato</p>  
        </div>
        <div className="boxes">
            {eFoods.map((eFoods) =>
                <div className="ebox">
                    <img className="imgsize" src={eFoods.imagem} alt={eFoods.prato}></img>
                    <h3>{eFoods.prato}</h3>
                    <h4>{eFoods.descricao}</h4>
                    <h5>R$ {eFoods.preco}</h5>
                </div>
            )}
        </div>
    </div>
    )

}