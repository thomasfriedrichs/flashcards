import SingleDeck from './SingleDeck'
// Hook for connecting Firebase+Redux for getting real-time data updates
import { useSelector } from 'react-redux'
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'

function DecksList() {
  useFirestoreConnect([
    { collection: 'decks' }
  ])
  const decks = useSelector(state => state.firestore.ordered.decks)

  const decksContainer = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 33.333%)',
    gridGap: '10px'
  }

  if (isLoaded(decks)) {
    return (
      <div style={decksContainer}>
        {decks.map(deck => <SingleDeck key={deck.id} {...deck} />)}
      </div>
    )
  } else {
    return (<div>Loading...</div>)
  }
}

export default DecksList
