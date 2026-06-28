import Link from "next/link";
import { SectionTitle } from "@/components/SectionTitle";
import { dailyQuotes } from "@/data/zhuangzi";

export default function DailyPage() {
  return (
    <main className="px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="DAILY" title="今日一则庄子" description="每天一小段，不求速成，只求慢慢把庄子的尺度放进生活里。" />
        <div className="mt-10 grid gap-5">
          {dailyQuotes.map((item, index) => (
            <article key={`${item.title}-${index}`} className="rounded-[2rem] border border-ink/10 bg-paper p-8 shadow-soft">
              <p className="text-sm tracking-[0.25em] text-gold">DAY {String(index + 1).padStart(2, "0")}</p>
              <h2 className="mt-3 font-serif text-3xl font-bold text-ink">{item.title}</h2>
              <p className="mt-5 font-serif text-2xl leading-loose text-pine">“{item.quote}”</p>
              <p className="mt-5 text-lg leading-9 text-ink/70">{item.explain}</p>
              {item.chapterSlug ? <Link href={`/chapter/${item.chapterSlug}`} className="mt-6 inline-flex text-pine">查看章节 →</Link> : null}
              {item.storySlug ? <Link href={`/stories/${item.storySlug}`} className="mt-6 inline-flex text-pine">查看故事 →</Link> : null}
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
