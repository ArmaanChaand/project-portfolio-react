import { Route, Routes } from "react-router";
import "./css/App.css";
import Home from "./home/Home";
import { NavBtn } from "./components/NavBtn";
function App() {
  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center overflow-hidden">
    <nav className="h-full w-12 bg-green-600 sm:w-28  ">
      
      <ul className="h-full -rotate-90 flex flex-row justify-center items-center p-2 bg-transparent rounded gap-5">
         <NavBtn to="/">Home</NavBtn>
         <NavBtn to="/projects">Projects</NavBtn>
         <NavBtn to="/about">About</NavBtn>
      </ul>
  </nav>
  <div className="w-full h-full">
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
  </div>
    </div>
  )
}

export default App
