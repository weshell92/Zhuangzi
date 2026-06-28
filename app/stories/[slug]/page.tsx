import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionTitle } from "@/components/SectionTitle";
import { concepts, getChapter, getStory, people, stories } from "@/data/zhuangzi";

export function generateStaticParams() {
  return stories.map((story) => ({ slug: story.slug }));
}

export default function StoryPage({ params }: { params: { slug: string } }) {
  const story = getStory(params.slug);
  if (!story) notFound();
  const chapter = getChapter(story.chapterSlug);
  const relatedConcepts = concepts.filter((concept) => story.concepts.includes(concept.slug));
  const relatedPeople = people.filter((person) => story.people.includes(person.name) || story.people.includes(person.slug));

  return (
    <main className="px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow={story.source} title={story.title} description={story.oneLine} />
        <div className="mt-8 flex flex-wrap gap-2">
          {story.keywords.map((keyword) => (
            <span key={keyword} className="rounded-full bg-rice px-4 py-2 text-sm text-pine">{keyword}</span>
          ))}
        </div>
        <section className="mt-10 grid gap-5">
          <Block title="白话故事" text={story.summary} />
          <Block title="哲学含义" text={story.meaning} />
          <Block title="现代启发" text={story.modern} />
        </section>
        <section className="mt-10 grid gap-5 md:grid-cols-3">
          {chapter ? (
            <Link href={`/chapter/${chapter.slug}`} className="rounded-[2rem] border border-ink/10 bg-paper p-6 shadow-soft transition hover:border-gold/50 hover:bg-white">
              <p className="text-sm text-gold">出处章节</p>
              <h3 className="mt-2 font-serif text-2xl font-bold text-ink">{chapter.title}</h3>
            </Link>
          ) : null}
          {relatedConcepts.map((concept) => (
            <Link key={concept.slug} href={`/concepts/${concept.slug}`} className="rounded-[2rem] border border-ink/10 bg-paper p-6 shadow-soft transition hover:border-gold/50 hover:bg-white">
              <p className="text-sm text-gold">相关思想</p>
              <h3 className="mt-2 font-serif text-2xl font-bold text-ink">{concept.name}</h3>
            </Link>
          ))}
          {relatedPeople.map((person) => (
            <Link key={person.slug} href={`/people/${person.slug}`} className="rounded-[2rem] border border-ink/10 bg-paper p-6 shadow-soft transition hover:border-gold/50 hover:bg-white">
              <p className="text-sm text-gold">相关人物</p>
              <h3 className="mt-2 font-serif text-2xl font-bold text-ink">{person.name}</h3>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-ink/10 bg-paper p-7 shadow-soft">
      <h2 className="font-serif text-3xl font-bold text-ink">{title}</h2>
      <p className="mt-5 text-lg leading-9 text-ink/70">{text}</p>
    </div>
  );
}
