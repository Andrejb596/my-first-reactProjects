import React from 'react'
import Counter from "../components/Page_1/Counter";
import { ReactComponent as Logo } from "../components/Page_1/icon.svg";
import "./SCSS/page_1.scss";


function Page_1() {
  return (
    <div className="Page_1 page">
      <Counter />
      <div className="logo">
      <Logo fill='peru' height='100'/>
      <Logo fill='red' height='100'/>
      <Logo fill='tomato' height='100'/>
      </div>
    </div>
  );
}

export default Page_1;