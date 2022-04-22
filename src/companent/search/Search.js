import React, { useState } from 'react'

const Search = ({ setWeather }) => {
  const api = {
    key: '2e19a9ee074aeca97002dee93d82c086',
    base: 'https://api.openweathermap.org/data/2.5/weather',
  }

  const [searchParameter, setSearchParameter] = useState('')
  const search = (e) => {
    if (e.key === 'Enter') {
      fetch(`${api.base}?q=${searchParameter}&units=metric&appid=${api.key}`)
        .then((data) => data.json())
        .then((result) => {
          setSearchParameter('')
          setWeather(result)
        })
    }
  }
  return (
    <div className="search">
      <input
        className="search-input"
        type="text"
        placeholder="City"
        onChange={(e) => setSearchParameter(e.target.value)}
        value={searchParameter}
        onKeyPress={search}
      />
    </div>
  )
}

export default Search
