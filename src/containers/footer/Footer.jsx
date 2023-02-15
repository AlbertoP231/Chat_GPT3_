import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'

const Footer = () => {
    return (
      <div className='gpt3__footer section__padding'>
        <div className='gpt3__footer-heading'>
          <h1 className='gradient__text'>¿Quieres dar un paso hacia el futuro antes que los demás?</h1>
          </div>

          <div className='gpt3__footer-btn'>
            <p>Solicitar acceso anticipado</p>
            </div>

            <div className='gpt3__footer-links'>
              <div className='gpt3__footer-links_logo'>
                <img src={gpt3Logo} alt="logo" />
                <p>Crechterwoord K12 182 DK Alknjkcb, Todos los derechos reservados</p>
              </div>
              <div className='gpt3__footer-links-div'>
              <h4>Links</h4>
              <p>Overons</p>
              <p>Medios de comunicación social</p>
              <p>Contadores</p>
              <p>Contacto</p>
              </div>
              <div className='gpt3__footer-links-div'>
              <h4>Compañía</h4>
              <p>Terminos y Condiciones</p>
              <p>Politica de Privacidad</p>
              <p>Contacto</p>
              </div>
              <div className='gpt3__footer-links-div'>
              <h4>Ponerse en contacto</h4>
              <p>Crechterwoord K12 182 DK Alknjkcb</p>
              <p>085-132567</p>
              <p>info@payme.net</p>
              </div>
            </div>

            <div className='gpt3__footer-copyright'>
            © 2023 GPT-3. Todos los derechos reservados.
            </div>
      </div>
    )
  }
  
  export default Footer