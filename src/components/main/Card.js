
import React from 'react'

const Card = ({names,image,weight,height,s}) => {

  
  

    return (
      <div className='cardBackground' id='cardBackground'>
          <div className='card'>
            <img src={image} alt='img poke' />
            <h1>{names}</h1>
            <p>
              Peso : {weight}KG
            </p>
            <p>
              altura : {height}DC
            </p>
            <button id='closePoke'>Close</button>
          </div>
          
      </div>
    )
  }
  
  export default Card