import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";
import { SiteHeader } from "@/components/SiteHeader";

export const metadata: Metadata = {
  title: "庄子宇宙｜逍遥、齐物与无用之用",
  description: "一个从寓言故事进入庄子哲学的沉浸式网站，包含原文阅读、白话解释、思想地图、人物图谱与现代生活解读。"
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="zh-CN">
      <body className="font-sans">
        <SiteHeader />
        {children}
        <footer className="border-t border-ink/10 bg-paper/80">
          <div className="mx-auto grid max-w-7xl gap-6 px-5 py-10 md:grid-cols-[1fr_auto] md:items-center">
            <div>
              <p className="font-serif text-xl font-bold text-ink">庄子宇宙</p>
              <p className="mt-2 text-sm leading-7 text-ink/60">一个让现代人重新理解自由、价值、生死、功利和自我的哲学空间。</p>
            </div>
            <div className="flex flex-wrap gap-4 text-sm text-pine">
              <Link href="/about">关于本站</Link>
              <Link href="/search">搜索</Link>
              <Link href="/daily">今日一则</Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
