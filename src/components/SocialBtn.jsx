export function SocialBtn({href="#", className="", title="", target="_blank", children}){
    const tw_classes = `text-xl 2xl:text-3xl hover:text-emerald-600 transition-colors`
    return (
        <a href={href} className={tw_classes + " " + className} title={title} target={target}>
            {children}
        </a>
    )
}