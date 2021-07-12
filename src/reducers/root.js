import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

import cards from './cards'
import decks from './decks'

const rootReducer = combineReducers({
  cards: cards,
  decks: decks,
  firestore: firestoreReducer
})

export default rootReducer
