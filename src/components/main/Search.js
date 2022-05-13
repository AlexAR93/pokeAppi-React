import React,{useState} from 'react'
import useFetchPoke from'../../hooks/useFetchPoke'
import Card from './Card'

import './card.css'

const Search = () => {
  
  const [input, setInput] = useState({name:''})
  
  const{name}=input;

  const handleInputChange=({target})=>{
    setInput({
      ...input,
      [target.name]:target.value
    })
  }

  const {names,image,weight,height}=useFetchPoke(name)

  

  let s=document.getElementById("cardBackground")



  const handleSubmit=(e)=>{
    e.preventDefault()
    names? s.style.display="flex":alert("NO EXISTE!!!")
  }

  


  return (
    <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name="name"
          placeholder='Busca tu pokemon'
          autoComplete='off'
          value={name}
          onChange={handleInputChange}

        />
        <button type='submit'>Search</button>
        <Card names={names} image={image} weight={weight} height={height}
        />
    </form>
  )
}

export default Search