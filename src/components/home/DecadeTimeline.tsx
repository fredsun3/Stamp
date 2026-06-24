import { Link } from "react-router-dom";
import { getAllDecades, getStampsByDecade } from "@/lib/stampData";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

export default function DecadeTimeline() {
  const decades = getAllDecades();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      {/* 章节标题 */}
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 mb-16 md:mb-24">
        <Reveal className="text-center">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-vermilion/40" />
            <span className="font-display text-vermilion text-xs tracking-ultra uppercase">
              Timeline
            </span>
            <div className="w-12 h-px bg-vermilion/40" />
          </div>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-ink mb-4">
            时光长廊
          </h2>
          <p className="font-serif text-ink-soft text-base md:text-lg max-w-2xl mx-auto">
            九个年代，八十载光阴。沿时间长河而下，每一站都是一个时代的缩影。
          </p>
        </Reveal>
      </div>

      {/* 时间轴 */}
      <div className="container max-w-5xl mx-auto px-6 lg:px-8 relative">
        {/* 中轴线 */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-vermilion/30 to-transparent md:-translate-x-1/2" />

        <div className="space-y-12 md:space-y-20">
          {decades.map((decade, index) => {
            const stamps = getStampsByDecade(decade.id);
            const isLeft = index % 2 === 0;

            return (
              <Reveal key={decade.id} delay={index * 50}>
                <div
                  className={cn(
                    "relative flex items-center gap-6 md:gap-0",
                    isLeft ? "md:flex-row" : "md:flex-row-reverse"
                  )}
                >
                  {/* 时间轴节点 */}
                  <div className="absolute left-4 md:left-1/2 md:-translate-x-1/2 z-10">
                    <div
                      className="w-4 h-4 rounded-full border-2 border-paper shadow-lg"
                      style={{ backgroundColor: decade.accentColor }}
                    />
                    <div
                      className="absolute inset-0 rounded-full animate-ping opacity-30"
                      style={{ backgroundColor: decade.accentColor }}
                    />
                  </div>

                  {/* 内容卡片 */}
                  <div
                    className={cn(
                      "ml-12 md:ml-0 md:w-1/2",
                      isLeft ? "md:pr-12 md:text-right" : "md:pl-12"
                    )}
                  >
                    <Link
                      to={`/decade/${decade.id}`}
                      className="group block"
                    >
                      {/* 年代大字 */}
                      <div
                        className={cn(
                          "font-display font-bold text-5xl md:text-6xl mb-2 transition-colors duration-300",
                          isLeft ? "md:text-right" : "md:text-left"
                        )}
                        style={{ color: decade.accentColor }}
                      >
                        {decade.range}
                      </div>

                      {/* 标题 */}
                      <h3 className="font-serif font-bold text-2xl md:text-3xl text-ink mb-2 group-hover:text-vermilion transition-colors">
                        {decade.title}
                      </h3>

                      {/* 副标题 */}
                      <p className="font-serif text-sm text-ink-soft mb-3">
                        {decade.subtitle}
                      </p>

                      {/* 简介 */}
                      <p className="text-sm text-ink-soft/80 leading-relaxed line-clamp-2 mb-3">
                        {decade.background}
                      </p>

                      {/* 邮票数量标签 */}
                      <div
                        className={cn(
                          "inline-flex items-center gap-2 text-xs font-mono",
                          isLeft ? "md:flex-row-reverse" : ""
                        )}
                      >
                        <span
                          className="px-2 py-1 text-paper"
                          style={{ backgroundColor: decade.accentColor }}
                        >
                          {stamps.length} 枚邮票
                        </span>
                        <span className="text-ink-soft group-hover:text-vermilion transition-colors">
                          进入展厅 →
                        </span>
                      </div>
                    </Link>
                  </div>

                  {/* 另一侧留白 */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
