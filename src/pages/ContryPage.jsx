import React from 'react'
import { BsArrowLeft } from "react-icons/bs";
import s from './contryPage.module.scss'
import { Link,  } from 'react-router-dom'
import { useSelector } from 'react-redux'

import Info from '../components/Info.jsx/Info';



const ContryPage = () => {

  const info = useSelector(state => state.world.info)
  
 
  

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
          {status === 'resolved' && <img src={info.flags && info.flags.png} alt="flags" /> }
        </div>
        {
          status === 'resolved' && <Info info={info} />
        }
      </div>
    </div>
  )
}

export default ContryPage