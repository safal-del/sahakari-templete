import React from 'react'
// import ServiceImage1 from "../../assets/images/service1.jpeg"
// import ServiceImage2 from "../../assets/images/service2.jpeg"
import ServiceImage3 from "../../assets/images/service3.jpeg"

const Servicepage = () => {
  return (
    <div>
        <div className='m-5 mt-10'>
            <h1 className='text-center text-primarycolor font-bold text-3xl'>Our Service</h1>
            <div className=' mt-10 grid grid-row-1 grid-flow-row md:grid-cols-3 grid-flow-row gap-4 '>

                <div className='pb-10 bg-gray-200 shadow-x mt-4 md:mt-0 ' >
                    <div className=' mt-10 flex justify-center'><img className='rounded-lg' src={ServiceImage3} width={200} height={300} alt="sahar"/></div>
                    <h2 className=' pt-5 text-center text-primarycolor text-2xl font-semibold '>Credit</h2>
                    <div className='m-5'><p className='text-black text-justify text-lg'>hami le sakne jati garchum hajur aru ta k bhannu j hos thik cha la aba mailayera garni parcha bhaneya dharana ho hamro ni</p></div>
                    <div className='ml-5'><button className='p-2 rounded-lg pl-4 pr-4 text-white bg-primarycolor'> view more</button></div>
                </div>
                <div className=' pb-10 bg-gray-200 shadow-xl   mt-4 md:mt-0 '>
                <div className=' mt-10 flex justify-center'><img className='rounded-lg' src={ServiceImage3} width={200} height={300} alt="sahar"/></div>
                <h2 className=' pt-5 text-2xl text-primarycolor font-semibold text-center'>Bank Loan</h2>
                <div className='m-5'><p className='text-black text-justify text-lg'>hami le sakne jati garchum hajur aru ta k bhannu j hos thik cha la aba mailayera garni parcha bhaneya dharana ho hamro ni</p></div>
                <div className='ml-5'><button className='p-2 rounded-lg pl-4 pr-4 text-white bg-primarycolor'> view more</button></div>
                </div>
                <div className=' pb-10 bg-gray-200 shadow-xl   mt-4 md:mt-0 '><div className=' mt-10 flex justify-center'><img className='rounded-lg' src={ServiceImage3} width={200} height={300} alt="sahar"/></div>
                <h2 className='pt-5 text-2xl text-primarycolor font-semibold text-center'>Saving</h2>
                <div className='m-5'><p className='text-black text-justify text-lg'>hami le sakne jati garchum hajur aru ta k bhannu j hos thik cha la aba mailayera garni parcha bhaneya dharana ho hamro ni</p></div>
                <div className='ml-5'><button className='p-2 rounded-lg pl-4 pr-4 text-white bg-primarycolor'> view more</button></div>
                
                </div>
                <div className='pb-10 bg-gray-200 shadow-x mt-4 md:mt-0 ' >
                    <div className=' mt-10 flex justify-center'><img className='rounded-lg' src={ServiceImage3} width={200} height={300} alt="sahar"/></div>
                    <h2 className=' pt-5 text-center text-primarycolor text-2xl font-semibold '>Credit</h2>
                    <div className='m-5'><p className='text-black text-justify text-lg'>hami le sakne jati garchum hajur aru ta k bhannu j hos thik cha la aba mailayera garni parcha bhaneya dharana ho hamro ni</p></div>
                    <div className='ml-5'><button className='p-2 rounded-lg pl-4 pr-4 text-white bg-primarycolor'> view more</button></div>
                </div>
                <div className=' pb-10 bg-gray-200 shadow-xl   mt-4 md:mt-0 '>
                <div className=' mt-10 flex justify-center'><img className='rounded-lg' src={ServiceImage3} width={200} height={300} alt="sahar"/></div>
                <h2 className=' pt-5 text-2xl text-primarycolor font-semibold text-center'>Bank Loan</h2>
                <div className='m-5'><p className='text-black text-justify text-lg'>hami le sakne jati garchum hajur aru ta k bhannu j hos thik cha la aba mailayera garni parcha bhaneya dharana ho hamro ni</p></div>
                <div className='ml-5'><button className='p-2 rounded-lg pl-4 pr-4 text-white bg-primarycolor'> view more</button></div>
                </div>
                <div className=' pb-10 bg-gray-200 shadow-xl   mt-4 md:mt-0 '><div className=' mt-10 flex justify-center'><img className='rounded-lg' src={ServiceImage3} width={200} height={300} alt="sahar"/></div>
                <h2 className='pt-5 text-2xl text-primarycolor font-semibold text-center'>Saving</h2>
                <div className='m-5'><p className='text-black text-justify text-lg'>hami le sakne jati garchum hajur aru ta k bhannu j hos thik cha la aba mailayera garni parcha bhaneya dharana ho hamro ni</p></div>
                <div className='ml-5'><button className='p-2 rounded-lg pl-4 pr-4 text-white bg-primarycolor'> view more</button></div>
                
                </div>
                
                

            </div>



        </div>
        <div>
            <li> About us</li>
            <div className='bg-green[500] w-48 h-56'>
                yo
            </div>
        </div>

        


    </div>
  )
}

export default Servicepage