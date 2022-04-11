import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
import { ALL_COUNTRY } from '../API/config'

const initialState = {
  contrys: [],
  info : {},
  status: null,
  error : null,
}

export const getCountrys = createAsyncThunk(
  'world/getCountrys',
  async function(_,{rejectWithValue}) {
    try {
      //axios.get(ALL_COUNTRY).then(res => res.data)
      const res = await fetch(ALL_COUNTRY)
      if(!res.ok) throw new Error('Server Error')
      const data = await res.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)


export const worldSlice = createSlice({
  name: 'world',
  initialState,
  reducers: {
    getInfo(state,action){
      const contryInfo = state.contrys.find(el => el.name === action.payload)
      state.info = contryInfo
    },
   
  },
  extraReducers : {
    [getCountrys.pending] : (state) => {
      state.status = 'loading'
      state.error = null
    },
    [getCountrys.fulfilled] : (state, action) => {
      state.status = 'resolved'
      state.contrys = action.payload
    },
    [getCountrys.rejected] : (state) => {},
  }
  
})

// Action creators are generated for each case reducer function
export const { getInfo } = worldSlice.actions

export default worldSlice.reducer