import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionTitle } from "@/components/SectionTitle";
import { concepts, getConcept, stories } from "@/data/zhuangzi";

export function generateStaticParams() {
  return concepts.map((concept) => ({ slug: concept.slug }));
}

export default function ConceptPage({ params }: { params: { slug: string } }) {
  const concept = getConcept(params.slug);
  if (!concept) notFound();
  const relatedStories = stories.filter((story) => concept.relatedStories.includes(story.slug));

  return (
    <main className="px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="CONCEPT" title={concept.name} description={concept.subtitle} />
        <section className="mt-10 rounded-[2rem] border border-ink/10 bg-paper p-8 shadow-soft">
          <h2 className="font-serif text-3xl font-bold text-ink">思想解释</h2>
          <p className="mt-5 text-lg leading-9 text-ink/70">{concept.summary}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            {concept.nodes.map((node) => (
              <span key={node} className="rounded-full bg-rice px-4 py-2 text-sm text-pine">{node}</span>
            ))}
          </div>
        </section>
        <section className="mt-8 rounded-[2rem] border border-ink/10 bg-rice p-8">
          <h2 className="font-serif text-3xl font-bold text-ink">现代用法</h2>
          <p className="mt-5 text-lg leading-9 text-ink/70">{concept.modernUse}</p>
        </section>
        <section className="mt-10">
          <h2 className="font-serif text-3xl font-bold text-ink">相关寓言</h2>
          <div className="mt-5 grid gap-4 md:grid-cols-2">
            {relatedStories.map((story) => (
              <Link key={story.slug} href={`/stories/${story.slug}`} className="rounded-[2rem] border border-ink/10 bg-paper p-6 shadow-soft transition hover:border-gold/50 hover:bg-white">
                <p className="text-sm text-gold">{story.source}</p>
                <h3 className="mt-2 font-serif text-2xl font-bold text-ink">{story.title}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/60">{story.oneLine}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
