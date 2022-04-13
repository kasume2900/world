import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import s from '../../pages/contryPage.module.scss'
import { getContryByCode } from '../../store/worldSlice'

const Info = ({info}) => {

  //const info = useSelector(state => state.world.info)
  const dispatch = useDispatch()

  const handleClick = (e) => {
    dispatch(getContryByCode(e.target.innerText))
  }


  return (
    <div className={s.info}>
    <div className={s.name}>{ info && info.name.common}</div>
    <div className={s.infoRow}>
      <div className={s.columLeft}>
        <div className={s.item}>
          <span>Native Name :</span> {info && info.name.official}
        </div>
        <div className={s.item}>
          <span>Population :</span> { info && info.population}
        </div>
        <div className={s.item}>
          <span>Region :</span> {info && info.region}
        </div>
        <div className={s.item}>
          <span>Sub Region :</span> {info && info.subregion}
        </div>
        <div className={s.item}>
          <span>Capital :</span> { info && info.capital}
        </div>
      </div>
      <div className={s.columRight}>
        <div className={s.item}>
          <span>Top Level Domain :</span> {info && info.tld.map(el => el)}
        </div>
        <div className={s.item}>
          <span>Currencies :</span> {info.currencies && Object.keys(info.currencies).map(el => el)}
        </div>
        <div className={s.item}>
          <span>Languages :</span> {info.languages && Object.keys(info.languages).map(el => el)  }
        </div>
      </div>
    </div>
    <div className={s.borderContries}>
      <span>Border Contries :</span>
      {
        info.borders && info.borders.map(el => <Link onClick={handleClick} className={s.link} to={`/${el}`} key={el}>{el}</Link>)
      }
    </div>
  </div>
  )
}

export default Info