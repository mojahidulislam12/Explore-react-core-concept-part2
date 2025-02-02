import { useState } from "react"

function Counter() {
    const [count,setCount] = useState(0);
    const handleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount);
    }

    const handelReduce = () =>{
        const newCount = count -1;
        setCount(newCount);
    }
  return (
    <div style={{border:'2px solid yellow'}}>
        <h3>Counter:{count}</h3>
        <button onClick={handleAdd}>Add</button>
        <button onClick={handelReduce}>Reduce</button>
    </div>
  )
}

export default Counter