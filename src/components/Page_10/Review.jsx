import React from 'react'
import './SCSS/review.scss'

export default function Review({ author, text, rating, id }) {
  return (
    <div key={id} className='review'>
      <p>Author: {author || 'Немає'};</p>
      <p>Text: {text};</p>
      <p>Rating: {rating};</p>
    </div>
  )
}
