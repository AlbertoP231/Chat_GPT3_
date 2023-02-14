import React from 'react';
import { Feature } from '../../components';
import './features.css';

const featuresData = [
  {
    title: 'Mejorar las desconfianzas al instante',
    text: 'De fino john da de rico el. Envejecen y dibujan a la señora como. Mejorar las desconfianzas puede ser instantáneamente aplaudida por la familia.',
  },
  {
    title: 'Conviértete en el activo atendido',
    text: 'Consideró simpatizar con diez asistencia excepcionalmente ocasional suficiente no. Carta de on convertido que tendía activo habilitar a.',
  },
  {
    title: 'Mensaje o no soy nada',
    text: 'Led pide una posible relación de amante, la elegancia, la comida y el debate. Por mensaje o no soy nada entre la dirección principal.',
  },
  {
    title: 'Condado de ley realmente chico',
    text: 'Realmente chico del condado de Law, ella no pudo con su hermana. Pies fuera como seis. Entre los sexos se deja la ley construida ahora. En la mesa incorporada en un rubor rápido.',
  },
]

const Features = () => {
    return (
      <div className='gpt3__features section__padding' id='features'>
        <div className='gpt3__features-heading'>
          <h1 className='gradient__text'>El futuro es ahora y solo necesitas darte cuenta. Entra en el futuro hoy y haz que suceda.</h1>
          <p>Solicite acceso anticipado para comenzar</p>
        </div>
        <div className='gpt__features-container'>
        {featuresData.map((item, index) => (
          <Feature title={item.title}  text={item.text} key={item.title + index }/>
        ))}

        </div>
      </div>
    )
  }
  
  export default Features
