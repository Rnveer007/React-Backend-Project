import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [data, setData] = useState({
    name: "",
    category: "",
    brand: "",
    price: "",
  })

  function handleChange(e) {

    const { name, value } = e.target;
    setData({ ...data, [name]: value })
    // setData({ ...data, [e.target.name]: e.target.value })

  }
  console.log(data)

  return (
    <>
      <form action="" className='pt-4  flex gap-10 ml-10'>
        <input type="text" name='name' value={data.name} onChange={handleChange} placeholder='Name' className='border-2 pl-3' />
        <input type="text" name='category' value={data.category} onChange={handleChange} placeholder='Categories' className='border-2 pl-3' />
        <input type="text" name='brand' value={data.brand} onChange={handleChange} placeholder='Brand' className='border-2 pl-3' />
        <input type="number" name='price' value={data.price} onChange={handleChange} placeholder='Price' className='border-2 pl-3' />
        <button type="submit" className='border-2 px-3 py-1'>Submit</button>
      </form>
    </>
  )
}

export default App
