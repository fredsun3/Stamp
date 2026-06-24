import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-ink text-paper mt-24">
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* 品牌区 */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 border-2 border-gold flex items-center justify-center text-gold font-serif font-bold text-sm">
                邮
              </div>
              <div>
                <div className="font-serif font-bold text-lg">方寸之间·百年邮忆</div>
                <div className="font-display text-xs text-gold/70 tracking-widest">
                  STAMPS OF CHINA · 1940s — NOW
                </div>
              </div>
            </div>
            <p className="text-sm text-paper/60 leading-relaxed mt-4">
              以方寸邮票为窗，窥见中国自 1940 年代至今的时代变迁与文化传承。每一枚邮票，都是一段凝固的历史。
            </p>
          </div>

          {/* 年代导航 */}
          <div>
            <h4 className="font-serif text-gold text-sm tracking-widest mb-4">
              年代长廊
            </h4>
            <div className="grid grid-cols-3 gap-2">
              {[
                "1940s", "1950s", "1960s",
                "1970s", "1980s", "1990s",
                "2000s", "2010s", "2020s",
              ].map((d) => (
                <Link
                  key={d}
                  to={`/decade/${d}`}
                  className="text-sm text-paper/70 hover:text-gold transition-colors font-display"
                >
                  {d}
                </Link>
              ))}
            </div>
          </div>

          {/* 寄语 */}
          <div>
            <h4 className="font-serif text-gold text-sm tracking-widest mb-4">
              方寸寄语
            </h4>
            <p className="font-serif text-sm text-paper/70 leading-relaxed italic">
              "尺幅虽小，可容天地之大；方寸之间，尽藏岁月之长。"
            </p>
            <div className="gold-divider my-4 opacity-50" />
            <p className="text-xs text-paper/40">
              本站为邮票文化展示项目，邮票图样为艺术化呈现，仅供鉴赏与学习交流。
            </p>
          </div>
        </div>

        <div className="gold-divider my-8 opacity-30" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-paper/40 font-mono">
            © 2024 方寸之间 · 百年邮忆 · 中国邮票年代长廊
          </p>
          <p className="text-xs text-paper/40 font-display tracking-widest">
            PHILATELY · CULTURE · HISTORY
          </p>
        </div>
      </div>
    </footer>
  );
}
