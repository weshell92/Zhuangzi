import { SectionTitle } from "@/components/SectionTitle";

export default function AboutPage() {
  return (
    <main className="px-5 py-16">
      <div className="mx-auto max-w-5xl">
        <SectionTitle eyebrow="ABOUT" title="关于庄子宇宙" description="本站按照 plan.md 的设计理念实现：不是简单古籍阅读器，而是一个从故事进入哲学、再连接现代生活的沉浸式网站。" />
        <section className="mt-10 grid gap-5">
          <Block title="为什么从故事开始？" text="《庄子》的力量不在条文式说理，而在鲲鹏、蝴蝶、庖丁、混沌这些极具想象力的寓言。故事能先抓住人，然后思想才真正进入。" />
          <Block title="为什么要有思想地图？" text="庄子的概念散落在不同篇章之中。思想地图把逍遥、齐物、无用之用、无为、技进乎道、生死观等概念重新组织，帮助用户形成整体理解。" />
          <Block title="为什么连接现代生活？" text="现代人读古籍不只是为了知道古人说了什么，更是为了重新理解工作、价值、焦虑、评价和自由。现代人的庄子模块就是为此而设计。" />
        </section>
      </div>
    </main>
  );
}

function Block({ title, text }: { title: string; text: string }) {
  return (
    <div className="rounded-[2rem] border border-ink/10 bg-paper p-8 shadow-soft">
      <h2 className="font-serif text-3xl font-bold text-ink">{title}</h2>
      <p className="mt-5 text-lg leading-9 text-ink/70">{text}</p>
    </div>
  );
}
