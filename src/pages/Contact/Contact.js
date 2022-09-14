import { AiOutlineMail } from 'react-icons/ai';
import { FaLocationArrow, FaPhoneAlt } from 'react-icons/fa';
import Background from '../../components/component/Background/Background';
import Footers from '../../components/Footer/Footer';
import NavBar from '../../components/NavigationBar/NavBar';
import TopBar from '../../components/TopBAr/TopBar';
import {useJsApiLoader, GoogleMap} from "@react-google-maps/api"


function Contact() {  

  function handlesubmit(e){
    e.preventDefault();
    const fname = document.getElementById("name").value;



    alert("thank you for submiting" + fname);

  }



  const {isLoaded} = useJsApiLoader({
    googleMapsApiKey:"AIzaSyC3EWdo7uJP_ZNiHoPgoy7vSN1EaOq1Fxw"
  })
  const center ={lat:48, lag:45}



  return (
    <div>
      <TopBar/>
      <NavBar/>
      <Background/>
      
      <div className='pr-5 pl-5 '>
        <h2 className=' text-center pt-5 pb-5 text-primarycolor text-3xl font-bold'>Contact Us</h2>
      </div>
      <div className=' bg-gray-200 md:flex pb-5 pt-5 pr-5 pl-5' >
      
      <div className='formdiv w-full md:w-1/2'>
       <form onSubmit={handlesubmit}>
       <div className='Nameinputdiv'>
       <div>
          <label className='text-primarycolor text-xl font-medium'>Name</label>
          </div>
       <div>
        <input id="name" className='  border-2  border-primarycolor rounded-lg w-full md:w-96 h-10' type = "text"   required ={true} />
       </div>
       </div>
       <div className='mt-4 emailinput'>
       <div>
        <label className='text-primarycolor text-xl font-medium'>Email</label>
        </div>
       
        <div>
          <input className='border-2 border-primarycolor rounded-lg w-full md:w-96 h-10' type= "email"  required ={true}/>
          </div>
       </div>
       <div className='mt-4 phonenumber'>
       <div>
        <label className='text-primarycolor text-xl font-medium'>Phone.no</label>
        </div>
       
        <div>
          <input className='border-2 border-primarycolor rounded-lg w-full md:w-96 h-10' type= "number"  required ={true}/>
          </div>
         

       </div>
       <div className='mt-4 Textarea'>
       <div>
        <label className='text-primarycolor text-xl font-medium'>Message</label>
        </div>
       
        <div>
          <textarea className='border-2 border-primarycolor rounded-lg w-full md:w-96 h-28' type = "textarea"  required ={true}/>
          </div>
         

       </div>
       <div className='mt-4 buttondiv'>
        <button className='p-2 pl-4 pr-4 text-white rounded-lg bg-primarycolor' type='submit'>submit</button>
       </div>
       

       
      
      
      </form>
      </div>

      <div className='pt-10 pb-10 picturediv w-full md:pl-20 md:pt-20 md:w-1/2'>
         <div className='flex w-[63%] items-center justify-start md:justify-between'>
          <div className='emailcon'>
            <AiOutlineMail className='mt-4' style={{fontSize:"60", color:"#1b378c" }}/>
          </div>
          <div className='email text-primarycolor'>
            <h2 className='text-3xl pt-4 font-bold ml-10 md:ml-0  '>bugbyte@gmail</h2>


          </div>

         </div>
         <div className='flex  w-[63%] items-center justify-start md:justify-between'>
          <div className=' emailcon'>
            <FaLocationArrow className='mt-4' style={{fontSize:"50", color:"#1b378c" }}/>
          </div>

          <div className='email text-primarycolor'>
            <h2 className='text-3xl pt-4 font-bold ml-10 md:ml-0'>bugbyte@gmail</h2>


          </div>

         </div>
         <div className='  flex w-[63%] items-center justify-start md:justify-between'>
          <div className='emailcon'>
            <FaPhoneAlt className='mt-4  ' style={{fontSize:"50", color:"#1b378c" }}/>
          </div>
          
          <div className='email text-primarycolor'>
            <h2 className='text-3xl pt-4 font-bold ml-10 md:ml-0'>bugbyte@gmail</h2>


          </div>

         </div>
          

          

        </div>
        
        
      </div>
      {!isLoaded? <div>loading</div> :<div className='w-full'>
          <GoogleMap center={center} zoom={15} mapContainerStyle ={{width:"100%",height:"300px"}} ></GoogleMap>
        </div>}
      <Footers />


      




     
      
  
      

    </div>
  )
}

export default Contact;