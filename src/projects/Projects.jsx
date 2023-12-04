import { ProjectShow } from "../components/ProjectShow";
import SetSectionWrapper from "../components/SetSectionWrapper";
import "../css/components.css";

export default function Projects({name}){
    
    
    return (
        <SetSectionWrapper name={name} className="relative overflow-x-hidden h-fit pr-3 sm:pr-5 py-5 pl-0 gap-5">
           <div className="w-full h-fit grid grid-cols-1 md:grid-cols-2 mb-auto gap-5">
           <ProjectShow
            className="bg-[#D9B982] dark:bg-[#D9B982]"
            name="Black Bespoke"
            descr="Looking to kickstart your career as a developer or engineer? Presenting Developer X,"
            href="https://blackbespoke.netlify.app"
            tech_stack={["REACT", "DJANGO", "TAILWIND"]}
            src="/media/project-blackbespoke.png"
            img_classes="rotate-2"
           />
           <ProjectShow
            className="bg-[#FFBB00] dark:bg-[#FFBB00]"
            name="Gurufa NextGen"
            descr="Looking to kickstart your career as a developer or engineer? Presenting Developer X,"
            href="https://gurufa.netlify.app"
            tech_stack={["REACT", "DJANGO", "TAILWIND"]}
            src="/media/project-gurufa.png"
            img_classes="-rotate-2"
           />

           </div>
        </SetSectionWrapper>
    )
}