import React, {useMemo} from 'react'
import FilmDetails from "../components/Page_10/FilmDetails";
import Reviews from "../components/Page_10/Reviews";
import Recommendations from "../components/Page_10/Recommendations";
import './SCSS/page_10.scss'


export default function Page_10() {
    const filmDetalis = {
        id: 'awdawdawdaw', // доделать
        title: 'The Simpsons',
        seasonCount: 33,
        genre: 'Comedy',
        similar: [1, 2, 3, 4, 5],
        reviews: [
            {
                id: '1a',
                author: 'I am ',
                text: ' awdawdawdawdawdawdw123123qw',
                rating: 10
            },
            {
                id: '2a',
                author: 'Nikolai ',
                text: ' dsfgsdfgsdfg',
                rating: 12
            },
            {
                id: '3a',
                author: 'Viola',
                text: ' rrerere',
                rating: 5
            }
        ]
    };

    const filmRating = useMemo(() => {
        return Math.floor(
            filmDetalis.reviews.reduce((sum, review) => {
                return sum + review.rating
            }, 0) / filmDetalis.reviews.length
        );
    }, [filmDetalis.reviews]);


    return (
        <div className='page_10'>
            <FilmDetails
                title={filmDetalis.title}
                genre={filmDetalis.genre}
                seasonCount={filmDetalis.seasonCount}
                filmRating={filmRating} />
            <Reviews reviews={filmDetalis.reviews} />
            <Recommendations />
        </div>
    )
}
