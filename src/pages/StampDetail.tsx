import { useParams, Link, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { ArrowLeft, ZoomIn, X } from "lucide-react";
import {
  getStampById,
  getDecadeById,
  getRelatedStamps,
  getRarityLabel,
} from "@/lib/stampData";
import StampVisual from "@/components/StampVisual";
import StampCard from "@/components/StampCard";
import Reveal from "@/components/Reveal";
import { cn } from "@/lib/utils";

const rarityStyles: Record<string, string> = {
  common: "text-ink-soft border-ink-soft/30 bg-ink-soft/5",
  rare: "text-vermilion border-vermilion/40 bg-vermilion/5",
  legendary: "text-gold-dark border-gold/50 bg-gold/10",
};

export default function StampDetail() {
  const { id } = useParams<{ id: string }>();
  const stamp = getStampById(id || "");
  const [zoomed, setZoomed] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setZoomed(false);
  }, [id]);

  if (!stamp) {
    return <Navigate to="/" replace />;
  }

  const decade = getDecadeById(stamp.decade);
  const related = getRelatedStamps(stamp);

  const infoItems = [
    { label: "发行日期", value: stamp.issueDate },
    { label: "面值", value: stamp.denomination },
    { label: "版别", value: stamp.format },
    { label: "齿孔度数", value: stamp.perforation },
    { label: "设计者", value: stamp.designer },
    { label: "印刷厂", value: stamp.printer },
    { label: "主题分类", value: stamp.theme },
    { label: "所属年代", value: decade?.label || stamp.decade },
  ];

  return (
    <div className="pt-16">
      {/* 面包屑 */}
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-6">
        <div className="flex items-center gap-2 text-sm text-ink-soft animate-fade-down">
          <Link to="/" className="hover:text-vermilion transition-colors">
            首页
          </Link>
          <span>/</span>
          <Link
            to={`/decade/${stamp.decade}`}
            className="hover:text-vermilion transition-colors"
          >
            {decade?.label}
          </Link>
          <span>/</span>
          <span className="text-ink">{stamp.name}</span>
        </div>
      </div>

      {/* 主内容区 */}
      <section className="container max-w-7xl mx-auto px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* 左侧：邮票展示 */}
          <div className="lg:sticky lg:top-24 lg:self-start">
            <Reveal animation="scale-in">
              <div className="relative flex flex-col items-center">
                {/* 邮票大图 */}
                <div
                  className="relative cursor-zoom-in group"
                  onClick={() => setZoomed(true)}
                >
                  <StampVisual stamp={stamp} size="xl" />
                  {/* 放大提示 */}
                  <div className="absolute inset-0 bg-ink/0 group-hover:bg-ink/10 transition-colors duration-500 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center gap-2 text-paper text-sm font-serif border border-paper/50 px-4 py-2">
                      <ZoomIn size={16} />
                      点击放大鉴赏
                    </div>
                  </div>
                </div>

                {/* 稀有度标签 */}
                <div className="mt-6 flex items-center gap-3">
                  <span
                    className={cn(
                      "px-3 py-1 border text-sm font-serif",
                      rarityStyles[stamp.rarity]
                    )}
                  >
                    {getRarityLabel(stamp.rarity)}
                  </span>
                  <span className="font-mono text-xs text-ink-soft">
                    编号 {stamp.id}
                  </span>
                </div>
              </div>
            </Reveal>
          </div>

          {/* 右侧：信息与背景 */}
          <div className="space-y-10">
            {/* 标题区 */}
            <Reveal animation="fade-up">
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="font-display font-bold text-2xl"
                  style={{ color: decade?.accentColor }}
                >
                  {stamp.year}
                </span>
                <div className="h-6 w-px bg-vermilion/30" />
                <span className="font-mono text-sm text-ink-soft">
                  {stamp.theme}
                </span>
              </div>
              <h1 className="font-serif font-black text-3xl md:text-4xl text-ink mb-4 leading-tight">
                {stamp.name}
              </h1>
              <p className="font-serif text-base text-ink-soft leading-relaxed">
                {stamp.description}
              </p>
              <div className="gold-divider mt-6 opacity-60" />
            </Reveal>

            {/* 发行信息 */}
            <Reveal animation="fade-up" delay={100}>
              <div>
                <h2 className="font-serif text-sm text-vermilion tracking-widest mb-4">
                  发行信息
                </h2>
                <div className="grid grid-cols-2 gap-x-6 gap-y-0">
                  {infoItems.map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between py-2.5 border-b border-vermilion/10"
                    >
                      <span className="text-sm text-ink-soft font-serif">
                        {item.label}
                      </span>
                      <span className="text-sm text-ink font-serif font-medium text-right">
                        {item.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* 历史背景 */}
            <Reveal animation="fade-up" delay={200}>
              <div>
                <h2 className="font-serif text-sm text-vermilion tracking-widest mb-4">
                  历史背景
                </h2>
                <div
                  className="relative pl-6 border-l-2"
                  style={{ borderColor: `${decade?.accentColor}40` }}
                >
                  <p className="font-serif text-base text-ink-light leading-loose">
                    {stamp.background}
                  </p>
                </div>
              </div>
            </Reveal>

            {/* 文化意义 */}
            <Reveal animation="fade-up" delay={300}>
              <div className="bg-paper-dark/30 p-6 border-l-2 border-gold">
                <h2 className="font-serif text-sm text-gold-dark tracking-widest mb-3">
                  文化意义
                </h2>
                <p className="font-serif text-base text-ink-light leading-loose italic">
                  {stamp.significance}
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 相关推荐 */}
      {related.length > 0 && (
        <section className="bg-paper-dark/30 py-16 md:py-20">
          <div className="container max-w-7xl mx-auto px-6 lg:px-8">
            <Reveal className="mb-10">
              <div className="flex items-center gap-4 mb-2">
                <div className="w-12 h-px bg-vermilion/40" />
                <span className="font-display text-vermilion text-xs tracking-ultra uppercase">
                  Related
                </span>
              </div>
              <h2 className="font-serif font-bold text-3xl text-ink">
                相关邮票
              </h2>
              <p className="font-serif text-sm text-ink-soft mt-2">
                同年代或同主题的其他邮票，继续探索方寸世界。
              </p>
            </Reveal>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
              {related.map((s, index) => (
                <Reveal key={s.id} delay={index * 60}>
                  <StampCard stamp={s} size="md" />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 返回按钮 */}
      <div className="container max-w-7xl mx-auto px-6 lg:px-8 py-12">
        <Link
          to={`/decade/${stamp.decade}`}
          className="inline-flex items-center gap-2 text-ink-soft hover:text-vermilion transition-colors font-serif text-sm"
        >
          <ArrowLeft size={16} />
          返回 {decade?.label} 展厅
        </Link>
      </div>

      {/* 放大查看弹窗 */}
      {zoomed && (
        <div
          className="fixed inset-0 z-[100] bg-ink/90 backdrop-blur-sm flex items-center justify-center p-8 animate-fade-in"
          onClick={() => setZoomed(false)}
        >
          <button
            className="absolute top-6 right-6 text-paper/60 hover:text-paper transition-colors"
            onClick={() => setZoomed(false)}
            aria-label="关闭"
          >
            <X size={28} />
          </button>
          <div
            className="animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <StampVisual stamp={stamp} size="xl" />
          </div>
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <p className="font-serif text-paper text-lg mb-1">{stamp.name}</p>
            <p className="font-mono text-paper/50 text-xs">
              {stamp.year} · {stamp.denomination} · {stamp.format}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
