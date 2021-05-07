import React from "react";
export default function EachDrinks({drinks, desc, image, price, id, orderDrinks, setOrderDrinks}) {
    const [count, setCount] = React.useState(1)
    const [border, setBorder] = React.useState(false)
    
    function Select(){
        border ? Reset() : setBorder(true);
        if(border === false){
            setOrderDrinks ([...orderDrinks, {drinks, price, qtd: count}]);
        }
    }

    function Decrease(e){
        if(count > 0){
            e.stopPropagation()
            if(count === 1){
                setBorder(false)
                setCount(1)
                const newOrderFood = orderDrinks.filter((item)=>item.drinks !== drinks ? true : false);
                setOrderDrinks([...newOrderFood]);                
            }else{
               setCount(count -1)
               const newOrderFood = orderDrinks.filter((item)=>item.drinks !== drinks ? true : false);
               setOrderDrinks([...newOrderFood, {drinks, price, qtd: count-1}]);
            }
        }
    }
    function Increase(e){
        e.stopPropagation();
        setCount(count +1);
        const newOrderFood = orderDrinks.filter((item)=>item.drinks !== drinks ? true : false);
        setOrderDrinks([...newOrderFood, {drinks, price, qtd: count+1}]);
    }

    function Reset(){
        setCount(1);
        const newOrderFood = orderDrinks.filter((item)=>item.drinks !== drinks ? true : false)
        setOrderDrinks([...newOrderFood]);
        setBorder(false);
    }

    return(
        <div className={`ebox ${border ? "selected" : ""}`} key={id} onClick={Select}>
            <img className="imgsize" src={image} alt={drinks}></img>
            <h3>{drinks}</h3>
            <h4>{desc}</h4>
            <h5>R$ {price}</h5>
            <div className={"buttons2"}>
                <button className="color-red" onClick={(e)=> Decrease(e)}>-</button>
                <p>{count}</p>
                <button className="color-green" onClick={(e)=> Increase(e)} >+</button>
            </div>
        </div>
    )
}