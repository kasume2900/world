import React from 'react'
import Cart from './Cart'
import s from './cartList.module.scss'

const CartList = (props) => {
  return (
    <div className='conteiner'>
      <div className={s.cartsWrapper}>
        {
          props.country.map(el => <Cart key={el.name} {...el} />)
        }
      </div>
    </div>
  )
}

export default CartList