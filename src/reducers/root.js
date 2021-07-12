import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

import decks from './decks'

const rootReducer = combineReducers({
  decks: decks,
  firestore: firestoreReducer
})

export default rootReducer
