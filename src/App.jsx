import { Route, Routes } from "react-router";
import "./css/App.css";
import { NavLink } from "react-router-dom";
import Home from "./home/Home";
function App() {
  return (
    <>
    <nav className="nav">
      
      <ul className="tab-btns">
          <li>
          <NavLink to="/" className={({isActive})=>isActive ? "nav-tab active" : "nav-tab" }>Home</NavLink> 
          </li>
          <li>
          <NavLink to="/projects/" className={({isActive})=>isActive ? "nav-tab active" : "nav-tab" }>Projects</NavLink> 
          </li>
          <li>
          <NavLink to="/about/" className={({isActive})=>isActive ? "nav-tab active" : "nav-tab" }>About</NavLink> 
          </li>
      </ul>
  </nav>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
    </>
  )
}

export default App
