import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { chapters, sections } from "@/data/zhuangzi";

export default function ReadPage() {
  const recommended = ["xiaoyaoyou", "qiwulun", "yangshengzhu", "renjianshi", "dazongshi"];
  return (
    <main className="px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="READ" title="阅读《庄子》" description="不要一开始就硬啃整篇古文。先按内篇建立主线，再通过故事、概念和现代解释逐步深入。" />

        <section className="mt-10 rounded-[2.5rem] border border-ink/10 bg-paper p-8 shadow-soft">
          <h2 className="font-serif text-3xl font-bold text-ink">新手推荐路径</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-5">
            {recommended.map((slug, index) => {
              const chapter = chapters.find((item) => item.slug === slug)!;
              return (
                <Link key={chapter.slug} href={`/chapter/${chapter.slug}`} className="rounded-3xl bg-rice p-5 transition hover:-translate-y-1 hover:bg-white">
                  <p className="text-sm text-gold">第 {index + 1} 步</p>
                  <h3 className="mt-2 font-serif text-2xl font-bold text-ink">{chapter.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-ink/60">{chapter.summary}</p>
                </Link>
              );
            })}
          </div>
        </section>

        <section className="mt-10 grid gap-6 md:grid-cols-3">
          {Object.entries(sections).map(([key, value]) => (
            <Link key={key} href={`/read/${key}`} className="rounded-[2rem] border border-ink/10 bg-paper p-7 shadow-soft transition hover:-translate-y-1 hover:border-gold/50 hover:bg-white">
              <h2 className="font-serif text-3xl font-bold text-ink">{value.label}</h2>
              <p className="mt-4 leading-8 text-ink/65">{value.description}</p>
              <p className="mt-6 text-sm text-pine">查看篇目 →</p>
            </Link>
          ))}
        </section>
      </div>
    </main>
  );
}
