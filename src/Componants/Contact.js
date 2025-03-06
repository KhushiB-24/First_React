import { useState } from 'react';
import './Main.css';
import axios from 'axios';
function Contact(){

    const[movie, setMovie] = useState({id:'', title:'', release_date:'', genere:'', director:''});

    let hChange = (e) =>{
        var{name, value} = e.target;
        setMovie({...movie, [name]:value});
    }

    const[res, setRes] = useState("");
    let handleSubmit = (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/movies", movie).then(()=>{setRes("Added successfully")}).catch(()=>{setRes("Something wents wrong")});
    }

    return( 
        <div className='contact-page'>
            <h1>Hello From Contact</h1>

            <form onSubmit={handleSubmit}>
                <input type='text' name="id" value={movie.id} onChange={hChange} />
                <input type='text' name="title" value={movie.title} onChange={hChange} />
                <input type='text' name="release_date" value={movie.release_date} onChange={hChange} />
                <input type='text' name="genere" value={movie.genere} onChange={hChange} />
                <input type='text' name="director" value={movie.director} onChange={hChange} />

                <button type='submit'>Submit</button>

                <h1>{movie.title}</h1>
                <h1>{movie.release_date}</h1>
                <h1>{movie.genere}</h1>
                <h1>{res}</h1>
            </form>
        </div>
    )
}

export default Contact;