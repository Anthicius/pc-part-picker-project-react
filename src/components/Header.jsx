import React from 'react'

const Header = ({onThemeSwtich, theme}) => {
  return (
    <header className='header'>
        <h2>PC Part Picker</h2>
        <button className='theme-toggle' onClick={onThemeSwtich}>{theme} mode</button>
    </header>
  )
}

export default Header