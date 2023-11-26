import { useInView } from "react-intersection-observer";
import "../css/components.css";
import { useEffect } from "react";

export default function Home({name}){

    const  [ref, inView, entry] = useInView({
        threshold:0.5,
    })
   useEffect(()=>{
    console.log(name, ": ", inView)
    
   }, [inView])
    
    return (
        <section ref={ref}  className="flex flex-col justify-center items-center w-full h-screen">
            <div className="w-fit mx-auto mb-auto mt-44 px-10">
                <h3 className="font-extrabold text-5xl text-zinc-400/50">Hi, my name is</h3>
                <h1 className="font-extrabold leading-none tracking-tight text-9xl flex flex-row justify-center items-center flex-wrap">
                    <span className="mr-auto">Armaan </span>
                    <span className="ml-auto">Chaand</span>
                    
                </h1>
            </div>
        </section>
    )
}