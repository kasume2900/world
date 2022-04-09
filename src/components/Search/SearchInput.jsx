import React, { useState } from 'react'
import { BsSearch } from "react-icons/bs";
import s from './searchInput.module.scss'

const SearchInput = () => {

  const [search,setSerch] = useState('')

  const changeSearch = (e) => setSerch(e.currentTarget.value)

  return (
    <div className={s.wrap}>
      <BsSearch style={{
        position: 'absolute',
        top: 10,
        left: 15,
        color: 'var(--colorText)'
  }} />
      <input onChange={changeSearch} value={search} placeholder='Search for a country...' type="text" />
    </div>
  )
}

export default SearchInput