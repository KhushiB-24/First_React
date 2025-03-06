import { useReducer } from "react";

const UseRed = (state, action) =>{
    switch(action.type){
        case 'increment':
            return {count: state.count+1};
        case 'decrement':
            return {count: state.count-1};
        case 'multi':
            return{count: state.count*2};
        default:
            return state;
    }
};

function Counter(){
    const [state, dispatch] = useReducer(UseRed, {count:0});
    return(
        <div>
            <p>count: {state.count}</p>
            <button onClick={()=> dispatch({type: 'increment'})}>Increment</button>
            <button onClick={()=> dispatch({type: 'decrement'})}>Decrement</button>
            <button onClick={()=> dispatch({type: 'multi'})}>Multiply</button>

        </div>
    )
}

export default Counter;