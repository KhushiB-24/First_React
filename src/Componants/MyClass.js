import { Component } from "react";

class MyClass extends Component {
    x = 300;
    constructor(props){
        super(props);
        this.state={
            email : "Khushi",
            pass: "123"
        }
    }

    change(){
        this.setState({email:"Aishwarya"})
    }
    render(){
        return(
            <div>
                <h1>{this.x}</h1>
                <h1>{this.state.email}</h1>
                <button onClick={()=>{this.change()}}>Change</button>
            </div>
        )
    }
}

export default MyClass;