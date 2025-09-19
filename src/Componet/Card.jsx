import React from 'react'

const Card = ({fetchSearch}) => {
  return (
    <div>
       <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-5 w-full overflow-y-scroll '>
       { fetchSearch.map((val) => (
          <div key={val.imdbID} className='bg-white/20 backdrop-blur-md rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300'>
            <img
              src={val.Poster}
              alt={val.Title}
              className='w-full h-80 object-cover'
            />  
            <div className='p-3 text-center text-amber-100'>
              <h1 className='font-bold text-lg'>{val.Title}</h1>
              <p className='text-sm opacity-80'>{val.Year}</p>
            </div>
          </div>
        ))}
      
  </div>
  
    </div>
  )
}

export default Card