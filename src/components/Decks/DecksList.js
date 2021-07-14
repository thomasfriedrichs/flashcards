import SingleDeck from './SingleDeck'
// Hook for connecting Firebase+Redux for getting real-time data updates
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import './DecksList.css'

function DecksList() {
  useFirestoreConnect([
    { collection: 'decks' }
  ])
  const decks = useSelector(state => state.firestore.ordered.decks)

  if (isLoaded(decks)) {
    return (
      <div className='decksContainer' >
        {decks.map(deck => <SingleDeck key={deck.id} {...deck} />)}
      </div>
    )
  } else {
    return (<div>Loading...</div>)
  }
}

export default DecksList
