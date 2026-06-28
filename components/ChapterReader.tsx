import type { Chapter } from "@/data/zhuangzi";

export function ChapterReader({ chapter }: { chapter: Chapter }) {
  return (
    <article className="space-y-8">
      {chapter.passages.map((passage, index) => (
        <section key={passage.id} className="rounded-[2rem] border border-ink/10 bg-paper p-6 shadow-soft md:p-8">
          <div className="mb-5 flex items-center justify-between gap-4">
            <span className="rounded-full bg-rice px-4 py-1 text-sm text-pine">第 {index + 1} 段</span>
            <div className="flex flex-wrap justify-end gap-2">
              {passage.keywords.map((keyword) => (
                <span key={keyword} className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold">
                  {keyword}
                </span>
              ))}
            </div>
          </div>
          <p className="font-serif text-2xl leading-loose text-ink md:text-3xl">{passage.original}</p>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-3xl bg-rice p-5">
              <p className="mb-2 text-sm font-semibold text-pine">白话</p>
              <p className="leading-8 text-ink/75">{passage.translation}</p>
            </div>
            <div className="rounded-3xl bg-white p-5">
              <p className="mb-2 text-sm font-semibold text-pine">思想解释</p>
              <p className="leading-8 text-ink/75">{passage.note}</p>
            </div>
          </div>
        </section>
      ))}
    </article>
  );
}
