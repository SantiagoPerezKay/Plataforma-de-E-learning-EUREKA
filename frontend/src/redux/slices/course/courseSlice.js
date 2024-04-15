import { createSlice } from "@reduxjs/toolkit";

const stateSlice = {
    curso:null
}

const courseSlice = createSlice({
    name:'course',
    initialState:stateSlice,
    reducers:{
        setCourse: (state,action)=>{
            const curso = action.payload
            return {
                ...state,
                curso
            };
        }
    }
})

export const {
    setCourse
} = courseSlice.actions;


export default courseSlice.reducer;