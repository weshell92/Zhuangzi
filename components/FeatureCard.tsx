import Link from "next/link";

export type FeatureCardProps = {
  href: string;
  title: string;
  description: string;
  meta?: string;
};

export function FeatureCard({ href, title, description, meta }: FeatureCardProps) {
  return (
    <Link href={href} className="group block rounded-[2rem] border border-ink/10 bg-paper/80 p-6 shadow-soft transition hover:-translate-y-1 hover:border-gold/50 hover:bg-white">
      {meta ? <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-gold">{meta}</p> : null}
      <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-pine">{title}</h3>
      <p className="mt-4 text-sm leading-7 text-ink/65">{description}</p>
      <span className="mt-6 inline-flex text-sm text-pine">进入 →</span>
    </Link>
  );
}
