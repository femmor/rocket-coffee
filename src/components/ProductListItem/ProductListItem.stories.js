import React from 'react'
import { action } from '@storybook/addon-actions';
import { text, boolean, withKnobs } from '@storybook/addon-knobs';
import ProductListItem from './ProductListItem'
import SoldOutItem from './SoldOutItem';
import SaleItem from './SaleItem';

export default {
  title: "Product/ProductListItem",
  decorators: [withKnobs],
  component: ProductListItem
}

export const standard = () => <ProductListItem
  name={text('Name', 'Standard Coffee')}
  price={text('Price', "2.50")}
  onAddToCart={action('Add to Cart clicked!')}
  imageUrl={text('Image URL', "https://source.unsplash.com/tNALoIZhqVM/200x100")}
  isSoldOut={boolean('Sold Out?', false)}
  isOnSale={boolean('On Sale?', false)}
/>

export const soldOut = () => <SoldOutItem
  name={text('Name', 'Coffee - Out of Stock')}
  price={text('Price', "2.50")}
  onAddToCart={action('Add to Cart clicked!')}
  imageUrl={text('Image URL', "https://source.unsplash.com/tNALoIZhqVM/200x100")}
  isSoldOut={true}
/>

export const onSale = () => <SaleItem
  name={text('Name', 'Coffee')}
  price={text('Price', "2.50")}
  onAddToCart={action('Add to Cart clicked!')}
  imageUrl={text('Image URL', "https://source.unsplash.com/tNALoIZhqVM/200x100")}
  isOnSale
/>

