import { Link } from "react-router-dom";
import { ArrowRight, Terminal, ArrowUpRight } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { projects } from "../data/projects";
import Card from "../components/ui/Card";

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
                    <Card key={project.id} className="flex flex-col h-full">
                        <div className="flex flex-col gap-4 flex-1">
                            <span className="text-xs font-medium text-cyan-300 bg-slate-700 rounded px-2 py-1 w-fit">
                                {project.tag}
                            </span>

                            <h3 className="text-lg font-bold text-white">{project.title}</h3>
                            <p className="text-sm text-slate-300/90">{project.description}</p>

                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((tech) => (
                                    <span key={tech} className="text-xs text-cyan-300 bg-slate-700 rounded px-2 py-1">
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
                            {project.links.map((link) => (
                                <a 
                                key={link.label}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-sm text-slate-300 bg-slate-900 border border-slate-700 rounded-lg px-4 py-2 hover:bg-slate-800 transition-colors">
                                    {link.icon === "github" && <SiGithub size={16} />}
                                    {link.label}
                                </a>
                            ))}
                        </div>
                    </Card>
                ))}
            </div>
            
            <div className="flex items-center justify-between gap-8 px-8 py-6 max-w-[1476px] mx-auto bg-slate-800/50 border border-slate-700 rounded-xl mt-6">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700">
                        <Terminal size={20} className="text-cyan-400" />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-white">¿Quieres ver la arquitectura completa?</h3>
                        <p className="text-sm text-slate-400">Revisa los repositorios en GitHub, suites de pruebas unitarias y diagramas de flujo.</p>
                    </div>
                </div>

                <a
                    href="https://github.com/OselkoNico"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300 bg-slate-700 rounded-lg px-4 py-2 hover:bg-slate-600 transition-colors flex items-center gap-2 whitespace-nowrap">
                        Ver repositorios en GitHub <ArrowUpRight size={16} />
                </a>
            </div>
        </section>
    )
}