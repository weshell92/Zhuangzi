import Link from "next/link";
import { concepts } from "@/data/zhuangzi";

export function ThoughtGraph() {
  return (
    <div className="rounded-[2.5rem] border border-ink/10 bg-paper p-6 shadow-soft md:p-10">
      <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-[1fr_auto_1fr] md:items-center">
        <div className="space-y-4">
          {concepts.slice(0, 4).map((concept) => (
            <ConceptNode key={concept.slug} slug={concept.slug} name={concept.name} subtitle={concept.subtitle} />
          ))}
        </div>
        <div className="grid min-h-48 place-items-center rounded-full border border-gold/40 bg-rice px-10 py-8 text-center shadow-inner">
          <div>
            <p className="text-xs tracking-[0.4em] text-gold">CENTER</p>
            <h3 className="mt-2 font-serif text-3xl font-bold text-pine">庄子思想</h3>
            <p className="mt-3 max-w-48 text-sm leading-7 text-ink/60">从故事、人物与生活困境进入精神自由。</p>
          </div>
        </div>
        <div className="space-y-4">
          {concepts.slice(4, 8).map((concept) => (
            <ConceptNode key={concept.slug} slug={concept.slug} name={concept.name} subtitle={concept.subtitle} />
          ))}
        </div>
      </div>
    </div>
  );
}

function ConceptNode({ slug, name, subtitle }: { slug: string; name: string; subtitle: string }) {
  return (
    <Link href={`/concepts/${slug}`} className="block rounded-3xl border border-ink/10 bg-white/75 p-5 transition hover:border-pine/40 hover:bg-white">
      <h4 className="font-serif text-xl font-semibold text-ink">{name}</h4>
      <p className="mt-2 text-sm leading-6 text-ink/60">{subtitle}</p>
    </Link>
  );
}
