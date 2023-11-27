import "../css/components.css";
import { useCommon } from "../context/CommonContext";

export function NavBtn({section, children}){
    const {section_inview} = useCommon()
    const isActive = section_inview == section
    const handleOnClick = () => {
        const section_element = document.getElementById(`SECTION_ID_${section}`)
        
        section_element.scrollIntoView({behavior:"smooth"})
    }
    return (
        <li className="">
            <button onClick={handleOnClick} className={ isActive ? "nav-tab active" : "nav-tab" }>
                {children}
            </button> 
        </li>
    )
}