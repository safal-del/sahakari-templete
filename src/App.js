
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home/Home.js';
import About from './pages/About/About.js';
import Contact from './pages/Contact/Contact.js';
import Services from './pages/Services/Services.js';
import Login from './admin/Loginadmin/login.js';
import { useSelector } from 'react-redux';
import Homepage from './admin/homepagead.js';
import { useEffect, useState } from 'react';







function App() {
  const loginstate = useSelector(function(state){
   
    return state.loginreducer.login
  })
  console.log(loginstate)
  
  console.log(loginstate);

  const[checkstate, setState]= useState()
   

  useEffect(()=>{
     let datas = localStorage.getItem('state');
     if(datas==="true"){
      setState(true);
     }

  },[loginstate])
  console.log(checkstate);
  return (
    <div className="App">
      
      
      
    
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path='/services' element={<Services/>} />
        <Route path='/login'  element ={<Login/>} />
        {checkstate ? <Route path ="/dashboard" element ={<Homepage/>} /> :null}
         
        {/* {<Route path ="/dashboard" element ={<Homepage/>}/>} */}
      </Routes>
    </div>
  );
}

export default App;
