import "./home.css";
import { Professions } from "./components/Professions";

export default function Home(){
    
    
    return (
        <section className="HOME page-section">
            <div className="intro">
                <h1 className="main-heading">
                    Welcome! 
                    <br/>
                    <span className="text-[0.9em] opacity-80 inline-block mt-3 sm:mt-2">My name is Armaan Chaand.</span>
                    <br/>
                    <span className="text-[0.8em] opacity-80 inline-block mt-3 sm:mt-2">I'm a ...</span>
                </h1>
                <h5 className="profession">
                    <Professions/>  
                    <span className="grad-span"> Developer </span>
                </h5>
            </div>
            <div className="contacts">
                Email   
            </div>
        </section>
    )
}