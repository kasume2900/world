import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountrys } from '../store/worldSlice'
import Loader from '../components/Loader/Loader'
import CartList from '../components/CartList/CartList'
import Search from '../components/Search/Search'

const HomePage = () => {

  const country = useSelector(state => state.world.contrys)
  const status = useSelector(state => state.world.status)
  const dispatch = useDispatch()

  useEffect(() => {
    if(!country.length) dispatch(getCountrys())
      
  },[dispatch])


  return (
    <>
      <Search />
      {status === 'loading' && <Loader />}
      <CartList country={country} />
    </>
  )
}

export default HomePage