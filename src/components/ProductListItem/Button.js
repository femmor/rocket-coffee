import React from 'react'
import './ProductListItem.css'

const Button = ({onClick, children}) => {
  const btnClasses = onClick ? 'button-primary' : 'button-default'
  return (
    <button onClick={onClick} className={btnClasses}>
      {children}
    </button>
  )
}

export default Button
