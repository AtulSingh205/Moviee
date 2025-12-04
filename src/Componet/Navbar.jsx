import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (

    <div className='flex justify-between gap-20   text-2xl text-amber-50  bg-blue-600'>
      <h1 className='p-2 font-bold text-2xl'>Sheriyan</h1>
      <div className='flex gap-10 p-4 underline '>
        <Link to='/'>Home</Link>
        <Link to='/About'>About</Link>
        <Link to='/Contact'>Contact</Link>
      </div>

    </div>
  )
}

export default Navbar
