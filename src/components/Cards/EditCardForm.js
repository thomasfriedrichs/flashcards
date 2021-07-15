import { useState } from 'react'
import PropTypes from 'prop-types'
import { useFirestore } from 'react-redux-firebase'

function EditCardForm(props) {
  const firestore = useFirestore()
  const[front, setFront] = useState(props.front)
  const[back, setBack] = useState(props.back)

  const handleEdits = async event => {
    event.preventDefault()
    try {
      const result = await firestore.collection('decks').doc(props.deckId).get()
      if(!result.exists) throw new Error('unable to get deck')
      const deck = result.data()
      const restOfDeck = deck.cards.filter(card => card.front !== props.front)
      const updatedCards = [...restOfDeck, { front: front, back: back }]
      await firestore.collection('decks').doc(props.deckId).update({
        cards: updatedCards
      })
      setFront('')
      setBack('')
      props.hideForm()
    } catch(err) {
      console.log(err)
    }
  }

  const handleDelete = async () => {
    try {
      const result = await firestore.collection('decks').doc(props.deckId).get()
      if (!result.exists) throw new Error('unable to get deck...')
      const deck = result.data()
      const updatedCards = deck.cards.filter(card => card.front !== props.front)
      await firestore.collection('decks').doc(props.deckId).update({
        cards: updatedCards
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <div>
      <form onSubmit={e => handleEdits(e)}>
        <label htmlFor='front'>
          Front
        </label>
        <input
          type='text'
          required='required'
          name='front'
          placeholder='front'
          value={front}
          onChange={e => setFront(e.target.value)}
        />
        <label htmlFor='back'>
          Back
        </label>
        <input
          type='text'
          required='required'
          name='back'
          placeholder='back'
          value={back}
          onChange={e => setBack(e.target.value)}
        />
        <button className='buttonStyles' type='submit'>Save Edited Card</button>
      </form>
      <button className='buttonStyles' onClick={handleDelete}>Delete Card</button>
    </div>
  )
}

EditCardForm.propTypes = {
  deckId: PropTypes.string.isRequired,
  front: PropTypes.string.isRequired,
  back: PropTypes.string.isRequired,
  hideForm: PropTypes.func.isRequired
}

export default EditCardForm
