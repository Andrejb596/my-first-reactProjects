import React, { useState } from 'react'
import './tabs.scss'

export default function Tabs() {
    const [index, setIndex] = useState(0);
    return (
        <div className='tabs'>
            <div className="tabs__list">
                <div className={index === 0 ? 'tab__head active' : 'tab__head'} onClick={()=>{setIndex(0)}}>One</div>
                <div className={index === 1 ? 'tab__head active' : 'tab__head'} onClick={()=>{setIndex(1)}}>Two</div>
                <div className={index === 2 ? 'tab__head active' : 'tab__head'} onClick={()=>{setIndex(2)}}>Three</div>
            </div>
            <div className="tabs__content" hidden={index !== 0}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi perferendis blanditiis molestiae optio iusto beatae odit deleniti amet quidem! Ratione?
            </div>
            <div className="tabs__content" hidden={index !== 1}>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae dignissimos dicta facere rem recusandae omnis?
            </div>
            <div className="tabs__content" hidden={index !== 2}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus, veritatis?
            </div>
        </div>
    )
}
