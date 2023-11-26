import {NavBtn} from "./NavBtn"
export default function SideNav({section}){
    return (
        <nav className="h-full w-12 bg-green-600 sm:w-28 ">
            <ul className="h-full -rotate-[90deg] flex flex-row justify-center items-center p-2 bg-transparent rounded gap-5 ">

            <NavBtn to="/">{section}</NavBtn>
            <NavBtn to="/projects">Projects</NavBtn>
            <NavBtn to="/about">About</NavBtn>
            </ul>
        </nav>
    )
}