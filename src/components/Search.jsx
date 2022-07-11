import React from 'react'

const Search = ({ filter, setFilter }) => {

const handleInput = ({ target }) => {
		setFilter(target.value)
	}


  return (
    <div className="form">
        <input
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        <button onClick={searchType}>Search</button>
      </div>
  )
}

export default Search