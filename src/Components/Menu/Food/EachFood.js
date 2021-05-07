import React from "react";
export default function EachFood({dish, desc, image, price, id, orderFood, setOrderFood}) {
    const [count, setCount] = React.useState(1)
    const [border, setBorder] = React.useState(false)
    
    function Select(){
        border ? Reset() : setBorder(true);
        if(border === false){
            setOrderFood ([...orderFood, {dish, price, qtd: count}]);
        }
    }

    function Decrease(e){
        if(count > 0){
            e.stopPropagation()
            if(count === 1){
                setBorder(false)
                setCount(1)
                const newOrderFood = orderFood.filter((item)=>item.dish !== dish ? true : false);
                setOrderFood([...newOrderFood]);                
            }else{
               setCount(count -1)
               const newOrderFood = orderFood.filter((item)=>item.dish !== dish ? true : false);
                // orderFood.filter((item)=>item.dish !== dish)  NESSE CASO OQ VC ESPERA JÁ É O PROPRIO RETORNO DA CONDIÇÃO PORTANTO TRUE
                setOrderFood([...newOrderFood, {dish, price, qtd: count-1}]);
            }
        }
    }
    function Increase(e){
        e.stopPropagation();
        setCount(count +1);
        const newOrderFood = orderFood.filter((item)=>item.dish !== dish ? true : false);
        setOrderFood([...newOrderFood, {dish, price, qtd: count+1}]);
    }

        // const newOrderFood = orderFood.filter(function ChangeState(item){  PASSO A PASSO DE TRANSFORMAR EM ARROW
        //     if(item.dish !== dish){                                        PRIMEIRO REMOVER A FUNÇÃO NO CASO O CHANGESTATE
        //         return true                                                DEPOIS REMOVER A PALAVRA FUNCTION
        //     } else{                                                        COMO ELA POSSUI UM PARAMETRO (item) COLOCAR A "SETINHA" VULGO => NO LADO DIREITO
        //         return false                                               DEPOIS SÓ USAR A CONDIÇÃO Q DESEJA!
        //     }                                                              GRATZ!
        // });

    function Reset(){
        setCount(1);
        const newOrderFood = orderFood.filter((item)=>item.dish !== dish ? true : false)
        setOrderFood([...newOrderFood]);
        setBorder(false);
    }

    return(
        <div className={`ebox ${border ? "selected" : ""}`} key={id} onClick={Select}>
            <img className="imgsize" src={image} alt={dish}></img>
            <h3>{dish}</h3>
            <h4>{desc}</h4>
            <h5>R$ {price}</h5>
            <div className={"buttons"}>
                <button className="color-red" onClick={(e)=> Decrease(e)}>-</button>
                <p>{count}</p>
                <button className="color-green" onClick={(e)=> Increase(e)} >+</button>
            </div>
        </div>
    )
}