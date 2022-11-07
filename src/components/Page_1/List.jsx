import React from 'react'

export default function List({ data }) {
    return (
        <ul>
            {
                data.map(({ids:id, value}) => <li key={id}>{value}</li>)
            }
        </ul>
    )
}
