import { useState } from 'react'

function SingleCard(props) {
  const [frontShowing, toggleFrontShowing] = useState(true)

  return(
    <div className='cardStyles' onClick={() => toggleFrontShowing(!frontShowing)}>
      {frontShowing ? props.card.front : props.card.back }
    </div>
  )
}
export default SingleCard
