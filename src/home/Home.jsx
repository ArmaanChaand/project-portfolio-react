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
                   Baby, suno na ...
                    <br/>
                    <span className="text-[0.9em] opacity-80"> hua yeh tha ki ... </span>
                    <br/>
                    <span className="text-[0.5em] opacity-80">Hm raat mein baat krna chah rahe the ... lekin tm call receive nhi kr rahe the ... toh raat bhar mann mein kchh se kchh chalne laga...
Aur phir subah bhi call receive nhi kiye toh laga pata nhi kya ho gaya...
phir chai peete peete woh sab yaad aane laga
</span>
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