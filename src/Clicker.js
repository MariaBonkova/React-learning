import React, {useState} from "react";

export const Clicker = () => {
    const[num,setNum]=useState(1);
  function up() {
      setNum(n=>n+1);
  }
  function down() {
      setNum(n=>n-1);
  }
  function clear() {
      setNum(0);
  }

return(
    <div>
        <h1>{num}</h1>
        <button onClick={down}>-</button>
        <button onClick={up}>+</button>
        <button onClick={clear}>**</button>
    </div>
)
}