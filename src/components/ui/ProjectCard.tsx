import Card from "./Card";
import { SiGithub } from "react-icons/si";
import type { Project } from "../../types/project";
import { Code } from "lucide-react";

interface ProjectCardProps {
    project: Project;
    detailed?: boolean;
}

export default function ProjectCard({ project, detailed }: ProjectCardProps) {
    return(
        <Card className="flex flex-col h-full">
                    <div className="flex flex-col gap-4 flex-1">
                        <span className="text-xs font-medium text-cyan-300 bg-slate-700 rounded px-2 py-1 w-fit">
                            {project.tag}
                        </span>

                        <h3 className="text-lg font-bold text-white">{project.title}</h3>
                        <p className="text-sm text-slate-300/90">{detailed ? (project.longDescription ?? project.description) : project.description}</p>

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
                                className={`flex items-center gap-2 text-sm rounded-lg px-4 py-2 transition-colors ${
                                    detailed
                                        ? "text-black bg-linear-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.5)] hover:brightness-110"
                                        : "text-slate-300 bg-slate-700 border border-slate-700 hover:bg-slate-800"
                                    }`}
                                >
                                    {detailed && link.icon === "github" ? (
                                        <>
                                            <Code size={16} /> Código en GitHub
                                        </>
                                    ) : (
                                        <>
                                            {link.icon === "github" && <SiGithub size={16} />}
                                            {link.label}
                                        </>
                                    )}
                            </a>
                        ))}
                    </div>
        </Card>
    )
}