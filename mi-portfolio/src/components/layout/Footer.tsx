import { MapPin, ArrowUp, Copyright, Mail } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Footer() {
    
    function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }

    return(
        <footer className="flex justify-between items-center px-8 py-6">
            <div className="flex flex-col gap-1">
                <p className="flex items-center gap-2">
                    <MapPin size={14} />
                    Sopela, Bizcaia • FullStack Developer
                </p>
                <p className="flex items-center gap-2">
                    <Copyright size={14} />
                    2026 Osel Francisco Nicolás Benitez. Hecho con TypeScript y Tailwind.
                </p>
            </div>

            <div className="flex items-center gap-4">
                <a href="mailto:oselfrancisco.nb@gmail.com" className="flex items-center gap-2 px-3 py-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                    <Mail size={20} /> Email
                </a>

                <a href="https://github.com/OselkoNico" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                    <SiGithub size={20} /> GitHub
                </a>

                <button onClick={scrollToTop} className="flex items-center gap-2 px-3 py-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer">
                    <ArrowUp size={20} /> Subir
                </button>
            </div>
        </footer>
    )
}