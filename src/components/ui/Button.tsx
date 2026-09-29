import type { ReactNode } from "react"

interface ButtonProps {
    children: ReactNode;
    variant: "primary" | "secondary";
    onClick: () => void;
}

export default function Button({ children, variant, onClick }: ButtonProps) {
    const variantStyles = {
        primary: "text-black bg-gradient-to-r from-cyan-400 to-blue-500",
        secondary: "text-white bg-slate-800 border border-slate-600"
    };

    return(
        <button
            onClick={onClick}
            className={`px-6 py-3 rounded-xl font-semibold cursor-pointer transition-colors ${variantStyles[variant]}`}
        >
            <span className="flex items-center justify-center gap-2">
                {children}
            </span>
        </button>
    );
}