import React from 'react'
import Slider from 'react-slick'
import Image from"../../assets/images/happy1.jpg"

const MultiSlider = () => {
  return (
    <div className='pb-10 '>
        {/* <div className='pt-10 pb-10'>
            <h2 className='text-center text-primarycolor text-3xl font-bold '> What clients say about us</h2>
        </div> */}
        <div >
            <Slider slidesToShow={3} slidesToScroll={1} autoplay={false} autoplaySpeed={3000} dots={true}
            responsive={[{
                breakpoint:600,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:1,
                }
            }]}
             >
                <div className='pt-10 pb-10 w-full md:w-36 bg-white border-2 rounded-lg'>
                    <div className='flex justify-center rounded-lg'> <img className='rounded 3xl' src={Image} width={150} height={80} /></div>
                    <div className='flex justify-center'><h2>Mr joshi</h2><h3 className='ml-2'>CEO</h3></div>
                    <p className='pt-3 text-center'> this jdajbd kldhajbda bdjajdkaj</p>
                </div>
                <div className=' pt-10 pb-10 w-full md:w-36 bg-white border-2 rounded-lg'>
                    <div className='flex justify-center rounded-lg'> <img className='rounded 3xl' src={Image} width={150} height={80} /></div>
                    <div className='flex justify-center'><h2>Mr joshi</h2><h3 className='ml-2'>CEO</h3></div>
                    <p className='pt-3 text-center'> this jdajbd kldhajbda bdjajdkaj</p>
                </div>
                <div className=' pt-10 pb-10 w-full md:w-36 bg-white border-2 rounded-lg'>
                    <div className='flex justify-center rounded-lg'> <img className='rounded 3xl' src={Image} width={150} height={80} /></div>
                    <div className='flex justify-center'><h2>Mr joshi</h2><h3 className='ml-2'>CEO</h3></div>
                    <p className='pt-3 text-center'> this jdajbd kldhajbda bdjajdkaj</p>
                </div>
                <div className=' pt-10 pb-10 w-full md:w-36 bg-white border-2 rounded-lg'>
                    <div className='flex justify-center rounded-lg'> <img className='rounded 3xl' src={Image} width={150} height={80} /></div>
                    <div className='flex justify-center'><h2>Mr joshi</h2><h3 className='ml-2'>CEO</h3></div>
                    <p className='pt-3 text-center'> this jdajbd kldhajbda bdjajdkaj</p>
                </div>
                <div className=' pt-10 pb-10 w-full md:w-36 bg-white border-2 rounded-lg'>
                    <div className='flex justify-center rounded-lg'> <img className='rounded 3xl' src={Image} width={150} height={80} /></div>
                    <div className='flex justify-center'><h2>Mr joshi</h2><h3 className='ml-2'>CEO</h3></div>
                    <p className='pt-3 text-center'> this jdajbd kldhajbda bdjajdkaj</p>
                </div>

            </Slider>


        </div>
        

    </div>
  )
}

export default MultiSlider;