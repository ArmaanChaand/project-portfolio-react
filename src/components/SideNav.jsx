import {NavBtn} from "./NavBtn"
import { FaGithubSquare, FaLinkedin  } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { SocialBtn } from "./SocialBtn";
export default function SideNav(){
    
    return (
        <nav className="h-screen w-16 sm:w-28 2xl:w-44 flex justify-center items-center relative">
            <ul className="-rotate-90 flex flex-row 
            justify-center items-center p-2 bg-transparent rounded gap-5 
            absolute top-0 translate-y-[300%] 2xl:translate-y-[500%]
            
            "
           
            >

            <NavBtn section="CONTACT">Contact</NavBtn>
            <NavBtn section="PROJECTS">Projects</NavBtn>
            <NavBtn section="HOME">Intro</NavBtn>
            </ul> 
            <div className="w-fit h-fit absolute bottom-20 sm:bottom-10 2xl:bottom-32 left-1/2 -translate-x-1/2 flex flex-col justify-center items-center gap-2">
                <SocialBtn href="https://github.com/ArmaanChaand" title="Github">
                    <FaGithubSquare/>
                </SocialBtn>
                <SocialBtn href="https://www.linkedin.com/in/armaanchaand/" title="LinkedIn">
                    <FaLinkedin/>
                </SocialBtn>
                <SocialBtn href="mailto:armaan.chaand17@gmail.com" title="Email">
                    <MdEmail/>
                </SocialBtn>
            </div>
        </nav>
    )
}