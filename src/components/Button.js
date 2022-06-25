import React from 'react'

const Button = ({name,onButtonAdd,color}) => {
  return (
    <div>
      <button onClick={()=>onButtonAdd('add')} className='btn' style={{backgroundColor:color}}>{name}</button>
    </div>
  )
}

export default Button
