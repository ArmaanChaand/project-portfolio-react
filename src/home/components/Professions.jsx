import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useCommon } from "../../context/CommonContext";
export function Professions(){
    const {dataBase} = useCommon()
    const [professions, setProfessions] = useState([])
    const [index, setIndex] = useState(0)
    const [y, setY] = useState(0);
    useEffect(()=>{
       if(dataBase?.professions){
        setProfessions(dataBase.professions)
       }
    }, [dataBase])
    useEffect(()=>{
        if(!professions.length ) return 
        const interval = setInterval(() => {
            // Update y to '-100%' 1 second before showing the next item
            setY('-100%');
            setTimeout(() => {
              setIndex((prevIndex) => (prevIndex + 1) % professions.length);
              setY(0);
            }, 1000); // 1000 milliseconds = 1 second
          }, 3000); // 5000 milliseconds = 5 seconds
      
        return () => {
            clearInterval(interval);
        };
    }, [professions]);
    return (
            <motion.span className="different-profs" animate={{y:y}}>
                {professions[index] || "Web & App"}
            </motion.span>  
    )
}