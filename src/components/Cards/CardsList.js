import PropTypes from 'prop-types'
import SingleCardListView from './SingleCardListView'

function CardsList(props) {
  return (
    <div>
      {props.cards.map((card, index) => <SingleCardListView key={`${props.deckId}${index}`} {...card} deckId={props.deckId} />)}
    </div>
  )
}

CardsList.propTypes = {
  deckId: PropTypes.string.isRequired,
  cards: PropTypes.array
}

export default CardsList
