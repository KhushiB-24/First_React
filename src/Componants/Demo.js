import { useRef, useState } from "react";

function Demo(){
    var[v, setv] = useState();
    var inp = useRef(null);
    var change =()=>{
        setv(inp.current.value);
    }
    return(
        <div>
            <h1>{v}</h1>
            <input type="text" ref={inp}/>
            <button onClick={change}>Value</button>
        </div>
    )
}

export default Demo;