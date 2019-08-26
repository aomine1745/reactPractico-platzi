import React from 'react'

export default function Button(props) {
  const { text2 } = props
  return (
    <div>
      <button>{ props.text }</button>
      <button>{ text2 }</button>  
    </div>
  )
}