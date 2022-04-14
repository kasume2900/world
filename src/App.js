
import './App.scss';
import {Route, Routes} from 'react-router-dom'
import Header from './components/Header/Header';


import HomePage from './pages/HomePage';
import ContryPage from './pages/ContryPage';
import NotFoundPage from './pages/NotFoundPage';


const App = () => {
 

  return (
    <>
      <Header />
      
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path='contry/:name' element={<ContryPage />} />
      </Routes>
    </>
  );
}

export default App;
