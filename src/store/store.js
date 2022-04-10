import { configureStore } from '@reduxjs/toolkit'
import worldReducer from './worldSlice'

export const store = configureStore({
  reducer: {
    world : worldReducer,
  },
})