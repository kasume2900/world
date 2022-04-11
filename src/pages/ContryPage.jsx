import React, { useEffect } from 'react'
import s from './contryPage.module.scss'
import { Link, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { getInfo } from '../store/worldSlice'


const ContryPage = () => {

  const {name} = useParams()
  const dispatch = useDispatch()

  const info = useSelector(state => state.world.info)

  useEffect(() => {
    dispatch(getInfo(name))
  },[name,dispatch])

  return (
    <div className='conteiner'>
      <div className={s.buttonWrap}>
        <Link to="/">Back</Link>
      </div>
      <div className={s.contentWrap}>
        <div className={s.image}>
           <img src={info.flags && info.flags.png} alt="flag" />
        </div>
        <div className={s.info}>
          <div className={s.name}>{info.name}</div>
          <div className={s.infoRow}>
            <div className={s.columLeft}>
              <div className={s.item}>
                <span>Native Name :</span> {info.nativeName}
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
                <span>Top Level Domain :</span> {info.topLevelDomain && info.topLevelDomain.map(el => el)}
              </div>
              <div className={s.item}>
                <span>Currencies :</span> {info.currencies && info.currencies.map(el => el.name)}
              </div>
              <div className={s.item}>
                <span>Languages :</span> {info.languages && info.languages.map(el => el.name)} 
              </div>
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
    </div>
  )
}

export default ContryPage