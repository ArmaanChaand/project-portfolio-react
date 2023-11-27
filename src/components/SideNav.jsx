import {NavBtn} from "./NavBtn"
import { FaGithubSquare, FaLinkedin, FaInstagram  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

import { SocialBtn } from "./SocialBtn";
export default function SideNav(){
    return (
        <nav className="h-full w-16 sm:w-28 flex justify-center items-center relative">
            <ul className="-rotate-90 flex flex-row 
            justify-center items-center p-2 bg-transparent rounded gap-5 
            absolute top-0 translate-y-[300%]
            ">

            <NavBtn section="ABOUT">About</NavBtn>
            <NavBtn section="PROJECTS">Projects</NavBtn>
            <NavBtn section="HOME">Intro</NavBtn>
            </ul> 
            <div className="w-fit h-fit absolute bottom-20 sm:bottom-10 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-2">
                <SocialBtn >
                    <FaGithubSquare/>
                </SocialBtn>
                <SocialBtn >
                    <MdEmail/>
                </SocialBtn>
                <SocialBtn >
                    <FaLinkedin/>
                </SocialBtn>
            </div>
        </nav>
    )
}