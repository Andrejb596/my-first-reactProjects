import { HashRouter, Routes as Switch, Route, NavLink } from "react-router-dom";
import './App.scss';
import { useState } from 'react';
import Home from "./pages/Home";
import Page_1 from "./pages/Page_1";
import Page_2 from "./pages/Page_2";
import Page_3 from "./pages/Page_3";
// import Page_4 from "./pages/Page_4";
import Page_5 from "./pages/Page_5";
import Page_6 from "./pages/Page_6";
import Page_7 from "./pages/Page_7";
import Page_8 from "./pages/Page_8";
import Page_9 from "./pages/Page_9";
import Page_10 from "./pages/Page_10";
import Page_11 from "./pages/Page_11";
import Page_12 from "./pages/Page_12";




function App() {
  const [isActive, setIsActive] = useState(false);

  function changeArrow() {
    setIsActive((visible) => !visible);
  }

  return (
    <HashRouter>
      <nav className={isActive ? 'app__nav activ' : 'app__nav'}>
        <div className='app__nav-changeArrow' onClick={changeArrow}></div>
        <ul className='app__nav__menu'>
          <li><NavLink to="Home" className="navLink">Home</NavLink></li>
          <li><NavLink to="Page_1" className="navLink">Counter</NavLink></li>
          <li><NavLink to="Page_2" className="navLink">Modal window</NavLink></li>
          <li><NavLink to="Page_3" className="navLink">Quiz</NavLink></li>
          <li><NavLink to="Page_5" className="navLink">Про ref</NavLink></li>
          <li>{/* <NavLink to="Page_4" className="navLink">"Динамічна пагінація"</NavLink> */}</li>
          <li><NavLink to="Page_6" className="navLink">Tabs</NavLink></li>
          <li><NavLink to="Page_7" className="navLink">Accordions</NavLink></li>
          <li><NavLink to="Page_8" className="navLink">Cards</NavLink></li>

          <li className='menu__list'>
            <p>Drop list</p>
            <ul className='menu__drop'>
              <li><NavLink to="Page_9" className="navLink">Sudoku</NavLink></li>
              <li><NavLink to="Page_10" className="navLink">По відео</NavLink></li>
              <li><NavLink to="Page_12" className="navLink">Cube</NavLink></li>
            </ul>
          </li>

          <li className='menu__list'>
            <p>Redax</p>
            <ul className='menu__drop'>
              <li><NavLink to="Page_11" className="navLink">__1__</NavLink></li>
            </ul>
          </li>

        </ul>
      </nav>
      <Switch>
        <Route path="Home" element={<Home />} />
        <Route path="Page_1" element={<Page_1 />} />
        <Route path="Page_2" element={<Page_2 />} />
        <Route path="Page_3" element={<Page_3 />} />
        {/* <Route path="Page_4" element={<Page_4 />} /> */}
        <Route path="Page_5" element={<Page_5 />} />
        <Route path="Page_6" element={<Page_6 />} />
        <Route path="Page_7" element={<Page_7 />} />
        <Route path="Page_8" element={<Page_8 />} />
        <Route path="Page_9" element={<Page_9 />} />
        <Route path="Page_10" element={<Page_10 />} />
        <Route path="Page_11" element={<Page_11 />} />
        <Route path="Page_12" element={<Page_12 />} />
      </Switch>
    </HashRouter>
  );
}

export default App;
