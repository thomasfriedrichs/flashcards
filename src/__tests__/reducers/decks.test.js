import { decks } from './../../decksState.json'
import decksReducer from './../../reducers/decks'

const ADD_DECK = 'ADD_DECK'
const UPDATE_DECK = 'UPDATE_DECK'
const DELETE_DECK = 'DELETE_DECK'


describe('DECKS REDUCERS TESTS', () => {
  let action
  const testDeck = {
    "name": "testname",
    "category": "testcategory",
    "cards": [
      {
        "front":"CAT",
        "back":"GATO"
      },
      {
        "front":"DOG",
        "back":"PERRO"
      }
    ]
  }

  test('sanity check', () => {
    expect(true).toEqual(true)
  })

  test('no action returns unchanged decks state', () => {
    expect(decksReducer(decks, { action: null })).toEqual(decks)
  })
})
