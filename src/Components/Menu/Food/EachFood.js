import React from "react";
export default function EachFood({dish, desc, image, price, id}) {
    const [count, setCount] = React.useState(1)
    const [border, setBorder] = React.useState(false)

    function Select(){
        border ? setBorder(false) : setBorder(true);
    }

    function Decrease(e){
        if(count > 0){
            e.stopPropagation()
            if(count === 1){
                setBorder(false)
                setCount(1)
            }else{
               setCount(count -1)
            }
        }
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
                <button className="color-green" onClick={(e)=> {setCount(count +1); e.stopPropagation()}} >+</button>
            </div>
        </div>
    )
}