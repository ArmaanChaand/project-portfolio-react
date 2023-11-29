import SetSectionWrapper from "../components/SetSectionWrapper";
import "../css/components.css";

export default function Projects({name}){
    
    
    return (
        <SetSectionWrapper name={name} className="relative overflow-hidden pr-3 sm:pr-5 py-5 pl-0 gap-5">
            <div className="w-full h-fit grid grid-cols-5 gap-5">
                <div className="col-span-3 p-4 bg-transparent border-2 rounded">
                    <h3 className="text-3xl font-bold mr-auto uppercase mb-2">
                    Code Creations
                    </h3>
                    <p className="mb-auto mr-auto text-sm sm:text-base w-full">A concise heading that immediately lets visitors know they are about to view your completed projects.</p>
                </div>
                <div className="flex flex-row justify-between items-center col-span-2 bg-emerald-600 rounded-sm px-4">
                    <h4 className="text-2xl font-bold text-white ">
                       Have a project in mind? <br/>
                    </h4>
                    <button className="text-sm py-2 px-4 font-semibold bg-black text-white">CONTACT</button>
                </div>
            </div>
            <div className="w-full h-fit grid grid-cols-6 mb-auto gap-4">
                <div className="col-span-3 h-56 bg-[#D9B982] rounded"></div>
                <div className="col-span-3 h-56 bg-[#FDBE00] rounded"></div>
            </div>

        </SetSectionWrapper>
    )
}