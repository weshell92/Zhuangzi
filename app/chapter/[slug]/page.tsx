import Link from "next/link";
import { notFound } from "next/navigation";
import { ChapterReader } from "@/components/ChapterReader";
import { SectionTitle } from "@/components/SectionTitle";
import { chapters, concepts, getChapter, stories } from "@/data/zhuangzi";

export function generateStaticParams() {
  return chapters.map((chapter) => ({ slug: chapter.slug }));
}

export default function ChapterPage({ params }: { params: { slug: string } }) {
  const chapter = getChapter(params.slug);
  if (!chapter) notFound();
  const relatedStories = stories.filter((story) => chapter.relatedStories.includes(story.slug));
  const relatedConcepts = concepts.filter((concept) => chapter.relatedConcepts.includes(concept.slug));

  return (
    <main className="px-5 py-16">
      <div className="mx-auto max-w-6xl">
        <SectionTitle eyebrow="CHAPTER" title={chapter.title} description={chapter.summary} />
        <div className="mt-8 rounded-[2rem] border border-ink/10 bg-rice p-7">
          <p className="font-serif text-3xl leading-loose text-pine">“{chapter.quote}”</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {chapter.theme.map((theme) => (
              <span key={theme} className="rounded-full border border-gold/30 bg-paper px-4 py-1 text-sm text-gold">{theme}</span>
            ))}
          </div>
        </div>

        <div className="mt-10">
          <ChapterReader chapter={chapter} />
        </div>

        <section className="mt-12 grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="font-serif text-3xl font-bold text-ink">相关寓言</h2>
            <div className="mt-5 grid gap-4">
              {relatedStories.map((story) => (
                <Link key={story.slug} href={`/stories/${story.slug}`} className="rounded-3xl border border-ink/10 bg-paper p-5 transition hover:border-gold/50 hover:bg-white">
                  <h3 className="font-serif text-2xl font-bold text-ink">{story.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink/60">{story.oneLine}</p>
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-serif text-3xl font-bold text-ink">相关思想</h2>
            <div className="mt-5 grid gap-4">
              {relatedConcepts.map((concept) => (
                <Link key={concept.slug} href={`/concepts/${concept.slug}`} className="rounded-3xl border border-ink/10 bg-paper p-5 transition hover:border-gold/50 hover:bg-white">
                  <h3 className="font-serif text-2xl font-bold text-ink">{concept.name}</h3>
                  <p className="mt-2 text-sm leading-7 text-ink/60">{concept.subtitle}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
