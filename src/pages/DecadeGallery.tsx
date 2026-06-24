import { useParams, Link, Navigate } from "react-router-dom";
import { useState, useMemo, useEffect } from "react";
import { ArrowLeft, ArrowRight, ChevronDown } from "lucide-react";
import { getDecadeById, getStampsByDecade, getAllDecades } from "@/lib/stampData";
import StampCard from "@/components/StampCard";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

type SortOption = "year-asc" | "year-desc" | "rarity";

const rarityOrder = { legendary: 0, rare: 1, common: 2 };

export default function DecadeGallery() {
  const { id } = useParams<{ id: string }>();
  const decade = getDecadeById(id || "");
  const allDecades = getAllDecades();

  const [activeTheme, setActiveTheme] = useState<string>("全部");
  const [sortBy, setSortBy] = useState<SortOption>("year-asc");

  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveTheme("全部");
    setSortBy("year-asc");
  }, [id]);

  const allStamps = useMemo(
    () => (decade ? getStampsByDecade(decade.id) : []),
    [decade]
  );

  const availableThemes = useMemo(() => {
    const themes = new Set(allStamps.map((s) => s.theme));
    return ["全部", ...Array.from(themes)];
  }, [allStamps]);

  const filteredStamps = useMemo(() => {
    let result = [...allStamps];
    if (activeTheme !== "全部") {
      result = result.filter((s) => s.theme === activeTheme);
    }
    result.sort((a, b) => {
      if (sortBy === "year-asc") return a.year - b.year;
      if (sortBy === "year-desc") return b.year - a.year;
      return rarityOrder[a.rarity] - rarityOrder[b.rarity];
    });
    return result;
  }, [allStamps, activeTheme, sortBy]);

  if (!decade) {
    return <Navigate to="/" replace />;
  }

  const currentIndex = allDecades.findIndex((d) => d.id === decade.id);
  const prevDecade = currentIndex > 0 ? allDecades[currentIndex - 1] : null;
  const nextDecade =
    currentIndex < allDecades.length - 1 ? allDecades[currentIndex + 1] : null;

  return (
    <div className="pt-16">
      {/* 年代背景 Hero */}
      <section
        className="relative py-20 md:py-28 overflow-hidden"
        style={{
          background: `linear-gradient(135deg, ${decade.accentColor}15 0%, transparent 100%)`,
        }}
      >
        {/* 巨型水印 */}
        <div className="absolute -top-10 -right-10 pointer-events-none overflow-hidden">
          <span
            className="font-display font-bold text-[18rem] leading-none opacity-[0.06]"
            style={{ color: decade.accentColor }}
          >
            {decade.id}
          </span>
        </div>

        <div className="container max-w-7xl mx-auto px-6 lg:px-8 relative">
          {/* 面包屑 */}
          <Link
            to="/"
            className="inline-flex items-center gap-2 text-sm text-ink-soft hover:text-vermilion transition-colors mb-8 animate-fade-down"
          >
            <ArrowLeft size={14} />
            返回时光长廊
          </Link>

          {/* 年代标题 */}
          <div className="animate-fade-up opacity-0-initial">
            <div className="flex items-baseline gap-4 mb-3">
              <span
                className="font-display font-bold text-5xl md:text-7xl"
                style={{ color: decade.accentColor }}
              >
                {decade.range}
              </span>
              <span className="font-mono text-sm text-ink-soft">
                {allStamps.length} 枚邮票
              </span>
            </div>
            <h1 className="font-serif font-black text-4xl md:text-6xl text-ink mb-3">
              {decade.title}
            </h1>
            <p className="font-serif text-lg md:text-xl text-ink-soft mb-8">
              {decade.subtitle}
            </p>
          </div>

          {/* 背景介绍 */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-12 animate-fade-up opacity-0-initial delay-200">
            <div className="lg:col-span-2">
              <h3 className="font-serif text-sm text-vermilion tracking-widest mb-3">
                时代背景
              </h3>
              <p className="font-serif text-base text-ink-light leading-relaxed">
                {decade.background}
              </p>
            </div>
            <div>
              <h3 className="font-serif text-sm text-vermilion tracking-widest mb-3">
                风格演变
              </h3>
              <p className="font-serif text-sm text-ink-light leading-relaxed">
                {decade.styleNote}
              </p>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 gold-divider opacity-40" />
      </section>

      {/* 筛选与排序栏 */}
      <section className="sticky top-16 z-30 bg-paper/95 backdrop-blur-md border-y border-vermilion/10 py-4">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            {/* 主题筛选 */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-xs font-serif text-ink-soft mr-2">主题：</span>
              {availableThemes.map((theme) => (
                <button
                  key={theme}
                  onClick={() => setActiveTheme(theme)}
                  className={cn("tag-pill", activeTheme === theme && "active")}
                >
                  {theme}
                </button>
              ))}
            </div>

            {/* 排序 */}
            <div className="flex items-center gap-2">
              <span className="text-xs font-serif text-ink-soft">排序：</span>
              <div className="relative">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="appearance-none bg-transparent border border-vermilion/30 text-xs font-serif text-ink px-3 py-1.5 pr-8 cursor-pointer hover:border-vermilion transition-colors focus:outline-none focus:border-vermilion"
                >
                  <option value="year-asc">年份升序</option>
                  <option value="year-desc">年份降序</option>
                  <option value="rarity">珍稀度</option>
                </select>
                <ChevronDown
                  size={12}
                  className="absolute right-2 top-1/2 -translate-y-1/2 text-ink-soft pointer-events-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 邮票网格 */}
      <section className="py-16 md:py-20">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          {filteredStamps.length === 0 ? (
            <div className="text-center py-20">
              <p className="font-serif text-ink-soft">暂无该主题的邮票</p>
            </div>
          ) : (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-x-6 gap-y-10 md:gap-x-8 md:gap-y-14">
              {filteredStamps.map((stamp, index) => (
                <Reveal key={stamp.id} delay={(index % 5) * 60}>
                  <StampCard stamp={stamp} size="md" />
                </Reveal>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 年代切换 */}
      <section className="border-t border-vermilion/10 py-12">
        <div className="container max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4">
            {prevDecade ? (
              <Link
                to={`/decade/${prevDecade.id}`}
                className="group flex items-center gap-3 text-ink-soft hover:text-vermilion transition-colors"
              >
                <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
                <div>
                  <div className="text-xs font-mono">上一年代</div>
                  <div className="font-serif text-sm font-bold">
                    {prevDecade.range} · {prevDecade.title}
                  </div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            {nextDecade ? (
              <Link
                to={`/decade/${nextDecade.id}`}
                className="group flex items-center gap-3 text-ink-soft hover:text-vermilion transition-colors text-right"
              >
                <div>
                  <div className="text-xs font-mono">下一年代</div>
                  <div className="font-serif text-sm font-bold">
                    {nextDecade.range} · {nextDecade.title}
                  </div>
                </div>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
