import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../slices/auth/authSlice';
import courseReducer from '../slices/course/courseSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    course: courseReducer
  },
});