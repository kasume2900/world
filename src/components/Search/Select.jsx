import React, { useEffect, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { filterByRegion, setContry } from '../../store/worldSlice'
import s from './select.module.scss'


const arr = ['Africa','Americas','Asia','Europe','Oceania']


const Select = () => {

  const [vizible,setVizible] = useState(false)
  //const [coutry,setCountry] = useState('')
  const popapRef = useRef(null)

  const dispatch = useDispatch()

  const contry = useSelector(state => state.world.contry)

  useEffect(() => {
    

    const handleClick = (e) => {
      if(!e.path.includes(popapRef.current)) {
        setVizible(false)
      }
    }

    const body = document.body
    
    body.addEventListener( "click" , handleClick)

    return () => {
      body.removeEventListener("click" , handleClick)
  }
    
  },[])
 

  
  const toggleVizible = () => {
    setVizible(!vizible)
  }
  const selectCounty = (e) => {
    dispatch(setContry(e.target.innerText))
    setVizible(false)
    
    dispatch(filterByRegion())
  }

  return (
    <div className={s.wrapper}>
      <div ref={popapRef} onClick={toggleVizible} className={s.top}>
        <div className={s.title}>{contry ? contry : 'Filter by Region'}</div>
        <div className={vizible ? `${s.active}` : `${s.icon}`}></div>
      </div>
      <div className={vizible ? s.bottomVizible : s.bottomBlock}>
        {arr.map(el => <div onClick={selectCounty} key={el} className={s.item}>{el}</div>)}
      </div>
      
    </div>
  )
}

export default Select