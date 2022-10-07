import React from 'react'
import {CharacterModel, HelmetModel} from 'media'

function Character() {
  return (
    <div className='character'>
        <div className="character__body" draggable='true' >
            <CharacterModel />
        </div>
        <div className="character__items">
            <img src={HelmetModel} alt="модель шлема" className="character__item" />
        </div>
    </div>
  )
}

export default Character