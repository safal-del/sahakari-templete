import React from 'react'
import "./About.css"
import Image from "../../assets/images/happy2.jpg"

import MultiSlider from '../../components/component/Multislider'
import Slider from 'react-slick';
import Brand1 from "../../assets/images/brand1.png"
import Brand3 from "../../assets/images/brand3.png"
import Footer from '../../components/Footer/Footer';
import NavBar from '../../components/NavigationBar/NavBar';
import TopBar from '../../components/TopBAr/TopBar';



function About() {
  return (
    <div className='main'>
      <TopBar/>
      <NavBar/>
      <div className='aboutus h-96 bg-black bg-cover bg-center bg-norepeat'>
        <div className='h-96 bg-black bg-opacity-70'>
           <h1 className=' pt-28 text-center text-6xl text-white'>About Sahar</h1>
           <h2 className='pt-8 text-center text-xl  text-white'> at your service Since 1998</h2>
           <div className='flex justify-center mt-8'>
            <button className='p-2 pl-3 pl-3 bg-primarycolor rounded-xl'>join now</button>
            <div className='ml-3'><button className='p-2 pl-3 pl-3 bg-green-500 rounded-xl'>Enquiry</button></div>
            </div>

        </div>




      </div>
      <div className='section2 '>
        <div className='md:flex'>
          <div className='w-full bg-gray-200 md:w-1/2'>
            <h1 className=' pt-5 pl-5 text-primarycolor font-bold text-3xl'>Why Us?</h1>
            <p className=' pt-5 pl-5 pr-5 text-justify'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit eros, finibus nec placerat vitae, pharetra eget nunc. Duis orci lorem, sollicitudin at rutrum sed, porttitor in enim. Aenean et leo libero. Donec suscipit, lorem vel pretium tempus, justo justo vehicula odio, non mollis lorem nisi vitae magna. Donec tortor ex, tincidunt eget ex vel, luctus iaculis lorem. Etiam vel nulla commodo nulla cursus aliquet eu et eros. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Nullam aliquet mi eu diam pellentesque, vel tristique lorem aliquam. Donec eu dignissim erat, id fermentum sem. In sit amet cursus enim. Vestibulum nisi nunc, tristique imperdiet hendrerit vel, maximus at nisi. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce condimentum urna ex, et tempor nisl vulputate nec.
               Nunc sit amet neque vel metus cursus mattis vitae vel urna. 
               In consectetur non mi quis maximus.</p>
          </div>
          <div className='w-full mt-5 bg-green-500  md:w-1/2 md:mt-0'>
          <img src={Image}  alt= "sahar"/>
          </div>

        </div>

      </div>
      <div className='section3 ml-5 mr-5'>
        <h1 className='pt-10 pb-10 text-center text-primarycolor font-bold text-3xl'> Our Teams</h1>
         <div>
          <MultiSlider   />
         </div>

      </div>
      <div className='section4 pb-10'>
        <h2 className='pt-10 pb-10 text-center text-primarycolor font-bold text-3xl'>Our Work</h2>

        <div>
          <Slider autoplay={true} autoplaySpeed={3000} slidesToShow={4} slidesToScroll={1}>

            <div className='bg-b'>
              <img src={Brand1} width={200} height={300} alt="knda"/>
            </div>
            <div className='bg-b'>
              <img src={Brand3} width={200} height={300}alt="knda"/>
            </div>
            <div className='bg-b'>
              <img src={Brand1} width={200} height={300}alt="knda"/>
            </div>
            <div className='bg-b'>
              <img src={Brand3} width={200} height={300}alt="knda"/>
            </div>
            <div className='bg-b'>
              <img src={Brand1} width={200} height={300}alt="knda"/>
            </div>
            <div className='bg-b'>
              <img src={Brand3} width={200} height={300}alt="knda"/>
            </div>



        </Slider>
        </div>





      </div>
      <Footer/>

    
    </div>
  )
}

export default About