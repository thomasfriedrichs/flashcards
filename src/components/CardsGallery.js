import React, { useState } from 'react';
import SingleCard from './SingleCard'
import { GiPaperArrow } from 'react-icons/gi'

function CardsGallery(props) {
  const [cardIndex, changeCardIndex] = useState(0)
  const galleryStyles = {
    display: 'flex',
    minHeight: '350px',
  }

  const buttonStyles = {
    background: 'unset',
    border: '1px solid beige',
    padding: '22px',
    cursor: 'pointer'
  }

  return (
    <div style={galleryStyles}>
      <button
        style={buttonStyles}
        disabled={ cardIndex <= 0 ? 'disabled' : false }
        onClick={() => changeCardIndex(cardIndex - 1)}>
          <GiPaperArrow style={{ transform: 'rotateZ(140deg)', fontSize: '40px' }} />
      </button>

      <SingleCard card={props.cards[cardIndex]} />

      <button
        style={buttonStyles}
        disabled={ cardIndex >= (props.cards.length - 1) ? 'disabled' : false}
        onClick={() => changeCardIndex(cardIndex + 1)}>
          <GiPaperArrow style={{ transform: 'rotateZ(315deg)', fontSize: '40px' }} />
      </button>
    </div>
  )
}

export default CardsGallery
