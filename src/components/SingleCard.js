import { useState } from 'react'

function SingleCard(props) {
  const [frontShowing, toggleFrontShowing] = useState(true)

  const cardStyles = {
    flex: '1',
    textAlign: 'center',
    alignSelf: 'center',
    lineHeight: '350px',
    background: 'rgba(255,255,255,0.2)',
    border: '1px solid beige'
  }

  return(
    <div style={cardStyles} onClick={() => toggleFrontShowing(!frontShowing)}>
      {frontShowing ? props.card.front : props.card.back }
    </div>
  )
}
export default SingleCard
