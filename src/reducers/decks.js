// default state to use as baseline
import { decks } from './../decksState.json'

// redux actions
const ADD_DECK = 'ADD_DECK'
const UPDATE_DECK = 'UPDATE_DECK'
const DELETE_DECK = 'DELETE_DECK'

// reducer
const decksReducer = (state = decks, action) => {
  const { name, category, cards } = action
  switch (action.type) {
    case ADD_DECK:
      return [...state, {
        name: name,
        category: category,
        cards: cards
      }]
    case UPDATE_DECK:
      // copy state (decks) all except the one we are going to change
      const allDecksExceptUpdatedOne = state.filter(deck => deck.name !== name)
      // get the new deck -- we did that above with the destructure
      const updatedDeckArray = [{
        name: name,
        category: category,
        cards: cards
      }]
      // return the state copy (minus the updated one) + the new/updated deck
      return allDecksExceptUpdatedOne.concat(updatedDeckArray)
    case DELETE_DECK:
      return state.filter(deck => deck.name !== name)
    default:
      return state
  }
}

export default decksReducer
