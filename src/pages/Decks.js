import Header from './../components/Header'
import AddDeckForm from './../components/AddDeckForm'
import DecksList from './../components/DecksList'

function Decks() {
  return(
    <div className='container'>
      <Header title='Decks' />
      <DecksList />
      <div style={{ padding: '22px', margin: '5px auto', maxWidth: '670px' }}>
        <AddDeckForm />
      </div>
    </div>
  )
}

export default Decks
