import { createSlice } from "@reduxjs/toolkit";

const stateSlice = {
    token:null,
    verify:false
}

const authSlice = createSlice({
    name:'auth',
    initialState:stateSlice,
    reducers:{
        setCredentials: (state,action)=>{
            const {token} = action.payload
            return {
                ...state,
                token
            };
        },
        logOut: (state)=>{
            return {
                ...state,
                token: null
            };
        },
        setVerify : (state,action)=>{
            const {verify} = action.payload
            return {
                ...state,
                verify
            };
        }
    }
})

export const {
    setCredentials,
    logOut,
    setVerify
} = authSlice.actions;


export default authSlice.reducer;