// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
import React, { useState } from 'react'
import Background from './companent/background/Background'
import Result from './companent/result/Result'
import Search from './companent/search/Search'

import './index.css'

function App() {
  const [weather, setWeather] = useState({})
  return (
    <section className="app">
      <Background background={weather.weather && weather.weather[0].main} />
      <div id="title">Hava Durumu</div>
      <Search setWeather={setWeather} />
      <Result weather={weather} />
    </section>
  )
}

export default App
