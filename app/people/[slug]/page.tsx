import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionTitle } from "@/components/SectionTitle";
import { getPerson, people, stories } from "@/data/zhuangzi";

export function generateStaticParams() {
  return people.map((person) => ({ slug: person.slug }));
}

export default function PersonPage({ params }: { params: { slug: string } }) {
  const person = getPerson(params.slug);
  if (!person) notFound();
  const relatedStories = stories.filter((story) => person.stories.includes(story.slug));

  return (
    <main className="px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow={person.role} title={person.name} description={person.description} />
        <section className="mt-10 rounded-[2rem] border border-ink/10 bg-paper p-8 shadow-soft">
          <h2 className="font-serif text-3xl font-bold text-ink">象征意义</h2>
          <p className="mt-5 text-lg leading-9 text-pine">{person.symbol}</p>
        </section>
        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-ink/10 bg-rice p-7">
            <h2 className="font-serif text-3xl font-bold text-ink">关系</h2>
            <div className="mt-5 space-y-3">
              {person.relations.map((relation) => (
                <p key={`${relation.target}-${relation.label}`} className="rounded-2xl bg-paper px-4 py-3 text-ink/70">
                  {relation.target}：{relation.label}
                </p>
              ))}
            </div>
          </div>
          <div className="rounded-[2rem] border border-ink/10 bg-paper p-7 shadow-soft">
            <h2 className="font-serif text-3xl font-bold text-ink">相关故事</h2>
            <div className="mt-5 space-y-3">
              {relatedStories.map((story) => (
                <Link key={story.slug} href={`/stories/${story.slug}`} className="block rounded-2xl bg-rice px-4 py-3 text-pine transition hover:bg-white">
                  {story.title}
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
