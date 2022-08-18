import React,{useState} from "react";
import styles from './Contador.module.css'

function Contador(){

    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>El contador esta en: {count}</h1>
            <button onClick={() => setCount(count+1)}>Sumar</button>
            <button onClick={() => setCount(count-1)}>Restar</button>
        </div>
    )
}

export default Contador;