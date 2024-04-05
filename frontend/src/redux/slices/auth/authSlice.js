import { createSlice } from "@reduxjs/toolkit";

const stateSlice = {
    token:null
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
        }
    }
})

export const {
    setCredentials,
    logOut
} = authSlice.actions;


export default authSlice.reducer;