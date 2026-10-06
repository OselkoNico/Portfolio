export default function ProjectsHeader() {

    const filters = ["Todos", "Angular", "React", "Node.js & Backend", "Full Stack"];

    return(
        <section className="px-8 py-6 max-w-screen-2xl mx-auto">
            <div className="flex flex-col gap-6">
                <div className="flex items-center gap-3">
                    <span className="flex items-center gap-2 text-xs font-medium bg-slate-800 rounded-full px-3 py-1 w-fit text-[#55E1FF]">
                        <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
                        PORTAFOLIO DE PRODUCCIÓN • 2026-futuro
                    </span>
                    <span className="text-xs font-medium text-slate-300">
                        / src / work / showcase.ts
                    </span>
                </div>

                <div className="flex justify-between gap-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-4xl font-bold leading-tight">
                            Proyectos <span className="text-cyan-400">Destacados</span>
                        </h1>
                        <p className="text-slate-300/90">
                            Soluciones Full Stack construidas con código limpio, arquitectura escalable, test automatizados y despliegue continuo.
                        </p>
                    </div>

                    <div className="flex flex-wrap content-start gap-2 p-2 bg-slate-800/50 border border-slate-800 rounded-xl max-w-lg">
                        {filters.map((filter, index) => (
                            <button
                                key={filter}
                                className={`text-sm px-4 py-2 rounded-lg cursor-pointer transition-colors ${
                                    index === 0
                                        ? "bg-slate-700 text-white"
                                        : "text-slate-400 hover:text-white hover:bg-slate-800"
                                }`}
                            >
                                {filter}
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}