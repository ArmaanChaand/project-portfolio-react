export function SocialBtn({href="#", className="", title="", target="_blank", children}){
    const tw_classes = `text-base sm:text-lg hover:text-emerald-600 transition-colors`
    return (
        <a href={href} className={tw_classes + " " + className} title={title} target={target}>
            {children}
        </a>
    )
}