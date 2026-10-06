import { projects } from "../data/projects"
import ProjectCard from "../components/ui/ProjectCard"

export default function ProjectsGrid() {
    return(
        <section className="px-8 py-6 pb-16 max-w-screen-2xl mx-auto">
            <div className="grid grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={project.id} className={index === 0 ? "col-span-2" : ""}>
                        <ProjectCard project={project} detailed />
                    </div>
                ))}
            </div>
        </section>
    )
}