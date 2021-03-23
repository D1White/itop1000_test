import React from 'react'
import svgSprite from '../assets/ico/sprite.svg'

function SVGSprites({ name, title, className }) {
  return (
    <svg id={name} title={title} className={`icon ${className || ''}`}>
      <use xlinkHref={`${svgSprite}#${name}`} />
    </svg>
  )
}

export default SVGSprites
