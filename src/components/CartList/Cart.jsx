import React from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { getContryInfo } from '../../store/worldSlice'
import s from './cart.module.scss'

const Cart = (props) => {

  const dispatch = useDispatch()
  const clickByContry = () => {
    dispatch(getContryInfo(props.name.common))
  }

  return (
    <Link onClick={clickByContry} to={`/${props.name.common}`} >
      <div className={s.wrapper}>
      <div className={s.image}>
        <img src={props.flags.png} alt="flag" />
      </div>
      <div className={s.bottomWrap}>
        <div className={s.name}>{props.name.common}</div>
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