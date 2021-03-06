import React from 'react'

const Card = ( {userRandom,colorRandom, clickButton} ) => {

  const styleButton = {
    backgroundColor: colorRandom
  }


  
    console.log(userRandom)
    console.log(colorRandom)
  
    return (
    <article className='card' style={{color: colorRandom}}>
      <i className="fa-solid fa-quote-left"> </i>
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
