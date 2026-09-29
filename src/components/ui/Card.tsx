import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
}

export default function Card({ children}: CardProps) {
    return(
        <div className="block p-6 rounded-lg shadow-md border border-slate-700 bg-slate-800 max-w-md">
            {children}
        </div>
    );
}