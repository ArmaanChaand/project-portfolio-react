import { Route, Routes } from "react-router";
import "./css/App.css";
import Home from "./home/Home";
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
  )
}

export default App
