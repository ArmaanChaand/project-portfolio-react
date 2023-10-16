import { useEffect, useState } from "react";
import "./home.css";
import { motion } from "framer-motion";

export default function Home(){
    const [y, setY] = useState(false)

    useEffect(() => {
        const intervalId = setInterval(() => {
          // Update the state here
          setY(prev => !prev    )
        }, 1000); // 100 seconds in milliseconds
    
        // Clear the interval when the component unmounts
        return () => clearInterval(intervalId);
      }, []);
    
    return (
        <section className="HOME page-section">
            <div className="intro">
                <h1 className="main-heading">
                   I Love You Baby
                    <br/>
                    <span className="text-[0.9em] opacity-80">❤️❤️❤️</span>
                    <br/>
                    <span className="text-[0.8em] opacity-80">I'm ...</span>
                </h1>
                <h5 class="profession">
                        <motion.span className="different-profs" animate={{y:y?0:100}}>
                        Sorry 😔
                        </motion.span>  
                    <span class="grad-span"> Neha </span>
                </h5>
            </div>
        </section>
    )
}