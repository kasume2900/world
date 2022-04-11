
import './App.scss';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';


import HomePage from './pages/HomePage';
import ContryPage from './pages/ContryPage';


const App = () => {
 

  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/:name' element={<ContryPage />} />
      </Routes>
    </>
  );
}

export default App;
