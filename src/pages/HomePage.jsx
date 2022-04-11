import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCountrys } from '../store/worldSlice'
import Loader from '../components/Loader/Loader'
import CartList from '../components/CartList/CartList'

const HomePage = () => {

  const country = useSelector(state => state.world.contrys)
  const status = useSelector(state => state.world.status)
  const dispatch = useDispatch()

  useEffect(() => {
      //axios.get(ALL_COUNTRY).then(res => setCountry(res.data))
      dispatch(getCountrys())
      
  },[])


  return (
    <>
      {status === 'loading' && <Loader />}
      <CartList country={country} />
    </>
  )
}

export default HomePage