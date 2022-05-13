

const getPokemon = async(pokemon) => {

    const resp=await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);

    const data=await resp.json();

    
    return data
}

export default getPokemon