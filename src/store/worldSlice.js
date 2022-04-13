import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { ALL_COUNTRY, CODE, REGION, SEARCH_BY_NAME } from '../API/config'

const initialState = {
  contrys: [],
  info : {},
  search : '',
  contry : null,
  status: null,
  error : null,
}

// Helpers
const setPanding = (state) => {
  state.status = 'loading'
  state.error = null
} 

const setError = (state,action) => {
  state.status = 'rejected'
  state.error = action.payload
}

// thunc
export const getCountrys = createAsyncThunk(
  'world/getCountrys',
  async function(_,{rejectWithValue}) {
    try {
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

export const getContryByCode = createAsyncThunk(
  'world/getContryByCode',
  async function(code,{rejectWithValue}){
    try {
      const res = await fetch(CODE + code)
      if(!res.ok) throw new Error('Server Error CODE - error')
      const data = await res.json()
      return data
    } catch (error) {
      return rejectWithValue(error.message)
    }
  }
)

export const searchByName = createAsyncThunk(
  'world/searchByName',
  async function(_,{rejectWithValue,getState}){
    try {
      const name = getState().world.search
      const res = await fetch(SEARCH_BY_NAME + name)
      if(!res.ok) throw new Error("Server error search not found ")
      const data = await res.json()
      return data
    } catch (error) {
      rejectWithValue(error.message)
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
    setSearch(state,action){
      state.search = action.payload
    },
    
  },
  extraReducers : {
    [getCountrys.pending] : setPanding,
    [getCountrys.fulfilled] : (state, action) => {
      state.status = 'resolved'
      state.contrys = action.payload
    },
    [getCountrys.rejected] : setError,

    [getContryInfo.pending] : setPanding,
    [getContryInfo.fulfilled] : (state,action) => {
      state.status = 'resolved'
      state.info = action.payload[0]
    },
    [getContryInfo.rejected] : setError,

    [filterByRegion.pending] : setPanding,
    [filterByRegion.fulfilled] : (state,action) => {
      state.status = 'resolved'
      state.contrys = action.payload
    },
    [filterByRegion.rejected] : setError,

    [getContryByCode.pending] : setPanding,
    [getContryByCode.fulfilled] : (state,action) => {
      state.status = 'resolved'
      state.info = action.payload[0]
    },
    [getContryByCode.rejected] : setError,

    [searchByName.pending] : setPanding,
    [searchByName.fulfilled] : (state,action) => {
      state.status = 'resolved'
      state.contrys = action.payload
    },
    [searchByName.rejected] : setError,

    
  }
  
})

// Action creators are generated for each case reducer function
export const { getInfo ,setContry, setSearch} = worldSlice.actions

export default worldSlice.reducer