import "../css/components.css";
import { Professions } from "../components/Professions";


export default function Home(){
    
    
    return (
        <section className="HOME page-section">
            <div className="intro">
                <h1 className="main-heading">
<<<<<<< HEAD
                    Welcome! 
                    <br/>
                    <span className="text-[0.9em] opacity-80 inline-block mt-3 sm:mt-2">My name is Armaan Chaand.</span>
                    <br/>
                    <span className="text-[0.8em] opacity-80 inline-block mt-3 sm:mt-2">I'm a ...</span>
                </h1>
                <h5 className="profession">
                    <Professions/>  
                    <span className="grad-span"> Developer </span>
=======
                   Baby, suno na ...
                    <br/>
                    <span className="text-[0.9em] opacity-80"> hua yeh tha ki ... </span>
                    <br/>
                    <span className="text-[0.5em] opacity-80">Hm raat mein baat krna chah rahe the ... lekin tm call receive nhi kr rahe the ... toh raat bhar mann mein kchh se kchh chalne laga...
Aur phir subah bhi call receive nhi kiye toh laga pata nhi kya ho gaya...
phir chai peete peete woh sab yaad aane laga
</span>
                </h1>
                <h5 class="profession">
                        <motion.span className="different-profs" animate={{y:y?0:100}}>
                        Sorry 😔
                        </motion.span>  
                    <span class="grad-span"> Neha </span>
>>>>>>> bf16cde8afe34ed1951688c11ff0f8f721516643
                </h5>
            </div>
        </section>
    )
}