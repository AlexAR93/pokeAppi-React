import React,{useState} from 'react'
import useFetchPoke from'../../hooks/useFetchPoke'
import Card from './Card'

import './card.css'

const Search = () => {
  
  const [input, setInput] = useState('')
  const [submit, setSubmit] = useState('')

  

  const handleInputChange=({target})=>{
    console.log(target.value)
    setInput(target.value)
  }



  

  let s=document.getElementById("cardBackground")
  

  const {names,image,weight,height}=useFetchPoke(submit)
  const handleSubmit=(e)=>{
    e.preventDefault()
    setSubmit(input.toLowerCase())
    s.style.display="flex"
  
  }


 

  return (
    <form onSubmit={handleSubmit}>
        <input 
          type='text'
          name="name"
          placeholder='Busca tu pokemon'
          autoComplete='off'
          value={input}
          onChange={handleInputChange}

        />
        <button type='submit'>Search</button>
        <Card names={names} image={image} weight={weight} height={height}
        />
    </form>
  )
}

export default Search