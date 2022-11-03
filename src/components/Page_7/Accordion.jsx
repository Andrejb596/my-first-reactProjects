import React, { useState } from 'react'
import './accordion.scss';

const data = [
    {
        qestion: 'Qestion 1',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Doudiandaemenda veniam laboriosam enim delectus aspernatur, debitis, sint facilis.'
    },
    {
        qestion: 'Qestion 2',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Doudiandaemenda veniam laboriosam enim delectus aspernatur, debitis, sint facilis.'
    },
    {
        qestion: 'Qestion 3',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Doudiandaemenda veniam laboriosam enim delectus aspernatur, debitis, sint facilis.'
    },
    {
        qestion: 'Qestion 4',
        answer: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.Doudiandaemenda veniam laboriosam enim delectus aspernatur, debitis, sint facilis.'
    }
]

export default function Accordion() {
    const [selected, setSelected] = useState(null);

    const toggle = i => {
        if(selected === i){
            return setSelected(null);
        }
        setSelected(i)
    }

    return (
        <div className="accordion">
            {data.map((item, i) => (
                <div key={i} className='accordion__item'>
                    <div className="accordion__item-title" onClick={() => toggle(i)}>
                        <h2 className='accordion__item-h2'>{item.qestion}</h2>
                        <span>{selected === i ? '-' : '+'}</span>
                    </div>
                    <div className={selected === i ? "accordion__item-content show" : "accordion__item-content"}>
                        {item.answer}
                    </div>
                </div>
            ))}
        </div>
    )
}
