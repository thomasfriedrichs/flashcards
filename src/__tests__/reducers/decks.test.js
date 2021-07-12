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

  test('add deck returns state with a new deck', () => {
    action = {
      type: ADD_DECK,
      ...testDeck
    }
    const result = [...decks, testDeck]
    expect(decksReducer(decks, action)).toEqual(result)
  })

  test('delete deck removes the deck name we wanted deleted', () => {
    action = {
      type: DELETE_DECK,
      name: "spanish_vocab"
    }
    expect(decksReducer(decks, action )).toEqual([])
  })

  test('update decks changes the contents', () => {
    const updatedDeck = {
      name: "spanish_vocab",
      category: "newCategory",
      cards: []
    }
    action = {
      type: UPDATE_DECK, ...updatedDeck
    }
    expect(decksReducer(decks, action)).toEqual([updatedDeck])
  })
})
