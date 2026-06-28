# 庄子宇宙

一个从寓言故事进入庄子哲学的沉浸式网站。

## 项目定位

本项目根据 `plan.md` 实现，不做单纯的《庄子》在线阅读器，而是把《庄子》设计成：

- 原文阅读
- 白话解释
- 寓言故事
- 思想地图
- 人物图谱
- 现代生活解读
- 今日一则庄子
- 全站搜索

核心理念：

> 在逍遥、齐物与无用之间，重新理解自由。

## 技术栈

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- App Router

## 本地运行

```bash
npm install
npm run dev
```

访问：

```bash
http://localhost:3000
```

## 构建

```bash
npm run build
npm run start
```

## 目录结构

```text
app/                 页面路由
components/          通用组件
data/zhuangzi.ts     章节、寓言、思想、人物、现代主题数据
plan.md              完整产品与开发计划
```


## 本次更新：完整段落阅读

阅读页已经从“摘句式片段”改为“完整原文段落”模式：

- 每一段展示完整原文，而不是一两句摘录。
- 每段包含：段落标题、完整原文、白话大意、思想解释、现代理解、关键词。
- 已扩充内篇 7 篇与《秋水》的核心完整段落。
- 搜索索引已纳入章节完整段落内容。

## 已实现页面

- `/` 首页
- `/read` 阅读入口
- `/read/inner` 内篇
- `/read/outer` 外篇
- `/read/mixed` 杂篇
- `/chapter/[slug]` 章节详情
- `/stories` 寓言列表
- `/stories/[slug]` 寓言详情
- `/thought-map` 思想地图
- `/concepts/[slug]` 思想概念详情
- `/people` 人物图谱
- `/people/[slug]` 人物详情
- `/modern` 现代人的庄子
- `/modern/[slug]` 现代主题详情
- `/daily` 今日一则
- `/search` 搜索
- `/about` 关于

## 后续可扩展方向

1. 补齐外篇、杂篇全部篇章。
2. 将 `data/zhuangzi.ts` 拆成独立 JSON 或 MDX。
3. 接入更完整的注释、版本校勘和引用来源。
4. 增加阅读进度、收藏和每日推送。
5. 将思想地图升级为 React Flow / D3 可交互图谱。
