import React, {useState} from 'react';


const Counter = function(){
    const [count, setCount] = useState(0)

    function increnment() {
        setCount(count + 1)
    }
  
  
    function decrenment() {
        setCount(count - 1)
    }
    
    
    
    return(
        <div>
            <h1>{count}</h1>
            <button onClick={increnment}>Increnment</button>
            <button onClick={decrenment}>Decrenment</button>   

        </div>
    )
}

export default Counter;