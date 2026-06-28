import { SectionTitle } from "@/components/SectionTitle";
import { StoryCard } from "@/components/StoryCard";
import { stories } from "@/data/zhuangzi";

export default function StoriesPage() {
  return (
    <main className="px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="STORIES" title="寓言故事" description="用故事打开庄子的思想。每个故事都包含出处、白话故事、哲学含义和现代启发。" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.slug} story={story} />
          ))}
        </div>
      </div>
    </main>
  );
}
