import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionTitle } from "@/components/SectionTitle";
import { getModernTopic, modernTopics, stories } from "@/data/zhuangzi";

export function generateStaticParams() {
  return modernTopics.map((topic) => ({ slug: topic.slug }));
}

export default function ModernTopicPage({ params }: { params: { slug: string } }) {
  const topic = getModernTopic(params.slug);
  if (!topic) notFound();
  const story = stories.find((item) => item.title === topic.story);

  return (
    <main className="px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="MODERN TOPIC" title={topic.title} description={topic.pain} />
        <section className="mt-10 rounded-[2rem] border border-ink/10 bg-paper p-8 shadow-soft">
          <p className="text-sm tracking-[0.25em] text-gold">庄子的回答</p>
          <p className="mt-5 text-xl leading-10 text-ink/75">{topic.answer}</p>
        </section>
        <section className="mt-8 grid gap-5 md:grid-cols-2">
          <div className="rounded-[2rem] border border-ink/10 bg-rice p-7">
            <h2 className="font-serif text-3xl font-bold text-ink">对应思想</h2>
            <p className="mt-4 text-lg text-pine">{topic.concept}</p>
          </div>
          <div className="rounded-[2rem] border border-ink/10 bg-paper p-7 shadow-soft">
            <h2 className="font-serif text-3xl font-bold text-ink">推荐故事</h2>
            {story ? <Link href={`/stories/${story.slug}`} className="mt-4 inline-flex text-lg text-pine">{topic.story} →</Link> : <p className="mt-4 text-lg text-pine">{topic.story}</p>}
          </div>
        </section>
        <section className="mt-8 rounded-[2rem] border border-ink/10 bg-paper p-8 shadow-soft">
          <h2 className="font-serif text-3xl font-bold text-ink">练习</h2>
          <ol className="mt-5 list-decimal space-y-3 pl-6 text-lg leading-8 text-ink/70">
            {topic.practice.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
        </section>
      </div>
    </main>
  );
}
