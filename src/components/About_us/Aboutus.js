import React from 'react'
import Image from "../../assets/images/happy2.jpg"

const Aboutus = () => {
  return (
    <div>
        <div className=' w-full none md:flex flex-row'>
            <div className=' w-full md:w-1/2 bg-gray-100'>
                <h2 className='pt-10 pl-4 text-primarycolor  font-bold text-3xl'>About US</h2>
                <div className='pt-5 pl-4'>
                <p className='text-justify pr-2 text-l font-sans'> 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis elit eros, 
  finibus nec placerat vitae, pharetra eget nunc. 
  Duis orci lorem, sollicitudin at rutrum sed, 
  porttitor in enim. Aenean et leo libero. 
  Donec suscipit, lorem vel pretium 
  tempus, justo justo vehicula odio,
   non mollis lorem nisi vitae magna. 
  Donec tortor ex, tincidunt eget ex vel,
   luctus iaculis lorem. Etiam vel 
  nulla commodo nulla cursus aliquet eu et eros. 
  Vestibulum ante ipsum primis in faucibus orci
  luctus et ultrices posuere cubilia curae; 
  Nullam aliquet mi eu
  diam pellentesque, vel tristique lorem aliquam. 
  Donec eu dignissim erat,
  id fermentum sem. In sit amet cursus enim.
  Vestibulum nisi nunc, tristique imperdiet hendrerit vel,
  maximus at nisi. Lorem ipsum dolor sit amet, consectetur adipiscing 
  elit. Fusce condimentum urna ex, et tempor nisl vulputate nec.
  Nunc sit amet neque vel metus cursus mattis 
  vitae vel urna. In consectetur non mi quis maximus.</p>
                </div>
            </div>
            <div className=' w-full md:w-1/2'> 
            <img src={Image}  alt= "sahar"/>
            </div>
        </div>
    </div>
  )
}

export default Aboutus