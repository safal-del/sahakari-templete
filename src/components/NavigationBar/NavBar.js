import React, { useState } from 'react'
import {AiOutlineMenu, AiOutlineClose} from "react-icons/ai"
import { Link } from 'react-router-dom';





function NavBar() {

  const [navcontent, setContent]= useState(false);
  const [hoverable, setHoverable]= useState(false);

  function handlenav(){
    setContent(!navcontent);
  }
  

  return (
    <div className='flex bg-gray-300 px-4 mx-auto justify-between items-center text-black h-24'>
      <h1 className='text-3xl font-bold text-black font-sans-serif'>sahar</h1>
        <ul className='hidden md:flex'>
            <li className='p-4 hover:text-primarycolor'><Link to={"/"}>Home</Link></li>
            <li className='p-4 hover:text-primarycolor'><Link to={"/about"}>About</Link></li>
            <li className='p-4 hover:text-primarycolor'><Link to={"/contact"}>Contact</Link></li>
            <div className='bg-black'>
              <li onMouseOver={()=>setHoverable(true)} onMouseOut={()=>setHoverable(false)} className='peer p-4 hover:text-primarycolor'><Link to={"/services"}>Service</Link></li>
              {/* <div className='hidden peer-hover:flex z-40 mt-26 w-48 h-56 hover:flex bg-black'>

              </div> */}
              {hoverable? <div className='w-48 h-56'><p>one</p></div>: null}
              </div>
          
            
        </ul>
        <div onClick={handlenav} className= "md:hidden">
          {navcontent ? <AiOutlineClose size={25}  /> : <AiOutlineMenu size={25}/> }
        </div>
        {
          navcontent ? <div  className='mt-32 z-40 absolute bg-gray-300 text-black float-left left-0 top-0 w-[60%] h-[500px] border-r border-r-gray-900 md:hidden'>
          <ul className='pt-32 '>
          <li className='p-4 hover:text-primarycolor borber-b border-white'><Link to={"/"}>Home</Link></li>
            <li className='p-4 hover:text-primarycolor borber-b border-gray-900'><Link to={"/about"}>About</Link></li>
            <li className='p-4 hover:text-primarycolor borber-b border-gray-900'><Link to={"/contact"}>Contact</Link></li>
            <li className='p-4 hover:text-primarycolor borber-b border-gray-900'>
              
              <Link to={"/services"}>Service</Link>
               
              </li>
          </ul>
          
            
  
          </div> : null
        }
     

    </div>
  )
}

export default NavBar