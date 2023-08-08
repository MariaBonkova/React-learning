import {useState} from "react";

export const State = (props) => {
    const [count, setCount] = useState(0);
    const [price, setPrice] = useState(props.price || 0)
    const clickHandler = () => {
        setCount(oldCount => oldCount + 1)

    };
    const priceHandler = () => {
        setPrice(oldPr => oldPr + price)
    };

    let title = '';
    if (count < 5) {
        title = 'Counter'
    } else if (count < 10) {
        title = 'Big Counter'
    } else {
        title = 'Large'
    }

    return (
        <div>

            <h1 style={{color: "red"}}>{title}</h1>
            <p>{price}</p>
            <p>{props.name}</p>

            <button style={{fontSize: 50 + "px"}} onClick={clickHandler}> Click: {count}</button>


        </div>
    )
}
