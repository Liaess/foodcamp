const eDessert =[
    {prato:"Pudim", descricao: "Pudim de leite condensado", preco: "8,99", imagem: "images/pudim.jpeg"},
    {prato: "Bolo Biscoito", descricao: "Bolo caseiro feito com amor e biscoito", preco: "8,59", imagem: "images/bolobiscoito.jpg"},
    {prato: "Gelatina colorida", descricao: "Gelatina com diversos sabores", preco: "3,99", imagem: "images/gelatina-colorida.jpg"},
    {prato: "Mini torta", descricao: "Mini torta pequena sabor morango", preco: "6,59", imagem: "images/minitortinha.jpg"}
]
export default function Dessert(){
    return(
    <div className="container">
        <div className="title2">
            <p>Por fim, sua sobremesa</p>  
        </div>
        <div className="boxes2">
            {eDessert.map((eDessert) =>
                <div className="ebox">
                    <img className="imgsize" src={eDessert.imagem} alt={eDessert.prato}></img>
                    <h3>{eDessert.prato}</h3>
                    <h4>{eDessert.descricao}</h4>
                    <h5>R$ {eDessert.preco}</h5>
                </div>
            )}
        </div>
    </div>
    )

}