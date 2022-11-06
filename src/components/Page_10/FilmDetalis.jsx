import React from 'react'
import './SCSS/filmDetalis.scss'
import useCount from "./hooks/useCount";
import FilmInfo from "../Page_10/FilmInfo";

export default function FilmDetalis({ title, genre, seasonCount, filmRating }) {
    const { count, decrement, increment } = useCount(0);
    return (
        <div className="filmDetalis">
            <div className='container__button'>
                <FilmInfo title={title} genre={genre} seasonCount={seasonCount} filmRating={filmRating} />
                <p>{count}</p>
                <button className='plus' onClick={increment}> - </button>
                <button className='minus' onClick={decrement}> + </button>
            </div>
        </div>
    )
}

// count почінить
