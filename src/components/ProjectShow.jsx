import { FaGithub } from "react-icons/fa";
import { techs } from "../assets/utils";
export function ProjectShow({className,github_repo="#" , tech_stack=[], name="", href, target="_blank", descr, src, img_classes}){
    const tw_classes = `h-[25rem] flex flex-col justify-start items-center rounded-md 
    p-5 relative overflow-hidden text-black dark:text-black col-span-6 md:col-span-3`
    const handleRepo = (e) => {
        if(github_repo == "#"){
            e.preventDefault()
            alert("Instructed not to show by the client.")
        }
    }
    return (
        <div className={tw_classes + " " + className}>
            <div className="ml-auto flex flex-row justify-center gap-2 items-center">
                <a onClick={handleRepo} href={github_repo} target="_blank" className="text-xl bg-black text-white p-2 rounded-sm z-20">
                    <FaGithub/>
                </a>

                <div className="flex justify-center items-center ml-auto text-xl gap-1 bg-black text-white px-3 py-2 rounded-sm z-20">
                {
                    tech_stack.map(tech=>(
                        techs[tech]
                    ))
                }
                </div>
            </div>
            <a href={href} target={target} className="text-3xl font-bold mr-auto underline z-20 mt-2">
                {name}
            </a>
            <p className="text-sm w-full xl:w-2/3 mr-auto z-10 font-semibold mt-2">
            {descr}
            </p>
            <img src={src} alt={"Project " + name}
                className={"absolute z-[2] w-10/12 h-auto top-1/2 sm:top-[40%] object-contain " + img_classes}
                style={{    filter: "drop-shadow(2px 4px 6px black)"}}
            />
            <img src={src} alt={"Project " + name}
                className={"absolute z-[3] w-10/12 h-auto top-1/2 sm:top-[40%] object-contain " + img_classes}
            />
        </div>
    )
}