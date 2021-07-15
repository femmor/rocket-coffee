import React from 'react'
import Card from './Card'
import Heading from './Heading';
import Text from './Text';
import Button from './Button';
import './ProductListItem.css'

const ProductListItem = ({ name, price, imageUrl, onAddToCart, isSoldOut, isOnSale }) => {
  return (
    <Card highlight={isOnSale}>
      <Heading>{name} {isOnSale && '(On Sale)'}</Heading>
      <img src={imageUrl} alt="product" />
      <Text>{price}</Text>
      <Button 
        onClick={!isSoldOut ? onAddToCart : null} 
        disabled={isSoldOut}
        >
          {isSoldOut ? 'Sold Out' : 'Add to Cart'}
      </Button>
    </Card>
  )
}

export default ProductListItem
