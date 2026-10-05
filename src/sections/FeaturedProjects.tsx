import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { projects } from "../data/projects";
import CtaBanner from "./CtaBanner";
import ProjectCard from "../components/ui/ProjectCard";

export default function FeaturedProjects() {

    const featuredIds = ["gestion-proveedores", "gestion-suministros-api"];

    const featured = projects.filter((p) => featuredIds.includes(p.id));

    return(
        <section className="pb-10">
            <div className="flex justify-between items-center gap-8 px-8 py-16 max-w-screen-2xl mx-auto">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                        <span className="text-[#55E1FF] text-xs">PRODUCCIÓN & ARQUITECTURA</span>
                    </div>
                    <h2 className="text-2xl font-bold leading-tight">Proyectos Seleccionados</h2>
                </div>

                <Link to="/proyectos" className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors">
                    Explorar todos los proyectos <ArrowRight size={16} />
                </Link>
            </div>

            <div className="grid grid-cols-2 gap-6 px-8 pb-16 max-w-screen-2xl mx-auto">
                {featured.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
            
            <CtaBanner 
                title="¿Quieres ver la arquitectura completa?"
                description="Revisa los repositorios en GitHub, suites de pruebas unitarias y diagramas de flujo."
                buttonLabel="Ver repositorios en GitHub"
                buttonUrl="https://github.com/OselkoNico"
            />
            
        </section>
    )
}