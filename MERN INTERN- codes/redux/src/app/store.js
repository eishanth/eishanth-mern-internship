import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../slices/userslicer"; 

const store = configureStore({
    reducer:{
        userinfo:userReducer,
    }
})

export default store;