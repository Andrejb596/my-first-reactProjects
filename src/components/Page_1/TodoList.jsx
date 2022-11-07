import React, { useState } from 'react'
import './scss/todoList.scss'
import AddTodo from "./AddTodo";
import List from "./List";

export default function TodoList() {
  const [list, setList] = useState([]);
  
  const addTodo = (todo) => {
    setList([...list, todo])
  }

  console.log(list);

  return (
    <div className='todoList'>
      <h1>TodoList</h1>
      <AddTodo addTodo={addTodo}/>
      <List data={list}/>
    </div>
  )
}
