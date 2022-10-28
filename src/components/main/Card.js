
import React from 'react'
const Card = ({names,image,weight,height,loading}) => {


  
    if(loading===false){return (
      <div className='cardBackground cardBackground-hide' id='cardBackground'>
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
    )}else if(loading===true){return (
      <div className='cardBackground cardBackground-hide' id='cardBackground'>
          <div className='card'>
            <h1>Cargando...</h1>
            <button id='closePoke'>Close</button>
          </div>
          
      </div>
    )}
  }
  
  export default Card