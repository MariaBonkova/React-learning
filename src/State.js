import {useState} from "react";
import styles from './State.module.css'

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

        <div className={styles.container}>

            <h1 className={title==='Big Counter' ? styles.titleBig : styles.titleLarge} >{title}</h1>
            <p className={styles.price}>{price}</p>
            <p className={styles.name}>{props.name}</p>

            <button style={{fontSize: 50 + "px"}} onClick={clickHandler}> Click: {count}</button>

        </div>
    )
}
