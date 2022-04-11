import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import s from '../../pages/contryPage.module.scss'

const Info = ({info}) => {

  //const info = useSelector(state => state.world.info)


  return (
    <div className={s.info}>
    <div className={s.name}>{info.name.common}</div>
    <div className={s.infoRow}>
      <div className={s.columLeft}>
        <div className={s.item}>
          <span>Native Name :</span> {info.name.official}
        </div>
        <div className={s.item}>
          <span>Population :</span> {info.population}
        </div>
        <div className={s.item}>
          <span>Region :</span> {info.region}
        </div>
        <div className={s.item}>
          <span>Sub Region :</span> {info.subregion}
        </div>
        <div className={s.item}>
          <span>Capital :</span> {info.capital}
        </div>
      </div>
      <div className={s.columRight}>
        <div className={s.item}>
          <span>Top Level Domain :</span> {info.tld.map(el => el)}
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
        info.borders && info.borders.map(el => <Link to={`/${el}`} key={el}>{el}</Link>)
      }
    </div>
  </div>
  )
}

export default Info