import { createSlice } from "@reduxjs/toolkit";

const stateSlice = {
    user:null,
    token:null
}

const authSlice = createSlice({
    name:'auth',
    initialState:stateSlice,
    reducers:{
        setCredentials: (state,action)=>{
            const {user,token} = action.payload
            return {
                ...state,
                user,
                token
            };
        },
        logOut: (state)=>{
            return {
                ...state,
                user: null,
                token: null
            };
        }
    }
})

export const {
    setCredentials,
    logOut
} = authSlice.actions;


export default authSlice.reducer;