export function EyebrowBadge({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-white/60 bg-white/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-zinc-600 shadow-sm backdrop-blur-md ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-indigo-500 hero-dot" />
      {children}
    </span>
  );
}
