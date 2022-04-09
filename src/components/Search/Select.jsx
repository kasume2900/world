import React, { useEffect, useRef, useState } from 'react'
import s from './select.module.scss'


const arr = ['Africa','Amirica','Asia','Europe','Oceania']


const Select = () => {

  const [vizible,setVizible] = useState(false)
  const [coutry,setCountry] = useState('')
  const popapRef = useRef(null)

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
    setCountry(e.target.innerText)
    setVizible(false)
  }

  return (
    <div className={s.wrapper}>
      <div ref={popapRef} onClick={toggleVizible} className={s.top}>
        <div className={s.title}>{coutry ? coutry : 'Filter by Region'}</div>
        <div className={vizible ? `${s.active}` : `${s.icon}`}></div>
      </div>
      <div className={vizible ? s.bottomVizible : s.bottomBlock}>
        {arr.map(el => <div onClick={selectCounty} key={el} className={s.item}>{el}</div>)}
      </div>
      
    </div>
  )
}

export default Select