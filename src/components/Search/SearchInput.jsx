import React from 'react'
import { BsSearch } from "react-icons/bs";
import s from './searchInput.module.scss'
const SearchInput = () => {
  return (
    <div className={s.wrap}>
      <BsSearch style={{
        position: 'absolute',
        top: 10,
        left: 15,
        color: '#fff'
  }} />
      <input placeholder='Search for a country...' type="text" />
    </div>
  )
}

export default SearchInput