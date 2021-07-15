import React from 'react'
import { action } from '@storybook/addon-actions';
import { text, withKnobs } from '@storybook/addon-knobs';
import ProductListItem from './ProductListItem'

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
  isSoldOut={text('Sold Out?', true)}
  isOnSale={text('On Sale?', true)}
/>
