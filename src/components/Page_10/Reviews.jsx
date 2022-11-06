import React from 'react'
import Review from "./Review";
import './SCSS/reviews.scss'

export default function Reviews({ reviews }) {
    return (
        <div className='reviews'>
            {
                reviews.length > 0 && reviews.map((review) => (
                    <Review
                        key={review.id}
                        author={review.author}
                        text={review.text}
                        rating={review.rating}
                    />
                ))
            }
        </div>
    )
}
