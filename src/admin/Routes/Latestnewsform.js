import React from 'react'
import { useState } from 'react'
import { Addnews } from '../../redux/action/LatestnewsSlice'


const Latestnewsform = () => {
   //   const [Formstate, setFormState] = useState({
   //      email:"",
   //      password:"",

   //   })
   //   let dispatch = useDispatch();
   //   const {email, password} = Formstate

   //   function handlechange(e){
   //      const {name, value} = e.target;
   //        setFormState({
   //           ...Formstate,
   //          [name]:value
   //        })

   //   }

     function SubmitForm(e){
         e.preventDefault()
          let email = document.getElementById("email").value
          let password = document.getElementById("pass").value
           let Formstate = {
            email:email,
            password:password,
           }
          localStorage.setItem('dummy', JSON.stringify(Formstate));
         
         console.log("yo")


     }
  return (
    <div>
      <h1>Add news</h1>
       <div>
         <div>
            <form onSubmit={SubmitForm} >
                <div>
                    <div>
                    <label> title name</label><br/>
                     <input  className='rounded-lg border-primarycolor border-2' type="text" id= "email" name="email"   />
                    </div>
                     <div>
                     <label> Descriptions</label><br/>
                     <input  className='rounded-lg border-primarycolor border-2' type="text" id="pass"  name="password"  />
                     </div>   
                     <button>ADD news</button>
                </div>
            </form>
         </div>
         <div>
            {/* <h1>{Formstate.email}</h1>
            <h1>{Formstate.password}</h1> */}
         </div>
       </div>
      

    </div>
  )
}

export default Latestnewsform