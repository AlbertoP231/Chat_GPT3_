import React from 'react';
import possibilityImage from '../../assets/possibility.png'
import './possibility.css';


const Possibility = () => {
    return (
      <div className='gpt3__possibility section__padding' id='possibility'>
        <div className='gpt3__possibility-image'>
          <img src={possibilityImage} alt="possibility" />
        </div>
        <div className='gpt3__possibility-content'>
          <h4>Solicite acceso anticipado para comenzar</h4>
          <h1 className='gradient__text'>Las posibilidades están más allá de tu imaginación.</h1>
          <p>Sin embargo, cualquier cama para la indulgencia de asistencia en viaje es desagradable. No todos los pensamientos ejercen bendición. Indulgencia camino todo alegría alteración bullicioso el apego. Fiesta que años para ordenar permitimos que se nos pida.</p>
          <h4>Solicite acceso anticipado para comenzar</h4>
        </div>
      </div>
    )
  }
  
  export default Possibility;