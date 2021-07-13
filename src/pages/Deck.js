
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'
import React, { useState } from 'react';

import Header from './../components/Header'
import SingleDeck from './../components/SingleDeck'
import AddCardForm from '../components/AddCardForm';

function Deck(props) {
  const { id } = useParams()
  const [addCardFormShowing, setShow] = useState(false);

  useFirestoreConnect([
    { collection: 'decks'}
  ])

  const decks = useSelector(state => state.firestore.ordered.decks)

  if (isLoaded(decks)) {
    const deck = decks.filter(deck => deck.id === id)
    return (
      <div className='container'>
        <Header title='Deck' />
        <SingleDeck {...deck[0]} />
        <button onClick={() => setShow(!addCardFormShowing)}>
          {addCardFormShowing ? `Cancel` : `Add Card`}
        </button>
        { addCardFormShowing ? <AddCardForm deckId={id} /> : null }

      </div>

    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
}

export default Deck
