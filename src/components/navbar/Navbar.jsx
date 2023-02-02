import React, { useState } from 'react'
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg'
import './navbar.css'

const Menu = () => (
  <>
  <p><a href='#home'>Inicio</a></p>
  <p><a href='#wgpt3'>Qué es GPT?</a></p>
  <p><a href='#possibility'>Open AI</a></p>
  <p><a href='#features'>Casos de estudio</a></p>
  <p><a href='#blog'>Biblioteca</a></p>
  </>
)

//Metodologia BEM -> Block Elememt Modifier

const Navbar = ()  => {
  const [toggleMenu, setToggleMenu] = useState(false);
  return (
    <div className='gpt3__navbar'>
      <div className='gpt3__navbar-links'>
        <div className='gpt3__navbar-links_logo'>
          <img src={ logo } alt="logo" />
          </div>
          </div>
          <div className='gpt3__navbar-links_container'>
            <Menu />
          </div>
          <div className='gpt3__navbar-sign'>
            <p>Registrarse</p>
            <button type='button'>Iniciar sesión </button>
          </div>
          <div className='gpt3__navbar-menu'>
            {toggleMenu
            ? <RiCloseLine  color='#fff' size={27} onClick={() => setToggleMenu(false)}/>
            : <RiMenu3Line color='#fff' size={27} onClick={() => setToggleMenu(true)}/>
          }
          {toggleMenu && (
          <div className='gpt3__navbar-menu_container scale-up-center'>
            <div className='gpt3__navbar-menu_container-links'>
              <Menu />
              <div className='gpt3__menu_container-links-sign'>
                <p>Registrarse</p>
                <button type='button'>Iniciar sesión </button>
              </div>
            </div>
          </div>
            
          )

          }

          </div>
        </div>  
       
       )
}

export default Navbar