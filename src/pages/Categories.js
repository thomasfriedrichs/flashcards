import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { useSelector } from 'react-redux'

import Header from './../components/Layout/Header'
import CategoriesList from './../components/Categories/CategoriesList'

function Categories() {
  useFirestoreConnect([
    { collection: 'decks' }
  ])
  const decks = useSelector(state => state.firestore.ordered.decks)

  if (!isLoaded(decks)) {
    return (
      <div className='container'>
        <Header title='Categories' />
        Loading...
      </div>
    )
  }

  if (isLoaded(decks)) {
    const categoriesArray = decks.map(deck => deck.category)
    const categories = Array.from(new Set(categoriesArray))
    return (
      <div className='container'>
        <Header title='Categories' />
        <CategoriesList categories={categories} />
      </div>
    )
  }
}

export default Categories
