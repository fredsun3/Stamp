import { Link } from "react-router-dom";
import { getFeaturedStamps, getRarityLabel } from "@/lib/stampData";
import Reveal from "@/components/Reveal";
import StampVisual from "@/components/StampVisual";

export default function FeaturedStamps() {
  const featured = getFeaturedStamps();

  return (
    <section className="relative py-24 md:py-32 bg-paper-dark/40 overflow-hidden">
      {/* 背景装饰 */}
      <div className="absolute top-0 left-0 right-0 h-px gold-divider opacity-50" />
      <div className="absolute top-10 right-10 decade-watermark text-9xl hidden lg:block">
        Legend
      </div>

      <div className="container max-w-7xl mx-auto px-6 lg:px-8">
        {/* 标题 */}
        <Reveal className="text-center mb-16">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-px bg-gold/60" />
            <span className="font-display text-gold-dark text-xs tracking-ultra uppercase">
              Legendary
            </span>
            <div className="w-12 h-px bg-gold/60" />
          </div>
          <h2 className="font-serif font-bold text-4xl md:text-5xl text-ink mb-4">
            传世珍邮
          </h2>
          <p className="font-serif text-ink-soft text-base md:text-lg max-w-2xl mx-auto">
            跨越年代的传奇之作，每一枚都是中国邮票史上的不朽经典。
          </p>
        </Reveal>

        {/* 精选邮票网格 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12">
          {featured.map((stamp, index) => (
            <Reveal key={stamp.id} delay={index * 80}>
              <Link
                to={`/stamp/${stamp.id}`}
                className="group flex flex-col items-center"
              >
                <div className="relative">
                  <StampVisual stamp={stamp} size="md" />
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/5 transition-colors duration-500 rounded" />
                </div>
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center gap-2 mb-1.5">
                    <span className="font-mono text-[10px] text-ink-soft">
                      {stamp.year}
                    </span>
                    <span className="text-[10px] px-1.5 py-px border border-gold/50 text-gold-dark bg-gold/5 font-serif">
                      {getRarityLabel(stamp.rarity)}
                    </span>
                  </div>
                  <h3 className="font-serif text-sm text-ink leading-snug group-hover:text-vermilion transition-colors">
                    {stamp.name}
                  </h3>
                  <p className="text-[11px] text-ink-soft mt-1">
                    {stamp.denomination}
                  </p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>

        {/* 底部引言 */}
        <Reveal delay={300} className="mt-20 text-center">
          <div className="gold-divider w-32 mx-auto mb-6 opacity-60" />
          <p className="font-serif text-lg md:text-xl text-ink-light italic max-w-3xl mx-auto leading-relaxed">
            "一枚邮票，方寸之间，可容江山万里，可载岁月千秋。"
          </p>
        </Reveal>
      </div>
    </section>
  );
}
