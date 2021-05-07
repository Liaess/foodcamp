import React from "react";
export default function EachDessert({desserts, desc, image, price, id, orderDesserts, setOrderDesserts}) {
    const [count, setCount] = React.useState(1)
    const [border, setBorder] = React.useState(false)
    
    function Select(){
        border ? Reset() : setBorder(true);
        if(border === false){
            setOrderDesserts ([...orderDesserts, {desserts, price, qtd: count}]);
        }
    }

    function Decrease(e){
        if(count > 0){
            e.stopPropagation()
            if(count === 1){
                setBorder(false)
                setCount(1)
                const newOrderDesserts = orderDesserts.filter((item)=>item.desserts !== desserts ? true : false);
                setOrderDesserts([...newOrderDesserts]);
            }else{
               setCount(count -1)
               const newOrderDesserts = orderDesserts.filter((item)=>item.desserts !== desserts ? true : false);
               setOrderDesserts([...newOrderDesserts, {desserts, price, qtd: count-1}]);
            }
        }
    }
    function Increase(e){
        e.stopPropagation();
        setCount(count +1);
        const newOrderDesserts = orderDesserts.filter((item)=>item.desserts !== desserts ? true : false);
        setOrderDesserts([...newOrderDesserts, {desserts, price, qtd: count+1}]);
    }

    function Reset(){
        setCount(1);
        const newOrderDesserts = orderDesserts.filter((item)=>item.desserts !== desserts ? true : false)
        setOrderDesserts([...newOrderDesserts]);
        setBorder(false);
    }

    return(
        <div className={`ebox ${border ? "selected" : ""}`} key={id} onClick={Select}>
            <img className="imgsize" src={image} alt={desserts}></img>
            <h3>{desserts}</h3>
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