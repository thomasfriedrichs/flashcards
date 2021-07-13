import { Link } from 'react-router-dom'
import CardsGallery from './CardsGallery'

function SingleDeck(props) {
  return (
    <Link to={`/deck/${props.id}`}>
      <div className='flex'>
        <h4>Name: {props.name}</h4>
        <p>Category: {props.category}</p>
        <div style={{ padding: '20px' }}>{props.cards.length ? <CardsGallery cards={props.cards} /> : 'No cards yet'}</div>
      </div>
    </Link>
  )
}

export default SingleDeck
