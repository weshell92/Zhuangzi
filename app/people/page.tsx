import { PeopleGraph } from "@/components/PeopleGraph";
import { SectionTitle } from "@/components/SectionTitle";

export default function PeoplePage() {
  return (
    <main className="px-5 py-16">
      <div className="mx-auto max-w-7xl">
        <SectionTitle eyebrow="PEOPLE" title="人物图谱" description="《庄子》像一个哲学剧场。庄子、惠子、庖丁、列子、支离疏、混沌、鲲鹏、蝴蝶都在表达不同思想角色。" />
        <div className="mt-10">
          <PeopleGraph />
        </div>
      </div>
    </main>
  );
}
