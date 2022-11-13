import React, { useState } from 'react'
import { Button } from "../ForAllComponents/Buttons";
import './scss/addTodo.scss'

export default function AddTodo({addTodo}) {
    const [value, setValue] = useState('');
    const onChange = (e) => {
        if (e.nativeEvent.data > 0 && e.nativeEvent.data < 10) {
            setValue(e.target.value);
        } 
        else if (e.nativeEvent.inputType === 'deleteContentBackward'){
            setValue('');
        }
    }
    const onClick = () => {
        if (value !== '') {
            addTodo({value, ids: Date.now()});
        }
    }
    return (
        <div className='addTodo'>
            <input type="text" placeholder='Enter todo' onChange={onChange} value={value} />
            <Button onClick={onClick} className='divide' title='Add todo' />
        </div>
    )
}
