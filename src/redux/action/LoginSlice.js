import { createSlice } from "@reduxjs/toolkit"
import { useEffect } from "react"

const initialstate ={
    login:"",
}

   const LoginSlice = createSlice({
    name:"login",
    initialState:initialstate,
    reducers:{
        loginreducer:(state, action)=>{
            let payld = localStorage.getItem('state')
            state.login =payld


        }

    }

 })

 



 export  const Logins= LoginSlice.reducer
 export const {loginreducer}= LoginSlice.actions