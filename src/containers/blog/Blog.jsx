import React from 'react';
import { Article } from '../../components';
import { blog01, blog02, blog03, blog04, blog05 } from './imports'
import './blog.css';


const Blog = () => {
    return (
      <div className='gpt3__blog section__padding' id='blog'>
        <div className='gpt3__blog-heading'>
          <h1 className='gradient__text'>Están pasando muchas cosas,
            Estamos blogueando sobre eso.</h1>
        </div>
        <div className='gpt3__blog-container'>
          <div className='gpt3__blog-container_groupA'>
          <Article imgUrl={blog01}  date='Sep 26, 2021' title='GPT-3 y Openai es el futuro. Vamos a explorar cómo es?' />
          </div>
          <div className='gpt3__blog-container_groupB'>
          <Article imgUrl={blog02}  date='Sep 26, 2021' title='GPT-3 y Openai es el futuro. Vamos a explorar cómo es?' />
          <Article imgUrl={blog03}  date='Sep 26, 2021' title='GPT-3 y Openai es el futuro. Vamos a explorar cómo es?' />
          <Article imgUrl={blog04}  date='Sep 26, 2021' title='GPT-3 y Openai es el futuro. Vamos a explorar cómo es?' />
          <Article imgUrl={blog05}  date='Sep 26, 2021' title='GPT-3 y Openai es el futuro. Vamos a explorar cómo es?' />
          </div>
        </div>
      </div>
    )
  }
  
  export default Blog