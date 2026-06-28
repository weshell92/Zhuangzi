import Link from "next/link";

const navItems = [
  { href: "/read", label: "阅读" },
  { href: "/stories", label: "寓言" },
  { href: "/thought-map", label: "思想地图" },
  { href: "/people", label: "人物图谱" },
  { href: "/modern", label: "现代人的庄子" },
  { href: "/daily", label: "今日一则" },
  { href: "/search", label: "搜索" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-ink/10 bg-paper/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4">
        <Link href="/" className="group flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-full border border-gold/50 bg-rice text-xl text-pine transition group-hover:rotate-6">莊</span>
          <span>
            <span className="block font-serif text-lg font-bold tracking-[0.2em] text-ink">庄子宇宙</span>
            <span className="hidden text-xs text-moss sm:block">逍遥 · 齐物 · 无用</span>
          </span>
        </Link>
        <nav className="hidden items-center gap-5 text-sm text-ink/75 lg:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="transition hover:text-pine">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link href="/search" className="rounded-full border border-ink/10 px-4 py-2 text-sm text-pine shadow-sm transition hover:border-pine/40 hover:bg-rice">
          入境寻章
        </Link>
      </div>
    </header>
  );
}
