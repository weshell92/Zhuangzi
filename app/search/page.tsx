import { SearchBox } from "@/components/SearchBox";
import { SectionTitle } from "@/components/SectionTitle";

export default function SearchPage() {
  return (
    <main className="px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="SEARCH" title="搜索庄子宇宙" description="可以搜索章节、寓言、思想、人物和现代问题。" />
        <div className="mt-10">
          <SearchBox />
        </div>
      </div>
    </main>
  );
}
