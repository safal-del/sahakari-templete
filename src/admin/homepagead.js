

import Latestnewsform from "./Routes/Latestnewsform";
import AboutusForm from "./Routes/AboutusForm";
import Servicepageform from "./Routes/Servicepageform";
import { useState } from "react";


const Homepage = () => {
   const [states,setState] = useState(<Latestnewsform/>)

  
 
 
  return (
    <div>
      <div className="flex justify-between">
        <div className='headingsec'>
            <h1 className='text-center '>Dashboard</h1>
            <div>
              <div>
                <button onClick={()=>setState(<AboutusForm/>)}>About us</button>
              </div>
              <div>
                <button onClick={()=>setState(<Latestnewsform/>)}>latest news</button>
              </div>
              <div>
                <button onClick={()=>{setState(<Servicepageform/>)}}>Services</button>
              </div>
            </div>

        </div>
        <div>
          {states}
        </div>

        </div>
       

    </div>
  )
}

export default Homepage;