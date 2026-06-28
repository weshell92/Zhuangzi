import Link from "next/link";
import { FeatureCard } from "@/components/FeatureCard";
import { SectionTitle } from "@/components/SectionTitle";
import { chapters, concepts, dailyQuotes, modernTopics, stories } from "@/data/zhuangzi";

export default function HomePage() {
  const today = dailyQuotes[0];
  return (
    <main>
      <section className="ink-wash relative px-5 py-20 md:py-28">
        <div className="relative z-10 mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div>
            <p className="mb-5 text-sm font-semibold tracking-[0.45em] text-gold">ZHUANGZI UNIVERSE</p>
            <h1 className="font-serif text-5xl font-bold leading-tight text-ink md:text-7xl">庄子宇宙</h1>
            <p className="mt-6 max-w-2xl font-serif text-2xl leading-loose text-pine md:text-3xl">在逍遥、齐物与无用之间，重新理解自由</p>
            <p className="mt-8 max-w-2xl text-lg leading-9 text-ink/70">
              北冥有鱼，其名为鲲。当世界只教你有用，庄子却告诉你：无用，也可能是另一种自由。
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <Link href="/read" className="rounded-full bg-pine px-6 py-3 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-ink">
                开始阅读
              </Link>
              <Link href="/stories" className="rounded-full border border-pine/30 bg-paper px-6 py-3 text-pine transition hover:-translate-y-0.5 hover:border-pine">
                进入寓言
              </Link>
              <Link href="/thought-map" className="rounded-full border border-gold/40 bg-rice px-6 py-3 text-ink transition hover:-translate-y-0.5 hover:border-gold">
                查看思想地图
              </Link>
            </div>
          </div>
          <div className="float-cloud rounded-[3rem] border border-ink/10 bg-paper/75 p-8 shadow-soft backdrop-blur">
            <div className="rounded-[2.25rem] bg-rice p-8">
              <p className="text-sm tracking-[0.35em] text-gold">今日一则</p>
              <h2 className="mt-4 font-serif text-3xl font-bold text-ink">{today.title}</h2>
              <p className="mt-6 font-serif text-2xl leading-loose text-pine">“{today.quote}”</p>
              <p className="mt-6 leading-8 text-ink/70">{today.explain}</p>
              <Link href="/daily" className="mt-8 inline-flex text-pine">继续阅读 →</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="STORIES" title="从寓言进入哲学" description="《庄子》不是先给概念，而是先给你一个奇异的故事。故事是入口，思想在故事之后慢慢展开。" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {stories.slice(0, 6).map((story) => (
              <FeatureCard key={story.slug} href={`/stories/${story.slug}`} title={story.title} description={story.oneLine} meta={story.source} />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-rice/60 px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="CONCEPTS" title="把散落的思想连成地图" description="逍遥、齐物、无用之用、技进乎道、生死观并不是孤立概念，而是共同指向一种不被单一尺度困住的生活方式。" />
          <div className="mt-10 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {concepts.map((concept) => (
              <Link key={concept.slug} href={`/concepts/${concept.slug}`} className="rounded-[2rem] border border-ink/10 bg-paper p-6 transition hover:-translate-y-1 hover:border-gold/50 hover:bg-white">
                <h3 className="font-serif text-2xl font-bold text-ink">{concept.name}</h3>
                <p className="mt-3 text-sm leading-7 text-ink/65">{concept.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16">
        <div className="mx-auto max-w-7xl">
          <SectionTitle eyebrow="MODERN" title="现代人的庄子" description="把古老寓言放回今天：内卷、焦虑、评价、无价值感、控制欲、技术成长，都能在庄子那里找到新的提问方式。" />
          <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {modernTopics.slice(0, 6).map((topic) => (
              <FeatureCard key={topic.slug} href={`/modern/${topic.slug}`} title={topic.title} description={topic.answer} meta={topic.concept} />
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-20 pt-8">
        <div className="mx-auto max-w-7xl rounded-[3rem] border border-ink/10 bg-ink p-8 text-paper shadow-soft md:p-12">
          <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="text-sm tracking-[0.35em] text-gold">READING PATH</p>
              <h2 className="mt-4 font-serif text-4xl font-bold">从内篇开始，进入逍遥之境</h2>
              <p className="mt-5 max-w-2xl leading-8 text-paper/70">推荐顺序：逍遥游 → 齐物论 → 养生主 → 人间世 → 大宗师。先建立气质，再理解思想。</p>
            </div>
            <div className="grid gap-3 text-sm">
              {chapters.slice(0, 5).map((chapter) => (
                <Link key={chapter.slug} href={`/chapter/${chapter.slug}`} className="rounded-full border border-paper/15 px-5 py-3 text-paper/90 transition hover:border-gold hover:text-gold">
                  {chapter.order}. {chapter.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
