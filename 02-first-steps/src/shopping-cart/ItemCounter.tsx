import { useState } from "react";

export interface Props {
    name : string;
    quantity?: number 
}
export const ItemCounter = ({name, quantity= 1} : Props) => {
    const [count, setCount] = useState(quantity);

    const handlerAdd = () => {
        console.log('Hola mundo desde ItemCounter')
        setCount(count + 1 )
    }

    const handlerSubtract = () => {
        if (count === 1 ) return;

        setCount(count -1)
    }

  return (
    <section style={{
        display:"flex",
        alignItems:'center',
        gap:10
    }}>

    <span style={{
        width:100, color: count === 1 ? 'red' : 'black'
    }}>{name}</span>
    <button onClick={handlerAdd}> + 1 </button>
    <span>{count}</span>
    <button onClick={handlerSubtract}> -1 </button>
    </section>
  )
}
