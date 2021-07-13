import Header from './../components/Header'
import AddDeckForm from './../components/AddDeckForm'

function Decks() {
  return(
    <div className='container'>
      <Header title='Decks' />
        decks list here
      <AddDeckForm />
    </div>
  )
}

export default Decks
