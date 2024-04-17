import { createSlice } from "@reduxjs/toolkit";

const stateSlice = {
  token: null,
  userCourses: [],
};
console.log(stateSlice.userCourses);
const authSlice = createSlice({
  name: "auth",
  initialState: stateSlice,
  reducers: {
    setCredentials: (state, action) => {
      const { token } = action.payload;
      return {
        ...state,
        token,
      };
    },
    logOut: (state) => {
      return {
        ...state,
        token: null,
        userCourses: [],
      };
    },
    setUserCourses: (state, action) => {
      return {
        ...state,
        userCourses: [...state.userCourses, action.payload],
      };
    },
  },
});

export const { setCredentials, logOut, setUserCourses } = authSlice.actions;

export default authSlice.reducer;
