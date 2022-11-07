import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Button } from '../ForAllConponents/Buttons'
import './test_1.scss'


export default function Test_1() {
  const dispatch = useDispatch()
  const cash = useSelector(state => state.cash)

  const addCash = (cash) => {
    dispatch({ type: 'ADD_CASH', payload: cash })
  }

  const plusCash = () => {
    dispatch({ type: 'ADD_CASH', payload: 5 })
  }

  const getCash = (cash) => {
    dispatch({ type: 'GET_CASH', payload: cash })
  }

  const getClear = () => {
    dispatch({ type: 'GET_CLEAR' })
  }

  return (
    <div className='test1'>
      <div className='container'>
        <p>{cash}</p>
        <div className='test1__buttons'>
          <Button className='increment' onClick={() => addCash(parseInt(prompt()))} title='Add' />
          <Button className='decrement' onClick={() => getCash(parseInt(prompt()))} title='Minus' />
          <Button className='multiply' onClick={() => plusCash()} title='plus' />
          {cash !== 0 ? <Button className='zero' onClick={() => getClear()} title='Clear' /> : <></>}
        </div>
      </div>
    </div>
  )
}
