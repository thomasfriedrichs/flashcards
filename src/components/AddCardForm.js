import { useState } from 'react'
import { useFirestore , useFirebase } from 'react-redux-firebase'

function AddCardForm(props) {

  const [front, setFront] = useState('')
  const [back, setBack] = useState('')
  const firestore = useFirestore()
  const firebase = useFirebase()

  const addCard = event => {
    event.preventDefault()
    firestore.collection('decks').doc(props.deckId).update({
      cards: firebase.firestore.FieldValue.arrayUnion({ front: front, back: back })
    })
    // firestore.collection('decks').doc(props.deckId).update('cards').push({
    //   front: front,
    //   back: back
    // })
    setFront('')
    setBack('')
  }

  return (
    <div>
      <h3>Add a card</h3>
      <form onSubmit={e => addCard(e)} style={{ display: 'flex', flexDirection: 'column' }} >
        <div style={{ display: 'flex', justifyContent: 'space-around'}} >
          <label htmlFor='front'>Card Front</label>
          <input
            style={{ flex: 1, margin: '0 auto', maxWidth: '80%'}}
            type='text'
            required='required'
            name='front'
            placeholder='Card Front'
            value={front}
            onChange={e => setFront(e.target.value)} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around'}} >
          <label htmlFor='back'>Card Back</label>
          <input
            style={{ flex: 1, margin: '0 auto', maxWidth: '80%'}}
            type='text'
            required='required'
            name='back'
            placeholder='Card Back'
            value={back}
            onChange={e => setBack(e.target.value)} />
        </div>
        <button type='submit'>Add Card</button>
      </form>
    </div>
  )
}

export default AddCardForm
