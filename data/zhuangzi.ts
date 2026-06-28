export type SectionKey = "inner" | "outer" | "mixed";

export type Passage = {
  id: string;
  original: string;
  translation: string;
  note: string;
  keywords: string[];
};

export type Chapter = {
  slug: string;
  title: string;
  section: SectionKey;
  order: number;
  summary: string;
  theme: string[];
  quote: string;
  passages: Passage[];
  relatedStories: string[];
  relatedConcepts: string[];
};

export type Story = {
  slug: string;
  title: string;
  source: string;
  chapterSlug: string;
  keywords: string[];
  oneLine: string;
  summary: string;
  meaning: string;
  modern: string;
  people: string[];
  concepts: string[];
};

export type Concept = {
  slug: string;
  name: string;
  subtitle: string;
  summary: string;
  nodes: string[];
  relatedStories: string[];
  modernUse: string;
};

export type Person = {
  slug: string;
  name: string;
  role: string;
  description: string;
  symbol: string;
  stories: string[];
  relations: { target: string; label: string }[];
};

export type ModernTopic = {
  slug: string;
  title: string;
  pain: string;
  concept: string;
  story: string;
  answer: string;
  practice: string[];
};

export type DailyQuote = {
  title: string;
  quote: string;
  explain: string;
  chapterSlug?: string;
  storySlug?: string;
};

export const sections: Record<SectionKey, { label: string; description: string }> = {
  inner: {
    label: "内篇",
    description: "最适合作为入门主线，集中呈现逍遥、齐物、养生、生死与无为。"
  },
  outer: {
    label: "外篇",
    description: "延展庄子思想的社会、政治与处世面向，适合进阶阅读。"
  },
  mixed: {
    label: "杂篇",
    description: "保存大量寓言、辩论与思想碎片，适合按主题检索。"
  }
};

export const chapters: Chapter[] = [
  {
    slug: "xiaoyaoyou",
    title: "逍遥游",
    section: "inner",
    order: 1,
    summary: "以鲲鹏、大椿、小虫、列子等意象打开庄子精神世界，讨论生命尺度、自由与外物依赖。",
    theme: ["逍遥", "小大之辩", "精神自由", "反功利"],
    quote: "北冥有鱼，其名为鲲。",
    relatedStories: ["kun-peng", "liezi-riding-wind", "useless-tree"],
    relatedConcepts: ["xiaoyao", "uselessness", "anti-utilitarian"],
    passages: [
      {
        id: "p1",
        original: "北冥有鱼，其名为鲲。鲲之大，不知其几千里也。化而为鸟，其名为鹏。",
        translation: "北方的大海里有一条鱼，名字叫鲲。鲲很大，不知道有几千里。它变化为鸟，名字叫鹏。",
        note: "鲲鹏不是普通神怪，而是庄子用来打开生命尺度的巨大意象。",
        keywords: ["鲲", "鹏", "大尺度", "变化"]
      },
      {
        id: "p2",
        original: "小知不及大知，小年不及大年。",
        translation: "小的智慧不能理解大的智慧，短的寿命不能理解长的寿命。",
        note: "庄子不是否定小生命，而是提醒人不要用单一尺度裁判万物。",
        keywords: ["小大之辩", "尺度", "认知边界"]
      },
      {
        id: "p3",
        original: "至人无己，神人无功，圣人无名。",
        translation: "最高的人不执着自我，神妙的人不执着功业，圣明的人不执着名声。",
        note: "逍遥的关键，是从自我、功业、名声的束缚中松开。",
        keywords: ["无己", "无功", "无名", "逍遥"]
      }
    ]
  },
  {
    slug: "qiwulun",
    title: "齐物论",
    section: "inner",
    order: 2,
    summary: "讨论是非、彼此、梦醒、物我边界，庄周梦蝶是其中最有代表性的思想寓言。",
    theme: ["齐物", "是非相对", "物我合一", "梦与醒"],
    quote: "昔者庄周梦为胡蝶，栩栩然胡蝶也。",
    relatedStories: ["butterfly-dream", "three-in-the-morning"],
    relatedConcepts: ["qiwulun", "thing-self", "anti-prejudice"],
    passages: [
      {
        id: "p1",
        original: "天地与我并生，而万物与我为一。",
        translation: "天地和我一同存在，万物和我本是一体。",
        note: "这是齐物论的核心气质：打破我与物、彼与此、是与非之间过度僵硬的边界。",
        keywords: ["万物一体", "物我", "齐物"]
      },
      {
        id: "p2",
        original: "彼亦一是非，此亦一是非。",
        translation: "从对方看有一套是非，从我方看也有一套是非。",
        note: "庄子并不是说没有判断，而是说判断经常来自立场。",
        keywords: ["是非", "立场", "相对"]
      }
    ]
  },
  {
    slug: "yangshengzhu",
    title: "养生主",
    section: "inner",
    order: 3,
    summary: "以庖丁解牛为核心，说明真正高明的行动不是蛮力，而是顺着事物纹理前进。",
    theme: ["养生", "顺势", "技进乎道", "保全"],
    quote: "臣之所好者道也，进乎技矣。",
    relatedStories: ["cook-ding"],
    relatedConcepts: ["nurturing-life", "skill-to-dao", "wuwei"],
    passages: [
      {
        id: "p1",
        original: "臣之所好者道也，进乎技矣。",
        translation: "我所追求的是道，已经超过了普通技术层面。",
        note: "技艺达到极高处，便不只是熟练，而是对事物结构的深刻体会。",
        keywords: ["技进乎道", "庖丁", "道"]
      },
      {
        id: "p2",
        original: "依乎天理，批大郤，导大窾，因其固然。",
        translation: "顺着牛身体天然的纹理，进入大的缝隙，沿着本来的结构行动。",
        note: "庄子式高手不是强行改变对象，而是看见对象自身的纹理。",
        keywords: ["顺势", "天理", "结构"]
      }
    ]
  },
  {
    slug: "renjianshi",
    title: "人间世",
    section: "inner",
    order: 4,
    summary: "讨论人在复杂社会和危险关系中的自处，重点不是胜出，而是保全精神与生命。",
    theme: ["处世", "虚己", "乱世自处", "心斋"],
    quote: "唯道集虚。虚者，心斋也。",
    relatedStories: ["empty-boat", "useless-tree"],
    relatedConcepts: ["empty-mind", "uselessness", "wuwei"],
    passages: [
      {
        id: "p1",
        original: "唯道集虚。虚者，心斋也。",
        translation: "道只会聚集在虚静之处。所谓虚，就是心斋。",
        note: "心斋不是消极空白，而是暂时放下成见、欲望和自我中心。",
        keywords: ["心斋", "虚", "处世"]
      }
    ]
  },
  {
    slug: "dechongfu",
    title: "德充符",
    section: "inner",
    order: 5,
    summary: "借王骀、支离疏等形象讨论内在德性与外在形貌的关系，反对以外貌和功用评价人。",
    theme: ["德", "完整", "反外貌判断", "无用之用"],
    quote: "德有所长而形有所忘。",
    relatedStories: ["zhili-shu"],
    relatedConcepts: ["uselessness", "anti-prejudice"],
    passages: [
      {
        id: "p1",
        original: "人不忘其所忘，而忘其所不忘，此谓诚忘。",
        translation: "人常常忘了真正应当放下的，却放不下不该执着的。",
        note: "《德充符》不断提醒人：真正的完整不在外形，而在精神。",
        keywords: ["德", "完整", "遗忘"]
      }
    ]
  },
  {
    slug: "dazongshi",
    title: "大宗师",
    section: "inner",
    order: 6,
    summary: "集中表达庄子的生死观、真人观与安时处顺的生命态度。",
    theme: ["真人", "生死观", "安时处顺", "自然"],
    quote: "古之真人，不知说生，不知恶死。",
    relatedStories: ["drumming-on-basin"],
    relatedConcepts: ["life-death", "nature", "xiaoyao"],
    passages: [
      {
        id: "p1",
        original: "安时而处顺，哀乐不能入也。",
        translation: "安于时运，顺应变化，哀乐便不能侵入内心。",
        note: "这不是冷漠，而是把生命放回更大的变化之流。",
        keywords: ["安时处顺", "生死", "自然"]
      }
    ]
  },
  {
    slug: "yingdiwang",
    title: "应帝王",
    section: "inner",
    order: 7,
    summary: "以混沌之死等故事讨论无为之治，反对过度干预与强行塑造。",
    theme: ["无为", "政治", "自然", "混沌"],
    quote: "日凿一窍，七日而浑沌死。",
    relatedStories: ["chaos-death"],
    relatedConcepts: ["wuwei", "nature", "anti-control"],
    passages: [
      {
        id: "p1",
        original: "日凿一窍，七日而浑沌死。",
        translation: "每天给混沌凿一个孔，七天后混沌死了。",
        note: "善意的改造也可能破坏生命本来的状态。",
        keywords: ["混沌", "无为", "反干预"]
      }
    ]
  },
  {
    slug: "qiushui",
    title: "秋水",
    section: "outer",
    order: 17,
    summary: "通过河伯、北海若、井蛙等寓言展示认知边界与天地尺度。",
    theme: ["认知边界", "大小之辩", "谦逊"],
    quote: "井蛙不可以语于海者，拘于虚也。",
    relatedStories: ["well-frog", "haoliang-debate"],
    relatedConcepts: ["anti-prejudice", "qiwulun"],
    passages: [
      {
        id: "p1",
        original: "井蛙不可以语于海者，拘于虚也。",
        translation: "不能和井里的青蛙谈论大海，因为它被狭小空间限制住了。",
        note: "庄子用井蛙提醒人：很多确定感只是因为见得太少。",
        keywords: ["井蛙", "认知边界", "大海"]
      }
    ]
  }
];

export const stories: Story[] = [
  {
    slug: "kun-peng",
    title: "鲲鹏展翅",
    source: "《逍遥游》",
    chapterSlug: "xiaoyaoyou",
    keywords: ["逍遥", "大尺度", "变化"],
    oneLine: "真正的自由，来自更大的生命尺度。",
    summary: "北冥之鱼化为大鹏，乘风而上，飞向南冥。蜩与学鸠嘲笑它太夸张，却看不见更大的天地。",
    meaning: "鲲鹏不是炫耀巨大，而是打破狭窄评价。小生命有小生命的世界，大生命有大生命的风。",
    modern: "当你被眼前评价困住时，庄子提醒你：也许不是你不行，而是你正在用太小的尺子量自己。",
    people: ["鲲", "鹏"],
    concepts: ["xiaoyao", "anti-prejudice"]
  },
  {
    slug: "butterfly-dream",
    title: "庄周梦蝶",
    source: "《齐物论》",
    chapterSlug: "qiwulun",
    keywords: ["齐物", "梦醒", "物我"],
    oneLine: "我和世界的边界，也许没有想象中那么坚硬。",
    summary: "庄周梦见自己变成蝴蝶，醒来后不知道是庄周梦见蝴蝶，还是蝴蝶梦见庄周。",
    meaning: "故事挑战自我中心，也挑战人对现实的绝对把握。",
    modern: "人在身份、职业、评价里待久了，会以为那就是唯一的自己。庄周梦蝶提醒我们，自我也可能是流动的。",
    people: ["庄子", "蝴蝶"],
    concepts: ["qiwulun", "thing-self"]
  },
  {
    slug: "cook-ding",
    title: "庖丁解牛",
    source: "《养生主》",
    chapterSlug: "yangshengzhu",
    keywords: ["技进乎道", "顺势", "养生"],
    oneLine: "高手不是更用力，而是更懂纹理。",
    summary: "庖丁为文惠君解牛，动作像音乐舞蹈。他说自己追求的是道，而不只是技术。",
    meaning: "真正成熟的能力，是看见对象的结构，并顺着结构行动。",
    modern: "写代码、做产品、处理关系都一样。硬砍会累，理解系统纹理之后才能游刃有余。",
    people: ["庖丁", "文惠君"],
    concepts: ["skill-to-dao", "nurturing-life", "wuwei"]
  },
  {
    slug: "haoliang-debate",
    title: "濠梁之辩",
    source: "《秋水》",
    chapterSlug: "qiushui",
    keywords: ["惠子", "辩论", "知鱼之乐"],
    oneLine: "逻辑与生命感受，未必总站在同一边。",
    summary: "庄子说鱼游得快乐，惠子问他不是鱼怎么知道鱼快乐，庄子反问惠子不是他怎么知道他不知道。",
    meaning: "这是庄子与惠子的经典思想交锋：理性追问边界，庄子则重视当下感通。",
    modern: "有些体验不是靠证明才存在。逻辑重要，但生命感受也有它的真。",
    people: ["庄子", "惠子"],
    concepts: ["qiwulun", "thing-self"]
  },
  {
    slug: "useless-tree",
    title: "无用之树",
    source: "《逍遥游》《人间世》",
    chapterSlug: "xiaoyaoyou",
    keywords: ["无用之用", "反功利", "保全"],
    oneLine: "不被使用，有时反而是一种保存。",
    summary: "一棵大树因为木质无用，没有被匠人砍伐，得以长成参天大树。",
    meaning: "庄子反转了功利判断：世俗所谓无用，可能恰恰是生命得以自全的原因。",
    modern: "不是所有价值都能被 KPI、收入、排名证明。人的精神空间，也需要保留一些不被工具化的部分。",
    people: ["匠石", "大树"],
    concepts: ["uselessness", "anti-utilitarian"]
  },
  {
    slug: "drumming-on-basin",
    title: "鼓盆而歌",
    source: "《至乐》《大宗师》相关生死观",
    chapterSlug: "dazongshi",
    keywords: ["生死", "安时处顺", "自然"],
    oneLine: "死亡不是绝对断裂，而是变化的一环。",
    summary: "庄子妻子去世，惠子来吊唁，却看见庄子击盆而歌。庄子解释说，生死只是气化流转。",
    meaning: "庄子的生死观不是无情，而是从更大的自然变化理解死亡。",
    modern: "面对失去，人可以悲伤；但也可以慢慢学习把生命放回时间与自然之中。",
    people: ["庄子", "惠子"],
    concepts: ["life-death", "nature"]
  },
  {
    slug: "zhili-shu",
    title: "支离疏",
    source: "《人间世》《德充符》相关形象",
    chapterSlug: "dechongfu",
    keywords: ["无用", "畸形", "保全"],
    oneLine: "外在不合标准，不代表生命没有价值。",
    summary: "支离疏形体残缺，无法被征役和劳作使用，反而能在乱世中保全自己。",
    meaning: "庄子用极端形象挑战社会对完整、有用、正常的定义。",
    modern: "当你觉得自己“不合标准”时，也许正可以重新定义自己的存在方式。",
    people: ["支离疏"],
    concepts: ["uselessness", "anti-prejudice"]
  },
  {
    slug: "chaos-death",
    title: "混沌之死",
    source: "《应帝王》",
    chapterSlug: "yingdiwang",
    keywords: ["无为", "反控制", "自然"],
    oneLine: "过度改造，可能杀死本来的生命。",
    summary: "南海之帝与北海之帝为了报答混沌，天天为他凿七窍，结果混沌死了。",
    meaning: "庄子警惕自以为善意的干预。不是所有对象都需要被改造成我们熟悉的样子。",
    modern: "管理、教育、产品设计中，过度控制可能破坏自然生长。",
    people: ["混沌"],
    concepts: ["wuwei", "nature", "anti-control"]
  },
  {
    slug: "well-frog",
    title: "井底之蛙",
    source: "《秋水》",
    chapterSlug: "qiushui",
    keywords: ["认知边界", "大海", "谦逊"],
    oneLine: "很多确定，只是因为世界太小。",
    summary: "井里的青蛙无法理解大海，因为它的空间经验只有一口井。",
    meaning: "认知边界决定了想象边界。庄子提醒人别把局部经验当成全部世界。",
    modern: "换行业、换城市、换视角，常常不是逃避，而是扩大世界。",
    people: ["井蛙", "北海若"],
    concepts: ["anti-prejudice", "qiwulun"]
  },
  {
    slug: "three-in-the-morning",
    title: "朝三暮四",
    source: "《齐物论》",
    chapterSlug: "qiwulun",
    keywords: ["名实", "是非", "认知"],
    oneLine: "表面变化，未必是真变化。",
    summary: "养猴人说早上给三颗橡子晚上给四颗，猴子生气；改成早上四颗晚上三颗，猴子高兴。总数没有变。",
    meaning: "人常被表述方式影响，以为形式变化就是本质变化。",
    modern: "消费、职场和舆论中，很多选择只是包装变化。看清总量和结构，才能少被牵动。",
    people: ["狙公", "众狙"],
    concepts: ["qiwulun", "anti-prejudice"]
  },
  {
    slug: "liezi-riding-wind",
    title: "列子御风",
    source: "《逍遥游》",
    chapterSlug: "xiaoyaoyou",
    keywords: ["逍遥", "有所待", "自由"],
    oneLine: "看似自由，也可能仍然依赖外物。",
    summary: "列子能乘风而行，轻妙自在，但庄子认为他仍然有所依赖。",
    meaning: "庄子把自由继续推深：不是行动轻盈就够了，还要摆脱对条件的执着。",
    modern: "财富、职位、技术都能让人更自由，但若完全依附它们，自由仍不彻底。",
    people: ["列子"],
    concepts: ["xiaoyao", "wuwei"]
  }
];

export const concepts: Concept[] = [
  {
    slug: "xiaoyao",
    name: "逍遥",
    subtitle: "不被单一尺度困住的精神自由",
    summary: "逍遥不是想做什么就做什么，而是不被名声、功业、自我和世俗尺度束缚。",
    nodes: ["无己", "无功", "无名", "小大之辩", "有所待与无所待"],
    relatedStories: ["kun-peng", "liezi-riding-wind"],
    modernUse: "当你被职业、收入、评价定义时，逍遥提醒你重新扩大生命尺度。"
  },
  {
    slug: "qiwulun",
    name: "齐物",
    subtitle: "看见是非、彼此和物我的流动边界",
    summary: "齐物不是混淆一切，而是松动自我中心和绝对是非。",
    nodes: ["彼亦一是非", "天地与我并生", "庄周梦蝶", "梦醒边界"],
    relatedStories: ["butterfly-dream", "three-in-the-morning", "haoliang-debate"],
    modernUse: "遇到争论时，先看见立场，再判断观点。"
  },
  {
    slug: "uselessness",
    name: "无用之用",
    subtitle: "跳出功利评价后的另一种价值",
    summary: "庄子反复讨论“无用”，是为了反击单一功利标准。",
    nodes: ["大树", "支离疏", "保全", "反工具化"],
    relatedStories: ["useless-tree", "zhili-shu"],
    modernUse: "不是所有价值都必须被绩效、排名、变现证明。"
  },
  {
    slug: "wuwei",
    name: "无为",
    subtitle: "不强行、不妄为，顺着事物本身生长",
    summary: "无为不是不做事，而是不以自我意志强行扭曲事物。",
    nodes: ["因其固然", "心斋", "混沌之死", "反控制"],
    relatedStories: ["cook-ding", "chaos-death"],
    modernUse: "管理、教育、产品设计中，少一点控制，多一点观察。"
  },
  {
    slug: "skill-to-dao",
    name: "技进乎道",
    subtitle: "技术深处，是对结构和节奏的理解",
    summary: "庖丁解牛说明高超技艺不只是熟练，而是进入事物纹理。",
    nodes: ["庖丁", "天理", "游刃有余", "结构感"],
    relatedStories: ["cook-ding"],
    modernUse: "学习编程、写作、设计时，真正重要的是理解系统结构。"
  },
  {
    slug: "life-death",
    name: "生死观",
    subtitle: "把生命放回变化之流",
    summary: "庄子不把死亡看成绝对敌人，而把生死理解为气化流转。",
    nodes: ["安时处顺", "真人", "鼓盆而歌", "变化"],
    relatedStories: ["drumming-on-basin"],
    modernUse: "面对无常时，可以悲伤，也可以学习与变化共处。"
  },
  {
    slug: "anti-prejudice",
    name: "反成见",
    subtitle: "警惕把局部经验当成全部世界",
    summary: "从井蛙到朝三暮四，庄子不断揭露成见如何限制认知。",
    nodes: ["井蛙", "朝三暮四", "彼此", "局部经验"],
    relatedStories: ["well-frog", "three-in-the-morning"],
    modernUse: "当你太确定时，先问自己：我是不是只看见了一口井？"
  },
  {
    slug: "nature",
    name: "自然",
    subtitle: "让万物保有自身的样子",
    summary: "自然不是风景，而是万物顺着自身之理存在和变化。",
    nodes: ["安时处顺", "无为", "混沌", "天理"],
    relatedStories: ["chaos-death", "drumming-on-basin"],
    modernUse: "尊重节奏，不把所有生命都改造成同一套模板。"
  }
];

export const people: Person[] = [
  {
    slug: "zhuangzi",
    name: "庄子",
    role: "思想主角",
    description: "以寓言、辩论和奇异想象打开精神自由的人。",
    symbol: "自由、反功利、齐物",
    stories: ["butterfly-dream", "haoliang-debate", "drumming-on-basin"],
    relations: [
      { target: "huizi", label: "朋友与辩论对手" },
      { target: "butterfly", label: "物我边界" }
    ]
  },
  {
    slug: "huizi",
    name: "惠子",
    role: "辩论者",
    description: "庄子的朋友与思想对照，代表逻辑、名辩和功利尺度。",
    symbol: "理性、逻辑、功用判断",
    stories: ["haoliang-debate", "drumming-on-basin"],
    relations: [{ target: "zhuangzi", label: "思想交锋" }]
  },
  {
    slug: "cook-ding",
    name: "庖丁",
    role: "技艺之人",
    description: "以解牛展示技艺如何进入道。",
    symbol: "技进乎道、顺势",
    stories: ["cook-ding"],
    relations: [{ target: "wenhui", label: "向文惠君展示解牛" }]
  },
  {
    slug: "liezi",
    name: "列子",
    role: "御风者",
    description: "能乘风而行，却仍被庄子视为有所依赖。",
    symbol: "有所待的自由",
    stories: ["liezi-riding-wind"],
    relations: [{ target: "zhuangzi", label: "逍遥对照" }]
  },
  {
    slug: "zhili-shu",
    name: "支离疏",
    role: "边缘形象",
    description: "身体不合世俗标准，却因此保全自身。",
    symbol: "无用之用、反标准化",
    stories: ["zhili-shu"],
    relations: [{ target: "useless-tree", label: "同属无用之用" }]
  },
  {
    slug: "butterfly",
    name: "蝴蝶",
    role: "梦中之物",
    description: "庄周梦蝶中的关键意象，松动自我边界。",
    symbol: "物我流动",
    stories: ["butterfly-dream"],
    relations: [{ target: "zhuangzi", label: "梦与醒" }]
  },
  {
    slug: "kun-peng",
    name: "鲲鹏",
    role: "巨大生命意象",
    description: "由鲲化鹏，象征生命尺度的跃迁。",
    symbol: "大尺度、变化、逍遥",
    stories: ["kun-peng"],
    relations: [{ target: "xiaoyao", label: "逍遥核心意象" }]
  },
  {
    slug: "chaos",
    name: "混沌",
    role: "自然状态象征",
    description: "被善意凿窍而死，代表被强行改造的自然。",
    symbol: "自然、反干预",
    stories: ["chaos-death"],
    relations: [{ target: "wuwei", label: "无为之治" }]
  }
];

export const modernTopics: ModernTopic[] = [
  {
    slug: "work-pressure",
    title: "工作内卷",
    pain: "你很努力，但总觉得自己被排名、绩效和比较追着跑。",
    concept: "无用之用、逍遥",
    story: "无用之树",
    answer: "庄子不会简单劝你躺平，而是提醒你：不要把全部生命都交给单一功利尺度。保留一点不被使用的精神空间，人才能不被耗尽。",
    practice: ["区分必须完成的责任与额外消耗", "保留一件不为变现而做的事", "每周复盘一次：我是否被单一指标定义？"]
  },
  {
    slug: "judgement",
    title: "被别人评价困住",
    pain: "你很在意别人怎么看你，因此不敢表达、选择或失败。",
    concept: "齐物、逍遥",
    story: "庄周梦蝶",
    answer: "齐物论提醒你，每个人的评价都带着自己的位置。别人的判断不是宇宙真理，只是他所在立场的一种声音。",
    practice: ["把评价写下来，标注它来自谁的立场", "问自己：这件事十年后还重要吗？", "选择一个小场景练习不解释"]
  },
  {
    slug: "worthless",
    title: "觉得自己没价值",
    pain: "你觉得自己没有优势，没有成果，也不像别人那样有用。",
    concept: "无用之用",
    story: "支离疏",
    answer: "庄子会先怀疑“价值”的标准。你说的没价值，往往只是没被某套系统使用。生命的价值不等于工具价值。",
    practice: ["列出三个无法被钱衡量却对你重要的东西", "停止用单一身份概括自己", "给自己保留一个不需要证明的空间"]
  },
  {
    slug: "future-anxiety",
    title: "焦虑未来",
    pain: "你总担心下一步、结果、风险，无法安住当下。",
    concept: "安时处顺、自然",
    story: "鼓盆而歌",
    answer: "庄子不是让人不计划，而是不要用想象中的未来反复折磨现在。生命始终在变化中，能做的是顺着变化调整。",
    practice: ["把焦虑拆成可行动与不可控制两类", "每天做一件顺应当下的小事", "减少对最坏结果的反复排练"]
  },
  {
    slug: "learning-skill",
    title: "技术成长卡住",
    pain: "你学了很多技巧，但遇到复杂问题仍然手忙脚乱。",
    concept: "技进乎道",
    story: "庖丁解牛",
    answer: "庖丁不是记住更多刀法，而是理解牛的纹理。技术学习也是如此，真正重要的是结构感、节奏感和系统理解。",
    practice: ["每学一个工具，都画出它解决的问题结构", "不要只复制代码，要解释为什么这样写", "找一个项目反复重构，直到看见纹理"]
  },
  {
    slug: "control",
    title: "总想控制一切",
    pain: "你希望别人、项目、关系都按你的方式发展，结果越来越累。",
    concept: "无为、自然",
    story: "混沌之死",
    answer: "混沌之死说明，过度改造会杀死生命本来的状态。真正高明的行动，有时是少干预，多观察。",
    practice: ["延迟一次不必要的指令", "先观察系统自然运行方式", "把控制欲改成边界和反馈机制"]
  }
];

export const dailyQuotes: DailyQuote[] = [
  {
    title: "今日庄子：无用之用",
    quote: "人皆知有用之用，而莫知无用之用也。",
    explain: "别人看一棵树无用，所以它没有被砍掉。有时候，所谓没用，正是保全自己的方式。",
    storySlug: "useless-tree"
  },
  {
    title: "今日庄子：小大之辩",
    quote: "小知不及大知，小年不及大年。",
    explain: "别急着用眼前的尺度判断一切。小世界看不懂大世界，是很正常的。",
    chapterSlug: "xiaoyaoyou"
  },
  {
    title: "今日庄子：物我之间",
    quote: "不知周之梦为胡蝶与，胡蝶之梦为周与？",
    explain: "你以为固定不变的自我，也许只是生命流动中的一个片刻。",
    storySlug: "butterfly-dream"
  },
  {
    title: "今日庄子：顺势而行",
    quote: "依乎天理，因其固然。",
    explain: "真正的高手不是强行解决，而是看见事物自己的纹理。",
    storySlug: "cook-ding"
  }
];

export const searchItems = [
  ...chapters.map((item) => ({ type: "章节", title: item.title, href: `/chapter/${item.slug}`, text: `${item.summary} ${item.theme.join(" ")} ${item.quote}` })),
  ...stories.map((item) => ({ type: "寓言", title: item.title, href: `/stories/${item.slug}`, text: `${item.oneLine} ${item.summary} ${item.meaning} ${item.keywords.join(" ")}` })),
  ...concepts.map((item) => ({ type: "思想", title: item.name, href: `/concepts/${item.slug}`, text: `${item.subtitle} ${item.summary} ${item.nodes.join(" ")}` })),
  ...people.map((item) => ({ type: "人物", title: item.name, href: `/people/${item.slug}`, text: `${item.role} ${item.description} ${item.symbol}` })),
  ...modernTopics.map((item) => ({ type: "现代问题", title: item.title, href: `/modern/${item.slug}`, text: `${item.pain} ${item.answer} ${item.concept}` }))
];

export function getChapter(slug: string) {
  return chapters.find((chapter) => chapter.slug === slug);
}

export function getStory(slug: string) {
  return stories.find((story) => story.slug === slug);
}

export function getConcept(slug: string) {
  return concepts.find((concept) => concept.slug === slug);
}

export function getPerson(slug: string) {
  return people.find((person) => person.slug === slug);
}

export function getModernTopic(slug: string) {
  return modernTopics.find((topic) => topic.slug === slug);
}
