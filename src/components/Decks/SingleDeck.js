import { Link } from 'react-router-dom'
import CardsGallery from '../Cards/CardsGallery'
import { useParams } from 'react-router-dom'
import './SingleDeck.css'

function SingleDeck(props) {
  const { id } = useParams()

  return (
    <Link to={`/deck/${props.id}`}>
      <div className='flex f-col deckStyles' >
        <h3 className='nameStyles'>{props.name}</h3>
        <p className='faded'>{props.category}</p>
        { id ?
          <div style={{ padding: '20px' }}>{props.cards.length ? <CardsGallery cards={props.cards} /> : 'No cards yet'}</div>
          : null
        }
      </div>
    </Link>
  )
}

export default SingleDeck
