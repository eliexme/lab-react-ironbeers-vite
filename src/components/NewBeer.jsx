import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'

export default function NewBeer() {
  const [inputs, setInputs] = useState({name: '', tagline:'', description:'', firstBrewed:'', brewerTips:'', attenuationLevel:'', contributedBy: ''})

  const handleChange = ((event)=>{
    const {name, value} = event.target
    setInputs(((prevInputs)=>({...prevInputs, [name]: value})))
  })

  const handleSubmit = (async(event)=>{
    event.preventDefault()
    try {
      const response = await axios.post('https://ih-beers-api2.herokuapp.com/beers/new', inputs)

      console.log(response)

    } catch (error) {
      console.log(error)
    }
  })

  return (
    <div>
    <Navbar></Navbar>
    
    <>
        <h1>Create a New Beer:</h1>
        <form onSubmit={handleSubmit}>
          <label>
            Name:
            <input value={inputs.name} name='name' onChange={handleChange}/>
          </label>

          <label>
            Tagline:
            <input value={inputs.tagline} name='tagline' onChange={handleChange}/>
          </label>

          <label>
            Description:
            <input value={inputs.description} name='description'onChange={handleChange}/>
          </label>

          <label>
            First Brewed:
            <input value={inputs.firstBrewed} name='firstBrewed'onChange={handleChange}/>
          </label>

          <label>
            Brewer Tips:
            <input value={inputs.brewerTips} name='brewerTips' onChange={handleChange}/>
          </label>

          <label>
            Attentuation Level:
            <input type='number' value={inputs.attenuationLevel} name='attenuationLevel' onChange={handleChange}/>
          </label>

          <label>
            Contributed By:
            <input value={inputs.contributedBy} name='contributedBy' onChange={handleChange}/>
          </label>

          <button type="submit">Create</button>
        </form>
      </>
    </div>
  )
}
