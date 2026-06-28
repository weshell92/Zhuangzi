type SectionTitleProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionTitle({ eyebrow, title, description, align = "left" }: SectionTitleProps) {
  const centered = align === "center";
  return (
    <div className={centered ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow ? <p className="mb-3 text-sm font-semibold tracking-[0.35em] text-gold">{eyebrow}</p> : null}
      <h2 className="font-serif text-3xl font-bold leading-tight text-ink md:text-5xl">{title}</h2>
      {description ? <p className="mt-5 text-base leading-8 text-ink/65 md:text-lg">{description}</p> : null}
    </div>
  );
}
