import React from 'react';
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'



const Header = () => {
    return (
      <div className='gpt3__header section__padding'>
       <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Construyamos algo increíble con GPT-3 OpenAI</h1>
        <p>Construyamos algo increíble con GPT-3
            OpenIA
            Sin embargo, cualquier cama para la indulgencia de asistencia en viaje es desagradable.
            No todos los pensamientos ejercen bendición. 
            Indulgencia camino todo alegría alteración bullicioso el apego. 
            Fiesta que años para ordenar permitimos que se nos pida.
            Su dirección de correo electrónico
            Empezar
            1.6k+
            1.600 personas solicitaron acceso a una visita en las últimas 24 horas</p>

        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Tu dirección de correo electrónico'/>
          <button type='button'>Empezar</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people}  alt='people' />
          <p>1.600 personas solicitaron acceso a una visita en las últimas 24 horas</p>
        </div>
       </div>
       <div className='gpt3__header-image'>
          <img src={ai} alt="ai" />
        </div>
      </div>
    )
  }
  
  export default Header