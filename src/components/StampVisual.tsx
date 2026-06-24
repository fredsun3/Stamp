import { useState } from "react";
import type { Stamp } from "@/types";
import { cn } from "@/lib/utils";
import { getStampImageUrl } from "@/data/stampImages";
import { stampVisuals } from "@/data/stampVisuals";

interface StampVisualProps {
  stamp: Stamp;
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizeMap = {
  sm: { wrap: "w-24 h-32", inner: "p-1.5", name: "text-[7px]", denom: "text-[6px]", year: "text-[8px]", icon: "text-lg" },
  md: { wrap: "w-36 h-48", inner: "p-2", name: "text-[9px]", denom: "text-[7px]", year: "text-[10px]", icon: "text-2xl" },
  lg: { wrap: "w-52 h-72", inner: "p-3", name: "text-xs", denom: "text-[9px]", year: "text-sm", icon: "text-4xl" },
  xl: { wrap: "w-72 h-96", inner: "p-4", name: "text-sm", denom: "text-xs", year: "text-base", icon: "text-6xl" },
};

export default function StampVisual({ stamp, size = "md", className }: StampVisualProps) {
  const s = sizeMap[size];
  const imageUrl = getStampImageUrl(stamp.id);
  const visual = stampVisuals[stamp.id] ?? { icon: "✦", label: stamp.name };
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);

  const showImage = imageUrl && !imgError;

  return (
    <div
      className={cn(
        "relative shrink-0",
        s.wrap,
        className
      )}
      style={{
        background: `radial-gradient(circle at center, transparent 3px, ${stamp.color} 3.5px)`,
        backgroundSize: "10px 10px",
        backgroundPosition: "-5px -5px",
        padding: "5px",
      }}
    >
      {/* 邮票内框 */}
      <div
        className="relative w-full h-full overflow-hidden stamp-pattern"
        style={{
          background: `linear-gradient(135deg, ${stamp.color}dd 0%, ${stamp.color} 50%, ${stamp.color}cc 100%)`,
          border: `1px solid ${stamp.accentColor}66`,
        }}
      >
        {/* 真实邮票图片 */}
        {showImage && (
          <img
            src={imageUrl!}
            alt={`${stamp.name} ${stamp.year}年邮票`}
            loading="lazy"
            className={cn(
              "absolute inset-0 w-full h-full object-cover transition-opacity duration-700",
              imgLoaded ? "opacity-100" : "opacity-0"
            )}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
          />
        )}

        {/* 加载中占位 */}
        {showImage && !imgLoaded && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className={cn("font-serif leading-none animate-pulse", s.icon)}
              style={{ color: stamp.accentColor, opacity: 0.4 }}
            >
              {visual.icon}
            </div>
          </div>
        )}

        {/* 图片加载失败时的 fallback 图案 */}
        {(!showImage || imgError) && (
          <>
            {/* 顶部面值 */}
            <div className={cn("absolute top-0 left-0 right-0 flex justify-between items-start px-1.5 pt-1", s.inner)}>
              <span
                className={cn("font-mono font-medium leading-none", s.denom)}
                style={{ color: stamp.accentColor }}
              >
                {stamp.denomination}
              </span>
              <span
                className={cn("font-mono leading-none opacity-70", s.denom)}
                style={{ color: stamp.accentColor }}
              >
                {stamp.year}
              </span>
            </div>

            {/* 中央图案区 */}
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div
                className={cn("font-serif leading-none mb-1", s.icon)}
                style={{ color: stamp.accentColor, opacity: 0.9 }}
              >
                {visual.icon}
              </div>
              <div
                className={cn("font-serif font-bold text-center leading-tight px-2 max-w-[90%]", s.name)}
                style={{ color: stamp.accentColor }}
              >
                {visual.label}
              </div>
            </div>

            {/* 底部国名 */}
            <div className={cn("absolute bottom-0 left-0 right-0 text-center pb-1", s.inner)}>
              <span
                className={cn("font-serif tracking-widest opacity-80", s.denom)}
                style={{ color: stamp.accentColor }}
              >
                中国邮政 CHINA
              </span>
            </div>

            {/* 装饰角线 */}
            <div className="absolute top-1 left-1 w-2 h-2 border-t border-l" style={{ borderColor: `${stamp.accentColor}55` }} />
            <div className="absolute top-1 right-1 w-2 h-2 border-t border-r" style={{ borderColor: `${stamp.accentColor}55` }} />
            <div className="absolute bottom-1 left-1 w-2 h-2 border-b border-l" style={{ borderColor: `${stamp.accentColor}55` }} />
            <div className="absolute bottom-1 right-1 w-2 h-2 border-b border-r" style={{ borderColor: `${stamp.accentColor}55` }} />
          </>
        )}

        {/* 图片加载成功后，底部叠加国名标签 */}
        {showImage && imgLoaded && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent pt-4 pb-1 px-1">
            <div className={cn("text-center", s.inner)}>
              <span
                className={cn("font-serif tracking-widest opacity-90 text-paper", s.denom)}
              >
                中国邮政 CHINA
              </span>
            </div>
          </div>
        )}

        {/* 纸张纹理叠加 */}
        <div
          className="absolute inset-0 pointer-events-none mix-blend-overlay opacity-20"
          style={{
            backgroundImage:
              "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' /%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.5'/%3E%3C/svg%3E\")",
          }}
        />
      </div>
    </div>
  );
}
