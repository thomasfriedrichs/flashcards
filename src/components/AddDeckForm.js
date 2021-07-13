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
    <div>
      <h3>Create A New Deck</h3>
      <form onSubmit={e => createNewDeck(e)} style={{ display: 'flex', flexDirection: 'column' }} >
        <div style={{ display: 'flex', justifyContent: 'space-around'}} >
          <label htmlFor='name'>Name</label>
          <input
            style={{ flex: 1, margin: '0 auto', maxWidth: '80%'}}
            type='text'
            required='required'
            name='name'
            placeholder='Deck Name'
            value={name}
            onChange={e => setName(e.target.value)} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-around'}} >
          <label htmlFor='category'>Category</label>
          <input
            style={{ flex: 1, margin: '0 auto', maxWidth: '80%'}}
            type='text'
            required='required'
            name='category'
            placeholder='Deck Category'
            value={category}
            onChange={e => setCategory(e.target.value)} />
        </div>
        <button type='submit'>Create New Deck</button>
      </form>
    </div>
  )
}

export default AddDeckForm
