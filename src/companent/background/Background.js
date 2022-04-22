import React from 'react'
import rainy from '../../image/rainy.jpg'
import '../../index.css'
import BackgroundImage from './BackgroundImage'

const Background = ({ background }) => {
  return (
    <div className="background">
      <div className="overlay"></div>
      <BackgroundImage situation={background} />
    </div>
  )
}

export default Background
