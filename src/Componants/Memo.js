import React from "react";

const MyComponent = React.memo(({value}) => {
    console.log("Rendered");
    return <div><h1>{value}</h1></div>
});

export default MyComponent;

//If the value prop doesnt change, MyComponent wont re-render