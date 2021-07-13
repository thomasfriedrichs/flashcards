import React, { useState } from 'react';
import SingleCard from './SingleCard';

function CardsGallery(props) {
  const [cardIndex, changeCardIndex] = useState(0);

  return (
    <div>
      <button
        disabled={ cardIndex === 0 ? 'disabled' : false }
        onClick={() => changeCardIndex(cardIndex - 1)}>PREV</button>
        <SingleCard card={props.cards[cardIndex]} />
      <button
        dislabed={ cardIndex >= (props.cards.length - 1) ? 'disabled' : false}
        onClick={() => changeCardIndex(cardIndex + 1)}>NEXT</button>
    </div>
  )
}

export default CardsGallery
