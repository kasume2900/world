import React from 'react'
import { Link } from 'react-router-dom'
import s from './cart.module.scss'

const Cart = (props) => {
  return (
    <Link to={`/${props.name}`} >
      <div className={s.wrapper}>
      <div className={s.image}>
        <img src={props.flags.png} alt="flag" />
      </div>
      <div className={s.bottomWrap}>
        <div className={s.name}>{props.name}</div>
        <div className={s.population}>
          <span>Population :</span> {props.population}
        </div>
        <div className={s.region}>
          <span>Region :</span> {props.region}
        </div>
        <div className={s.capital}>
          <span>Capital :</span> {props.capital}
        </div>
      </div>
    </div>
    </Link>
  )
}

export default Cart