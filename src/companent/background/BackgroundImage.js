import React from 'react'
import cloud from '../../image/cloud.jpg'
import rainbow from '../../image/rainbow.jpg'
import rainy from '../../image/rainy.jpg'
import snow from '../../image/snow.jpg'
import sun from '../../image/sun.jpg'
import storm from '../../image/storm.jpg'
import foggy from '../../image/foggy.jpg'

const BackgroundImage = ({ situation }) => {
  switch (situation) {
    case 'Rain':
      return <img className="backgroud-img" src={rainy} alt="rainy" />
    case 'Drizzle':
      return <img className="backgroud-img" src={rainy} alt="rainy" />
    case 'Clear':
      return <img className="backgroud-img" src={sun} alt="sun" />
    case 'Mist':
      return <img className="backgroud-img" src={foggy} alt="foggy" />
    case 'Snow':
      return <img className="backgroud-img" src={snow} alt="snow" />
    case 'Storm':
      return <img className="backgroud-img" src={storm} alt="storm" />
    case 'Clouds':
      return <img className="backgroud-img" src={cloud} alt="cloud" />
    default:
      return <img className="backgroud-img" src={rainbow} alt="rainbow" />
  }
}

export default BackgroundImage
