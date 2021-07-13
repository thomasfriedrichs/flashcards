import { useState } from 'react'
import { useFirestore } from 'react-redux-firebase'

function AddDeckForm() {
  const [name, setName] = useState('')
  const [category, setCategory] = useState('')
  const firestore = useFirestore()

  const createNewDeck = event => {
    event.preventDefault()
    firestore.collection('decks').add({
      name: name,
      category: category,
      cards: []
    })
    console.log('AFTER DECK CREATION', name, category)
    setName('')
    setCategory('')
  }

  return (
    <form onSubmit={e => createNewDeck(e)}>
      <label htmlFor='name'>Name</label>
      <input
        type='text'
        required='required'
        name='name'
        placeholder='Deck Name'
        value={name}
        onChange={e => setName(e.target.value)} />

      <label htmlFor='category'>Category</label>
      <input
        type='text'
        required='required'
        name='category'
        placeholder='Deck Category'
        value={category}
        onChange={e => setCategory(e.target.value)} />
      <button type='submit'>Create New Deck</button>
    </form>
  )
}

export default AddDeckForm
