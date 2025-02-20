import  { createSlice } from "@reduxjs/toolkit";

const initialState ={
    users:[],
};

const userSlice = createSlice({
    name:'users',
    initialState,
    reducers:{
        addUser:(state,action)=>{
            state.users= [...state.users,action.payload] 
        },
    }
})

export default userSlice.reducer;
export const {addUser} = userSlice.actions;