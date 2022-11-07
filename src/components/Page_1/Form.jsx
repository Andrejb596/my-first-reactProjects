import React, { useState } from 'react'
import { Button } from "../ForAllConponents/Buttons";
import './scss/form.scss'

export default function Form() {
    const [inputs, setInputs] = useState({});

    const changeInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setInputs({...inputs, [name]: value})
    }

    const submitForm = () => {
        setInputs({})
        console.log(inputs);
    }
    return (
        <div className='form'>
            <input type="number" name='name' placeholder='text' value={inputs.name || ''} onChange={changeInput}/>
            <input type="text" name='lastName' placeholder='lastName' value={inputs.lastName || ''} onChange={changeInput}/>
            <input type="text" name='email' placeholder='email' value={inputs.email || ''} onChange={changeInput}/>
            <Button className='increment' onClick={submitForm} title='Submit' />
        </div>
    )
}
