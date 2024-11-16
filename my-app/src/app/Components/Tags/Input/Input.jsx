import React from 'react'

const Input = ({type,placeholder, onChange, className,value }) => {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} className={className} value={value}  />
  )
}

export default Input