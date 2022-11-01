import React, { useState, useEffect, useRef } from 'react'
import './list.scss'

export default function List() {
    function useScroll(parentRef, childRef, callback) {
        const observer = useRef();

        useEffect(() => {
            const options = {
                root: parentRef.current,
                rootMargin: "0px",
                threshold: 0
            }
            observer.current = new IntersectionObserver(([target]) => {
                if (target.isIntersecting) {
                    callback();
                }
            }, options)
            observer.current.observe(childRef.current)

            return function () {
                observer.current.unobserve(childRef.current)
            }
        }, [callback])
    }

    const [todos, setTodos] = useState([]);
    const [page, setPage] = useState(1); // страница
    const limit = 20; // за раз подгружаем 20 строк 
    const parentRef = useRef();
    const childRef = useRef();
    const intersected = useScroll(parentRef, childRef, () => fetchTodos(page, limit));

    function fetchTodos(page, limit) {
        fetch(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}&_page=${page}`)
            .then(response => response.json())
            .then(json => {
                setTodos(prev => [...prev, ...json]);
                setPage(prev => prev + 1)
            })
    }

    return (
        <div ref={parentRef} className='list'>
            {todos.map(todo =>
                <div key={todo.id} className='list__item'>
                    {todo.id}.{todo.title}
                </div>
            )}
            <div ref={childRef} className='list__point'></div>
        </div>
    )
}
