import React from 'react'
import './ProductListItem.css'

const ProductListItem = ({ name, price, imageUrl, onAddToCart, isSoldOut, onSale }) => {
  return (
    <div className={onSale ? 'card on-sale' : 'card'}>
      <h2>{name} {onSale && '(On Sale)'}</h2>
      <img src={imageUrl} alt="product" />
      <small>{price}</small>
      <button className={isSoldOut ? `button-default` : `button-primary`} onClick={onAddToCart} disabled={isSoldOut}>{isSoldOut ? 'Sold out' : 'Add to Cart'}</button>
    </div>
  )
}

export default ProductListItem
