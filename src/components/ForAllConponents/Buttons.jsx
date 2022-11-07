import React from 'react'
import './buttons.scss'

export const Button = ({className, onClick, title}) => {
    return (
        <button className={`Button ${className}`} onClick={onClick}>
            {title || 'title'}
            </button>
    )
}
