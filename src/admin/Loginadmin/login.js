import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginreducer } from '../../redux/action/LoginSlice'
import { useNavigate } from 'react-router-dom'


const Login = () => {
    let navigate = useNavigate();
    const loginselect = useSelector(function(state){
       return state.loginreducer.login
    })

    console.log(loginselect);

    const dispatch = useDispatch();

    function handleform(e){
        e.preventDefault();
        localStorage.setItem('state', 'true')
        dispatch(loginreducer());
        navigate("/dashboard");

        alert("thank you for submitting")
        
        



    }




  return (
    <div className='bg-gray-200 h-screen' >
        <div className='flex justify-center'>
          
            <div className='mt-28'>
            <h1 className='text-center text-primarycolor text-3xl font-semibold'>Login</h1>
                <form onSubmit={handleform}>
                    <div className='mt-3'>
                        <label className='text-primarycolor text-xl font-medium'>Email:</label><br/>
                         <input className='border-primarycolor border-2 w-64 h-9 border-red' type="text" name = "email" required={true} />
                         
                    </div>
                    <div className='mt-3'>
                        <label className='text-primarycolor font-medium text-xl'>Password:    </label><br/>
                         <input className='border-primarycolor border-2 h-9 border-red' type="text" name = "email"  required={true} />
                         
                    </div>
                    <div className='mt-3'>
                        <button  className='p-1.5 pl-4 rounded-lg pr-4 bg-primarycolor text-white'>Login</button>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Login