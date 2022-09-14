import React from 'react'
import Slider from 'react-slick'
import Image1 from "../../assets/images/happy1.jpg";
import Image2 from "../../assets/images/happy1.jpg";
import Image3 from "../../assets/images/happy1.jpg";
import NavBar from '../NavigationBar/NavBar';
import TopBar from '../TopBAr/TopBar';
import "./Slider.css"




const Sliders = () => {
  return (
    <div className=' text-white '>
      <TopBar/>
      <NavBar/>
     <div>
    <Slider className='bg-gray-300' arrows={true} autoplaySpeed={3000} slidesToScroll={1} slidesToShow ={1} autoplay ={true} dots={false}>
        <div className='slide1'>
          <div className='bimage1 h-96 bg-green-black bg-opacity-40 bg-center bg-cover bg-norepeat'>
           {/* <img className=' opacity-40 w-full h-96' src={Image1}  alt='sahakari'/> */}
           <div className='h-96 bg-black bg-opacity-70 items'>
             <div><h1  className=' pt-16 text-center font-semibold text-primarycolor text-6xl'>We make your dream true</h1>
             <h1  className=' pt-12 text-center text-white font-bold text-6xl'>Join us now?</h1>
             </div>
             <div className='mt-8 flex justify-center'><button className='bg-primarycolor p-2 pl-4 pr-4 rounded-xl'><p className='text-center'>join now</p></button><button className='ml-4 bg-green-500 p-2 pl-4 pr-4 rounded-xl '><p className='text-center'> Enquiry </p></button></div>
           </div>
          </div>
         
        </div>
        <div className='slide2'>
          <div className='bimage2 h-96 bg-green-black bg-opacity-40 bg-center bg-cover bg-norepeat'>
           {/* <img className=' opacity-40 w-full h-96' src={Image1}  alt='sahakari'/> */}
           <div className='h-96 bg-black bg-opacity-70 items'>
             <div><h1  className=' pt-16 text-center font-semibold text-primarycolor text-6xl'>We make your dream true</h1>
             <h1  className=' pt-12 text-center text-white font-bold text-6xl'>Join us now?</h1>
             </div>
             <div className='mt-8 flex justify-center'><button className='bg-primarycolor p-2 pl-4 pr-4 rounded-xl'><p className='text-center'>join now</p></button><button className='ml-4 bg-green-500 p-2 pl-4 pr-4 rounded-xl '><p className='text-center'> Enquiry </p></button></div>
           </div>
          </div>
         
        </div>
        <div className='slide3'>
          <div className='bimage3 h-96 bg-green-black bg-opacity-40 bg-center bg-cover bg-norepeat'>
           {/* <img className=' opacity-40 w-full h-96' src={Image1}  alt='sahakari'/> */}
           <div className='h-96 bg-black bg-opacity-70 items'>
             <div><h1  className=' pt-16 text-center font-semibold text-primarycolor text-6xl'>We make your dream true</h1>
             <h1  className=' pt-12 text-center text-white font-bold text-6xl'>Join us now?</h1>
             </div>
             <div className='mt-8 flex justify-center'><button className='bg-primarycolor p-2 pl-4 pr-4 rounded-xl'><p className='text-center'>join now</p></button><button className='ml-4 bg-green-500 p-2 pl-4 pr-4 rounded-xl '><p className='text-center'> Enquiry </p></button></div>
           </div>
          </div>
         
        </div>
    </Slider>
    </div> 
            
    </div>
  )
}

export default Sliders