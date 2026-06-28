import { SectionTitle } from "@/components/SectionTitle";
import { ThoughtGraph } from "@/components/ThoughtGraph";

export default function ThoughtMapPage() {
  return (
    <main className="px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="THOUGHT MAP" title="思想地图" description="把《庄子》中散落的寓言、概念和生活态度组织成一个可浏览的思想图谱。" />
        <div className="mt-10">
          <ThoughtGraph />
        </div>
      </div>
    </main>
  );
}
