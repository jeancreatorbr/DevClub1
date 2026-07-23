type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mx-auto flex max-w-2xl flex-col items-center text-center">
      <span className="mb-4 inline-flex items-center rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.3em] text-cyan-200">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-[-0.02em] text-white sm:text-4xl">{title}</h2>
      <p className="mt-4 text-base leading-7 text-slate-400 sm:text-lg">{description}</p>
    </div>
  );
}
