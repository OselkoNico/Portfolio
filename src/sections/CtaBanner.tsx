import { Terminal, ArrowUpRight } from "lucide-react";

interface CtaBannerProps {
    title: string;
    description: string;
    buttonLabel: string;
    buttonUrl: string;
}

export default function CtaBanner({title, description, buttonLabel, buttonUrl}: CtaBannerProps) {
    return(
        <div className="flex items-center justify-between gap-8 px-8 py-6 max-w-[1476px] mx-auto bg-slate-800/50 border border-slate-700 rounded-xl mt-6">
                <div className="flex items-center gap-4">
                    <div className="w-10 h-10 flex items-center justify-center rounded-lg bg-slate-700">
                        <Terminal size={20} className="text-cyan-400" />
                    </div>
                    <div>
                        <h3 className="text-base font-bold text-white">{ title }</h3>
                        <p className="text-sm text-slate-400">{ description }</p>
                    </div>
                </div>

                <a
                    href={ buttonUrl }
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-slate-300 bg-slate-700 rounded-lg px-4 py-2 hover:bg-slate-600 transition-colors flex items-center gap-2 whitespace-nowrap">
                        { buttonLabel } <ArrowUpRight size={16} />
                </a>
            </div>
    )
}