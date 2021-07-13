
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { useParams } from 'react-router-dom'
import React, { useState } from 'react';

import Header from './../components/Header'
import SingleDeck from './../components/SingleDeck'
import AddCardForm from './../components/AddCardForm'
import EditDeckForm from './../components/EditDeckForm'

function Deck() {
  const { id } = useParams()
  const [addCardFormShowing, setAddCardFormShowing] = useState(false)
  const [editDeckFormShowing, setEditDeckFormShowing] = useState(false)

  useFirestoreConnect([
    { collection: 'decks'}
  ])

  const decks = useSelector(state => state.firestore.ordered.decks)

  if (isLoaded(decks)) {
    const filtered = decks.filter(deck => deck.id === id)
    const deck = filtered[0]
    return (
      <div className='container'>
        <Header title='Deck' />
        <SingleDeck {...deck} />

        <div style={{ display: 'flex' }} >
          <div style={{ padding: '22px', marginTop: '40px' }}>
            <button className='buttonStyles' onClick={() => setEditDeckFormShowing(!editDeckFormShowing)}>
              { editDeckFormShowing ? `Cancel` : `Edit Deck` }
            </button>
          </div>

          <div style={{ padding: '22px', marginTop: '40px' }}>
            <button className='buttonStyles' onClick={() => setAddCardFormShowing(!addCardFormShowing)}>
              { addCardFormShowing ? `Cancel` : `Add Card` }
            </button>
          </div>
        </div>

        { addCardFormShowing ? <AddCardForm deckId={id} /> : null }
        { editDeckFormShowing ? <EditDeckForm deckId={id} name={deck.name} category={deck.category} /> : null }
      </div>
    )
  } else {
    return (
      <div>Loading...</div>
    )
  }
}

export default Deck
