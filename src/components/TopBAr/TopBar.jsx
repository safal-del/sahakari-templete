import React from 'react'
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram,FaTwitter } from 'react-icons/fa';


const TopBar = () => {
  return (
    <div>
        <div className='topbardiv  h-10 bg-primarycolor'>
            <div className='pt-2  flex justify-between'>
                <p className='text-textcolor'>Reg-no:123456789</p>
                <div className='flex w-32 justify-evenly'>
                    <FaFacebookF style={{color:"white", fontSize:"18"}}/>
                    <FaInstagram style={{color:"white",fontSize:"18"}}/>
                    <FaTwitter style={{color:"white",fontSize:"18"}}/>

                </div>
                
            </div> 
            {/* end of topbardiv*/}
            </div>
    </div>
  )
}

export default TopBar