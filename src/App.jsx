import './App.css'
import { Route, Routes } from 'react-router-dom'
import Homepage from './components/Homepage'
import ListBeers from './components/ListBeers'
import RandomBeer from './components/RandomBeer'
import NewBeer from './components/NewBeer'
import SingleBeer from './components/SingleBeer'


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/beers' element={<ListBeers/>}/>
        <Route path='/random-beer' element={<RandomBeer/>}/>
        <Route path='/new-beer' element={<NewBeer/>}/>
        <Route path='/beers/:id' element={<SingleBeer/>}/>
      </Routes>
    </div>

  )
}

export default App
