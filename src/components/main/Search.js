import React,{useState} from 'react'
import useFetchPoke from'../../hooks/useFetchPoke'
import Card from './Card'

import './card.css'

const Search = () => {
  
  const [input, setInput] = useState('')
  const [submit, setSubmit] = useState({loading:true})

  

  const handleInputChange=({target})=>{
    setInput(target.value)
  }
  

  let cardContainer=document.getElementById("cardBackground")

  const {names,image,weight,height,loading}=useFetchPoke(submit?.names);
  const handleSubmit=(e,loading)=>{
    e.preventDefault()
    setSubmit({
      ...submit,
      names:input.toLowerCase(),
      loading:loading,
      
    })
    cardContainer.classList.toggle('cardBackground-hide')
  
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
        
        <Card names={names} image={image} weight={weight} height={height} loading={loading}
        />
    </form>
  )
}

export default Search