import type { Chapter } from "@/data/zhuangzi";

export function ChapterReader({ chapter }: { chapter: Chapter }) {
  return (
    <article className="space-y-8">
      {chapter.passages.map((passage, index) => (
        <section key={passage.id} className="rounded-[2rem] border border-ink/10 bg-paper p-6 shadow-soft md:p-8">
          <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
            <div>
              <span className="rounded-full bg-rice px-4 py-1 text-sm text-pine">第 {index + 1} 段 · 完整原文段落</span>
              {passage.title ? <h2 className="mt-4 font-serif text-3xl font-bold text-ink">{passage.title}</h2> : null}
            </div>
            <div className="flex flex-wrap gap-2 md:justify-end">
              {passage.keywords.map((keyword) => (
                <span key={keyword} className="rounded-full border border-gold/30 px-3 py-1 text-xs text-gold">
                  {keyword}
                </span>
              ))}
            </div>
          </div>

          <div className="rounded-[1.5rem] bg-rice/70 p-5 md:p-6">
            <p className="mb-3 text-sm font-semibold tracking-[0.25em] text-pine">完整原文</p>
            <p className="whitespace-pre-line font-serif text-[1.35rem] leading-loose text-ink md:text-[1.65rem]">{passage.original}</p>
          </div>

          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            <div className="rounded-3xl bg-white p-5 lg:col-span-1">
              <p className="mb-2 text-sm font-semibold text-pine">白话大意</p>
              <p className="whitespace-pre-line leading-8 text-ink/75">{passage.translation}</p>
            </div>
            <div className="rounded-3xl bg-white p-5 lg:col-span-1">
              <p className="mb-2 text-sm font-semibold text-pine">思想解释</p>
              <p className="whitespace-pre-line leading-8 text-ink/75">{passage.note}</p>
            </div>
            <div className="rounded-3xl bg-white p-5 lg:col-span-1">
              <p className="mb-2 text-sm font-semibold text-pine">现代理解</p>
              <p className="whitespace-pre-line leading-8 text-ink/75">{passage.modern ?? "这一段可以结合当代生活继续扩展，用来连接工作、关系、学习和自我理解。"}</p>
            </div>
          </div>
        </section>
      ))}
    </article>
  );
}
