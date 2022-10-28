import { useState, useEffect } from 'react'
import getPokemon from '../helpers/getPokemon';


const useFetchPoke = (pokemon) => {
    
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    useEffect( () => {
        getPokemon( pokemon )
            .then(data=>{
                setState({
                    abilities: data.abilities,
                    names:data.name,
                    id:data.id,
                    image:data.sprites?.front_default,
                    weight:data.weight,
                    height:data.height,
                    loading: false
                });
            })
            .catch(err=>pokemon&&alert('No existe este pokemon'))

    }, [pokemon])




    return state; // { data:[], loading: true };


}

export default useFetchPoke