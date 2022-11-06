import React from 'react'

export default function FilmInfo({ title, genre, seasonCount, filmRating }) {
    return (
        <div>
            <p>{title || 'Немає'}</p>
            {Boolean(genre) && <p>{genre}</p>}
            <p>{seasonCount > 0 ? `Кількість: ${seasonCount}` : 'Немає'}</p>
            <p>Рейтинг: {filmRating}</p>
        </div>
    )
}
