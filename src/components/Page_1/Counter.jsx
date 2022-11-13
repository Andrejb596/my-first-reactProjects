import React, { useState } from 'react'
import { Button } from '../ForAllComponents/Buttons'
import './scss/counter.scss';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const multiply = () => setCount(count * 2);
    const divide = () => setCount(count / 2);
    const decrement = () => setCount(count - 1);

    return (
        <div className="counter">
            <h2 className="h2">Лічильник:</h2>
            <h1 className="h1">{count}</h1>
            <div className="counter__container">
                <Button className='increment' onClick={increment} title='Plus (+1)' />
                <Button className='decrement' onClick={decrement} title='Minus (-1)' />
                {count !== 0 ? <Button className='multiply' onClick={multiply} title='Multiply (*2)' /> : <></>}
                {count !== 0 ? <Button className='divide' onClick={divide} title='Divide (/2)' /> : <></>}
            </div>
        </div>
    )
}
