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
        <SetSectionWrapper name={name} className="relative overflow-hidden">
            <motion.div  
                className="w-fit mx-auto mb-auto mt-10 sm:mt-44 z-10 flex flex-col justify-center items-center "
                initial="hidden"
                animate="visible"
                variants={container}
            >
                <motion.h3
                    className="font-extrabold text-2xl sm:text-5xl text-zinc-400/50 mr-auto mb-5"
                    variants={item}
                >
                    Hi, my name is
                </motion.h3>
                <motion.h1
                    className="font-extrabold leading-none tracking-tight text-5xl sm:text-9xl flex flex-row justify-center items-center flex-wrap"
                    variants={item}
                
                >
                    <span className="mr-auto">Armaan </span>
                    <span className="ml-auto">Chaand </span>
                </motion.h1>
                <motion.h3 
                    className="font-extrabold mt-5 text-3xl sm:text-4xl text-emerald-600 ml-auto text-end"
                    variants={item}
                >
                    a web developer
                    <span className="font-serif">.</span>
                </motion.h3>
            </motion.div>
            <strong 
                className="absolute rotate-90 sm:rotate-0 -bottom-6 sm:-bottom-32 -right-24 sm:right-0 text-[300px] sm:text-[400px] md:text-[500px] font-extrabold z-0 text-zinc-200 dark:text-zinc-800/50 tracking-[-0.1em]"
            >AC</strong>
        </SetSectionWrapper>
    )
}