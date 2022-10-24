import React from 'react'
import Quote from './Quote'

const Card = ( {userRandom,colorRandom, clickButton} ) => {

  const styleButton = {
    backgroundColor: colorRandom
  }


  
    console.log(userRandom)
    console.log(colorRandom)
  
    return (
    <article className='card' style={{color: colorRandom}}>
      <Quote/>
        <h2  className='card__title'> {userRandom.quote} </h2>
        <ul className='card__list '>
          <li className='card__list'><b className='card__b'>Author: </b>
           {userRandom.author}
            </li>
        </ul>
        <button style= {styleButton} 
        className='card__btn'
        onClick={clickButton}
        >&#62;</button>
    </article>
  )
}

export default Card