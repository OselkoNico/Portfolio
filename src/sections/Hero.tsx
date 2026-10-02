import { useNavigate } from "react-router-dom";
import Button from "../components/ui/Button";
import { stats } from "../data/stats";
import { ArrowRight, FileUser, BadgeCheck, CircleCheck } from "lucide-react";
import CodeWindow from "../components/ui/CodeWindow";
import Card from "../components/ui/Card";
import avatarImg from "../assets/avatar.png";

export default function Hero() {
  const navigate = useNavigate();

  const locationAndAvailability: string = "Sopela, España • Disponible para incorporación inmediata";

  const codeValueColor = "text-cyan-300";

  return (
    <section className="flex gap-8 px-8 py-6 max-w-screen-2xl mx-auto">
      <div className="flex-1 flex flex-col gap-6">
        <div>
          <span className="flex items-center gap-2 text-xs font-medium text-slate-300 bg-slate-800/50 border border-slate-700 rounded-full px-3 py-1 w-fit">
            <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></span>
            <span>📍</span>
            {locationAndAvailability}
          </span>
        </div>

        <section className="flex flex-col gap-2">
          <span className="text-[#55E1FF] text-xs">JUNIOR FULLSTACK SOFTWARE ENGINEER</span>
          <h1 className="text-6xl font-bold leading-tight">Osel Francisco Nicolás Benitez</h1>
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
          
            <a href="/cv-osel-francisco-nicolas-benitez.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 rounded-lg font-semibold cursor-pointer transition-colors text-white bg-slate-800 border border-slate-600 flex items-center justify-center gap-2 w-fit">
            <FileUser size={18} className={codeValueColor} /> Ver CV
          </a>
        </div>

        <div className="flex gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className={`text-2xl font-bold ${stat.highlight ? codeValueColor : "text-white"}`}>
                {stat.value}
              </span>
              <span className="text-xs text-slate-400">{stat.label}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="flex-1">
        <Card className="shadow-[0_0_40px_rgba(34,211,238,0.15)]">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src={avatarImg}
                  alt="Osel F. Nicolás Benitez"
                  className="w-14 h-14 rounded-xl object-cover"
                />
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-cyan-400 rounded-full border-2 border-slate-800"></span>
              </div>
              <div>
                <div className="flex items-center gap-1">
                  <span className="font-bold text-white">Osel F. Nicolás Benitez</span>
                  <BadgeCheck size={20} className={codeValueColor} />
                </div>
                <span className="text-xs text-slate-400">oselfnicolas.dev • v2.5.0</span>
              </div>
            </div>

            <CodeWindow fileName="developer.config.ts">
                <p>
                    <span className="text-purple-300">const </span>
                    <span className={codeValueColor}>developer</span>
                    : <span className={codeValueColor}>FullStackProfile</span>
                    = {`{`}
                </p>
                <p className="pl-4">
                    name: <span className={codeValueColor}>"Osel F. Nicolás Benitez"</span>,
                </p>
                <p className="pl-4">
                    location: <span className={codeValueColor}>"Sopela, Bizkaia"</span>,
                </p>
                <p className="pl-4">primaryStack: [</p>
                <p className="pl-8">
                    <span className={codeValueColor}>"JavaScript", "TypeScript", "React", "Angular", "Node.js", "API REST"</span>
                </p>
                <p className="pl-4">],</p>
                <p className="pl-4">
                    engineeringRigour: <span className={codeValueColor}>100</span>,
                </p>
                <p className="pl-4">
                    availableToHire: <span className="text-cyan-300 font-bold">true</span>
                </p>
                <p>{`}`};</p>
            </CodeWindow>

            <div className="flex items-center justify-between text-xs bg-slate-900 border border-slate-700 rounded-lg px-4 py-3">
              <span className="flex items-center gap-2 text-slate-300">
                <CircleCheck size={18} className={codeValueColor} /> Vitest Suite: 42 passed
              </span>
              <span className="text-cyan-300 font-medium">READY</span>
            </div>
          </div>
        </Card>
      </div>
    </section>
  );
}