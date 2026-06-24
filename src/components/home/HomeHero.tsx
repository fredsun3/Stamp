import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { getFeaturedStamps } from "@/lib/stampData";
import StampVisual from "@/components/StampVisual";

export default function HomeHero() {
  const featured = getFeaturedStamps();
  const showcase = featured.slice(0, 3);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-ink">
      {/* 背景纹理 */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 30% 40%, rgba(139,26,26,0.15) 0%, transparent 50%), radial-gradient(circle at 70% 60%, rgba(201,169,97,0.1) 0%, transparent 50%)",
          }}
        />
      </div>

      {/* 巨型年代水印 */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden">
        <span className="font-display font-bold text-paper/[0.03] text-[40vw] leading-none whitespace-nowrap select-none">
          1940—2025
        </span>
      </div>

      {/* 浮动邮票装饰 */}
      <div className="absolute inset-0 pointer-events-none hidden lg:block">
        {showcase.map((stamp, i) => {
          const positions = [
            { top: "15%", left: "8%", rotate: "-12deg", delay: "0s" },
            { top: "20%", right: "10%", rotate: "8deg", delay: "1.5s" },
            { bottom: "18%", left: "12%", rotate: "6deg", delay: "3s" },
          ];
          const pos = positions[i];
          return (
            <div
              key={stamp.id}
              className="absolute animate-float opacity-80"
              style={{ ...pos, animationDelay: pos.delay }}
            >
              <Link to={`/stamp/${stamp.id}`}>
                <StampVisual stamp={stamp} size="sm" />
              </Link>
            </div>
          );
        })}
      </div>

      {/* 主标题区 */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div className="flex items-center justify-center gap-4 mb-8 animate-fade-down">
          <div className="w-16 h-px bg-gold/60" />
          <span className="font-display text-gold text-sm tracking-ultra uppercase">
            Stamps of China
          </span>
          <div className="w-16 h-px bg-gold/60" />
        </div>

        <h1 className="font-serif font-black text-paper leading-none mb-6 animate-fade-up opacity-0-initial">
          <span className="block text-6xl md:text-8xl lg:text-9xl tracking-wider">
            方寸之间
          </span>
          <span className="block text-3xl md:text-5xl lg:text-6xl text-gold tracking-[0.3em] mt-4 font-bold">
            百年邮忆
          </span>
        </h1>

        <p className="font-serif text-paper/60 text-base md:text-lg leading-relaxed max-w-2xl mx-auto animate-fade-up opacity-0-initial delay-300">
          自一九四〇年代至今，九个年代的时光长廊，
          <br className="hidden md:block" />
          以方寸邮票为窗，窥见中国百年变迁与文化传承。
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-12 animate-fade-up opacity-0-initial delay-500">
          <Link
            to="/decade/1980s"
            className="group relative px-8 py-3 bg-vermilion text-paper font-serif text-sm tracking-widest overflow-hidden transition-all duration-500 hover:bg-vermilion-dark"
          >
            <span className="relative z-10">步入长廊</span>
            <div className="absolute inset-0 bg-gold scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />
            <span className="absolute inset-0 flex items-center justify-center text-ink font-serif text-sm tracking-widest opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 z-20">
              步入长廊
            </span>
          </Link>
          <Link
            to="/stamp/1980-1"
            className="px-8 py-3 border border-paper/30 text-paper/80 font-serif text-sm tracking-widest hover:border-gold hover:text-gold transition-all duration-500"
          >
            鉴赏金猴
          </Link>
        </div>
      </div>

      {/* 滚动提示 */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in opacity-0-initial delay-1000">
        <span className="text-paper/40 text-xs font-display tracking-widest">
          SCROLL
        </span>
        <ChevronDown className="text-paper/40 animate-bounce" size={18} />
      </div>

      {/* 底部鎏金线 */}
      <div className="absolute bottom-0 left-0 right-0 gold-divider opacity-40" />
    </section>
  );
}
