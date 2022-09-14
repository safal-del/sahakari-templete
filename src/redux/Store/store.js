import { Logins } from "../action/LoginSlice";
import { LatestnewsReducer } from "../action/LatestnewsSlice";
import { configureStore } from "@reduxjs/toolkit"


const Store = configureStore({
    reducer:{
        loginreducer:Logins,
        latestnewsadd:LatestnewsReducer,
    }
})
export default Store;