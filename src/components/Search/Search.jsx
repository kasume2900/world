import React from 'react'
import SearchInput from './SearchInput'
import Select from './Select'
import s from './search.module.scss'

const Search = () => {
  return (
    <div className='conteiner'>
      <div className={s.wrap}>
        <SearchInput />
        <Select />
      </div>
    </div>
  )
}

export default Search