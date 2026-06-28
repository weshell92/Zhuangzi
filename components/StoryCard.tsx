import Link from "next/link";
import type { Story } from "@/data/zhuangzi";

export function StoryCard({ story }: { story: Story }) {
  return (
    <Link href={`/stories/${story.slug}`} className="group flex h-full flex-col rounded-[2rem] border border-ink/10 bg-paper p-6 shadow-soft transition hover:-translate-y-1 hover:border-gold/50 hover:bg-white">
      <p className="mb-4 text-xs font-semibold tracking-[0.25em] text-gold">{story.source}</p>
      <h3 className="font-serif text-2xl font-bold text-ink group-hover:text-pine">{story.title}</h3>
      <p className="mt-3 text-base leading-7 text-pine">{story.oneLine}</p>
      <p className="mt-4 flex-1 text-sm leading-7 text-ink/65">{story.summary}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {story.keywords.map((keyword) => (
          <span key={keyword} className="rounded-full bg-rice px-3 py-1 text-xs text-ink/60">
            {keyword}
          </span>
        ))}
      </div>
    </Link>
  );
}
