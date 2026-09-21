import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import type { NavItem } from "../../types/navLink";
import { CircleDot, FileDown, Share2, CopyCheck } from "lucide-react";
import { SiGithub } from "react-icons/si";

export default function Navbar() {
    const navigation: NavItem[] = [
        { label: "Inicio", path: "/" },
        { label: "Proyectos", path: "/proyectos" },
        { label: "Aptitudes", path: "/aptitudes" },
        { label: "Sobre mí y Contacto", path: "/sobre-mi" }
    ];

    const availabilityStatus: string = "OPEN TO WORK";

    const [isCopied, setIsCopied] = useState(false);

    function copyWindow() {
    navigator.clipboard.writeText(window.location.href);
    setIsCopied(true);
    setTimeout(() => {
        setIsCopied(false)
    }, 2000)
    }

    return(
        <nav className="flex justify-between items-center px-8 py-4">

            <div className="flex items-center gap-4">
                <Link to="/" className="flex items-center gap-2">
                    <CircleDot size={20} />
                    <span className="text-xl font-bold text-white">Osel F. Nicolás Benitez</span>
                </Link>

                    <span className="flex items-center gap-2 text-xs font-medium text-cyan-400 bg-cyan-400/10 border border-cyan-400/30 rounded-full px-3 py-1">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                        {availabilityStatus}
                    </span>
            </div>

            <div className="flex items-center gap-2">
                {navigation.map((item) => (
                    <NavLink
                        key={item.label}
                        to={item.path}
                        className={({ isActive }) =>
                            isActive
                                ? "text-white bg-slate-800 rounded-full px-4 py-2"
                                : "text-slate-400 px-4 py-2"
                        }
                    >
                        {item.label}
                    </NavLink>
                ))}
            </div>

            <div className="flex items-center gap-4">
                <a href="/cv-osel-francisco-nicolas-benitez.pdf" className="flex items-center gap-2 px-3 py-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors" download>
                    <FileDown size={20} /> CV
                </a>

                <a href="https://github.com/OselkoNico" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-3 py-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors">
                    <SiGithub size={20} />
                </a>

                <button onClick={copyWindow} className="flex items-center gap-2 px-3 py-2 rounded-full text-slate-400 hover:text-white hover:bg-slate-800 transition-colors cursor-pointer">
                    {isCopied ? <CopyCheck size={20} /> : <Share2 size={20} />}
                </button>
            </div>
        </nav>
    );
}