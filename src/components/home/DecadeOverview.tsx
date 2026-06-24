import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { getAllDecades, getStampsByDecade } from "@/lib/stampData";
import Reveal from "@/components/Reveal";
import StampVisual from "@/components/StampVisual";

export default function DecadeOverview() {
  const decades = getAllDecades();

  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* 标题 */}
        <Reveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-vermilion/40" />
            <span className="font-display text-vermilion text-xs tracking-ultra uppercase">
              Decades
            </span>
            <div className="w-12 h-px bg-vermilion/40" />
          </div>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-ink mb-4">
            年代概览
          </h2>
          <p className="font-serif text-ink-soft text-base md:text-lg max-w-2xl mx-auto">
            九个年代，九种风貌。点击进入，沉浸探索每个时代的邮票世界。
          </p>
        </Reveal>

        {/* 年代卡片网格 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {decades.map((decade, index) => {
            const stamps = getStampsByDecade(decade.id);
            const preview = stamps.slice(0, 2);

            return (
              <Reveal key={decade.id} delay={index * 60}>
                <Link
                  to={`/decade/${decade.id}`}
                  className="group block bg-paper-light border border-vermilion/10 p-6 transition-all duration-500 hover:border-vermilion/30 hover:shadow-xl relative overflow-hidden"
                >
                  {/* 代表色条 */}
                  <div
                    className="absolute top-0 left-0 right-0 h-1 transition-all duration-500 group-hover:h-2"
                    style={{ backgroundColor: decade.accentColor }}
                  />

                  {/* 年代大字 */}
                  <div className="flex items-baseline justify-between mb-4">
                    <span
                      className="font-display font-bold text-3xl"
                      style={{ color: decade.accentColor }}
                    >
                      {decade.id}
                    </span>
                    <span className="font-mono text-xs text-ink-soft">
                      {decade.range}
                    </span>
                  </div>

                  {/* 标题 */}
                  <h3 className="font-serif font-bold text-xl text-ink mb-1 group-hover:text-vermilion transition-colors">
                    {decade.title}
                  </h3>
                  <p className="font-serif text-xs text-ink-soft mb-4">
                    {decade.subtitle}
                  </p>

                  {/* 预览邮票 */}
                  <div className="flex gap-3 mb-4">
                    {preview.map((stamp) => (
                      <div key={stamp.id} className="opacity-80 group-hover:opacity-100 transition-opacity">
                        <StampVisual stamp={stamp} size="sm" />
                      </div>
                    ))}
                    <div className="flex-1 flex items-center">
                      <p className="text-xs text-ink-soft/70 leading-relaxed line-clamp-3">
                        {decade.background}
                      </p>
                    </div>
                  </div>

                  {/* 底部 */}
                  <div className="flex items-center justify-between pt-3 border-t border-vermilion/10">
                    <span className="text-xs font-mono text-ink-soft">
                      共 {stamps.length} 枚
                    </span>
                    <span className="flex items-center gap-1 text-xs font-serif text-vermilion opacity-0 group-hover:opacity-100 transition-opacity">
                      进入展厅 <ArrowRight size={12} />
                    </span>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
