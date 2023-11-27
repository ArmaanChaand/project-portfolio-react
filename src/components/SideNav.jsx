import {NavBtn} from "./NavBtn"
export default function SideNav(){
    return (
        <nav className="h-full w-16 sm:w-28 flex justify-center items-center">
            <ul className="-rotate-[90deg] flex flex-row 
            justify-center items-center p-2 bg-transparent rounded gap-5 
            ">

            <NavBtn section="ABOUT">About</NavBtn>
            <NavBtn section="PROJECTS">Projects</NavBtn>
            <NavBtn section="HOME">Intro</NavBtn>
            </ul>
            
        </nav>
    )
}