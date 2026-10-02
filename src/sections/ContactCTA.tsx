import { Mail, Copy, CopyCheck } from "lucide-react";
import { useState } from "react";

export default function ContactCTA() {

    const [isCopied, setIsCopied] = useState(false);
    
    function copyEmail() {
    navigator.clipboard.writeText("oselfrancisco.nb@gmail.com");
    setIsCopied(true);
    setTimeout(() => {
        setIsCopied(false)
    }, 2000)
    }

    return(
        <section className="bg-[#070d18] pt-10 pb-10">
            <div className="flex items-center justify-between gap-8 px-8 py-6 max-w-[1476px] mx-auto bg-slate-800/50 border border-slate-700 rounded-xl mt-6">
                <div className="flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-500"></span>
                        <span className="text-[#55E1FF] text-xs">CONTACTO DIRECTO</span>
                    </div>
                    <h2 className="text-2xl font-bold leading-tight">¿Buscando un desarrollador resolutivo para tu equipo?</h2>
                    <p className="text-sm text-slate-300/90">Estoy disponible para entrevistas técnicas y retos de código en Bilbao o en formato remoto internacional.</p>
                </div>

                <div className="flex gap-3">
                    <a
                        href="mailto:oselfrancisco.nb@gmail.com"
                        className="px-6 py-3 rounded-xl font-semibold cursor-pointer transition-colors text-black bg-linear-to-r from-cyan-400 to-blue-500 shadow-[0_0_10px_rgba(34,211,238,0.5)]"
                    >
                        <span className="flex items-center justify-center gap-2">
                            <Mail size={20} /> Iniciar conversación
                        </span>
                    </a>
                    
                    <button
                        onClick={copyEmail}
                        className="text-sm text-slate-300 bg-slate-700 rounded-xl px-4 py-2 hover:bg-slate-600 transition-colors flex items-center gap-2 whitespace-nowrap cursor-pointer">
                            {isCopied ? (
                                <>
                                    <CopyCheck size={20} />
                                    Email Copiado
                                </>
                            ) : (
                                <>
                                    <Copy size={20} />
                                    Copiar Email
                                </>
                            )} 
                    </button>
                </div>
            </div>
        </section>
    );
}