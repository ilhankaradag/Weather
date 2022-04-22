import React from 'react'

const Result = ({ weather }) => {
  return (
    <>
      {typeof weather.main != 'undefined' && (
        <div className="result">
          <div className="city">
            {weather.name},{weather.sys.country}
          </div>
          <div className="description">
            <div className="degree"> {Math.round(weather.main.temp)} °C</div>
            <div className="status">{weather.weather[0].main}</div>
          </div>
        </div>
      )}
    </>
  )
}

export default Result
