import React, {useEffect, useState} from "react";
import styles from './Clicker.module.css'

export const Clicker = () => {
    const [num, setNum] = useState(1);
    const [light, setLight] = useState(true);

    useEffect(() => {
console.log("Done")
    }, []);

    let style = {};

    if (num%2) {
        style.background = 'red'
    }

    function up() {
        setNum(n => n + 1);
    }

    function down() {
        setNum(n => n - 1);
    }

    function clear() {
        setNum(0);
    }

    return (
        <div >
            <h1  onClick={down} style={style}>{num}</h1>
            <button className={styles.minus}>-</button>
            <button onClick={up}>+</button>
            <button onClick={clear}>**</button>
        </div>
    )
}