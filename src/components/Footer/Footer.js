import React from 'react'
import { FaPhone, FaLocationArrow, } from 'react-icons/fa';
import {AiOutlineMail, } from "react-icons/ai";


const Footers= () => {
  return (
    <div className='bg-primarycolor'>
        <div className='ml-5 mr-5    md:flex'>
            <div className=' mt-5 pb-10 w-full md:w-1/3 text-white'>
            <h1 className='text-3xl font-bold  font-sans-serif pt-10 md:pt-0 md:mt-0'>sahar</h1>
             <p className='pr-5 text-justify'> about sahar sahar is very good althogh they are bad and the most
                beatiful thing is the sahars is sahar and rahar is rahar rahar is
                dal actually people like to eat dal idk why

             </p>
                

            </div>
            <div className=' mt-5 pb-10 w-full md:w-1/3 text-white'>
             <h1 className=' md:text-center text-2xl s'>Useful Links</h1>
             <ul className=' md:text-center mr-10 mt-2'>
                <li>Our service</li>
                <li>Our service</li>
                <li>Our service</li>
                <li>Our service</li>
             </ul>               
            </div>
            <div className=' mt-5 pb-10 w-full md:w-1/3 text-white'>
             <h1 className=' md:text-center text-2xl s'>Contact us</h1>
            
                <div className=' justify-start mt-3  md:flex justify-center'>
                    <div className='flex w-48  justify-between'>
                    <FaPhone className=' mt-1' style={{color:"white", size:   "18"}} />
                    <div className=''><p>9841918431 , 98655</p></div>
                    </div>
                </div>
                 <div className=' mt-3 justify-start  md:flex justify-center'>
                 <div className='flex w-48  justify-between'>
                    <AiOutlineMail className=' mt-1' style={{color:"white", size:   "18"}} />
                    <div className=''><p>bugbyte@gmail.com</p></div>
                    </div>
                </div>
                <div className='mt-3 justify-start  md:flex justify-center'>
                 <div className='flex w-48  justify-between'>
                    <FaLocationArrow className=' mt-1' style={{color:"white", size:   "18"}} />
                    <div className=''><p>bugbyte@gmail.com</p></div>
                    </div>
                </div>
                           
            </div>
        </div>

    </div>
  )
}

export default Footers;