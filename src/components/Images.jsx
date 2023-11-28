import { useCommon } from "../context/CommonContext"
import { IoCloseCircleOutline } from "react-icons/io5";
export function ImageWithPopup({src, alt, className}){
    const tw_classes = `w-full h-full object-cover inline-block`
    const {set_popup_img_src} = useCommon()
    
    return(
        <>
            <img src={src} alt={alt} className={tw_classes + " " + className} onClick={()=>set_popup_img_src(src)} />
        </>
    )
}
export function PopImgBox(){
    const {popup_img_src, set_popup_img_src} = useCommon()
    return(
        <div className="w-screen h-screen bg-black/40 backdrop-blur-sm 
        fixed z-30 flex justify-center items-center p-2 sm:p-10">
            <button 
                onClick={()=>set_popup_img_src(null)}
                className="absolute top-5 right-5 text-4xl
             hover:text-emerald-600 transition-colors"><IoCloseCircleOutline/></button>
           <img className="w-full sm:w-10/12 h-auto object-contain " src={popup_img_src} />
        </div>
    )
}