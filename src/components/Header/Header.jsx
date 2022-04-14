import React, { useEffect, useState } from 'react'
import s from './header.module.scss'
import { BsMoon } from "react-icons/bs";
import { Link } from 'react-router-dom';

const Header = () => {

  const [theme,setTheme] = useState('dark')

  useEffect(() => {
    document.body.setAttribute('data-theme',theme)
  },[theme])

  const toogleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  

  return (
    <header>
      <div className="conteiner">
        <div className={s.wrap}>
          <Link to='/' className={s.link} >Where in the world ?</Link>
          <div onClick={toogleTheme} className={s.theme}>
            {
              theme === 'light'
                ? <BsMoon fill='#000' size='16px' />
                : <BsMoon fill='#fff' size='16px' />
            }
            {
              theme === 'light'
                ? <p>Dark Mode</p>
                : <p>light Mode</p>
            }
            
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header