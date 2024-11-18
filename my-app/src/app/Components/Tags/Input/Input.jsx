import React from 'react'

const Input = ({type,placeholder, onChange, className,value,name }) => {
  return (
    <input type={type} placeholder={placeholder} onChange={onChange} className={className} value={value} name={name}   />
  )
}

export default Input