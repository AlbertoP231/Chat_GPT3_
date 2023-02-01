import React from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css'

//Metodologia BEM -> Block Elememt Modifier

function Navbar() {
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={ logo } alt="logo" />
          </div>
          </div>
          <div className='gpt3__navbar-links_container'>
            <p><a href='#home'>Iicio</a></p>
            <p><a href='#wgpt3'>Qué es GPT?</a></p>
            <p><a href='#possibility'>Open AI</a></p>
            <p><a href='#features'>Casos de Estudio</a></p>
            <p><a href='#blog'>Biblioteca</a></p>
          </div>
        </div>  
       
       )
}

export default Navbar