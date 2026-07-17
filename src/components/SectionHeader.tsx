export function SectionHeader({
  eyebrow,
  title,
  copy,
}: {
  eyebrow?: string;
  title: string;
  copy?: string;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow ? <p className="mb-2 text-sm font-bold text-[#ababab]">{eyebrow}</p> : null}
        <h1 className="max-w-4xl text-2xl font-black leading-[0.98] tracking-[-0.045em] text-[#f5f5f5] sm:text-3xl lg:text-4xl">
          {title}
        </h1>
      </div>
      {copy ? <p className="max-w-md text-sm leading-6 text-white/54 md:text-right">{copy}</p> : null}
    </div>
  );
}
