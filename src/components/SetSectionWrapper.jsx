import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { useCommon } from "../context/CommonContext";

export default function SetSectionWrapper({name="", className="", children}){
    const {set_section_inview} = useCommon()
    const  [ref, inView, entry] = useInView({
        threshold:0.5,
    })
   useEffect(()=>{

    if(inView){
        set_section_inview(name)
    }
    
   }, [inView])
    
   const tw_classes = `flex flex-col justify-center items-center w-full h-full snap-center`

    return (
        <section ref={ref} id={`SECTION_ID_${name}`}  className={tw_classes + ' ' + className}>
           {children}
        </section>
    )
}