import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import { Link } from 'react-router-dom'

export default function ListBeers() {
  const [beerData, setBeerData] = useState([])
  const axiosData = async()=>{
    try {
      const response = await axios.get('https://ih-beers-api2.herokuapp.com/beers')

    if(response.status === 200){
      setBeerData(response.data)
    }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(()=>{
    axiosData()
  }, [])

  /* useEffect(()=>{
    console.log(beerData)
  }, [beerData]) */

  return (
  <>
    <Navbar></Navbar>

    <div>
      {beerData.length === 0?
      <p>Loading data...</p>
      : 
      beerData.map((eachBeer)=>{
        return (
          <div key={eachBeer._id} className='beerCard'>
            <Link to={`/beers/${eachBeer._id}`}>
              <img src={eachBeer.image_url} alt='beer pic' />
              <h2>{eachBeer.name}</h2>
            </Link>
          </div>
          )
      })
      }
    </div>
  </>
  )
}
