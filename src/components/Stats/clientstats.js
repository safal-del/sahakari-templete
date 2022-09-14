import React from 'react'

function Stats() {
  return (
    <div className='flex flex-col lg:flex-between bg-primarycolor mt-10 m-auto shadow-4xl mb-10 lg:flex-row lg:w-[900px] text-center'>
        <div className='bg-white p-5 m-auto mt-5 mb-5'>
            <h1 className='text-[#6e6e6e] font-bold text-[42px] text-center'>100+</h1>
            <h5 className='text-[#6e6e6e] font-bold text text-center'>Clients</h5>
        </div>
        <div className='bg-white p-5 m-auto mt-5 mb-5'>
            <h1 className='text-[#6e6e6e] font-bold text-[42px] text-center'>400+</h1>
            <h5 className='text-[#6e6e6e] font-bold text text-center'>Services</h5>
        </div>
        <div className='bg-white p-5 m-auto mt-5 mb-5'>
            <h1 className='text-[#6e6e6e] font-bold text-[42px] text-center'>25</h1>
            <h5 className='text-[#6e6e6e] font-bold text text-center'>Members</h5>
        </div>
        <div className='bg-white p-5 m-auto mt-5 mb-5'>
            <h1 className='text-[#6e6e6e] font-bold text-[42px] text-center'>5+</h1>
            <h5 className='text-[#6e6e6e] font-bold text text-center'>Branches</h5>
        </div><div className='bg-white p-5 m-auto mt-5 mb-5'>
        <h1 className='text-[#6e6e6e] font-bold text-[42px] text-center'>12%</h1>
        <h5 className='text-[#6e6e6e] font-bold text text-center'>Interest</h5>
    </div>
    </div>
  )
}

export default Stats