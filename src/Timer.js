import React, {useState} from "react";

export const Timer = (props) => {
    const [sec,setSec]=useState(1);
    const [min,setMin]=useState(0);
    const [hour,setHour]=useState(0);

    setTimeout(()=>{
        setSec(s=>s+1)
    },1000);


    if(sec===60){
        setSec(1) ;

        setTimeout(()=>{
            setMin(m=>m+1)
        },1000);

        if(min===60){
            setMin(1);
            setTimeout(()=>{
                setHour(h=>h+1)
            },1000);
        }
        if(hour===24){
            setHour(0)
        }
    }

    return <div>
        <h1 style={{color:"deeppink"}}>Timer: {hour}:{min}:{sec} sec</h1>
    </div>
}