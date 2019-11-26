import React from 'react'

import './cart-item.scss'

const CartItem = ({ item: { imageUrl, name, price, quantity }}) =>(

    <div className='cart-item'>
        <img src={imageUrl} alt='tem'/>
        <div>
            <span className='name'>{name}</span>
            <span className='price'>{quantity}x${price}</span>
        
        </div>
    
    </div>
)

export default CartItem