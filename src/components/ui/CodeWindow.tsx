import type { ReactNode } from "react";

interface CodeWindowProps {
    fileName: string;
    children: ReactNode;
}

export default function CodeWindow({ fileName, children }: CodeWindowProps) {
    return(
        <div className="bg-[#070d18] border border-slate-700 rounded-lg overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 bg-[#070d18] border-b border-slate-700">
                <div className="flex gap-2">
                    <span className="w-3 h-3 rounded-full bg-red-500"></span>
                    <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
                    <span className="w-3 h-3 rounded-full bg-green-500"></span>
                </div>
                <span className="text-xs text-slate-400 ml-auto">{fileName}</span>
            </div>
            <div className="p-4 font-mono text-sm">
                {children}
            </div>
        </div>
    )
}