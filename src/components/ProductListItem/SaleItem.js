import React from 'react'
import Card from './Card'
import Heading from './Heading';
import Text from './Text';
import Button from './Button';
import './ProductListItem.css'
const SaleItem = ({ name, price, imageUrl, onAddToCart, isOnSale }) => {
  return (
    <Card highlight={isOnSale}>
      <Heading>{name} {isOnSale && '(On Sale)'}</Heading>
      <img src={imageUrl} alt="product" />
      <Text>{price}</Text>
      <Button 
        onClick={onAddToCart}
        >
          Add to Cart
      </Button>
    </Card>
  )
}

export default SaleItem
