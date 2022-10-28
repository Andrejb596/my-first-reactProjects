import React from 'react'

export default function Button(props) {
    return (
        <button
            onClick={props.fun}
            className={`counter__container-btn ${props.className}`}>
            {props.title}
        </button>
    )
}
