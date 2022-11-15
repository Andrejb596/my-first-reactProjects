import React from 'react'
import './SCSS/filmDetails.scss'
import useCount from "./hooks/useCount";
import FilmInfo from "./FilmInfo";

export default function FilmDetails({ title, genre, seasonCount, filmRating }) {
    const { count, decrement, increment } = useCount(0);
    return (
        <div className="filmDetails">
            <div className='container__button'>
                <FilmInfo title={title} genre={genre} seasonCount={seasonCount} filmRating={filmRating} />
                <p>{count}</p>
                <button className='plus' onClick={increment}> - </button>
                <button className='minus' onClick={decrement}> + </button>
            </div>
        </div>
    )
}

