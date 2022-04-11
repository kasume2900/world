import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ALL_COUNTRY, REGION } from '../API/config'

const initialState = {
  contrys: [],
  info : null,
  contry : null,
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

export const getContryInfo = createAsyncThunk(
  'world/getContryInfo',
  async function(name,{rejectWithValue}){
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${name}?fullText=true`)
      if(!res.ok) throw new Error('Server Error Info contry...')
      const data = await res.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const filterByRegion = createAsyncThunk(
  'world/filterByRegion',
  async function(_,{rejectWithValue,getState}) {
    try {
      const res = await fetch(REGION + getState().world.contry)
      if(!res.ok) throw new Error('Server Error Region FAILD ')
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
      const contryInfo = state.contrys.find(el => el.name.common === action.payload)
      state.info = contryInfo
    },
    
    setContry(state,action){
      state.contry = action.payload
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

    [getContryInfo.pending] : (state) => {
      state.status = 'loading'
      state.error = null
    },
    [getContryInfo.fulfilled] : (state,action) => {
      state.status = 'resolved'
      state.info = action.payload[0]
    },
    [getContryInfo.rejected] : (state) => {},

    [filterByRegion.pending] : (state) => {
      state.status = 'loading'
      state.error = null
    },
    [filterByRegion.fulfilled] : (state,action) => {
      state.status = 'resolved'
      state.contrys = action.payload
    },
    [filterByRegion.rejected] : (state) => {},
    
  }
  
})

// Action creators are generated for each case reducer function
export const { getInfo ,setContry} = worldSlice.actions

export default worldSlice.reducer