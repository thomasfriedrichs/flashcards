import { cards } from './../../cardsState.json'
import cardsReducer from './../../reducers/cards'

const ADD_CARD = 'ADD_CARD'
const UPDATE_CARD = 'UPDATE_CARD'
const DELETE_CARD = 'DELETE_CARD'


describe('DECKS REDUCERS TESTS', () => {
  let action
  const testCard = {
    "front":"DOG",
    "back":"PERRO"
  }

  test('sanity check', () => {
    expect(true).toEqual(true)
  })

  test('no action returns unchanged decks state', () => {
    expect(cardsReducer(cards, { action: null })).toEqual(cards)
  })
})
