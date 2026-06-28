import { FeatureCard } from "@/components/FeatureCard";
import { SectionTitle } from "@/components/SectionTitle";
import { modernTopics } from "@/data/zhuangzi";

export default function ModernPage() {
  return (
    <main className="px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="MODERN LIFE" title="现代人的庄子" description="这里不是把庄子做成鸡汤，而是把庄子的提问方式放回现代生活：当你被功利、评价、焦虑和控制欲困住时，换一种尺度看自己。" />
        <div className="mt-10 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {modernTopics.map((topic) => (
            <FeatureCard key={topic.slug} href={`/modern/${topic.slug}`} title={topic.title} description={topic.pain} meta={topic.concept} />
          ))}
        </div>
      </div>
    </main>
  );
}
