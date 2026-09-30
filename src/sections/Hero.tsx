import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { stats } from "../data/stats";
import { ArrowRight, FileDown } from "lucide-react";

export default function Hero() {

    const navigate = useNavigate();

    const locationAndAvailability: string = "Sopela, España • Disponible para incorporación inmediata";

    return(
        <>
            <div className="flex flex-col gap-6 px-8 py-6">
                <div>
                    <span className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700 rounded-full px-3 py-1 w-fit">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                        <span>📍</span>
                        {locationAndAvailability}
                    </span>
                </div>

                <section className="flex flex-col gap-2">
                    <span className="text-[#55E1FF] text-xs">JUNIOR FULLSTACK SOFTWARE ENGINEER</span>
                    <h1 className="text-5xl font-bold">Osel Francisco Nicolás Benitez</h1>
                    <p className="bg-linear-to-r from-[#55E1FF] via-[#A78BFA] to-[#C4A7E7] bg-clip-text text-transparent text-lg">
                        JavaScript FullStack Developer
                    </p>
                    <p className="text-slate-300/90">
                        Desarrollador Full Stack especializado en JavaScript/TypeScript, en transición de carrera desde el sector técnico (instalaciones), con formación intensiva y proyectos propios.
                    </p>
                </section>

                <div className="flex gap-4">
                    <Button variant="primary" onClick={() => navigate("/proyectos")}>
                        Ver proyectos <ArrowRight size={18} />
                    </Button>
                    <a href="/cv-osel-francisco-nicolas-benitez.pdf" download className="px-6 py-3 rounded-lg font-semibold cursor-pointer transition-colors text-white bg-slate-800 border border-slate-600 flex items-center justify-center gap-2 w-fit">
                        <FileDown size={18} className="text-cyan-300" /> Descargar CV
                    </a>
                </div>

                <div className="flex gap-8">
                    {stats.map((stat) => (
                        <div key={stat.label} className="flex flex-col">
                            <span className={`text-2xl font-bold ${stat.highlight ? "text-cyan-300" : "text-white"}`}>{stat.value}</span>
                            <span className="text-xs text-slate-400">{stat.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}