import { useState } from 'react'

function SingleCard(props) {
  const [frontShowing, toggleFrontShowing] = useState(true)

  const cardStyles = {
    flex: 1,
    width: '100%',
    height: '100%'
  }

  return(
    <div style={cardStyles} onClick={() => toggleFrontShowing(!frontShowing)}>
      {frontShowing ? props.card.front : props.card.back }
    </div>
  )
}
export default SingleCard
