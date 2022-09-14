import { createSlice } from "@reduxjs/toolkit"

const initialstate={
    LatestNews:[]
   
}   

const LatestNewsSlice = createSlice({
    name: "Latestnewsslice",
    initialState:initialstate,
   reducers:{
     Addnews:(state, action)=>{
        
        state.LatestNews.push(action.payload);
         
     }
   }
    
})

export const LatestnewsReducer = LatestNewsSlice.reducer;
export  const{Addnews} = LatestNewsSlice.actions;