import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
  const [products, setProducts] = useState([])
  useEffect(()=>{
(async()=>{
  response = await axios.get('/api/products')
  console.log(response)
})()
  },[])

  return (
    <>
      <h1>Excellent api handling in React JS</h1>
      <h2>No. of Products are : {products.length}</h2>
    </>
  )
}

export default App
