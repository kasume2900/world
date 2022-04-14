import React, { useEffect } from 'react'
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { getCountrys, searchByName, setSearch, setSearchBool } from '../../store/worldSlice';
import s from './searchInput.module.scss'

const SearchInput = () => {

  const search = useSelector(state => state.world.search)
  const searchBool = useSelector(state => state.world.searchBool)
  const dispatch = useDispatch()

  useEffect(() => {
    if(searchBool === 'endSearch') dispatch(getCountrys())
  },[searchBool])

  const changeSearch = (e) => {
    dispatch(setSearch(e.target.value))
    dispatch(searchByName())
    dispatch(setSearchBool())
  }

  return (
    <div className={s.wrap}>
      <BsSearch style={{
        position: 'absolute',
        top: 19,
        left: 15,
        color: 'var(--colorText)'
  }} />
      <input onChange={changeSearch} value={search} placeholder='Search for a country...' type="text" />
    </div>
  )
}

export default SearchInput