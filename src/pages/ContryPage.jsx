import React, { useEffect } from 'react'
import { BsArrowLeft } from "react-icons/bs";
import s from './contryPage.module.scss'
import { Link, useNavigate, useParams,  } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import Info from '../components/Info.jsx/Info';
import Loader from '../components/Loader/Loader';
import { clearInfo, getContryByCode, getContryInfo } from '../store/worldSlice';



const ContryPage = () => {

  const info = useSelector(state => state.world.info)
  const status = useSelector(state => state.world.status)
  const {name} = useParams()
  const dispatch = useDispatch()
  const navigate = useNavigate()
  
  useEffect(() => {
    if(name && name.length > 3){
      dispatch(getContryInfo(name))
    }
    if (name.length < 4) dispatch(getContryByCode(name))
  },[name])

  const goBack = () => {
    navigate(-1)
    dispatch(clearInfo())
  }
 


  return (
    <div className='conteiner'>
      
      <div className={s.buttonWrap}>
        <a onClick={goBack}>
          <BsArrowLeft style={{ fontSize: '20px', color: 'var(--colorText)', marginRight: '10px' }} />
          Back
        </a>

      </div>
      <div className={s.contentWrap}>
        {status === 'loading' && <Loader />}
        <div className={s.image}>
          {info && <img src={info.flags && info.flags.png} alt="flags" /> }
        </div>
        {
          info && <Info info={info} />
        }
      </div>
    </div>
  )
}

export default ContryPage