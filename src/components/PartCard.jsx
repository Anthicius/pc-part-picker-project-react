import React from 'react'

const PartCard = ({part, onSelectPart}) => {
  return (
    <div className='part-card' onClick={()=> onSelectPart(part)}>{part.name}</div>
  )
}

export default PartCard