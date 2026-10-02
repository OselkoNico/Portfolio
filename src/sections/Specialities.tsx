import { specialties } from "../data/specialties";
import Card from "../components/ui/Card";
import { iconNameMap } from "../utils/iconMaps";

export default function Specialities() {
  return (
    <section className="bg-[#070d18]">
      <div className="flex justify-between gap-8 px-8 py-6 max-w-screen-2xl mx-auto">
        <div className="flex-1 flex flex-col gap-2 py-16">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
            <span className="text-[#55E1FF] text-xs">ARQUITECTURA DE SOFTWARE & CAPACIDADES</span>
          </div>
          <h2 className="text-2xl font-bold leading-tight">Especialidades Clave</h2>
        </div>

        <p className="flex-1 py-16 text-slate-300/90 text-sm">
          Diseño y construcción de sistemas escalables, priorizando el rendimiento, la mantenibilidad y la robustez tipada en cada capa.
        </p>
      </div>
      <div className="grid grid-cols-3 gap-6 px-8 max-w-screen-2xl mx-auto">
        {specialties.map((specialty) => {
            const Icon = iconNameMap[specialty.icon];
            return(
                <Card key={specialty.title}>
                    <div className="flex flex-col gap-4">
                        <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700/50">
                            <Icon size={20} className="text-cyan-400" />
                        </div>

                        <div className="flex flex-col gap-1">
                            <span className="text-xs font-medium text-cyan-300">{specialty.label}</span>
                            <h3 className="text-lg font-bold text-white">{specialty.title}</h3>
                        </div>

                        <p className="text-sm text-slate-300/90">{specialty.description}</p>

                        <div className="flex flex-wrap gap-2">
                            {specialty.tech.map((tech) => (
                                <span key={tech} className="text-xs text-cyan-300 bg-slate-800 border border-slate-900 rounded px-2 py-1">
                                    {tech}
                                </span>
                            ))}
                        </div>
                    </div>
                </Card>
            );
        })}
      </div>
    </section>
  );
}