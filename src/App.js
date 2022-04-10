
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ALL_COUNTRY } from './API/config';
import './App.scss';
import CartList from './components/CartList/CartList';
import Header from './components/Header/Header';
import Search from './components/Search/Search';

function App() {

  const [country,setCountry] = useState([])

  useEffect(() => {
      axios.get(ALL_COUNTRY).then(res => setCountry(res.data))
  },[])

  return (
    <>
      <Header />
      <Search />
      <CartList country={country} />
    </>
  );
}

export default App;
