"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { searchItems } from "@/data/zhuangzi";

export function SearchBox() {
  const [keyword, setKeyword] = useState("");
  const results = useMemo(() => {
    const value = keyword.trim().toLowerCase();
    if (!value) return searchItems.slice(0, 12);
    return searchItems
      .filter((item) => `${item.title} ${item.type} ${item.text}`.toLowerCase().includes(value))
      .slice(0, 30);
  }, [keyword]);

  return (
    <div className="space-y-6">
      <label className="block rounded-[2rem] border border-ink/10 bg-paper p-4 shadow-soft">
        <span className="sr-only">搜索关键词</span>
        <input
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="搜索：逍遥、庄周梦蝶、庖丁、焦虑、无用之用……"
          className="w-full bg-transparent px-3 py-3 text-lg outline-none placeholder:text-ink/35"
        />
      </label>
      <div className="grid gap-4">
        {results.map((item) => (
          <Link key={`${item.type}-${item.href}`} href={item.href} className="rounded-[1.5rem] border border-ink/10 bg-white/80 p-5 transition hover:border-gold/50 hover:bg-white">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-rice px-3 py-1 text-xs text-pine">{item.type}</span>
              <h3 className="font-serif text-2xl font-bold text-ink">{item.title}</h3>
            </div>
            <p className="mt-3 line-clamp-2 text-sm leading-7 text-ink/60">{item.text}</p>
          </Link>
        ))}
        {results.length === 0 ? <p className="rounded-3xl bg-rice p-6 text-center text-ink/60">没有找到相关内容，试试“逍遥”“齐物”“无用”。</p> : null}
      </div>
    </div>
  );
}
