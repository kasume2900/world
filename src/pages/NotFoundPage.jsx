import React from 'react'
import s from './notFounfPage.module.scss'
import panda from './image/panda.png'

const NotFoundPage = () => {
  return (
    <div className='conteiner'>
      <div className={s.wrapper}>
        <div className={s.row}>
          <div className={s.title}>404</div>
          <div className={s.text}>Not Found</div>
        </div>
      </div>
    </div>
  )
}

export default NotFoundPage