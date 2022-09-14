import React from 'react'
import "./CTA.css"

const CTA = () => {
  return (
    <div>
        <div className='cta h-[310px] bg-cover bg-center bg-norepeat   '>
            <div className='h-[310px] bg-black bg-opacity-80'>
                <h3 className='pt-16 text-center text-white text-5xl font-semibold'> Spend less Save more </h3>
                <h3 className='pt-5 text-center text-primarycolor text-5xl font-semibold'> Save Now? </h3>
                <div className='flex justify-center mt-5'>
                <div><button className='p-2 pl-4 pr-4 bg-primarycolor text-white rounded-lg '>Join us</button></div>
                <div className='ml-4'><button className='p-2 pl-4 pr-4 bg-green-500 text-white rounded-lg '>Enquiry</button></div>
                </div>
            </div>


        </div>
    </div>
  )
}

export default CTA