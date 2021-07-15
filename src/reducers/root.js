import { combineReducers } from 'redux'
import { firestoreReducer } from 'redux-firestore'

import decksReducer from './decks'

const rootReducer = combineReducers({
  decksReducer: decksReducer,
  firestore: firestoreReducer
})

export default rootReducer
