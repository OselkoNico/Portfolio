interface BadgeProps {
  text: string;
  variant: "cyan" | "green" | "blue" | "purple";
}

export default function Badge({ text, variant }: BadgeProps) {
  const variantStyles = {
    cyan: "text-cyan-400 bg-cyan-400/10 border-cyan-400/30",
    green: "text-green-400 bg-green-400/10 border-green-400/30",
    blue: "text-blue-400 bg-blue-400/10 border-blue-400/30",
    purple: "text-purple-300 bg-purple-300/10 border-purple-300/30"
  };

  return (
    <span className={`text-xs font-medium px-3 py-1 rounded-full border ${variantStyles[variant]}`}>
      {text}
    </span>
  );
}