import { useCommon } from "../context/CommonContext";
import "../css/components.css";

import { NavLink } from "react-router-dom";

export function NavBtn({section, children}){
    const {section_inview} = useCommon()
    const isActive = section_inview == section
    
    return (
        <li className="">
            <button className={ isActive ? "nav-tab active" : "nav-tab" }>
                {children}
            </button> 
        </li>
    )
}