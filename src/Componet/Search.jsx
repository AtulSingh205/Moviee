import React from 'react'

const Search = ({SetSearch,search}) => {
    return (
        <div>
            <div className='flex '>
                <input
                    type="text"
                    placeholder="Search your movie"
                    value={search}
                    onChange={(e) => SetSearch(e.target.value)}
                    className="text-amber-100 border-2  rounded-lg p-2 w-60 focus:outline-none focus:ring-2 focus:ring-blue-400 bg-transparent text placeholder:text-amber-100"

                />
            </div>
        </div>
    )
}

export default Search