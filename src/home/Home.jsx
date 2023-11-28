import { motion } from "framer-motion";
import SetSectionWrapper from "../components/SetSectionWrapper";
import "../css/components.css";

export default function Home({name}){
    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delayChildren: 0.3,
            staggerChildren: 0.2
          }
        }
      };
      
      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };
      
    
    return (
        <SetSectionWrapper name={name} className="relative overflow-hidden pr-3">
            <motion.div  
                className="w-full sm:w-fit mx-auto mb-auto mt-10 
                sm:mt-36 z-10 flex flex-col justify-center items-center overflow-hidden gap-4 sm:gap-2"
                initial="hidden"
                animate="visible"
                variants={container}
            >
                <motion.h3
                    className="uppercase font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl 2xl:text-9xl text-zinc-400/50 mr-auto"
                    variants={item}
                >
                    Hey, I'm
                </motion.h3>
                <motion.h1
                    className="font-extrabold leading-none tracking-tight  text-5xl sm:text-7xl uppercase 
                    md:text-8xl lg:text-9xl 2xl:text-[16rem] flex flex-row justify-between items-center sm:gap-5 2xl:gap-20 flex-wrap"
                    variants={item}
                
                >
                    <span className="mr-auto">Armaan </span>
                    <span className="ml-auto">Chaand </span>
                </motion.h1>
                <motion.h3 
                    className="font-extrabold text-3xl sm:text-4xl 2xl:text-9xl text-emerald-600 ml-auto text-end"
                    variants={item}
                >
                    a web developer
                    <span className="font-serif">.</span>
                </motion.h3>
            </motion.div>
            
        </SetSectionWrapper>
    )
}