import React from 'react'
import Slider from 'react-slick'
import Image from"../../assets/images/girl.png"

const Testimonial = () => {
  return (
    <div>
        <div className ="mt-10">
            <h2 className='text-center text-primarycolor text-3xl font-bold '> What clients say about us</h2>
        </div>
        <div className='pb-10 mt-10 bg-gray-200' >
            <Slider slidesToShow={1} slidesToScroll={1} autoplay={true} autoplaySpeed={3000} dots={true}
            responsive={[{
                breakpoint:600,
                settings:{
                    slidesToScroll:1,
                    slidesToShow:1,
                }
            }]}
             >
                <div className='pt-10 pb-28 w-full  h-96 md:w-32 bg-white border-2 rounded-lg md:bg-gray-200'>
                    <div className='flex justify-center rounded-xl'> <div className='w-36 h-36 rounded-full  border-black'><img className='w-36 h-36 rounded-full ' src={Image}  /> </div></div>
                    <div className='flex justify-center'><div><h2 className=' pt-3 text-2xl text-primarycolor'>Mr joshi</h2><h3 className=' ml-2 text-3xl text-primarycolor font-semibold font-medium'>CEO</h3></div></div>
                    <p className='pt-4 text-center text-primarycolor'> lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj jdkajbdabdmFBAFLHBA FAFUIAFLJKBLAFBA SFLAJFLAFBAJLF LFAFBAKJFBA LHFAJs </p>
                </div>
                <div className='pt-10 pb-28 w-full  h-96 md:w-32 bg-white border-2 rounded-lg md:bg-gray-200'>
                    <div className='flex justify-center rounded-xl'> <div className='w-36 h-36 rounded-full  border-black'><img className='w-36 h-36 rounded-full ' src={Image}  /> </div></div>
                    <div className='flex justify-center'><div><h2 className=' pt-3 text-2xl text-primarycolor'>Mr joshi</h2><h3 className=' ml-2 text-3xl text-primarycolor font-semibold font-medium'>CEO</h3></div></div>
                    <p className='pt-3 text-center text-primarycolor'> lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj jdkajbdabdmFBAFLHBA FAFUIAFLJKBLAFBA SFLAJFLAFBAJLF LFAFBAKJFBA LHFAJs </p>
                </div>
                <div className='pt-10 pb-28 w-full  h-96 md:w-32 bg-white border-2 rounded-lg md:bg-gray-200'>
                    <div className='flex justify-center rounded-xl'> <div className='w-36 h-36 rounded-full  border-black'><img className='w-36 h-36 rounded-full ' src={Image}  /> </div></div>
                    <div className='flex justify-center'><div><h2 className=' pt-3 text-2xl text-primarycolor'>Mr joshi</h2><h3 className=' ml-2 text-3xl text-primarycolor font-semibold font-medium'>CEO</h3></div></div>
                    <p className='pt-3 text-center text-primarycolor'> lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj jdkajbdabdmFBAFLHBA FAFUIAFLJKBLAFBA SFLAJFLAFBAJLF LFAFBAKJFBA LHFAJs </p>
                </div>
                <div className='pt-10 pb-28 w-full  h-96 md:w-32 bg-white border-2 rounded-lg md:bg-gray-200'>
                    <div className='flex justify-center rounded-xl'> <div className='w-36 h-36 rounded-full  border-black'><img className='w-36 h-36 rounded-full ' src={Image}  /> </div></div>
                    <div className='flex justify-center'><div><h2 className=' pt-3 text-2xl text-primarycolor'>Mr joshi</h2><h3 className=' ml-2 text-3xl text-primarycolor font-semibold font-medium'>CEO</h3></div></div>
                    <p className='pt-3 text-center text-primarycolor'> lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj jdkajbdabdmFBAFLHBA FAFUIAFLJKBLAFBA SFLAJFLAFBAJLF LFAFBAKJFBA LHFAJs </p>
                </div>
                <div className='pt-10 pb-28 w-full  h-96 md:w-32 bg-white border-2 rounded-lg md:bg-gray-200'>
                    <div className='flex justify-center rounded-xl'> <div className='w-36 h-36 rounded-full  border-black'><img className='w-36 h-36 rounded-full ' src={Image}  /> </div></div>
                    <div className='flex justify-center'><div><h2 className=' pt-3 text-2xl text-primarycolor'>Mr joshi</h2><h3 className=' ml-2 text-3xl text-primarycolor font-semibold font-medium'>CEO</h3></div></div>
                    <p className='pt-3 text-center text-primarycolor'> lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj  lad kldhajbda bdjajdkaj jdkajbdabdmFBAFLHBA FAFUIAFLJKBLAFBA SFLAJFLAFBAJLF LFAFBAKJFBA LHFAJs </p>
                </div>

            </Slider>


        </div>
        

    </div>
  )
}

export default Testimonial