import { motion } from "framer-motion";
import SetSectionWrapper from "../components/SetSectionWrapper";
import "../css/components.css";
import { ImageWithPopup } from "../components/Images";
import { FiArrowUpRight } from "react-icons/fi";
import { FaGithubSquare, FaReact } from "react-icons/fa";
import { SiDjango, SiTailwindcss  } from "react-icons/si";
export default function Projects({name}){
    
    
    return (
        <SetSectionWrapper name={name} className="relative overflow-hidden pr-3 sm:pr-5 py-5 pl-0 ">
            <div className="w-full h-full flex flex-col sm:flex-row justify-center items-center gap-5">
               <div className="w-full sm:w-5/12 flex-none aspect-video relative mb-auto mr-auto p-2
               border-2 border-black dark:border-zinc-200 rounded">
                  <ImageWithPopup 
                    src="/media/project-blackbespoke.png"
                    alt="Project BlackBespoke"

                  />
               </div>
               <div className="w-full flex flex-col justify-center items-center gap-3 mt-auto">
                    <p 
                        className="bg-zinc-900 text-white  dark:bg-white dark:text-zinc-900
                        p-3 text-sm sm:text-base first-letter:text-3xl sm:first-letter:text-5xl
                         first-letter:float-left first-letter:mr-3 text-justify first-letter:font-semibold first-line:uppercase">
                    Black Bespoke ipsum dolor sit amet, consectetur adipiscing elit. In ac interdum libero. Donec dictum orci at laoreet accumsan. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac interdum libero. Donec dictum orci at laoreet accumsan. 
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac interdum libero. Donec dictum orci at laoreet accumsan. 
                    </p>
                    <h4 className="text-lg sm:text-4xl font-bold w-full flex justify-between items-center 
                    p-3 rounded-sm
                    bg-zinc-900 text-white  dark:bg-white dark:text-zinc-900">
                        <span>Black Bespoke</span>
                        <a href="https://blackbespoke.netlify.app/" target="_blank" className="">
                            <FiArrowUpRight className="hover:text-emerald-600 transition-colors"/>
                        </a>
                    </h4>
                    <div className="w-full flex flex-row justify-center items-center gap-3 text-2xl sm:text-3xl">
                        <div className="w-full flex flex-row justify-start items-center
                         bg-zinc-900 text-white  dark:bg-white dark:text-zinc-900 p-2 pl-3 rounded-sm gap-1">
                            <FaReact title="ReactJS" />
                            <SiTailwindcss  title="TailwindCSS" />
                            <SiDjango title="Django" />
                        </div>
                        <a href="https://github.com/ArmaanChaand/black-bespoke-frontend/tree/prod" 
                            target="_blank"
                            className="inline-block bg-zinc-900 text-white  dark:bg-white dark:text-zinc-900 p-2 rounded-sm">
                                <FaGithubSquare/>
                        </a>
                    </div>
               </div>
            </div>
        </SetSectionWrapper>
    )
}