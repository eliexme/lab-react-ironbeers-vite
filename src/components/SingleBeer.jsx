import React from 'react'
import Navbar from './Navbar'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

export default function SingleBeer() {
  const {id} = useParams()
  const [oneBeerData, setOneBeerData] = useState()
  
  const axiosData = async()=>{
    try {
      const response = await axios.get(`https://ih-beers-api2.herokuapp.com/beers/${id}`)

    if(response.status === 200){
      setOneBeerData(response.data)
    }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    axiosData()
  }, [id])

 /*  useEffect(()=>{
    console.log(oneBeerData)
  }, [oneBeerData]) */


  return (
    <div>
    <Navbar></Navbar>

    {!oneBeerData ? 
    <p>Loading data...</p>
    : 
    
    <div>
      <img src={oneBeerData.image_url} alt='beer pic' />
      <h2>{oneBeerData.name}</h2>
      <p>{oneBeerData.tagline}</p>
      <p>{oneBeerData.first_brewed}</p>
      <p>{oneBeerData.attenuation_level}</p>
      <p>{oneBeerData.description}</p>

    </div>
    }
    
    </div>
  )
}
