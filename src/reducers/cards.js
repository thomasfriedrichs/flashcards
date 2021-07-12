// default state to use as baseline
import { cards } from './../cardsState.json'

// redux actions
const ADD_CARD = 'ADD_CARD'
const UPDATE_CARD = 'UPDATE_CARD'
const DELETE_CARD = 'DELETE_CARD'

// reducer
const cardsReducer = (state = cards, action) => {
  const { front, back } = action
  switch (action.type) {
    case ADD_CARD:
      return [...state, {
        front: front,
        back: back
      }];
    case UPDATE_CARD:
      const allCardsExceptOne = state.filter(cards => cards.front !== front)
      const updatedCard = [{
        front: front,
        back: back
      }];
      return allCardsExceptOne.concat(updatedCard);
    case DELETE_CARD:
    default:
      return state
  }
}

export default cardsReducer
