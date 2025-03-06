import axios from "axios"
import { useState } from "react"
import "./Show.css";

function Show(){

    var[products, setProducts] = useState([]);
    axios.get("http://localhost:8080/movies").then((r)=>{setProducts(r.data)}).catch((er)=>{console.log(er)});
    return(
        <div>
            <div>{products ? <div>
                                {products.map((a)=>{return <div className="movies">
                                                                <img src={a.img_url}></img>
                                                                <h1>{a.title}</h1>
                                                                <h1>{a.release_date}</h1>
                                                                <h1>{a.genere}</h1>
                                                                <h1>{a.director}</h1>
                                                            </div>})}                                                                                       
                             </div> : <h1>Loading....</h1>}
            </div>
        </div>
    )
}

//.map((a)=>{return <div><h1>{a.title}</h1></div>})
export default Show;