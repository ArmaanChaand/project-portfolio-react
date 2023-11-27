import "./css/App.css";
import Home from "./home/Home";
import SideNav from "./components/SideNav";
import SetSectionWrapper from "./components/SetSectionWrapper";

function App() {


  return (
    <div className="w-screen h-screen flex flex-row justify-center items-center ">
      <SideNav 
        
      />
      <div className="w-full h-screen overflow-y-auto overflow-x-hidden">
        
          <Home name="HOME" />
          <SetSectionWrapper name="PROJECTS">
          <h1
                    className="font-extrabold leading-none tracking-tight text-5xl sm:text-9xl flex flex-row justify-center items-center flex-wrap"
           
                
                >
                  PROJECTS
                </h1>
          </SetSectionWrapper>
          <SetSectionWrapper name="ABOUT">
          <h1
                    className="font-extrabold leading-none tracking-tight text-5xl sm:text-9xl flex flex-row justify-center items-center flex-wrap"
           
                
                >
                  ABOUT
                </h1>
          </SetSectionWrapper>
      </div>
    </div>
  )
}

export default App
