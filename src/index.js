import React from 'react';
import ReactDOM from 'react-dom';
import PokemonApp from './PokemonApp';

ReactDOM.render(
  <React.StrictMode>
    <PokemonApp />
  </React.StrictMode>,
  document.getElementById('root')
);

// const usarApi=async()=>{
//   const resp=await fetch("https://pokeapi.co/api/v2/pokemon");
//   const data=await resp.json();
  
  

//   return console.log(data);

// }
// usarApi()
// const getPokemon = async(pokemon) => {

//   const resp=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

//   const data=await resp.json();
  
//   return data
    

// }
// const newArray=getPokemon(25).then(data=>console.log(data))
// getPokemon("pikachu")

