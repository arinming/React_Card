import React from 'react'
import Card from './Card'

function CardList() {
  const names = ['아린', '안녕']
  const nameList = names.map(name => <h2>{name}</h2>)

  return (
    
    <div>
      {nameList}
    </div>
  )
}

export default CardList