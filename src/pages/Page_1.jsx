import React from 'react'
import Counter from "../components/Page_1/Counter";
import { ReactComponent as Logo } from "../components/Page_1/icon.svg";
import Input from "../components/Page_1/Input";
import TodoList from "../components/Page_1/TodoList";
import "./SCSS/page_1.scss";
import Form from "../components/Page_1/Form";


function Page_1() {
  return (
    <div className="Page_1 page">
      <Counter />
      <div className="logo">
        <Logo fill='peru' height='100' />
        <Logo fill='red' height='100' />
        <Logo fill='tomato' height='100' />
      </div>
      <Input />
      <TodoList />
      <Form/>
    </div>
  );
}

export default Page_1;