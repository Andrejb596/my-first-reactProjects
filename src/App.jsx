import { HashRouter, Routes as Switch, Route, NavLink } from "react-router-dom";
import './App.scss';
import Home from "./pages/Home";
import Page_1 from "./pages/Page_1";
import Page_2 from "./pages/Page_2";
import Page_3 from "./pages/Page_3";
// import Page_4 from "./pages/Page_4";
import Page_5 from "./pages/Page_5";
import Page_6 from "./pages/Page_6";


function App() {

  return (
    <HashRouter>
      <nav className='app__nav'>
        <NavLink to="Home" className="navLink">Home</NavLink>
        <NavLink to="Page_1" className="navLink">Counter</NavLink>
        <NavLink to="Page_2" className="navLink">Modal window</NavLink>
        <NavLink to="Page_3" className="navLink">Quiz</NavLink>
        {/* <NavLink to="Page_4" className="navLink">"Динамічна пагінація"</NavLink> */}
        <NavLink to="Page_5" className="navLink">Про ref</NavLink>
        <NavLink to="Page_6" className="navLink">Tabs</NavLink>
      </nav>
      <Switch>
        <Route exact path="Home" element={<Home />} />
        <Route path="Page_1" element={<Page_1 />} />
        <Route path="Page_2" element={<Page_2 />} />
        <Route path="Page_3" element={<Page_3 />} />
        {/* <Route path="Page_4" element={<Page_4 />} /> */}
        <Route path="Page_5" element={<Page_5 />} />
        <Route path="Page_6" element={<Page_6 />} />
      </Switch>
    </HashRouter>
  );
}

export default App;
