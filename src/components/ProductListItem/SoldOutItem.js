import React from 'react'
import Card from './Card'
import Heading from './Heading';
import Text from './Text';
import Button from './Button';
import './ProductListItem.css'
const SoldOutItem = ({ name, price, imageUrl, onAddToCart, isSoldOut }) => {
  return (
    <Card highlight={isSoldOut}>
      <Heading>{name}</Heading>
      <img src={imageUrl} alt="product" />
      <Text>{price}</Text>
      <Button 
        onClick={null}
        disabled={isSoldOut}
        >
          Sold Out
      </Button>
    </Card>
  )
}

export default SoldOutItem
