import "./css/App.css";
import Home from "./home/Home";
import SideNav from "./components/SideNav";
import SetSectionWrapper from "./components/SetSectionWrapper";
import Projects from "./projects/Projects";
import { Route, Routes } from "react-router-dom";
import { useCommon } from "./context/CommonContext";
import { useEffect } from "react";


function App() {
  const {section_inview} = useCommon()
  useEffect(()=>{
    // document.body.dataset.section = section_inview
  }, [section_inview])

  return (
    <div className="w-screen h-fit flex flex-row justify-center items-center ">
      <strong 
          className="lowercase fixed rotate-90 sm:rotate-0 -bottom-6 sm:-bottom-32 -right-24 sm:right-10 
          text-[300px] sm:text-[400px] md:text-[500px] 2xl:text-[1000px] 
          font-extrabold z-0 text-zinc-200 dark:text-zinc-800/50 tracking-tighter"
      >AC</strong>
      <SideNav 
        
      />
      <div className="w-full h-screen overflow-y-auto overflow-x-hidden z-10 snap-y">
          <Routes>
            <Route path="/" element={
              <>
                <Home name="HOME" />
          <Projects name="PROJECTS"/>
          <SetSectionWrapper className="h-full" name="ABOUT">
          <h1
                    className="font-extrabold leading-none tracking-tight text-5xl sm:text-9xl flex flex-row justify-center items-center flex-wrap"
           
                
                >
                  ABOUT
                </h1>
          </SetSectionWrapper>
              </>
            }/>
            
          </Routes>
      </div>
    </div>
  )
}

export default App
