import React, { useState, useEffect } from 'react'
import './SCSS/page_8.scss'
import iconBonfire from '../components/Page_8/icon/iconBonfire.png'
import iconUmbrella from '../components/Page_8/icon/iconUmbrella.png'
import iconBulldozer from '../components/Page_8/icon/iconBulldozer.png'
import iconMoose from '../components/Page_8/icon/iconMoose.png'
import iconJacket from '../components/Page_8/icon/iconJacket.png'
import iconSnow from '../components/Page_8/icon/iconSnow.png'

import iconLetter from '../components/Page_8/icon/iconLetter.png'

const initialArrayCards = [
     { id: 1, img: iconBonfire },
     { id: 2, img: iconUmbrella },
     { id: 3, img: iconBulldozer },
     { id: 4, img: iconMoose },
     { id: 5, img: iconJacket },
     { id: 6, img: iconSnow }
]

const pairOfArrayCards = [...initialArrayCards, ...initialArrayCards];

export default function Page8() {
     const [arrayCards, setArrayCards] = useState(pairOfArrayCards) // катрочки
     const [openedCards, setOpenedCards] = useState([]);  // откритие карточки
     const [matchad, setMatchad] = useState([]);
     const [moves, setMoves] = useState(0); // шаги

     const shuffle = (array) => {
          let currentIndex = array.length,
               tempararyValue,
               randomIndex;

          while (currentIndex !== 0) {
               randomIndex = Math.floor(Math.random() * currentIndex);
               currentIndex -= 1;

               tempararyValue = array[currentIndex];
               array[currentIndex] = array[randomIndex];
               array[randomIndex] = tempararyValue;
          }
          return array;
     }

     useEffect(() => {
          setArrayCards(() => shuffle(pairOfArrayCards))
     }, [])


     return (
          <div className="page8">
               <p className='numberOfStrokes'>Зроблено ходів: {moves}</p>
               <div className='cards'>
                    {arrayCards.map((item, index) => {
                         let isFlipt = false;

                         if (openedCards.includes(index)) isFlipt = true;
                         if (matchad.includes(item.id)) isFlipt = true;

                         return (
                              <div key={index} className={`card ${isFlipt ? 'flipped' : ''}`}>
                                   <div className='inner'>
                                        <div className='front'>
                                             <img src={item.img} width='100' alt='frontCard' />
                                        </div>
                                        <div className='back'>
                                             <img src={iconLetter} width='100' alt='backCard' />
                                        </div>
                                   </div>
                              </div>
                         )
                    })}
               </div>
          </div>


     )
}
