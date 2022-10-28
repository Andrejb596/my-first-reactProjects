import React, { useState } from 'react'
import Button from "./Button";
import './counter.scss';

export default function Counter() {
    const [count, setCount] = useState(0);

    const increment = () => setCount(count + 1);
    const multiply = () => setCount(count * 2);
    const divide = () => setCount(count / 2);
    const decrement = () => setCount(count - 1);

    return (
        <div className="counter">
            <h1>{count}</h1>
            <div className="counter__container">
                <Button title="Додати" className="increment" fun={increment} />
                <Button title="Відняти" className="decrement" fun={decrement} />
                <Button title="Помножити" className="multiply" fun={multiply} />
                <Button title="Розділити" className="divide" fun={divide} />
            </div>
        </div>
    )
}
