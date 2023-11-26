import { NavLink } from "react-router-dom";

export function NavBtn({to, children}){
    return (
        <li className="">
            <NavLink to={to} className={({isActive})=>isActive ? "nav-tab active" : "nav-tab" }>
                {children}
            </NavLink> 
        </li>
    )
}