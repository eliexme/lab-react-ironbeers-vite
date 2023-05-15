import React from 'react'
import Navbar from './Navbar'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function RandomBeer() {
  const [randomBeerData, setRandomBeerData] = useState()
  
  const axiosData = async()=>{
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)

    if(response.status === 200){
      setRandomBeerData(response.data)
    }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    axiosData()
  }, [])

  /* useEffect(()=>{
    console.log(randomBeerData)
  },[randomBeerData]) */

  return (
    <div>
    <Navbar></Navbar>

    {!randomBeerData ? 
    <p>Loading data...</p>
    : 
    
    <div>
      <img src={randomBeerData.image_url} alt='beer pic' />
      <h2>{randomBeerData.name}</h2>
      <p>{randomBeerData.tagline}</p>
      <p>{randomBeerData.first_brewed}</p>
      <p>{randomBeerData.attenuation_level}</p>
      <p>{randomBeerData.description}</p>

    </div>
    }
    
    </div>
  )
}
