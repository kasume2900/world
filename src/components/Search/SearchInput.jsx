import React from 'react'
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from 'react-redux';
import { searchByName, setSearch } from '../../store/worldSlice';
import s from './searchInput.module.scss'

const SearchInput = () => {

  const search = useSelector(state => state.world.search)
  const dispatch = useDispatch()
  const changeSearch = (e) => {
    dispatch(setSearch(e.target.value))
    dispatch(searchByName())
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