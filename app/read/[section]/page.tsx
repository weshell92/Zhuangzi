import Link from "next/link";
import { notFound } from "next/navigation";
import { SectionTitle } from "@/components/SectionTitle";
import { chapters, sections, type SectionKey } from "@/data/zhuangzi";

export function generateStaticParams() {
  return Object.keys(sections).map((section) => ({ section }));
}

export default function SectionPage({ params }: { params: { section: string } }) {
  const section = params.section as SectionKey;
  const info = sections[section];
  if (!info) notFound();
  const list = chapters.filter((chapter) => chapter.section === section).sort((a, b) => a.order - b.order);

  return (
    <main className="px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="SECTION" title={info.label} description={info.description} />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {list.map((chapter) => (
            <Link key={chapter.slug} href={`/chapter/${chapter.slug}`} className="rounded-[2rem] border border-ink/10 bg-paper p-7 shadow-soft transition hover:-translate-y-1 hover:border-gold/50 hover:bg-white">
              <p className="text-sm text-gold">第 {chapter.order} 篇</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-ink">{chapter.title}</h2>
              <p className="mt-4 text-sm leading-7 text-ink/65">{chapter.summary}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {chapter.theme.map((item) => (
                  <span key={item} className="rounded-full bg-rice px-3 py-1 text-xs text-pine">{item}</span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        {list.length === 0 ? <p className="mt-10 rounded-3xl bg-rice p-8 text-center text-ink/60">该部分内容将在下一阶段补充。</p> : null}
      </div>
    </main>
  );
}
