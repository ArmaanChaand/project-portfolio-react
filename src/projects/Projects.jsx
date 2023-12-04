import "../css/components.css";
import { ProjectShow } from "../components/ProjectShow";
import SetSectionWrapper from "../components/SetSectionWrapper";

export default function Projects({name}){
    
    
    return (
        <SetSectionWrapper name={name} className="relative overflow-x-hidden h-fit pr-3 sm:pr-5 py-5 pl-0 gap-5 snap-none">
           <div className="w-full h-fit grid grid-cols-6 mb-auto gap-5">
           <ProjectShow
            className="bg-[#D9B982] dark:bg-[#D9B982]"
            name="Black Bespoke"
            descr="Worked on this after Gurufa. A suit clothing company. It got automated appointment booking feature."
            href="https://blackbespoke.netlify.app"
            tech_stack={["ReactJS", "Django", "Tailwind", "Query"]}
            src="/media/project-blackbespoke.png"
            img_classes="rotate-2 sm:top-[45%]"
           />
           <ProjectShow
            className="bg-[#FFBB00] dark:bg-[#FFBB00]"
            name="Gurufa NextGen"
            descr="Worked as sole developer. Learned a lot from it. I also got a great help from the owner of this project, Mr. Ashutosh."
            href="https://gurufa.netlify.app"
            tech_stack={["ReactJS", "Django", "TailwindCSS"]}
            src="/media/project-gurufa.png"
            img_classes="-rotate-2"
           />
           <ProjectShow
            className="bg-emerald-600 dark:bg-emerald-600"
            name="Project Portfolio"
            descr="This is my own project. As you can see it's my personal portfolio."
            href="https://armaanchaand.vercel.app"
            tech_stack={["ReactJS","TailwindCSS"]}
            github_repo="https://github.com/ArmaanChaand/project-portfolio-react"
            src="/media/project-portfolio.png"
            img_classes="-rotate-2"
           />
           </div>
        </SetSectionWrapper>
    )
}