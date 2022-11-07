import React from 'react'
import { useState } from 'react';
import { Button } from "../ForAllConponents/Buttons";
import './scss/input.scss'

export default function Input() {
    const [value, setValue] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const isShortValue = value.length < 7 ;

    const onChange = (e) => {
        setIsChecked(false)
        setValue(e.target.value) 
    };
    const onButtonClick = ()=>{
        setIsChecked(true)
    }
    return (
        <div className='input'>
            <input className={`input ${isChecked && isShortValue ? 'error' : ''}`} type="text" placeholder='Password' onChange={onChange} />
            <Button onClick={onButtonClick} className='multiply' title='Click' />
            {isChecked && <>{value.length > 7 ? <div>Password is good</div> : <div>'Password is too short'</div>}</>}
        </div> 
    )
}
