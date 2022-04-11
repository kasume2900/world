import React, { useEffect } from 'react'
import { BsArrowLeft } from "react-icons/bs";
import s from './contryPage.module.scss'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getContryInfo, getInfo } from '../store/worldSlice'
import Info from '../components/Info.jsx/Info';



const ContryPage = () => {

  const dispatch = useDispatch()
  const { name } = useParams()
  const info = useSelector(state => state.world.info)
  
  useEffect(() => {
    dispatch(getContryInfo(name))
  },[])
  

  const status = useSelector(state => state.world.status)
  return (
    <div className='conteiner'>
      
      <div className={s.buttonWrap}>
        <Link to="/">
          <BsArrowLeft style={{ fontSize: '20px', color: 'var(--colorText)', marginRight: '10px' }} />
          Back
        </Link>

      </div>
      <div className={s.contentWrap}>
        <div className={s.image}>
          {status === 'resolved' && <img src={info.flags.png} alt="flags" /> }
        </div>
        {
          status === 'resolved' && <Info info={info} />
        }
      </div>
    </div>
  )
}

export default ContryPage