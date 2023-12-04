import { FaReact } from "react-icons/fa";
import { SiDjango, SiTailwindcss } from "react-icons/si";
const techs = {
    "REACT":  <FaReact title="REACT"/>,
    "DJANGO":   <SiDjango title="DJANGO"/>, 
    "TAILWIND":   <SiTailwindcss title="TAILWIND CSS"/>, 

}
export function ProjectShow({className, brand_clr, tech_stack=[], name="", href, target="_blank", descr, src, img_classes}){
    const tw_classes = `h-[25rem] flex flex-col justify-start items-center rounded-md p-5 relative overflow-hidden text-black dark:text-black`
    return (
        <div className={tw_classes + " " + className}>
            <div className="flex justify-center items-center ml-auto text-xl gap-1 bg-black text-white px-3 py-2 rounded-sm z-20">
               {
                tech_stack.map(tech=>(
                    techs[tech]
                ))
               }
            </div>
            <a href={href} target={target} className="text-3xl font-bold mr-auto underline z-20 mt-2">
                {name}
            </a>
            <p className="text-sm w-full xl:w-2/3 mr-auto z-10 font-semibold mt-2">
            {descr}
            </p>
            <img src={src} alt={"Project " + name}
                className={"absolute w-10/12 h-auto top-1/2 sm:top-[40%] " + img_classes}
            />
        </div>
    )
}