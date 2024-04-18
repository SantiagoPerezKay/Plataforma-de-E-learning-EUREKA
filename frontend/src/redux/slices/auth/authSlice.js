import { createSlice } from "@reduxjs/toolkit";

const stateSlice = {
  token: null,
  userCourses: [],
};

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
      if (Array.isArray(action.payload)) {
        return {
          ...state,
          userCourses: action.payload.map(({ course }) => course),
        };
      }

      let filteredArray = [...state.userCourses, action.payload].filter(
        (course, index, self) =>
          index ===
          self.findIndex(
            (c) =>
              c.id === course.id &&
              c.title === course.title &&
              c.image === course.image
          )
      );
      return {
        ...state,
        userCourses: filteredArray,
      };
    },
  },
});

export const { setCredentials, logOut, setUserCourses } = authSlice.actions;

export default authSlice.reducer;
