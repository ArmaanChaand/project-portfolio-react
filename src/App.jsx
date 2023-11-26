import { Route, Routes } from "react-router";
import "./css/App.css";
import Home from "./home/Home";
import SideNav from "./components/SideNav";
import { useEffect, useRef, useState } from "react";

function App() {
  const [section, setSection] = useState()

  const projects_ref = useRef()


  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center ">
      <SideNav 
        section={section}
      />
      <div className="w-full h-screen overflow-y-auto">
          {/* <Routes>
            <Route path="/" element={<Home/>}/>
          </Routes> */}
          <Home name="HOME" />
          <Home name="PROJECTS"/>
      </div>
    </div>
  )
}

export default App
