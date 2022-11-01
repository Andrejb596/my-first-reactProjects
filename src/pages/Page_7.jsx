import React from 'react';
import './SCSS/page_7.scss';
import Accordion from "../components/Page_7/Accordion";



export default function Page_7() {
    return (
        <div className='Page_7 page'>
            <div className="Page_7__accordion-container">
                <div className="item">
                    <h1>one</h1>
                    <Accordion />
                </div>
                <div className="item">
                    <h1>two</h1>
                    <Accordion />
                </div>
                <div className="item">
                    <h1>three</h1>
                    <Accordion />
                </div>
            </div>
        </div>
    );
};
