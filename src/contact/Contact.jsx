import { MdEmail } from "react-icons/md";
import { FaGithubSquare, FaLinkedin, FaReact } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import SetSectionWrapper from "../components/SetSectionWrapper";
import { techs } from "../assets/utils";

export default function Contact({name}){
    const skills = ["ReactJS", "Django", "Tailwind", "NextJs", "Git", "JSON", "Zod", "Query", "Mui", "API", "GraphQL"]
    return(
        <SetSectionWrapper className="min-h-screen mt-10" name={name}>
        <div className="grid grid-cols-6 w-full min-h-screen mb-auto gap-5">
            <div className="col-span-6 md:col-span-3 flex flex-col justify-start items-center p-5 gap-3 py-10">
                <h4 className="text-3xl font-bold w-full">About</h4>
                <p className="w-full mr-auto text-justify text-sm sm:text-base font-semibold dark:font-normal">
                I'm a college student with a passion for web development. I started learning web development online, and since then, I've honed my skills using tools like Django and React JS. I'm currently freelancing and building websites for clients who need them.
                </p>
                <h4 className="text-3xl font-bold w-full mt-8">Skills</h4>
                <div className="w-full h-fit grid grid-cols-2 lg:grid-cols-3 gap-1">
                   {skills.map(skill => (
                     <div className="h-10 overflow-hidden p-2 border border-zinc-900/60 
                     dark:border-white/60">
                        <p className="flex flex-row justify-start items-center text-base sm:text-lg gap-2 text-ellipsis">
                            <span>
                                {techs[skill]}
                            </span>
                            <span className="text-sm text-ellipsis w-full inline-block font-semibold dark:font-normal ">{skill}</span>
                        </p>
                    </div>
                   ))}
                </div>
            </div>
            <div className="col-span-6 md:col-span-3 flex justify-center items-center relative">
                <div className="absolute bg-emerald-600 w-32 h-full right-0"></div>
                <div 
                    className="h-fit py-14 w-full bg-black text-white dark:bg-white dark:text-zinc-900 z-10 
                    flex flex-col justify-evenly items-start pl-10 gap-5">
                    <h4 className="text-3xl font-bold">Feel free to reach out</h4>
                    <a href="mailto:armaan.chaand17@gmail.com" className="group flex flex-row justify-center items-center text-lg gap-5">
                        <span className="text-2xl"><MdEmail/></span>
                        <span className="text-sm dark:font-semibold group-hover:underline">armaan.chaand17@gmail.com</span>
                    </a>
                    <a href="https://www.linkedin.com/in/armaanchaand/" className="group flex flex-row justify-center items-center text-lg gap-5">
                        <span className="text-2xl"><FaLinkedin/></span>
                        <span className="text-sm dark:font-semibold group-hover:underline">linkedin.com/in/armaanchaand</span>
                    </a>
                    <a href="https://github.com/ArmaanChaand" className="group flex flex-row justify-center items-center text-lg gap-5">
                        <span className="text-2xl"><FaGithubSquare/></span>
                        <span className="text-sm dark:font-semibold group-hover:underline">github.com/ArmaanChaand</span>
                    </a>
                    <a href="https://twitter.com/ArmaanChaand" className="group flex flex-row justify-center items-center text-lg gap-5">
                        <span className="text-2xl"><FaSquareXTwitter/></span>
                        <span className="text-sm dark:font-semibold group-hover:underline">twitter.com/ArmaanChaand</span>
                    </a>
                </div>
            </div>
        </div>
        </SetSectionWrapper>
    )
}