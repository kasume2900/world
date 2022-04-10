

import { useEffect,  } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import './App.scss';
import CartList from './components/CartList/CartList';
import Header from './components/Header/Header';
import Loader from './components/Loader/Loader';
import Search from './components/Search/Search';
import { getCountrys } from './store/worldSlice';

function App() {
  const country = useSelector(state => state.world.contrys)
  const status = useSelector(state => state.world.status)
  const dispatch = useDispatch()

  useEffect(() => {
      //axios.get(ALL_COUNTRY).then(res => setCountry(res.data))
      dispatch(getCountrys())
      
  },[])

  return (
    <>
      <Header />
      <Search />
      {status === 'loading' && <Loader />}
      <CartList country={country} />
    </>
  );
}

export default App;
