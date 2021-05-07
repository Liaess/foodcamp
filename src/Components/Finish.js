import React from "react"
export default function Finish({orderFood, orderDrinks, orderDesserts}){
    
    const finalOrder = orderFood.length > 0 && orderDrinks.length >0 && orderDesserts.length > 0

    function FinishOrder(){
        orderFood.forEach(e => {e.price = e.price.replace(",",".")});
        orderDrinks.forEach(e => {e.price = e.price.replace(",",".")});
        orderDesserts.forEach(e => {e.price = e.price.replace(",",".")});

        let totalFood = 0;
        const totalValueFood = orderFood.map((item)=>item.price * item.qtd);
        totalValueFood.forEach((eachPrice)=>{
            totalFood += eachPrice
        });

        let totalDrink = 0;
        const totalValueDrink= orderDrinks.map((item)=>item.price * item.qtd);
        totalValueDrink.forEach((eachPrice)=>{
            totalDrink += eachPrice
        });

        let totalDessert = 0;
        const totalValueDessert = orderDesserts.map((item)=>item.price * item.qtd);
        totalValueDessert.forEach((eachPrice)=>{
            totalDessert += eachPrice
        });

        let finalOrderFood = "";
        orderFood.forEach((eachFood)=>{                                  // Faz a mesma coisa q em cima porem sem precisar do map
            finalOrderFood += eachFood.dish +`(X${eachFood.qtd})`
        })

        let finalOrderDrinks = "";
        orderDrinks.forEach((eachDrinks)=>{
            finalOrderDrinks += eachDrinks.drinks +`(X${eachDrinks.qtd})`
        })

        let finalOrderDesserts = "";
        orderDesserts.forEach((eachDesserts)=>{
            finalOrderDesserts += eachDesserts.desserts +`(X${eachDesserts.qtd})`
        })

        let text = 
        `Olá, gostaria de fazer o pedido:
        - Prato: ${finalOrderFood}
        - Bebida: ${finalOrderDrinks}
        - Sobremesa: ${finalOrderDesserts}
        Total: R$ ${(totalFood+totalDrink+totalDessert).toFixed(2)}`
        const texturi = encodeURI(text);
        const linkurl = `https://wa.me/5521987972806?text=${texturi}`;
        window.location.href = linkurl; 
    }

    return(
        <div className="bottom" onClick={()=> finalOrder ? FinishOrder() : ()=>{}}>
            <div className={finalOrder ? "color-green-button" : "button"}>
                <h1>{finalOrder ? "Fechar pedido" : "Selecione os 3 itens para fechar o pedido"}</h1>
            </div>
        </div>
    )
}

