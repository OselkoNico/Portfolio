import type { ReactNode } from "react";

interface CardProps {
    children: ReactNode;
    className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
    return(
        <div className={`block p-6 rounded-lg border border-slate-800 bg-slate-900 ${className}`}>
            {children}
        </div>
    );
}