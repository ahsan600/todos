import React from 'react'
import Button from './Button'


const Header = ({onButtonAdd,onadd}) => {
  return (
    <header className='header'>
      <h1>Task-Tracker</h1>
      <Button onButtonAdd={onButtonAdd} color={`${onadd?'red':'green'}`} name={`${onadd?'CLOSE':'ADD'}`}/>
    </header>
  )
}

export default Header
