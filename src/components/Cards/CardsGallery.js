import React, { useState } from 'react';
import SingleCard from './GallerySingleCard'
import { GiPaperArrow } from 'react-icons/gi'

function CardsGallery(props) {
  const [cardIndex, changeCardIndex] = useState(0)
  const galleryStyles = {
    display: 'flex',
    minHeight: '350px',
  }

  return (
    <div style={galleryStyles}>
      <button
        className='buttonStyles'
        disabled={ cardIndex <= 0 ? 'disabled' : false }
        onClick={() => changeCardIndex(cardIndex - 1)}>
          <GiPaperArrow style={{ transform: 'rotateZ(140deg)', fontSize: '40px' }} />
      </button>

      <SingleCard card={props.cards[cardIndex]} />

      <button
        className='buttonStyles'
        disabled={ cardIndex >= (props.cards.length - 1) ? 'disabled' : false}
        onClick={() => changeCardIndex(cardIndex + 1)}>
          <GiPaperArrow style={{ transform: 'rotateZ(315deg)', fontSize: '40px' }} />
      </button>
    </div>
  )
}

export default CardsGallery
