import logo from './logo.svg';
import './App.css';
import SignIn from './SignIn';
import ChangeStyle from './ChangeStyle';
import Student from './Student';
import Conditional from './Conditional';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Nav from './Componants/Nav';
import Home from './Componants/Home';
import About from './Componants/About';
import Contact from './Componants/Contact';
import SignUp from './Componants/SignUp';
import Show from './Componants/Show';
import UpdateMovie from './Componants/Put';
import MyClass from './Componants/MyClass';
import Demo from './Componants/Demo';
import MyComponent from './Componants/Memo';
import UseRed from './Componants/UseRed';
import Counter from './Componants/UseRed';

function App(){
  return(
    <div>
      <BrowserRouter>
      <Counter/>
      <MyComponent value="Sachi"/>
        <Demo/>
        <MyClass/>
        <Show/>
        <Nav/>
        <Routes>
        <Route path='/home' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/signup' element={<SignUp/>}></Route>
        <Route path='/updatemovie' element={<UpdateMovie id={1}/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

// function App() {

//   var arr = [
//     {
//       id : 1,
//       name : "Khushi",
//       city : "Nagpur"
//     },
//     {
//       id : 2, 
//       name : "Tanu",
//       city : "Wardha"
//     },
//     {
//       id : 3,
//       name : "Aish",
//       city : "Umred"
//     },
//     {
//       id : 3,
//       name : "Aish",
//       city : "Umred"
//     }
//   ];
//   return (
//     <div>
      
//       <h1>Hello </h1>
//       {arr.map((a)=>{
//         return <div className='div1'>
//           <h2 style={{}}>{a.id}</h2><h3>{a.name}</h3><h4>{a.city}</h4>
          
//           </div>    
//       })}
//       <SignIn/>
//       <br></br>
//       <ChangeStyle/>



//       <br></br><br></br>
//       <Student name="Khushi" city="Nagpur" email="khushi@gmail.com" />
//       <Student name="Aishwarya" city="Umred" email="aishwarya@gmail.com" />
//       <Student name="Chetan" city="Vani" email="chetan@gmail.com" />
//       <Student name="Aditya" city="Nanded" email="aditya@gmail.com" />
//       <Student name="Prachi" city="Bhandara" email="prachi@gmail.com" />

//       <br/><br/>
//       <Conditional/>
//     </div>
//   );
// }

export default App;
